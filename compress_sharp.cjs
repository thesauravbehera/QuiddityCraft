const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDir = path.join(__dirname, 'public', 'LightSpeedimages');
const mapPath = path.join(__dirname, 'src', 'app', 'components', 'categorizedAssets.json');

async function run() {
  const assetsMap = JSON.parse(fs.readFileSync(mapPath, 'utf8'));

  async function processDirectory(dir, categoryName) {
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
         await processDirectory(fullPath, item);
      } else {
        const ext = path.extname(item).toLowerCase();
        
        if (['.png', '.jpeg', '.jpg'].includes(ext)) {
          const webpDest = path.join(dir, path.basename(item, ext) + '.webp');
          
          console.log(`Compressing: ${item} -> ${path.basename(webpDest)}`);
          try {
            await sharp(fullPath)
              .resize({ width: 1200, withoutEnlargement: true }) // Downscale to normal maximums
              .webp({ quality: 80, effort: 6 }) // Convert to webp w/ good compression rules
              .toFile(webpDest);

            // Update the map to point to the new webp string
            if (categoryName && assetsMap[categoryName]) {
                const oldWebPath = fullPath.replace(path.join(__dirname, 'public'), '').replace(/\\/g, '/');
                const newWebPath = webpDest.replace(path.join(__dirname, 'public'), '').replace(/\\/g, '/');
                
                assetsMap[categoryName] = assetsMap[categoryName].map(p => p === oldWebPath ? newWebPath : p);
            }

            // Remove the raw massive files
            fs.unlinkSync(fullPath);
          } catch(e) {
            console.error(`Failed to compress ${item}: ${e.message}`);
          }
        }
      }
    }
  }

  await processDirectory(targetDir, null);
  
  // Save the map
  fs.writeFileSync(mapPath, JSON.stringify(assetsMap, null, 2));
  console.log("Compression pipeline finished successfully!");
}

run().catch(console.error);
