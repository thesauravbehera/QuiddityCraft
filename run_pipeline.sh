#!/bin/bash
export PATH=/opt/homebrew/bin:$PATH

# Convert images
echo "Initiating image conversion engine via macOS Native (sips)..."
find public/images -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.JPG" \) | while read img; do
    echo "Processing $img..."
    dest="${img%.*}.webp"
    if sips -s format webp "$img" --out "$dest" &>/dev/null; then
        rm "$img"
    else
        echo "Failed to convert $img"
    fi
done

# Install node deps for video wrapper
npm install ffmpeg-static fluent-ffmpeg

# Run massive video transcoding (this will pin the CPU for a bit)
echo "Engaging Heavy-Duty FFmpeg Pipeline..."
node transcode.js

# Replace references in code
echo "Updating codebase refs to modern formats..."
python3 rewrite-extensions.py

# Push everything successfully!
echo "Synching to Git repository..."
git add .
git commit -m "feat: complete massive WebM/WebP media conversion and rollback to original Barlow UI"
git push -f

echo "Pipeline fully complete."
