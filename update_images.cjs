const fs = require('fs');
const path = require('path');
const files = [
  'src/pages/Labs.tsx',
  'src/pages/Index.tsx',
  'src/pages/Grants.tsx',
  'src/pages/DrogaScience.tsx',
  'src/pages/About.tsx',
  'src/pages/News.tsx',
  'src/pages/Services.tsx',
  'src/pages/Publications.tsx',
  'src/pages/Projects.tsx'
];

files.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/@\/assets\/facility\.jpg/g, '@/assets/Images/IMG_4514.JPG')
                     .replace(/@\/assets\/lab-research\.jpg/g, '@/assets/Images/IMG_4528.JPG')
                     .replace(/@\/assets\/hero-science\.jpg/g, '@/assets/Images/IMG_4582.JPG')
                     .replace(/@\/assets\/herbal8\.jpg/g, '@/assets/Images/IMG_4565.JPG')
                     .replace(/@\/assets\/molecules\.jpg/g, '@/assets/Images/IMG_4543.JPG');
    fs.writeFileSync(filePath, content);
  }
});
console.log('Done!');
