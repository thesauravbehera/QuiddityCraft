import os
import re

directory = 'src/app/components'

for root, dirs, files in os.walk(directory):
    for filename in files:
        if filename.endswith(('.tsx', '.ts')):
            filepath = os.path.join(root, filename)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            # 1. Purge Tracking in Tailwind Classes
            new_content = re.sub(r"tracking-widest", "tracking-tight", content)
            new_content = re.sub(r"tracking-\[.*?\]", "tracking-tight", new_content)

            # 2. Purge Inline Letter Spacing constraints (e.g. letterSpacing: '0.3em')
            new_content = re.sub(r"letterSpacing:\s*['\"].*?['\"]", "letterSpacing: '-0.05em'", new_content)

            # 3. Maximize Font Weights in Tailwind Classes
            new_content = re.sub(r"font-light", "font-bold", new_content)
            new_content = re.sub(r"font-normal", "font-bold", new_content)
            new_content = re.sub(r"font-thin", "font-bold", new_content)
            new_content = re.sub(r"font-medium", "font-black", new_content)

            # 4. Maximize Inline Font Weights
            new_content = re.sub(r"fontWeight:\s*300", "fontWeight: 800", new_content)
            new_content = re.sub(r"fontWeight:\s*400", "fontWeight: 800", new_content)
            new_content = re.sub(r"fontWeight:\s*500", "fontWeight: 900", new_content)

            if content != new_content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Enforced heavy tracking logic in: {filepath}")
