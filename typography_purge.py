import os
import re

directory = 'src/app/components'

for root, dirs, files in os.walk(directory):
    for filename in files:
        if filename.endswith(('.tsx', '.ts')):
            filepath = os.path.join(root, filename)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            # 1. Replace the fontFamily
            new_content = re.sub(
                r"fontFamily:\s*'Instrument Serif, serif',",
                "fontFamily: 'Outfit, sans-serif',\n              fontWeight: 900,\n              textTransform: 'uppercase',",
                content
            )
            
            # 2. Rip out any fontStyle: 'italic'
            new_content = re.sub(
                r"fontStyle:\s*'italic',\n*(\s*)",
                r"\1",
                new_content
            )

            if content != new_content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Purged typography in: {filepath}")
