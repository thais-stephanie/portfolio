# Thaís Holanda — professional portfolio

Thais's supplied design, prepared as a portable static website. The original files in Downloads remain untouched.

Runtime infrastructure cost: $0

## Structure

`public/index.html` is the bilingual homepage. The five `case-*.html` files contain the English case studies. `public/assets` contains the supplied screenshots, portrait and CV. `public/support.js` is the supplied rendering runtime; its React and optional Babel dependencies are bundled in `public/vendor`. Fonts are also bundled locally. `responsive.css` adds phone layout and focus/reduced-motion support without changing the desktop design.

No backend, database, authentication, API keys, environment variables, analytics or external runtime requests are required. The renderer requires JavaScript; this version retains the supplied rendering architecture.

## Edit and validate

Edit the corresponding HTML file. Keep `support.js` and all relative asset paths intact. Replace the PDF at its existing path to update the CV. Run `node prepare.mjs` to validate local references and `node --check public/support.js` to check syntax. Any ordinary static web server can serve `public`.

## Deployment

GitHub Pages deploys `public` through `.github/workflows/pages.yml` whenever `main` changes. The workflow does not install runtime dependencies or need secrets. The same folder can be uploaded unchanged to another static host.

## Preparation changes

- Local copies of fonts, React and Babel; no Google Fonts/CDN requests at runtime.
- Descriptive titles, descriptions, favicon and document language.
- Small-screen column stacking and keyboard focus/reduced-motion support.
- Previously approved metric distinctions retained: identified contracted revenue is not collected cash; the homepage uses the 90-to-5-minute batch result instead of the $161k audit finding.
- Desktop/mobile checks across all six pages, assets and homepage language switch. See local validation report for the test run; no Lighthouse score is claimed for this supplied-design version.

Font families Archivo, Space Grotesk and JetBrains Mono are distributed under the SIL Open Font License. React and ReactDOM are MIT licensed. Babel standalone includes its license header. See `public/vendor` for notices.
