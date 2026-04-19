import os
import re

directory = 'src/app/components'

for root, dirs, files in os.walk(directory):
    for filename in files:
        if filename.endswith(('.tsx', '.ts', '.css')):
            filepath = os.path.join(root, filename)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            # 1. Replace Typography
            new_content = re.sub(
                r"'Barlow, sans-serif'",
                "'Outfit, sans-serif'",
                content
            )
            new_content = re.sub(
                r"'Inter, Barlow, sans-serif'",
                "'Outfit, sans-serif'",
                new_content
            )

            # 2. Swap Uppercase to Lowercase on Headings
            new_content = re.sub(
                r"textTransform:\s*'uppercase',",
                "textTransform: 'lowercase',",
                new_content
            )
            new_content = re.sub(
                r"uppercase",
                "lowercase",
                new_content
            )

            # 3. Soften the shape language
            # Replace sharp components with extreme pill rounding
            new_content = new_content.replace('rounded-none', 'rounded-full')
            new_content = new_content.replace('rounded-md', 'rounded-2xl')
            new_content = new_content.replace('rounded-[24px]', 'rounded-[3rem]')
            new_content = new_content.replace('rounded-2xl', 'rounded-[2rem]')

            if content != new_content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Applied liquid rebranding to: {filepath}")
