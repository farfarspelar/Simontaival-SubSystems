# Simontaival SubSystems website

A static English-language website for industrial software and production engineering / CNC consulting. No build step, dependencies, tracking, cookies or backend. HTML, CSS and a small navigation script are served directly.

## Files

- `index.html` — homepage, concise overview and contact section.
- `software.html` — SubCalc, SubGlyph and SubMakro.
- `consulting.html` — remote and on-site services.
- `about.html` — founder background and `#experience` section.
- `blog.html` — planned topics and future article links.
- `posts/example-post.html` — explicitly unpublished article layout sample.
- `posts/template.html` — copyable draft article template.
- `css/style.css` — shared colours, typography, layout and breakpoints.
- `js/main.js` — optional accessible mobile navigation.
- `Images/` — original supplied assets, retained unchanged.
- `favicon.svg`, `robots.txt`, `sitemap.xml`, `.nojekyll` — deployment assets.

The actual directory is `Images/`, not `images/`. The portrait is `Profile.jpg`, not `profile.jpg`. Preserve exact case on Linux and GitHub Pages.

## Logo

`Images/Logo1.png` is selected. It has the simplest emblem and restrained, darker metallic styling. Logo2 has stronger bevelled metal styling and decorative lines; Logo3 adds drafting marks and outlined lettering; Logo4 has the brightest, glossiest treatment. Logo1 fits the quiet graphite / blueprint design best.

All four original candidates remain in `Images/`. The header displays Logo1's emblem using CSS framing, with readable company text beside it. No source image is edited. To change it, replace `Images/Logo1.png` in each root HTML file and `../Images/Logo1.png` in each post. Check `.brand-emblem img` in the CSS because another image may need different framing. Inspect the result at mobile and desktop sizes.

## Editing content

Open HTML files in any text editor. Content is in `<main id="main">`; retain the heading hierarchy and descriptive links.

- Homepage: edit `index.html`. Keep detailed service and career information on their dedicated pages.
- Products: edit the corresponding `#subcalc`, `#subglyph` or `#submakro` section in `software.html`, then update the overview on `index.html`.
- New product: copy one product section, assign a unique ID and add an overview card on the homepage. Use confirmed features and an accurate status.
- Consulting: edit `consulting.html`.
- Experience: edit `about.html`. Approximate career durations are supplied as of October 2026; review them periodically.
- Header/footer: shared markup is deliberately duplicated for a small static site. Update all seven HTML files when changing navigation or branding. Posts use `../` paths.

## Adding an article

1. Copy `posts/template.html` to a descriptive filename, such as `posts/operator-feedback.html`.
2. Replace the title, description, OpenGraph title/description, visible heading, date and content. Use a `<time datetime="YYYY-MM-DD">` element for the date.
3. Remove the draft wording and `<meta name="robots" content="noindex">` when publishing.
4. Add a linked card to `blog.html` (and optionally a homepage preview). Planned cards currently have no links because articles do not yet exist.
5. Add its public URL to `sitemap.xml` once a real domain is configured.

Keep relative links such as `../css/style.css`, `../Images/Background.png` and `../blog.html` in posts. The sample and template are intentionally excluded from indexing.

## Contact and remaining placeholders

Contact information is present in `index.html`, `software.html`, `consulting.html` and `about.html`. Update all four when it changes:

- Email: `simontaivalsubsystems@gmail.com` (with a working `mailto:` link).
- LinkedIn: `https://www.linkedin.com/in/kristian-simontaival-87595b408`
- GitHub: `https://github.com/farfarspelar/FarfarSpelar`
- `[ADD DOMAIN]` — replace with the public site URL.

Also replace `[ADD VERIFIED PUBLIC SUBGLYPH DESCRIPTION]` in `software.html`. No detailed description was available in the supplied project. Article placeholders belong to draft/sample pages, not finished articles. No software pricing or download links are assumed.

## Images

To change the portrait or hero later, add an appropriately sized replacement to `Images/` and update its references. Keep the supplied originals for reference. The portrait reference is in `about.html`; update its width/height attributes if its proportions change. The hero image is referenced in `css/style.css` relative to the CSS directory; its OpenGraph reference occurs in each HTML head.

`Background.png` is displayed proportionally with `background-size: cover` and a dark overlay. Mobile positioning retains the industrial drawing texture. It is decorative; important information is real HTML text. Portrait dimensions are reserved to avoid layout shifts. Original source files have not been recompressed.

## Local preview

Open `index.html` directly in a browser; all navigation and assets work without a server. Alternatively, run `python3 -m http.server 8000` from this directory and open `http://localhost:8000`. JavaScript is optional: without it the full navigation remains visible on mobile.

## GitHub Pages

1. Commit these files and the unchanged `Images/` assets to the repository.
2. In the repository's **Settings → Pages**, choose **Deploy from a branch**.
3. Select the desired branch and `/ (root)`, then save.
4. Open the published URL and check navigation, including posts.

No build command is required. `.nojekyll` requests plain static hosting. Relative asset and navigation paths support both repository and custom-domain Pages sites.

Before public launch, replace the domain placeholder in `sitemap.xml` with the full public base URL (including a repository path if applicable), and add a real absolute Sitemap directive in `robots.txt`. The current sitemap is a clearly marked draft and should not be submitted to search engines. For dependable social sharing, replace each `og:image` value with the final absolute image URL and add an absolute `og:url` once the public URL is known. Runtime navigation and asset references remain relative.

Review contact information, the SubGlyph description and draft article status before launch. The site is deployable now, but these editorial and domain items remain unfinished by design.

## Validation status

All seven HTML files were checked for local link and fragment targets, exact-case assets, shared CSS/JavaScript references, alt attributes, semantic landmarks and heading order. Principal solid-colour text pairs exceed WCAG AA contrast requirements. Checksums confirm all six original image files remain unchanged.

Live browser verification could not run in the restricted implementation environment: starting a local HTTP server and headless Chrome was blocked by socket permissions. Before launch, review all pages at 320, 375, 768, 1024 and 1440 pixels, check for horizontal scrolling, test Menu and Escape on mobile, tab through the links, and repeat with JavaScript disabled. Also check the browser console. These browser checks are pending, not reported as passed.

## Repository upload

The website is uploaded to `https://github.com/farfarspelar/FarfarSpelar`. This is also the owner's profile repository, so its existing root `README.md` is preserved. This website guide is stored there as `WEBSITE_README.md`; locally it remains `README.md`. Site files are in the repository root. Publishing `main` / root through Pages will normally use `https://farfarspelar.github.io/FarfarSpelar/`. The domain placeholders remain until the public deployment URL is confirmed.
