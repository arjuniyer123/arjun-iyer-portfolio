import React from "react";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { useLightbox } from "@/components/lightbox";
import dashboardImg from "@/assets/work/promo-architect/dashboard.webp";
import styleGuideAuditImg from "@/assets/work/promo-architect/style-guide-audit.webp";
import styleGuideImg from "@/assets/work/promo-architect/style-guide.webp";
import calendarImg from "@/assets/work/promo-architect/calendar.webp";
import inStoreImg from "@/assets/work/promo-architect/in-store.webp";
import rulesetsImg from "@/assets/work/promo-architect/rulesets.webp";
import addLocationsImg from "@/assets/work/promo-architect/add-locations.webp";

export default function PromoArchitect() {
  const { open, node } = useLightbox();
  return (
    <div className="min-h-screen flex flex-col">
      {node}
      <NavBar />
      
      <main className="signal-main signal-case-main">
        
        <header className="signal-case-header">
          <div className="signal-case-eyebrow">Enterprise Tool Redesign</div>
          <h1 className="signal-case-title">Promo Architect</h1>
          <p className="signal-case-summary">
            Redesigning the enterprise promotion planning tool for national retail chains.
          </p>
        </header>

        <div className="signal-case-hero">
          <div className="signal-case-hero-frame">
            <img
              src={dashboardImg}
              alt="Promo Architect dashboard redesign"
              className="signal-case-hero-img"
              onClick={() => open(dashboardImg, "Promo Architect dashboard redesign")}
            />
          </div>
        </div>

        <div className="signal-case-layout">
          <div className="signal-case-meta">
            <div>
              <span className="signal-case-meta-label">Timeline</span>
              <span className="text-foreground">November 2019</span>
            </div>
            <div>
              <span className="signal-case-meta-label">Role</span>
              <span className="text-foreground">UX Designer</span>
            </div>
            <div>
              <span className="signal-case-meta-label">Context</span>
              <span className="text-foreground">Internal ordering tool redesign</span>
            </div>
          </div>

          <div className="signal-case-body">
            <div className="signal-callout">
              <h2 className="signal-case-h2 mb-4">Pointsmith</h2>
              <p className="signal-case-p">
                <strong>Pointsmith</strong> is a retail marketing company that sells marketing collateral to fast food restaurants, quick serve restaurants, and gas stations. I was hired there to redesign the Promo Architect, which is what their clients use to order marketing collateral between all their various locations. The application had was undergoing a major redesign which would change the look as well as the functionality of the whole <strong>Promotion</strong> creation process.
              </p>
            </div>

            <div>
              <h2 className="signal-case-h2 mb-6">Style Guide</h2>
              <p className="signal-case-p mb-6">
                My first steps in redesigning the application was to gather together the existing elements and build a <strong>Style Guide</strong> that I could refer to when creating new pages. This would help make sure that the design language of each page would contain the same vocabulary that existed before, as well as keep the pages consistent with each other.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                <figure>
                  <img loading="lazy" decoding="async" src={styleGuideAuditImg} alt="Gathering the existing UI elements" className="signal-case-img" onClick={() => open(styleGuideAuditImg, "Gathering the existing UI elements")} />
                  <figcaption className="signal-case-caption">Gathering the existing elements</figcaption>
                </figure>
                <figure>
                  <img loading="lazy" decoding="async" src={styleGuideImg} alt="The new Promo Architect style guide" className="signal-case-img" onClick={() => open(styleGuideImg, "The new Promo Architect style guide")} />
                  <figcaption className="signal-case-caption">The new style guide</figcaption>
                </figure>
              </div>
            </div>

            <div>
              <h2 className="signal-case-h2 mb-6">Wireframes</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                <figure>
                  <img loading="lazy" decoding="async" src={calendarImg} alt="Promotion calendar screen" className="signal-case-img" onClick={() => open(calendarImg, "Promotion calendar screen")} />
                  <figcaption className="signal-case-caption">Promotion calendar</figcaption>
                </figure>
                <figure>
                  <img loading="lazy" decoding="async" src={inStoreImg} alt="In-store collateral screen" className="signal-case-img" onClick={() => open(inStoreImg, "In-store collateral screen")} />
                  <figcaption className="signal-case-caption">In-store collateral</figcaption>
                </figure>
                <figure>
                  <img loading="lazy" decoding="async" src={rulesetsImg} alt="Rulesets screen" className="signal-case-img" onClick={() => open(rulesetsImg, "Rulesets screen")} />
                  <figcaption className="signal-case-caption">Rulesets</figcaption>
                </figure>
                <figure>
                  <img loading="lazy" decoding="async" src={addLocationsImg} alt="Add locations state view screen" className="signal-case-img" onClick={() => open(addLocationsImg, "Add locations state view screen")} />
                  <figcaption className="signal-case-caption">Adding locations — state view</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>

      </main>
      
      <Footer />
    </div>
  );
}
