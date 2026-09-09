import React from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/ai-logo.svg";

export function NavBar() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Work" },
    { href: "/arjun-iyer-resume.pdf", label: "Resume", external: true },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="signal-nav">
      <Link href="/" className="signal-brand" aria-label="Arjun Iyer home">
        <img src={logoImg} alt="" />
      </Link>

      <nav className="signal-links" aria-label="Main navigation">
        {links.map((link) => {
          const isActive = !link.external && (location === link.href || (link.href !== "/" && location.startsWith(link.href)));
          const className = cn(
            isActive && "active"
          );
          if (link.external) {
            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {link.label}
              </a>
            );
          }
          if (link.href === "/" && location === "/") {
            return (
              <a key={link.href} href="#work" className={className} aria-current="page">
                {link.label}
              </a>
            );
          }
          return (
            <Link
              key={link.href}
              href={link.href}
              className={className}
              aria-current={isActive ? "page" : undefined}
            >
              {link.label}
            </Link>
          );
        })}
        <a className="signal-contact" href="mailto:arjuniyer123@gmail.com">
          Contact Arjun <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
