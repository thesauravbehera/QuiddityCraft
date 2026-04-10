const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const sourceDir = path.join(__dirname, 'LightSpeedimages');
const destDir = path.join(__dirname, 'public', 'LightSpeedimages');

// Ensure destination exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Recursively copy and convert
function processDirectory(src, dest, categoryName, assetsMap) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  
  const items = fs.readdirSync(src);
  
  for (const item of items) {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
        const catName = item;
        processDirectory(srcPath, destPath, catName, assetsMap);
    } else {
        const ext = path.extname(item).toLowerCase();
        const baseName = path.basename(item, ext);
        
        if (['.png', '.jpg', '.jpeg'].includes(ext)) {
            const webpDest = path.join(dest, `${baseName}.webp`);
            console.log(`Converting to WebP: ${item}`);
            // Use sips to convert on Mac
            try {
                execSync(`sips -s format webp "${srcPath}" --out "${webpDest}"`, { stdio: 'ignore' });
                // Add to maps
                if (categoryName) {
                    if (!assetsMap[categoryName]) assetsMap[categoryName] = [];
                    // Convert relative path for web
                    const webPath = webpDest.replace(path.join(__dirname, 'public'), '').replace(/\\/g, '/');
                    assetsMap[categoryName].push(webPath);
                }
            } catch (e) {
                console.log('Sips failed, copying original:', item);
                fs.copyFileSync(srcPath, destPath);
                if (categoryName) {
                    if (!assetsMap[categoryName]) assetsMap[categoryName] = [];
                    const webPath = destPath.replace(path.join(__dirname, 'public'), '').replace(/\\/g, '/');
                    assetsMap[categoryName].push(webPath);
                }
            }
        } 
        else if (['.mp4', '.mov', '.webm'].includes(ext)) {
            console.log(`Copying video: ${item}`);
            fs.copyFileSync(srcPath, destPath);
            // If it's the hero video, we won't put it in the masonry map, or we can just ignore it for categories
        }
    }
  }
}

const classifiedAssets = {};
processDirectory(sourceDir, destDir, null, classifiedAssets);

fs.writeFileSync(
    path.join(__dirname, 'src', 'app', 'components', 'categorizedAssets.json'),
    JSON.stringify(classifiedAssets, null, 2)
);

console.log('Complete! Map generated.');
