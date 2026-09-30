# Arjun Iyer portfolio

## Ownership and migration status

This branch prepares a move to Claude Design. The actual Claude Design import
and first Claude-authored release still need to be verified by the owner.
Do not assume the migration is complete just because these instructions exist.

Target workflow: Claude Design is the authority for approved visual decisions,
this GitHub repository is the production-code record, and Vercel deploys `main`.
Use Claude Code to implement approved designs into this repository.

Read `DESIGN.md` and `docs/claude-design-handoff.md` before starting.

## Keep the existing site working

- Preserve the current React + Vite implementation; do not replace it with a
  standalone HTML mockup or a different framework.
- Preserve all eight public routes, their content, route-specific metadata,
  sitemap, robots file, and prerender generation.
- Keep the real logo, favicon, project imagery, resume PDF, contact links,
  keyboard accessibility, responsive behavior, and reduced-motion support.
- The deployment base path is `/`. Keep the existing Vercel project and domain
  settings. No backend or secrets are required by this standalone portfolio.
- Do not add `catalog:`, `workspace:`, `@replit/`, or internal package-registry
  references. Do not bring Replit-specific Vite plugins into this repository.
- Treat design explorations as proposals until the owner approves them.

## Implementation and release

1. Pull the latest `main` and create a branch for each approved change.
2. Use the Claude Design handoff, `/design`, or `/design-sync` as supported by
   the installed Claude Code version. Preserve the actual source components.
3. Install dependencies with npm in this standalone repository.
4. Run `npm run typecheck` and `npm run build`.
5. Check homepage, About, Resume, and all five case studies at desktop and mobile
   sizes. Check direct route loading, contact links, and the resume PDF.
6. Push the branch and open a pull request. Review the Vercel preview; a push to
   a non-production branch must not be treated as a production release.
7. Merge only after owner approval. Never force-push or commit directly to `main`.
8. Confirm Vercel succeeds for the exact merge commit and verify the live site.

The design canvas is not an automatic Git publisher. Approved design changes
must become repository commits before Vercel can deploy them.