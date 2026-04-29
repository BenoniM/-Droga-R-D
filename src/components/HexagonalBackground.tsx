import { useEffect, useRef, useCallback } from "react";

/** A single hex cell */
interface HexState {
  cx: number; // center x relative to canvas
  cy: number; // center y relative to canvas
  progress: number; // 0 = yellow, 1 = black
  target: number;
  opacity: number; // fade-in on first paint
  targetOpacity: number;
}

/** A cluster anchor expressed as fractions of the canvas (0–1) */
export interface HexSpot {
  /** 0 = left edge, 1 = right edge */
  xFrac: number;
  /** 0 = top edge, 1 = bottom edge */
  yFrac: number;
  /** Rough radius of the cluster in hex-cell units (default 3) */
  radius?: number;
  /** Rough vertical radius in hex-cell units for squashed clusters. Defaults to radius. */
  radiusY?: number;
}

interface Props {
  active?: boolean;
  hexSize?: number;
  gap?: number;
  flipCount?: number;
  flipInterval?: number;
  /** Where to draw clusters. Defaults to bottom-left + top-right corners. */
  spots?: HexSpot[];
}

const DEFAULT_SPOTS: HexSpot[] = [
  { xFrac: 0.02, yFrac: 0.82, radius: 3.5 },
  { xFrac: 0.94, yFrac: 0.08, radius: 3 },
];

