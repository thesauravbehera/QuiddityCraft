import os
import re

directory = 'src/app/components'

for root, dirs, files in os.walk(directory):
    for filename in files:
        if filename.endswith(('.tsx', '.ts')):
            filepath = os.path.join(root, filename)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            new_content = content
            
            # Deep Galactic CTAs
            new_content = new_content.replace('#ED1C24', '#A855F7')  # Red -> Glowing Amethyst
            new_content = new_content.replace('#c9141c', '#7E22CE')  # Red Hover -> Deep Violet Hover
            
            # Subheaders / Small Accents
            new_content = new_content.replace('#FBB82B', '#E0E7FF')  # Orange/Yellow -> Starlight Silver
            new_content = new_content.replace('#FFD700', '#22D3EE')  # Yellow marker -> Cyan marker
            
            # The Massive Gradients
            new_content = new_content.replace('from-[#FBB82B] via-[#E1534E] to-[#99222B]', 'from-[#A855F7] via-[#D946EF] to-[#EC4899]')

            # Darkening the background slightly to bring back "Space" feeling
            new_content = new_content.replace('bg-[#0a0a0a]', 'bg-[#0B0914]')
            
            if content != new_content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Injected Galactic Palette in: {filepath}")
