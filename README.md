# Ogechi & Brandon — wedding site

Preview of the wedding website designed in Claude Design. Live at **https://bazuoma.github.io/ob-wedding/**.

- `index.html` is the one link for everyone: it loads `mobile.html` (phones) or `desktop.html` (everything else) into itself, so the address never changes.
- `support.js` is the Claude Design runtime that renders the pages (loads React from unpkg).
- `_ds/` is the wedding design system; `fonts/` and `photos/` are the site assets.
- `.nojekyll` makes GitHub Pages serve the `_ds/` folder.

Guest list and RSVP are mock data for now — any name gets in; the "try a guest" buttons show the one-event views.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.
