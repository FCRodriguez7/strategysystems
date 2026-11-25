# Frederick C. Rodriguez — Author & Academic Portfolio

A responsive, accessible **static website** for Frederick C. Rodriguez and *The AI Adoption Illusion*. Designed to publish on **GitHub Pages** without build tooling or external dependencies.

## Included pages

- `index.html` — Homepage and featured book
- `book.html` — The AI Adoption Illusion (uses the supplied actual cover)
- `research.html` — Research interests and selected publications
- `academic.html` — Academic background and portfolio
- `insights.html` — Clearly labeled upcoming topics
- `contact.html` — Contact/engagement page (details to be supplied)
- `assets/css/styles.css` — All styles, mobile layout, accessibility options
- `assets/js/main.js` — Mobile navigation and footer year
- `assets/images/` — Supplied author portrait and book cover, plus favicon
- `.nojekyll` — Prevents GitHub Pages from processing files with Jekyll

## Preview locally

Open `index.html` in a browser. All links and assets work without a server. Alternatively:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a **public repository** named `<yourusername>.github.io` (or another repository name if you prefer a project site).
2. Upload the **contents** of this folder to the repository root (including `.nojekyll`), or push them using Git.
3. In the repository, go to **Settings → Pages → Build and deployment**; choose **Deploy from a branch**, branch **main**, folder **/(root)**, and save.
4. Your website will be accessible at `https://<yourusername>.github.io/` if using a username site, or `https://<yourusername>.github.io/<repo-name>/` for a project site. It may take some time to appear after deployment.

No published GitHub repository or live URL has been created by this package.

## Information still needed

- Verified contact email, professional links, and any social profiles
- Confirmed purchase links for the book (no links are fabricated)
- Verified degree status, dates, affiliations, academic appointments, CV, and publication citations
- Research projects, publications, teaching details, and actual essay content
- GitHub username, custom domain (if any), and your preferred institutional affiliation styling

## Editing

Content is plain semantic HTML. Edit text in the individual `.html` pages. Change colors in `assets/css/styles.css` under `:root`. Images are in `assets/images/`. All paths are relative, so hosting the site in a GitHub Pages project repository also works.

The user supplied the author portrait and book cover. The exact book subtitle on the cover is **Why Companies Mistake Adoption for Progress—and How Leaders Create Enterprise Value**. The portfolio uses draft summaries pending editorial review. Pages do not collect personal data or include a non-functional contact form.

## Theme colors

The site's default academic accent is **Champagne Gold `#C6AD7B`** (navigation highlight, hero role separators, small rules, and favicon). The featured book and dedicated book page use **Muted Copper `#C88969`** sparingly for emphasis, echoing the original book cover. A darker gold ink is used for small accent text on light backgrounds to improve contrast. Adjust these custom properties in `assets/css/styles.css`:

```css
--accent: #C6AD7B;
--accent-gold: #C6AD7B;
--accent-gold-ink: #745D36;
--accent-copper: #C88969;
--accent-copper-ink: #875037;
```

The book-only accent style is activated by `class="book-theme"` on the `book.html` body.
