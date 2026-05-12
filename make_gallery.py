import os

with open('all_images.txt', 'r') as f:
    images = [line.strip() for line in f if line.strip()]

html = ['<html><body>']
for img in images:
    html.append(f'<div><p>{img}</p><img src="{img}" style="max-width:300px;"></div>')
html.append('</body></html>')

with open('gallery.html', 'w') as f:
    f.write('\n'.join(html))
