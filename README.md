# Thaís Holanda | AI Systems & Automation Engineer Portfolio

I build AI agents and internal systems on top of business software, APIs, workflows and data. This portfolio brings together two AI system case studies, five production case studies and my professional experience.

The AI case studies explain how deterministic logic, tool-using agents, evaluations and guardrails divide the work, including the evaluations still in progress. The production case studies explain the operational problem, the system constraints, my role, the implementation and the outcomes. I use this space to make the reasoning behind my work as visible as the results.

**[Explore my portfolio](https://thais-stephanie.github.io/portfolio/)**

## Architecture

I keep the portfolio static and portable: HTML, CSS and JavaScript, hosted on GitHub Pages. Fonts and rendering dependencies are bundled locally, so browsing does not depend on third-party APIs or CDNs.

Runtime infrastructure cost: $0

There is no backend, database, authentication or required environment configuration. JavaScript is required for rendering and the homepage language switch. The homepage is available in English and Portuguese; the case studies are currently in English.

## Visitor analytics

I use free Cloudflare Web Analytics to understand visits, page views and which case studies attract interest. Its script is installed on the homepage and every case-study page. Analytics is independent of the portfolio: blocking the script or a service outage does not prevent browsing.

The beacon token in the HTML is a public site identifier, not an API credential. No private key is required. Reports are available in my Cloudflare account under **Analytics → Web analytics → thais-stephanie.github.io**. To remove analytics, remove the marked Cloudflare Web Analytics script block from each HTML page.

## Repository structure

- `public/index.html` — homepage, experience, technologies and contact information.
- `public/case-dtc-revenue-agent.html`, `public/case-career-agent.html` — AI system case studies.
- `public/case-*.html` (the other five) — production case studies.
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
