import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import journeyVideo from "@/assets/journey/16067295-uhd_3840_2160_24fps.mp4";

gsap.registerPlugin(ScrollTrigger);

const CANVAS_W = 1920;
const CANVAS_H = 1080;
const START_BUF = 0.05;  // 5%: brief settle — chapter 1 shown, video at frame 0
const END_BUF = 0.05;  // 5%: chapter 4 fades out as the section exits
const CH_FADE = 0.06;  // fraction of total scroll for each cross-fade

export interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
  label?: string;
}

interface JourneySectionProps {
  timelineData: { date: string; title: string; description: string }[];
}

const JourneySection: React.FC<JourneySectionProps> = ({ timelineData }) => {
  const outerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const milestones = timelineData.map((item, i) => ({
    id: String(i),
    year: item.date,
    title: item.title,
    description: item.description,
    label: `Chapter ${String(i + 1).padStart(2, "0")}`
  }));

  const targetTimeRef = useRef(0);
  const currentTimeRef = useRef(0);
  const durationRef = useRef(0);
  const seekingRef = useRef(false);

  const rafRef = useRef<number | null>(null);



  // ── Draw one fully-decoded frame to canvas (cover crop) ──────────────────
  const drawFrame = useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas || video.readyState < 2) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const vw = video.videoWidth, vh = video.videoHeight;
    if (!vw || !vh) return;
    const vR = vw / vh, cR = CANVAS_W / CANVAS_H;
    let sx = 0, sy = 0, sw = vw, sh = vh;
    if (vR > cR) { sw = vh * cR; sx = (vw - sw) / 2; }
    else { sh = vw / cR; sy = (vh - sh) / 2; }
    ctx.drawImage(video, sx, sy, sw, sh, 0, 0, CANVAS_W, CANVAS_H);
  }, []);

  // ── Video load + seeked event ─────────────────────────────────────────────
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onReady = () => {
      durationRef.current = video.duration;
      video.currentTime = 0;          // preload frame 0
    };
    const onSeeked = () => {
      drawFrame();
      currentTimeRef.current = video.currentTime;
      seekingRef.current = false;     // gate re-opens for next seek
    };
    if (video.readyState >= 1) onReady();
    else video.addEventListener("loadedmetadata", onReady, { once: true });
    video.addEventListener("seeked", onSeeked);
    return () => {
      video.removeEventListener("loadedmetadata", onReady);
      video.removeEventListener("seeked", onSeeked);
    };
  }, [drawFrame]);

  // ── RAF loop — always running, lerps toward targetTime ──────────────────
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const tick = () => {
      if (!seekingRef.current) {
        const gap = targetTimeRef.current - currentTimeRef.current;
        if (Math.abs(gap) > 0.02) {
          seekingRef.current = true;
          video.currentTime = targetTimeRef.current;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  // ── ScrollTrigger via plain useEffect — drives video target + overlays ─────
  useEffect(() => {
    const outer = outerRef.current;
    if (!outer || milestones.length === 0) return;

    const update = (p: number) => {
      // Video: 5% settle at start (frozen at 0), then scrub 0→duration
      const dur = durationRef.current;
      if (dur) {
        const vp = p <= START_BUF ? 0 : (p - START_BUF) / (1 - START_BUF);
        targetTimeRef.current = Math.min(dur - 0.02, Math.max(0, vp * dur));
      }

      // Overlays: equal windows per chapter
      const numChapters = milestones.length;
      milestones.forEach((_, i) => {
        const el = overlayRefs.current[i];
        const dot = dotRefs.current[i];

        const winStart = i / numChapters;
        const winEnd = (i + 1) / numChapters;
        const fadeInEnd = winStart + CH_FADE;
        const fadeOutStart = winEnd - CH_FADE;
        const isFirst = i === 0;
        const isLast = i === numChapters - 1;
        const effectiveEnd = isLast ? (1 - END_BUF + 0.001) : winEnd;

        let opacity = 0;
        if (p >= winStart && p < effectiveEnd) {
          if (!isFirst && p < fadeInEnd) {
            opacity = (p - winStart) / CH_FADE;
          } else if (!isLast && p > fadeOutStart) {
            opacity = (winEnd - p) / CH_FADE;
          } else {
            opacity = 1;
          }
        }
        // Chapter 4: fade out in last END_BUF (clean exit signal)
        if (isLast && p >= (1 - END_BUF)) {
          opacity = Math.max(0, (1 - p) / END_BUF);
        }

        const o = Math.max(0, Math.min(1, opacity));
        if (el) {
          el.style.opacity = String(o);
          el.style.transform = `translateY(${(1 - o) * 16}px)`;
        }
        
        const localP = Math.max(0, Math.min(1, (p - winStart) / (effectiveEnd - winStart)));
        const lineEl = lineRefs.current[i];
        if (lineEl) {
          lineEl.style.transform = `scaleY(${1 - localP})`;
        }
        if (dot) {
          const active = p >= winStart && p < effectiveEnd;
          const dotO = isLast && p >= (1 - END_BUF)
            ? Math.max(0.3, (1 - p) / END_BUF)
            : active ? 1 : 1;
          dot.style.opacity = String(dotO);
          dot.style.transform = active ? "scaleY(1)" : "scaleY(0.5)";
          dot.style.backgroundColor = active ? "#FFF200" : "rgba(255, 255, 255, 1)";
        }
      });
    };

    // Show chapter 1 immediately on mount (before any scroll)
    update(0);

    const st = ScrollTrigger.create({
      trigger: outer,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        update(self.progress);
      },
    });

    return () => {
      if (st) st.kill();
    };
  }, [milestones]);

  return (
    // 400vh: gives ~75vh of comfortable scroll per chapter, exits promptly
    <div ref={outerRef} className="relative" style={{ height: "400vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Video — positioned absolutely and invisible but NOT display:none.        */}
        {/* display:none blocks the 'seeked' event; visibility:hidden keeps it alive */}
        <video
          ref={videoRef}
          src={journeyVideo}
          muted
          playsInline
          preload="auto"
          className="absolute opacity-0 pointer-events-none"
          style={{ width: "1px", height: "1px" }}
        />

        {/* Canvas — the only visible surface */}
        <canvas
          ref={canvasRef}
          width={CANVAS_W}
          height={CANVAS_H}
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "cover" }}
        />

        {/* Heavy left→right gradient for text contrast */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(4,14,15,0.97) 0%, rgba(4,14,15,0.82) 38%, rgba(4,14,15,0.45) 62%, rgba(4,14,15,0.05) 100%)",
          }}
        />

        {/* Bottom vignette */}
        <div
          className="absolute bottom-0 left-0 right-0 h-2/5"
          style={{ background: "linear-gradient(to top, rgba(4,14,15,0.85) 0%, transparent 100%)" }}
        />

        {/* Top label bar */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-10 py-7 border-b border-white/10">
          <span className="ml-2 text-sm font-medium tracking-[0.24em] uppercase text-primary">OUR JOURNEY</span>
          <span className="ml-2 text-sm font-medium tracking-[0.2em] uppercase text-white/80">SCROLL TO EXPLORE</span>
        </div>

        {/* Milestone overlays — all stacked, one visible at a time */}
        <div className="absolute inset-0 pointer-events-none flex justify-center">
          <div className="container-grid relative w-full h-full">
            {milestones.map((m, i) => (
              <div
                key={i}
                ref={(el) => { overlayRefs.current[i] = el; }}
                className="absolute bottom-[25%] left-6 lg:left-8"
            style={{
              maxWidth: "min(580px, 70vw)",
              opacity: i === 0 ? 1 : 0,   // chapter 1 pre-visible; rest hidden
              transition: "opacity 0.08s linear, transform 0.08s linear",
              willChange: "opacity, transform",
            }}
          >
            <div className="flex gap-7 items-start">

              <div
                className="w-[2px] min-h-[120px] flex-shrink-0 mt-1 rounded-sm relative overflow-hidden bg-white/20"
              >
                <div
                  ref={(el) => { lineRefs.current[i] = el; }}
                  className="absolute inset-0 bg-[#FFF200] origin-bottom"
                  style={{ transform: "scaleY(1)" }}
                />
              </div>

              {/* Dark scrim behind text for full legibility */}
              <div
                className="rounded-xl px-6 py-4"
                style={{
                  background: "rgba(4,14,15,0.55)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                }}
              >
                <p className="text-[11px] font-bold tracking-[0.3em] uppercase mb-3" style={{ color: "#FFF200" }}>
                  {m.label}
                </p>
                <p
                  className="font-montserrat font-bold leading-none mb-1 select-none"
                  style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", color: "rgba(255, 255, 255, 1)" }}
                >
                  {m.year}
                </p>
                <h3
                  className="font-montserrat font-bold leading-[1.05] mb-4 text-[#FFF200]"
                  style={{ fontSize: "clamp(1.5rem, 3.8vw, 2.5rem)", textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
                >
                  {m.title}
                </h3>
                <p
                  className="text-white font-light leading-[1.8]"
                  style={{ fontSize: "clamp(0.9rem, 1.3vw, 1rem)", maxWidth: "400px", opacity: 0.92 }}
                >
                  {m.description}
                </p>
              </div>
            </div>
          </div>
        ))}
          </div>
        </div>

        {/* Right progress indicator */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 flex items-center z-50">

          {/* Standard Dots progress */}
          <div className="flex flex-col items-center gap-3">
            {milestones.map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-[4px]">
                <div
                  ref={(el) => { dotRefs.current[i] = el; }}
                  className="w-[2px] h-6 rounded-sm transition-all duration-200"
                  style={{ backgroundColor: "rgba(255, 255, 255, 1)", transformOrigin: "center", opacity: 1 }}
                />
                <span
                  className="text-[10px] tracking-[0.15em] uppercase text-white select-none"
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                    transform: "rotate(180deg)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default JourneySection;
