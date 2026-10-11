import React from "react";
import { Link } from "wouter";
import { projects } from "@/lib/projects";

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 15 15"
      aria-hidden="true"
      style={direction === "left" ? { transform: "scaleX(-1)" } : undefined}
    >
      <path d="M8.146 3.146a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L11.293 8H2.5a.5.5 0 0 1 0-1h8.793L8.146 3.854a.5.5 0 0 1 0-.708Z" />
    </svg>
  );
}

/**
 * Previous / next links at the end of a case study, so readers can keep
 * moving through the work instead of hitting the footer. Wraps around at
 * both ends of the homepage order.
 */
export function CaseNav({ currentId }: { currentId: string }) {
  const index = projects.findIndex((p) => p.id === currentId);
  if (index === -1 || projects.length < 2) return null;

  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <nav className="signal-case-nav" aria-label="More case studies">
      <Link href={prev.href} className="signal-case-nav-link prev">
        <span className="signal-case-nav-label">
          <Arrow direction="left" /> Previous
        </span>
        <span className="signal-case-nav-title">{prev.title}</span>
      </Link>
      <Link href={next.href} className="signal-case-nav-link next">
        <span className="signal-case-nav-label">
          Next <Arrow direction="right" />
        </span>
        <span className="signal-case-nav-title">{next.title}</span>
      </Link>
    </nav>
  );
}
