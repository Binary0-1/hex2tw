 _               ____  _            
| |__   _____  _|___ \| |___      __
| '_ \ / _ \ \/ / __) | __\ \ /\ / /
| | | |  __/>  < / __/| |_ \ V  V / 
|_| |_|\___/_/\_\_____|\__| \_/\_/  

# hex2tw

`hex2tw` is a VS Code extension that helps you convert hex color codes to their Tailwind CSS color aliases. Just type any hex value (e.g. `#f8f`, `#34d399`) inside className strings or style blocks, press `Ctrl + Space`, and get instant suggestions with their matching Tailwind names.

---

## Features

- ✅ Autocomplete Tailwind color aliases when you start typing hex values.
- 🎯 Trigger suggestions manually via `Ctrl + Space`.
- 🧠 Suggests based on partial hex match (e.g. `#f8f`).
- 💬 Replaces the hex with the Tailwind class directly.
- 🧬 Works inside `className="..."` or any text line.
- 🔧 Supports JS, TS, JSX, TSX, and HTML.

---

## Requirements

- A `tailwind.config.js` file in your workspace.
- Your custom or extended colors should be flattened if nested.
- No internet connection needed – works offline.

---

## Extension Settings

This extension does not add any new settings yet.

---

## Known Issues

- Does not support fuzzy searching or hex variants like `rgb()` or `hsl()`.
- Suggestions only appear when hex begins with `#` and is typed manually.
- No hover/diagnostic hints (planned for future).

---

## Release Notes

### 1.0.0

- 🚀 Initial release of `hex2tw`
- Added support for hex to Tailwind alias suggestion.
- Triggered with `#` and `Ctrl + Space`.

---

## Following Extension Guidelines

This extension follows the official [VS Code extension guidelines](https://code.visualstudio.com/api/references/extension-guidelines) to ensure optimal performance and usability.

---

## Working with Markdown

You can preview this file directly in VS Code:

- Split the editor: `Ctrl+\`
- Toggle preview: `Ctrl+Shift+V`
- Trigger markdown IntelliSense: `Ctrl+Space`

---

## For More Information

- [Tailwind CSS Documentation](https://tailwindcss.com/docs/customizing-colors)
- [VS Code Extension API](https://code.visualstudio.com/api)
- [Markdown Syntax](https://www.markdownguide.org/basic-syntax/)

---
Enjoy using `hex2tw` and speed up your Tailwind workflow!
