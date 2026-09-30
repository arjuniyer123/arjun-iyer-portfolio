# Claude Design migration handoff

## Status

Prepared for import; **not yet fully migrated**. The owner must create/import
the Claude Design project, review it, and hand one approved change to Claude
Code. Keep production `main` unchanged until the preview is approved.

**Update:** the owner provided the Claude Design project link and its design
system ZIP export. Source/asset review is recorded in `claude-export-review.md`.
The import is evidenced by that export; rendered parity and the Claude Code
release path still need verification. The steps below remain the checklist
for completing the handoff, not a claim that the cutover has happened.

## Protected baseline

- Repository: https://github.com/arjuniyer123/arjun-iyer-portfolio
- Production branch: `main`
- Baseline commit: `654f871262eab17d4f32d2f9af9596a663f42928`
- Backup tag: `pre-claude-design-handoff`
- Preparation branch: `claude-design-handoff`
- Last verified production deployment:
  https://vercel.com/arjun-7398/arjun-iyer-portfolio/G7fvtakfypv7G53ZUeL7SDK41peG
- Live site: https://arjuniyer.com

The baseline includes the latest published resume. The branch adds handoff
documentation only; it does not redesign or replace the site.

## Owner: import into Claude Design

1. Open https://claude.ai/design, or choose Design in Claude's Artifacts tab.
2. Create a dedicated project for the portfolio.
3. Connect GitHub within Claude and select this repository. Use
   `claude-design-handoff` when a branch selector is available. If the importer
   only reads `main`, use the prepared ZIP as source context for the handoff.
4. Import the design system from the complete codebase. Include `src/index.css`,
   `src/styles/signal.css`, the page components, shared navigation/footer, and
   actual assets. Ask Claude to read `DESIGN.md`.
5. Import the existing portfolio without redesigning it. Confirm the homepage,
   About, Resume, and case studies at desktop and mobile sizes.
6. Save the Claude Design project link and approve the baseline.

### Initial prompt

> Import this existing React + Vite portfolio as-is. Read DESIGN.md and
> CLAUDE.md. Reuse the actual components, CSS, images, logo, and latest resume.
> Preserve every route and the current Signal visual design. Do not redesign,
> rewrite the framework, or replace case-study content. First show matching
> desktop and mobile versions for approval. This project will become the
> authority for approved design decisions; GitHub remains the production-code
> record and Vercel remains the host.

## Owner: hand the approved design to Claude Code

Use Claude Design's **Handoff to Claude Code** option and select the local
coding agent or Claude Code Web. Connect the same GitHub repository. If using
Claude Code locally, clone this repository and check out the handoff branch:

```bash
git clone https://github.com/arjuniyer123/arjun-iyer-portfolio.git
cd arjun-iyer-portfolio
git checkout claude-design-handoff
```

Current official guidance documents `/design-sync` for design-system sync and
`/design` for importing a design into the codebase. Use the commands supported
by your Claude Code version; do not treat a normal read-only GitHub connector
as permission to push code.

### Verification prompt

> Continue from the imported portfolio and read CLAUDE.md. Create a new branch
> based on claude-design-handoff. Add a harmless public text file named
> public/claude-handoff-check.txt containing "Claude Design handoff verified."
> Do not change the visual design. Run typecheck and build, push the branch,
> and open a pull request into main. Do not merge without my approval.

This marker must be authored through the new Claude workflow, not fabricated
by the Replit agent as proof of migration.

## Preview and cutover

1. Confirm the pull request's Vercel preview finishes successfully.
2. Review the preview on desktop and mobile, all eight direct routes, and
   `/arjun-iyer-resume.pdf`. Preview access may require signing in to Vercel.
3. Confirm the marker file is present in the preview and record the Claude
   Design project link and Claude-authored branch/PR.
4. Before merging any Claude implementation, disable Replit's
   `portfolio:publish` command and direct GitHub push path. Update the Replit
   source-of-truth documentation to describe its files as a backup/reference.
   Do not run the old publisher after Claude changes the GitHub source: it
   mirrors its local snapshot and can overwrite or delete remote work.
5. Merge the approved PR into `main`; the existing Vercel GitHub integration
   automatically creates a production deployment. Do not create a new Vercel
   project, change DNS, or use a direct Design export to replace the live site.
6. Check that Vercel succeeds for the exact merge commit and the marker file
   is served at https://arjuniyer.com/claude-handoff-check.txt.
7. Only then mark the migration complete and use Claude Design/Claude Code
   for subsequent portfolio updates.

## Rollback

- Before merging: close the handoff PR; production is unchanged.
- For a bad merged update: revert its merge commit with a new GitHub PR,
  review the revert preview, and merge it. Do not force-reset `main`.
- If urgent recovery is needed, an authorized owner can restore/promote the
  known-good deployment in the existing Vercel project's deployment history.
  A Vercel rollback does not revert GitHub; revert the source too before the
  next release.
- The `pre-claude-design-handoff` tag preserves the original code. Create a
  recovery branch from it to compare or selectively restore files.
- Do not re-enable the old Replit publisher as a shortcut; its stale snapshot
  is not the source of truth after cutover.

## Official references

- https://support.claude.com/en/articles/14604416-get-started-with-claude-design
- https://support.claude.com/en/articles/14604397-set-up-your-design-system-in-claude-design