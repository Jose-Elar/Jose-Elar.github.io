# José Elguea · Portfolio

Personal portfolio, live at **https://jose-elar.github.io**.
Plain HTML, CSS and JavaScript, with no build step. Hosted on GitHub Pages.

## Folder structure

| Path | What's inside |
|---|---|
| `index.html` | Home page layout |
| `project.html` | Template used by every project page (`project.html?id=...`) |
| `data/projects.js` | **All projects**, in English and Spanish |
| `data/texts.js` | **All other text** (bio, buttons, skills) and personal links |
| `css/style.css` | Design. Colors are at the top of the file |
| `js/main.js` | Language switch, filters, builds the pages from the data files |
| `img/` | Screenshots, photo (`photo.jpg`), favicon, link preview (`og-image.jpg`) |
| `cv/` | `CV_EN.pdf` and `CV_ES.pdf` |

## Common updates

- **Add a project:** copy a `{ ... }` block in `data/projects.js`, change it, and add its image to `img/`.
- **Change the bio or skills:** edit `data/texts.js` (both `en` and `es`).
- **Update the CV:** replace the PDFs in `cv/`, keeping the same file names.
- **Preview:** double-click `index.html`, or use VS Code's *Live Server* extension.

Then commit and push. The live site updates in about a minute.

## Language

The site opens in Spanish for Spanish browsers and in English otherwise, and remembers the visitor's choice.
Force a language with `?lang=es` or `?lang=en`, e.g. `https://jose-elar.github.io/?lang=es`.
