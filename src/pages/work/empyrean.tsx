import React from "react";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { CaseNav } from "@/components/case-nav";

/*
 * SKELETON — placeholder content throughout.
 *
 * Every bracketed sentence is a writing prompt to replace. Every
 * <ImagePlaceholder> marks where a screen should go; swap it for an
 * <img className="signal-case-img"> (wired to useLightbox, as on the other
 * case studies) once NDA-safe images are ready in src/assets/work/empyrean/.
 * Also add the hero image to src/lib/projects.ts and generate a social
 * preview with scripts/make-og-images.py.
 */

function ImagePlaceholder({ label, tall = false }: { label: string; tall?: boolean }) {
  return (
    <div className={`signal-case-placeholder${tall ? " tall" : ""}`} role="img" aria-label={`Placeholder: ${label}`}>
      <span>{label}</span>
    </div>
  );
}

export default function Empyrean() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="signal-main signal-case-main">

        <header className="signal-case-header">
          <div className="signal-case-eyebrow">Benefits Enrollment Platform</div>
          <h1 className="signal-case-title">Empyrean</h1>
          <p className="signal-case-summary">
            [One-sentence summary: what you made easier, and for whom.]
          </p>
        </header>

        <div className="signal-case-hero">
          <div className="signal-case-hero-frame">
            <ImagePlaceholder label="Hero image — the redesigned enrollment experience" />
          </div>
        </div>

        <div className="signal-case-layout">
          <div className="signal-case-meta">
            <div>
              <span className="signal-case-meta-label">Timeline</span>
              <span className="text-foreground">Mar 2022 – Present</span>
            </div>
            <div>
              <span className="signal-case-meta-label">Role</span>
              <span className="text-foreground">Senior UX Designer</span>
            </div>
            <div>
              <span className="signal-case-meta-label">Company</span>
              <span className="text-foreground">Empyrean</span>
            </div>
            <div>
              <span className="signal-case-meta-label">Team</span>
              <span className="text-foreground">[Team size and makeup]</span>
            </div>
          </div>

          <div className="signal-case-body">
            <div className="signal-callout">
              <h2 className="signal-case-h2 mb-4">Empyrean</h2>
              <p className="signal-case-p">
                [Company intro, two or three sentences. What Empyrean's benefits platform does, who uses the employee enrollment side versus the admin tools, and the scale it runs at.]
              </p>
            </div>

            <section className="flex flex-col gap-6">
              <h2 className="signal-case-h2">The Problem</h2>
              <p className="signal-case-p">
                [What was broken or missing for employees enrolling in benefits. Who felt it, and what it cost the business: support calls, incomplete enrollments, admin workload.]
              </p>
              <ImagePlaceholder label="Before — the original enrollment flow" />
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="signal-case-h2">Research</h2>
              <p className="signal-case-p">
                [How you learned what users needed: interviews, usability tests, analytics, support tickets, conversations with benefits administrators. One or two concrete findings that shaped the work.]
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                <figure>
                  <ImagePlaceholder label="Research artifact — journey map or findings" />
                  <figcaption className="signal-case-caption">[Caption]</figcaption>
                </figure>
                <figure>
                  <ImagePlaceholder label="Research artifact — flow or audit" />
                  <figcaption className="signal-case-caption">[Caption]</figcaption>
                </figure>
              </div>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="signal-case-h2">Decisions</h2>
              <p className="signal-case-p">
                [The two or three key design decisions, the options you weighed, and why you chose what you did. Note constraints such as compliance, plan complexity, or accessibility.]
              </p>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="signal-case-h2">Leading the Team</h2>
              <p className="signal-case-p">
                [How you lead the offshore design team: how work is planned and reviewed across time zones, how you keep quality consistent, and one example of growing a designer or improving the team's process.]
              </p>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="signal-case-h2">Outcomes</h2>
              <p className="signal-case-p">
                [What changed after launch. Use numbers if you can share them (completion rate, time to enroll, support volume); otherwise use qualitative results and feedback.]
              </p>
            </section>

            <section>
              <h2 className="signal-case-h2 mb-6">Screenshots</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                <figure>
                  <ImagePlaceholder label="Final screen — plan selection" tall />
                  <figcaption className="signal-case-caption">[Caption]</figcaption>
                </figure>
                <figure>
                  <ImagePlaceholder label="Final screen — review and confirm" tall />
                  <figcaption className="signal-case-caption">[Caption]</figcaption>
                </figure>
              </div>
            </section>
          </div>
        </div>

        <CaseNav currentId="empyrean" />
      </main>

      <Footer />
    </div>
  );
}
