const fs = require('fs');
const path = require('path');

function replaceFont(dirPath) {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceFont(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('Instrument Serif')) {
        content = content.replace(/Instrument Serif,\s*serif/g, 'Outfit, sans-serif');
        fs.writeFileSync(fullPath, content);
        console.log('Updated', fullPath);
      }
    }
  }
}

replaceFont('./src/app/components');
console.log('Done');
