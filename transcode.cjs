const fs = require('fs');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegStatic = require('ffmpeg-static');

ffmpeg.setFfmpegPath(ffmpegStatic);

const publicDir = path.join(__dirname, 'public');

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    let pending = 0;

    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            processDirectory(filePath);
        } else {
            const ext = path.extname(file).toLowerCase();
            const baseName = path.basename(file, ext);

            if (ext === '.mp4' || ext === '.mov') {
                const webmPath = path.join(dir, `${baseName}.webm`);
                if (!fs.existsSync(webmPath)) {
                    pending++;
                    console.log(`Starting video: ${file} -> .webm`);
                    ffmpeg(filePath)
                        .videoCodec('libvpx-vp9')
                        .outputOptions([
                            '-crf 30',
                            '-b:v 0',
                            '-threads 4',
                            '-speed 4'
                        ])
                        .audioCodec('libopus')
                        .toFormat('webm')
                        .on('end', () => {
                            console.log(`Finished: ${baseName}.webm`);
                            fs.unlinkSync(filePath);
                        })
                        .on('error', (err) => {
                            console.error(`Error on ${file}:`, err);
                        })
                        .save(webmPath);
                }
            } else if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
                const webpPath = path.join(dir, `${baseName}.webp`);
                if (!fs.existsSync(webpPath)) {
                    pending++;
                    console.log(`Starting image: ${file} -> .webp`);
                    ffmpeg(filePath)
                        .outputOptions(['-vcodec webp'])
                        .on('end', () => {
                            console.log(`Finished: ${baseName}.webp`);
                            fs.unlinkSync(filePath);
                        })
                        .on('error', (err) => {
                            console.error(`Error on ${file}:`, err);
                        })
                        .save(webpPath);
                }
            }
        }
    });
}

processDirectory(publicDir);
