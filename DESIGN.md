# Signal Portfolio design reference

Import the real code from this repository rather than reconstructing the site
from screenshots. The current design is the migration baseline, not a request
for a redesign.

## Authoritative visual files

- `src/index.css`: global color variables, fonts, focus and motion rules
- `src/styles/signal.css`: Signal layout, hero illustration, navigation,
  projects, footer, and responsive rules
- `src/pages/home.tsx`: homepage content and project presentation
- `src/components/nav-bar.tsx` and `src/components/footer.tsx`: shared navigation
- `src/pages/about.tsx`, `src/pages/resume.tsx`, and `src/pages/work/`: real pages
- `src/assets/` and `public/`: real imagery, logo, favicon, resume, and social image

## Visual direction

- Warm paper background, dark ink text, cobalt-blue accents (#2b59c3, tint #d3def4),
  and signal-blue details. Coral has been removed entirely, including the hero
  wireframe dot.
- Space Grotesk display type, IBM Plex Sans body type, and IBM Plex Mono labels.
- Bold two-line name in the hero and a geometric app-interface wireframe.
- Thin borders, generous spacing, a restrained grid, and compact navigation.
- “My Work” project section and “Read More” links.
- Preserve the current case-study image counters, such as “01 / 05”.
- Do not restore removed homepage labels, project-name index numbers, or the
  role/year meta line above project names (removed by owner-approved change).
- Keep the AI initials mark as the favicon and home control.

Use exact values from the CSS files, not approximate colors from screenshots.
Import the complete styling and shared components, not only the homepage.

## Acceptance checklist

- The imported desktop and mobile views match the live design baseline.
- About, Resume, and all five case-study pages remain readable and reachable.
- Real text, project images, navigation, and footer are retained.
- Resume opens the current `public/arjun-iyer-resume.pdf` in a new tab.
- Keyboard focus, reduced-motion rules, and mobile behavior remain intact.
- Existing SEO metadata and static route generation remain intact.