const HexagonalBackground = ({
  active = false,
  hexSize = 46,
  gap = 4,
  flipCount = 3,
  flipInterval = 2200,
  spots = DEFAULT_SPOTS,
}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hexes = useRef<HexState[]>([]);
  const raf = useRef(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const dims = useRef({ w: 0, h: 0 });

  // Geometry (flat-top hexagons)
  const hexW = hexSize * 2;
  const hexH = Math.sqrt(3) * hexSize;
  const colStep = hexW * 0.75 + gap;
  const rowStep = hexH + gap;

  /** Pointy-top hex vertices centered at (0,0) */
  const getPts = (hs: number): [number, number][] => {
    const hh = Math.sqrt(3) * hs;
    return [
      [-hs / 2, -hh / 2],
      [hs / 2, -hh / 2],
      [hs, 0],
      [hs / 2, hh / 2],
      [-hs / 2, hh / 2],
      [-hs, 0],
    ];
  };

  const drawHex = (
    ctx: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    scaleY: number,
    color: string,
    opacity: number,
    pts: [number, number][]
  ) => {
    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const x = cx + pts[i][0];
      const y = cy + pts[i][1] * scaleY;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
  };

  const drawFrame = useCallback(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    const { w, h } = dims.current;

    ctx.clearRect(0, 0, w, h);

    let animating = false;
    const pts = getPts(hexSize);

    for (const hex of hexes.current) {
      // animate opacity
      if (Math.abs(hex.opacity - hex.targetOpacity) > 0.005) {
        animating = true;
        hex.opacity += (hex.targetOpacity - hex.opacity) * 0.07;
      } else {
        hex.opacity = hex.targetOpacity;
      }

      // animate flip
      if (Math.abs(hex.progress - hex.target) > 0.01) {
        animating = true;
        const spd = 0.045;
        hex.progress += hex.target > hex.progress ? spd : -spd;
        hex.progress =
          hex.target > hex.progress
            ? Math.min(hex.progress, hex.target)
            : Math.max(hex.progress, hex.target);
      } else {
        hex.progress = hex.target;
      }

      if (hex.opacity < 0.01) continue;

      // 1. Draw static white background
      drawHex(ctx, hex.cx, hex.cy, 1, "#FFFFFF", hex.opacity, pts);

      // 2. Draw flipping foreground
      const scaleY = Math.abs(Math.cos(hex.progress * Math.PI));
      const color = hex.progress > 0.5 ? "#000" : "#FFF200";
      if (scaleY > 0.02) {
        drawHex(ctx, hex.cx, hex.cy, scaleY, color, hex.opacity, pts);
      }

      // 3. Draw static white stroke (the "white gap")
      ctx.save();
      ctx.globalAlpha = hex.opacity;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const x = hex.cx + pts[i][0];
        const y = hex.cy + pts[i][1];
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.lineWidth = 3.5;
      ctx.strokeStyle = "#FFFFFF";
      ctx.stroke();
      ctx.restore();
    }

    if (animating) raf.current = requestAnimationFrame(drawFrame);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hexSize]);

  /**
   * Build a sparse set of hexagons that only lives around each spot.
   */
  const buildGrid = useCallback(() => {
    const c = canvasRef.current;
    if (!c) return;
    const parent = c.parentElement;
    if (!parent) return;
    const r = parent.getBoundingClientRect();
    const w = Math.round(r.width);
    const h = Math.round(r.height);
    c.width = w;
    c.height = h;
    dims.current = { w, h };

    const arr: HexState[] = [];

    // Calculate exclusion zones (relative to canvas) so we never generate hexagons behind texts or images.
    const sec = c.closest("section");
    const zones = sec ? Array.from(
      sec.querySelectorAll(
        ".projects-content h2,.projects-content h3,.projects-content span," +
        ".projects-content p,.projects-content button,.projects-content a," +
        ".project-img-container"
      )
    ).map((el) => {
      const elRect = el.getBoundingClientRect();
      return {
        left: elRect.left - r.left,
        right: elRect.right - r.left,
        top: elRect.top - r.top,
        bottom: elRect.bottom - r.top,
      };
    }) : [];
    
    const pad = hexSize * 1.5;

    // Iterate over every possible grid cell and include it only if it falls
    // within the radius of at least one spot AND outside exclusion zones.
    const cols = Math.ceil(w / colStep) + 2;
    const rows = Math.ceil(h / rowStep) + 2;

    for (let col = 0; col < cols; col++) {
      for (let row = 0; row < rows; row++) {
        const cx = col * colStep;
        const cy = row * rowStep + (col % 2 === 1 ? rowStep / 2 : 0);

        // Check exclusion zones first
        const overlaps = zones.some(
          z => cx + pad > z.left && cx - pad < z.right && cy + pad > z.top && cy - pad < z.bottom
        );
        if (overlaps) continue;

        let include = false;
        for (const spot of spots) {
          const sx = spot.xFrac * w;
          const sy = spot.yFrac * h;
          const rx = spot.radius ?? 3;
          const ry = spot.radiusY ?? rx;
          // Elliptical distance (hexes are not square)
          const dx = (cx - sx) / colStep;
          const dy = (cy - sy) / rowStep;
          // Normalize by the given radii
          const dist = Math.sqrt((dx * dx) / (rx * rx) + (dy * dy) / (ry * ry));
          if (dist <= 1) {
            include = true;
            break;
          }
        }

        if (include) {
          // Stagger opacity so they "materialise" rather than pop in
          arr.push({
            cx,
            cy,
            progress: 0,
            target: 0,
            opacity: 0,
            targetOpacity: 0.9,
          });
        }
      }
    }

    hexes.current = arr;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(drawFrame);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colStep, rowStep, drawFrame, spots]);

  useEffect(() => {
    buildGrid();
    const fn = () => buildGrid();
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, [buildGrid, active]);

  /* ── active / inactive flipping ── */
  useEffect(() => {
    if (!active) {
      for (const h of hexes.current) h.target = 0;
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(drawFrame);
      if (timer.current) { clearInterval(timer.current); timer.current = null; }
      return;
    }

    const getZones = (): DOMRect[] => {
      const sec = canvasRef.current?.closest("section");
      if (!sec) return [];
      return Array.from(
        sec.querySelectorAll(
          ".projects-content h2,.projects-content h3,.projects-content span," +
          ".projects-content p,.projects-content button,.projects-content a," +
          ".project-img-container"
        )
      ).map(e => e.getBoundingClientRect());
    };

    const near = (cx: number, cy: number, zones: DOMRect[], cr: DOMRect) => {
      const pad = hexSize * 1.5;
      const ax = cr.left + cx, ay = cr.top + cy;
      return zones.some(
        z => ax + pad > z.left && ax - pad < z.right && ay + pad > z.top && ay - pad < z.bottom
      );
    };

    const wave = () => {
      const c = canvasRef.current;
      if (!c) return;
      const cr = c.getBoundingClientRect();
      const zones = getZones();
      const all = hexes.current;

      for (const h of all) {
        if (h.target === 1 && near(h.cx, h.cy, zones, cr)) h.target = 0;
      }

      const eligible = all.filter(h => !near(h.cx, h.cy, zones, cr));
      if (!eligible.length) return;

      const n = Math.min(flipCount, eligible.length);
      const picked = new Set<number>();
      while (picked.size < n) picked.add(Math.floor(Math.random() * eligible.length));
      picked.forEach(i => { eligible[i].target = eligible[i].target === 1 ? 0 : 1; });

      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(drawFrame);
    };

    const t = setTimeout(wave, 600);
    timer.current = setInterval(wave, flipInterval);
    return () => {
      clearTimeout(t);
      if (timer.current) { clearInterval(timer.current); timer.current = null; }
      cancelAnimationFrame(raf.current);
    };
  }, [active, flipCount, flipInterval, hexSize, drawFrame]);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, display: "block", pointerEvents: "none" }}
    />
  );
};

export default HexagonalBackground;
