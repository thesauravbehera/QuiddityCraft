const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const lightSpeedDir = path.join(__dirname, 'LightSpeedimages');
const sourceDir = path.join(__dirname, 'PIXelPRmt', 'Work link', 'Imgs');
const publicDir = path.join(__dirname, 'public', 'LightSpeedimages');
const mapPath = path.join(__dirname, 'src', 'app', 'components', 'categorizedAssets.json');

async function run() {
  const assetsMap = {};
  const processedOriginalFiles = new Set(); // store original basenames like '12.jpeg' or 'freepik...png'

  // Step 1: Follow partitions from StoryArc/LightSpeedimages
  if (fs.existsSync(lightSpeedDir)) {
    const categories = fs.readdirSync(lightSpeedDir);
    for (const cat of categories) {
      if (cat === '.DS_Store') continue;
      const catPath = path.join(lightSpeedDir, cat);
      if (fs.statSync(catPath).isDirectory()) {
        assetsMap[cat] = [];
        const files = fs.readdirSync(catPath);
        for (const file of files) {
          if (file === '.DS_Store') continue;
          const ext = path.extname(file).toLowerCase();
          if (['.png', '.jpeg', '.jpg', '.webp'].includes(ext)) {
            const originalName = file;
            processedOriginalFiles.add(originalName);

            const webpName = path.basename(file, ext) + '.webp';
            const publicCatDir = path.join(publicDir, cat);
            if (!fs.existsSync(publicCatDir)) fs.mkdirSync(publicCatDir, { recursive: true });
            
            const webpDest = path.join(publicCatDir, webpName);
            const webpPublicPath = `/LightSpeedimages/${cat}/${webpName}`;

            if (!fs.existsSync(webpDest)) {
               try {
                 await sharp(path.join(catPath, file))
                   .resize({ width: 1200, withoutEnlargement: true })
                   .webp({ quality: 80, effort: 6 })
                   .toFile(webpDest);
               } catch (e) {
                 console.error("Error compressing partition file " + file, e);
               }
            }

            assetsMap[cat].push(webpPublicPath);
          }
        }
      }
    }
  }

  // Step 2: Use the *entire* portfolio showcase from Imgs, anything not in partitions goes to "Vault" (or similar)
  const remainingCat = "Uncategorized Archives";
  assetsMap[remainingCat] = [];
  
  if (fs.existsSync(sourceDir)) {
    const files = fs.readdirSync(sourceDir);
    for (const file of files) {
      if (file === '.DS_Store') continue;
      
      // Only process it if we haven't already processed it via the partitioned folder
      if (!processedOriginalFiles.has(file)) {
        const ext = path.extname(file).toLowerCase();
        if (['.png', '.jpeg', '.jpg', '.webp'].includes(ext)) {
          const webpName = path.basename(file, ext) + '.webp';
          const publicCatDir = path.join(publicDir, 'Archives');
          if (!fs.existsSync(publicCatDir)) fs.mkdirSync(publicCatDir, { recursive: true });
          
          const webpDest = path.join(publicCatDir, webpName);
          const webpPublicPath = `/LightSpeedimages/Archives/${webpName}`;

          if (!fs.existsSync(webpDest)) {
             try {
               await sharp(path.join(sourceDir, file))
                 .resize({ width: 1200, withoutEnlargement: true })
                 .webp({ quality: 80, effort: 6 })
                 .toFile(webpDest);
             } catch (e) {
               console.error("Error compressing unpartitioned file " + file, e);
             }
          }
          
          assetsMap[remainingCat].push(webpPublicPath);
        }
      }
    }
  }
  
  // If no remaining archives, remove the key
  if (assetsMap[remainingCat].length === 0) {
    delete assetsMap[remainingCat];
  }

  // Save the cleanly partitioned map
  fs.writeFileSync(mapPath, JSON.stringify(assetsMap, null, 2));
  console.log("Partition pipeline finished successfully! Categories:", Object.keys(assetsMap).join(","));
}

run().catch(console.error);
