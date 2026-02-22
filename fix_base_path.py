#!/usr/bin/env python3
"""
Fix script: corrige la variable BASE en los componentes React
Ejecutar desde la raíz del proyecto:  python3 fix_base_path.py
"""

import os
import re

files = [
    'src/components/Navbar.jsx',
    'src/components/Hero.jsx',
    'src/components/ProjectCard.jsx',
    'src/components/Footer.jsx',
]

CORRECT_LINE = "const BASE = (import.meta.env.BASE_URL || '/').replace(/\\/$/, '')\n"

fixed = 0
for path in files:
    if not os.path.exists(path):
        print(f'  ⚠️  No encontrado: {path}')
        continue

    lines = open(path, encoding='utf-8').readlines()
    out = []
    changed = False

    for line in lines:
        # Detecta cualquier variante rota o correcta de la línea BASE
        if re.search(r"const BASE\s*=", line):
            out.append(CORRECT_LINE)
            changed = True
        else:
            out.append(line)

    open(path, 'w', encoding='utf-8').writelines(out)

    if changed:
        print(f'  ✅ Corregido: {path}')
        fixed += 1
    else:
        print(f'  ℹ️  Sin cambios: {path}')

print(f'\nListo. {fixed} archivo(s) corregido(s).')
print('Ahora corre: npm run dev')
