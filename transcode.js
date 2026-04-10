const fs = require('fs');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegStatic = require('ffmpeg-static');

ffmpeg.setFfmpegPath(ffmpegStatic);

const videoDir = path.join(__dirname, 'public', 'videos');

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    let total = files.filter(f => f.endsWith('.mp4') || f.endsWith('.mov')).length;
    let current = 0;

    if (total === 0) {
        console.log("No videos found to transcode.");
        return;
    }

    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            processDirectory(filePath);
        } else if (file.endsWith('.mp4') || file.endsWith('.mov')) {
            const ext = path.extname(file);
            const baseName = path.basename(file, ext);
            const webmPath = path.join(dir, `${baseName}.webm`);

            console.log(`Starting transcode: ${file} -> .webm`);
            ffmpeg(filePath)
                .videoCodec('libvpx-vp9')
                .outputOptions([
                    '-crf 30',          // High quality compression
                    '-b:v 0',           // Required for crf to work in vp9
                    '-threads 4',       // Utilize multi-core
                    '-speed 4'          // Encode faster (0-4)
                ])
                .audioCodec('libopus')
                .toFormat('webm')
                .on('end', () => {
                    console.log(`Finished: ${baseName}.webm`);
                    fs.unlinkSync(filePath); // Delete original
                    current++;
                    if (current === total) {
                        console.log("All videos transcoded successfully.");
                    }
                })
                .on('error', (err) => {
                    console.error(`Error on ${file}:`, err);
                    current++;
                })
                .save(webmPath);
        }
    });
}

processDirectory(videoDir);
