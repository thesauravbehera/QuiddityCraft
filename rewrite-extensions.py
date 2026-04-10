import os
import re

directory = 'src'

for root, dirs, files in os.walk(directory):
    for filename in files:
        if filename.endswith(('.tsx', '.ts', '.json')):
            filepath = os.path.join(root, filename)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            new_content = re.sub(r'\.(mp4|mov)', '.webm', content, flags=re.IGNORECASE)
            new_content = re.sub(r'\.(png|jpg|jpeg)', '.webp', new_content, flags=re.IGNORECASE)

            if content != new_content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated: {filepath}")
