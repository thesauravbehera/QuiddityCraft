const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

function walkDir(dir) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            walkDir(dirPath);
        } else {
            if (dirPath.endsWith('.tsx') || dirPath.endsWith('.ts') || dirPath.endsWith('.json')) {
                let content = fs.readFileSync(dirPath, 'utf8');
                
                // Replace videos
                let newContent = content.replace(/\.mp4|\.mov/gi, '.webm');
                
                // Replace images
                newContent = newContent.replace(/\.png|\.jpg|\.jpeg/gi, '.webp');
                
                if (content !== newContent) {
                    fs.writeFileSync(dirPath, newContent, 'utf8');
                    console.log(`Updated formatting in: ${dirPath}`);
                }
            }
        }
    });
}

console.log('Starting massive media extension rewrite...');
walkDir(directoryPath);
console.log('Extensions universally updated to web fallback equivalents.');
