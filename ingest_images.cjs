const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const sourceDir = path.join(__dirname, 'PIXelPRmt', 'Work link', 'Imgs');
const destDir = path.join(__dirname, 'public', 'LightSpeedimages', 'Studio Campaigns');
const mapPath = path.join(__dirname, 'src', 'app', 'components', 'categorizedAssets.json');

async function run() {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const assetsMap = fs.existsSync(mapPath) ? JSON.parse(fs.readFileSync(mapPath, 'utf8')) : {};
  if (!assetsMap["Studio Campaigns"]) {
    assetsMap["Studio Campaigns"] = [];
  }

  const items = fs.existsSync(sourceDir) ? fs.readdirSync(sourceDir) : [];
  
  for (const item of items) {
    const fullPath = path.join(sourceDir, item);
    const stat = fs.statSync(fullPath);

    if (!stat.isDirectory()) {
      const ext = path.extname(item).toLowerCase();
      
      if (['.png', '.jpeg', '.jpg', '.webp'].includes(ext)) {
        const webpDest = path.join(destDir, path.basename(item, ext) + '.webp');
        const webpPublicPath = `/LightSpeedimages/Studio Campaigns/${path.basename(item, ext)}.webp`;
        
        console.log(`Compressing: ${item} -> ${path.basename(webpDest)}`);
        try {
          if (!fs.existsSync(webpDest)) {
             await sharp(fullPath)
               .resize({ width: 1200, withoutEnlargement: true }) // Downscale to normal maximums
               .webp({ quality: 80, effort: 6 }) // Convert to webp w/ good compression rules
               .toFile(webpDest);
          }
           
          // Add to map if not there
          if (!assetsMap["Studio Campaigns"].includes(webpPublicPath)) {
            assetsMap["Studio Campaigns"].push(webpPublicPath);
          }

        } catch(e) {
          console.error(`Failed to compress ${item}: ${e.message}`);
        }
      }
    }
  }

  // Save the map
  fs.writeFileSync(mapPath, JSON.stringify(assetsMap, null, 2));
  console.log("Ingestion pipeline finished successfully!");
}

run().catch(console.error);
