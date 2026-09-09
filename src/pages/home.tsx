import React from "react";
import { Link } from "wouter";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import americanNationalImg from "@/assets/work/american-national/app-screen-01.webp";
import chaloChaloImg from "@/assets/work/chalo-chalo/browse-incidents-desktop.webp";
import myHouseDealsImg from "@/assets/work/myhousedeals/property-listing-final.webp";
import promoArchitectImg from "@/assets/work/promo-architect/dashboard.webp";
import omsAccountSetupImg from "@/assets/work/oms/redesign-01.webp";

const projects = [
  {
    id: "american-national",
    title: "American National",
    role: "Mobile App Redesign",
    year: "2021",
    description: "Aligning the mobile experience with the desktop Client Site while ensuring customers could easily reach their local agent.",
    image: americanNationalImg,
    href: "/work/american-national"
  },
  {
    id: "promo-architect",
    title: "Promo Architect",
    role: "Enterprise Tool Redesign",
    year: "2019",
    description: "Streamlining a complex marketing promotion planning tool used by national fast food and quick-serve chains.",
    image: promoArchitectImg,
    href: "/work/promo-architect"
  },
  {
    id: "oms-account-setup",
    title: "OMS Account Setup",
    role: "Enterprise Setup Flow",
    year: "2018",
    description: "Translating a disjointed legacy interface into a clear, understandable flow for new users and third-party partners.",
    image: omsAccountSetupImg,
    href: "/work/oms-account-setup"
  },
  {
    id: "chalo-chalo",
    title: "Chalo Chalo!",
    role: "Disaster Relief Platform",
    year: "2016",
    description: "Designing a social community for first responders and disaster victims to connect and coordinate aid.",
    image: chaloChaloImg,
    href: "/work/chalo-chalo"
  },
  {
    id: "myhousedeals",
    title: "MyHouseDeals",
    role: "Property Listing Redesign",
    year: "2018",
    description: "Demystifying real estate investment with a clear, user-friendly property listing interface.",
    image: myHouseDealsImg,
    href: "/work/myhousedeals"
  }
];

function ArrowRight() {
  return <svg viewBox="0 0 15 15" aria-hidden="true"><path d="M8.146 3.146a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L11.293 8H2.5a.5.5 0 0 1 0-1h8.793L8.146 3.854a.5.5 0 0 1 0-.708Z" /></svg>;
}

export default function Home() {
  return (
    <div className="signal-home min-h-screen flex flex-col">
      <NavBar />
      <main className="signal-main">
        <section className="signal-hero" aria-labelledby="signal-title">
          <div className="signal-hero-copy">
            <h1 id="signal-title">Arjun<br /><em>Iyer</em></h1>
            <p className="signal-statement">Making complex tools feel clear, useful, and human.</p>
          </div>
          <div className="signal-card" aria-label="Abstract app interface wireframe">
            <div className="signal-sketch" aria-hidden="true">
              <svg viewBox="0 0 480 300" role="presentation">
                <rect className="wire-shell" x="28" y="28" width="424" height="244" rx="2" />
                <path className="wire-heavy" d="M28 72H452M122 72V272" />
                <circle className="wire-dot" cx="50" cy="50" r="5" />
                <circle className="wire-dot" cx="68" cy="50" r="5" />
                <circle className="wire-dot wire-hot" cx="86" cy="50" r="5" />
                <path className="wire-heavy" d="M52 104H96M52 130H86M52 156H100M52 228H92" />
                <rect className="wire-block wire-block-hot" x="148" y="98" width="116" height="58" />
                <rect className="wire-block" x="284" y="98" width="140" height="58" />
                <rect className="wire-block" x="148" y="178" width="72" height="68" />
                <rect className="wire-block" x="240" y="178" width="184" height="68" />
                <path className="wire-accent" d="M164 139L188 116L210 132L238 108" />
                <path className="wire-heavy" d="M300 116H398M300 136H370M258 198H398M258 218H348" />
                <path className="wire-arrow" d="M204 188C234 157 274 157 302 186M290 181L302 186L298 173" />
              </svg>
            </div>
          </div>
        </section>

        <section className="signal-work" id="work" aria-labelledby="work-title">
          <div className="signal-section-intro">
            <h2 id="work-title">My Work</h2>
            <p>A collection of past projects.</p>
          </div>
          <div className="signal-project-list">
            {projects.map((project, index) => (
              <article className={`signal-project ${index === 0 ? "featured" : ""}`} key={project.id}>
                <div className="signal-project-copy">
                  <div className="signal-project-meta"><span>{project.role}</span><span>{project.year}</span></div>
                  <h3><Link href={project.href}>{project.title}</Link></h3>
                  <p>{project.description}</p>
                  <Link className="signal-case-link" href={project.href}>Read More <ArrowRight /></Link>
                </div>
                <Link className="signal-project-image" href={project.href} aria-label={`View ${project.title} case study`}>
                  <img src={project.image} alt="" />
                  <span className="signal-image-index" aria-hidden="true">0{index + 1} / 05</span>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
