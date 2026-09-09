# Thaís Holanda — Solutions Engineering Portfolio

I build connected systems across business software, APIs, workflows and data. This portfolio brings together five production case studies, my professional experience and the projects I am exploring next.

Each case study explains the operational problem, the system constraints, my role, the implementation and the outcomes. I use this space to make the reasoning behind my work as visible as the results.

**[Explore my portfolio](https://thais-stephanie.github.io/portfolio/)**

## Architecture

I keep the portfolio static and portable: HTML, CSS and JavaScript, hosted on GitHub Pages. Fonts and rendering dependencies are bundled locally, so browsing does not depend on third-party APIs or CDNs.

Runtime infrastructure cost: $0

There is no backend, database, authentication, analytics or required environment configuration. JavaScript is required for rendering and the homepage language switch. The homepage is available in English and Portuguese; the case studies are currently in English.

## Repository structure

- `public/index.html` — homepage, experience, technologies and contact information.
- `public/case-*.html` — five production case studies.
- `public/assets/` — project visuals, my portrait and downloadable CV.
- `public/support.js` — rendering runtime.
- `public/vendor/` — locally bundled libraries, fonts and their license notices.
- `public/responsive.css` — small-screen layout adjustments.
- `prepare.mjs` — page preparation and local reference validation.
- `.github/workflows/pages.yml` — GitHub Pages deployment.

## Local preview and validation

Serve the `public` directory with any static web server. For example, with Python installed:

```sh
python -m http.server 8000 --directory public
```

Then open `http://localhost:8000`.

To validate local references and check the rendering runtime syntax, use Node.js:

```sh
node prepare.mjs
node --check public/support.js
```

## Updating the portfolio

I maintain the page content in the corresponding HTML files. Asset paths are relative, so the same directory structure works locally and on GitHub Pages. To update my CV, I replace the PDF in `public/assets/` while keeping its filename, or update the download links if the filename changes.

Changes pushed to `main` trigger GitHub Actions, which validates the pages and publishes `public` to GitHub Pages. The same folder can also be served by another static host.

## License and reuse

You are welcome to take inspiration from this portfolio and adapt its code and design for your own work. I share the code and styling under the [MIT License](LICENSE): you may use, modify and redistribute them, including commercially, while retaining the copyright and license notice.

That permission does not cover my name, portrait, CV, personal information, case-study narratives or project images in `public/assets/`. Please replace those with your own content rather than presenting my work or identity as yours.

Third-party libraries and fonts retain their own licenses. Their notices are included in `public/vendor/`.
