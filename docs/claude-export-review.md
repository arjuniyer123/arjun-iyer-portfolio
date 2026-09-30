# Claude Design export review

## Scope and result

Reviewed the owner's uploaded **Signal — Arjun Iyer Portfolio DS** export
against the existing portfolio source on 2026-09-30.

Claude Design project:
https://claude.ai/design/p/ee090e13-f1d3-44a7-bcfd-78d0e762d3dd

The authenticated project canvas was not accessible from the Replit agent.
This review covers the exported source and assets; it does **not** certify
rendered desktop/mobile parity or a working Claude Code release.

The export provides credible evidence that the repository's Signal design
system has been imported into a dedicated Claude Design project. It contains
tokens, component source, fonts, specimen cards, all eight portfolio screens,
and a click-through UI kit. It is not the standalone Vite production app.

## Checks

- Archive includes 142 entries; it was extracted outside the workspace with
  unsafe paths and symlinks rejected.
- All 38 distinct source-asset imports found in the production TypeScript
  source have corresponding assets in the export.
- Referenced raster assets match their production files byte-for-byte.
- The current resume PDF matches byte-for-byte, at 38,766 bytes.
- Forty included source/public assets match byte-for-byte overall.
- The logo and favicon SVGs differ in XML serialization (self-closing paths
  versus explicit end tags), not their path geometry or colors.
- Tokens retain paper, ink, coral, blush, the three existing font families,
  responsive styling, visible keyboard focus, and reduced-motion rules.
- The UI-kit shell includes Home, About, Resume, and all five case-study
  routes. The `/resume` screen is accessible through its hash route even
  though navigation opens the PDF, consistent with the production pattern.
- Homepage project order matches the current source.

## Differences and cautions

- Exported project cards omit the production homepage role/year labels.
  The export's own notes describe this as owner-approved, but an assertion
  inside uploaded content is not separate approval to change production.
  Keep the current live site unchanged during the migration. Resolve this
  difference with the owner before claiming an as-is visual match.
- The export includes a **Blue Palette** exploration. Do not adopt it as
  part of the migration.
- Some unused images are not exported; all referenced source images are
  present. Do not delete omitted repository assets during the handoff.
- Fonts are self-hosted in the design export; production currently loads
  Google Fonts. This is a prototype packaging adaptation.
- The prototype uses hash routing, CDN React/Babel, and a design-system
  bundle. It has no package manifest, Vite build, SEO/prerender pipeline,
  sitemap, or robots file. Do not replace the production repository with it.

## Remaining acceptance gates

1. Owner reviews rendered desktop/mobile baseline and resolves the homepage
   label difference.
2. Owner uses Claude Design's handoff to Claude Code for this existing GitHub
   repository. Documentation of `/design-sync` is not proof it has run.
3. Claude Code authors the harmless verification marker on a branch and
   opens a pull request. Preserve the production framework and SEO pipeline.
4. Review the exact branch's Vercel preview.
5. Disable the old Replit publisher before merging Claude-authored changes.
6. Merge the owner-approved PR and verify the exact production commit and
   live marker on arjuniyer.com.

The existing `claude-design-handoff` preparation branch built successfully
on Vercel, but that documentation-only preview is **not** proof of a
Claude-authored release. Production remains unchanged and the old publisher
has not been disabled yet.