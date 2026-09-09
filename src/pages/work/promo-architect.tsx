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
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-12 py-12 md:py-16 lg:py-24">
        
        <header className="max-w-4xl mx-auto text-center mb-12 md:mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="text-sm font-medium tracking-widest uppercase text-primary mb-4 md:mb-6">Enterprise Tool Redesign</div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-6 md:mb-8 text-foreground leading-tight">Promo Architect</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed mx-auto">
            Redesigning the enterprise promotion planning tool for national retail chains.
          </p>
        </header>

        <div className="w-full bg-secondary mb-16 md:mb-24 rounded-sm px-4 py-6 md:px-8 lg:px-12 md:py-10 lg:py-14 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 fill-mode-both">
          <div className="aspect-[4/3] md:aspect-[15/7] overflow-hidden w-full rounded-sm">
            <img
              src={dashboardImg}
              alt="Promo Architect dashboard redesign"
              className="w-full h-full object-cover object-top cursor-zoom-in"
              onClick={() => open(dashboardImg, "Promo Architect dashboard redesign")}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 md:gap-12 lg:gap-24 mb-16 md:mb-24 animate-in fade-in duration-1000 delay-300 fill-mode-both">
          <div className="flex flex-col gap-8 text-sm">
            <div>
              <span className="block text-muted-foreground uppercase tracking-widest mb-2 font-medium">Timeline</span>
              <span className="text-foreground">November 2019</span>
            </div>
            <div>
              <span className="block text-muted-foreground uppercase tracking-widest mb-2 font-medium">Role</span>
              <span className="text-foreground">UX Designer</span>
            </div>
            <div>
              <span className="block text-muted-foreground uppercase tracking-widest mb-2 font-medium">Context</span>
              <span className="text-foreground">Internal ordering tool redesign</span>
            </div>
          </div>

          <div className="prose prose-lg prose-p:text-foreground/80 hover:prose-p:text-foreground transition-all flex flex-col gap-12 md:gap-16">
            <div className="border-l-2 border-primary pl-4 md:pl-6 py-2 not-prose">
              <h2 className="text-2xl md:text-3xl font-serif mb-4">Pointsmith</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                <strong>Pointsmith</strong> is a retail marketing company that sells marketing collateral to fast food restaurants, quick serve restaurants, and gas stations. I was hired there to redesign the Promo Architect, which is what their clients use to order marketing collateral between all their various locations. The application had was undergoing a major redesign which would change the look as well as the functionality of the whole <strong>Promotion</strong> creation process.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-serif mb-6 text-foreground">Style Guide</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                My first steps in redesigning the application was to gather together the existing elements and build a <strong>Style Guide</strong> that I could refer to when creating new pages. This would help make sure that the design language of each page would contain the same vocabulary that existed before, as well as keep the pages consistent with each other.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start not-prose">
                <figure>
                  <img loading="lazy" decoding="async" src={styleGuideAuditImg} alt="Gathering the existing UI elements" className="w-full h-auto rounded-sm border border-border cursor-zoom-in" onClick={() => open(styleGuideAuditImg, "Gathering the existing UI elements")} />
                  <figcaption className="text-sm text-muted-foreground mt-3">Gathering the existing elements</figcaption>
                </figure>
                <figure>
                  <img loading="lazy" decoding="async" src={styleGuideImg} alt="The new Promo Architect style guide" className="w-full h-auto rounded-sm border border-border cursor-zoom-in" onClick={() => open(styleGuideImg, "The new Promo Architect style guide")} />
                  <figcaption className="text-sm text-muted-foreground mt-3">The new style guide</figcaption>
                </figure>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-serif mb-6 text-foreground">Wireframes</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start not-prose">
                <figure>
                  <img loading="lazy" decoding="async" src={calendarImg} alt="Promotion calendar screen" className="w-full h-auto rounded-sm border border-border cursor-zoom-in" onClick={() => open(calendarImg, "Promotion calendar screen")} />
                  <figcaption className="text-sm text-muted-foreground mt-3">Promotion calendar</figcaption>
                </figure>
                <figure>
                  <img loading="lazy" decoding="async" src={inStoreImg} alt="In-store collateral screen" className="w-full h-auto rounded-sm border border-border cursor-zoom-in" onClick={() => open(inStoreImg, "In-store collateral screen")} />
                  <figcaption className="text-sm text-muted-foreground mt-3">In-store collateral</figcaption>
                </figure>
                <figure>
                  <img loading="lazy" decoding="async" src={rulesetsImg} alt="Rulesets screen" className="w-full h-auto rounded-sm border border-border cursor-zoom-in" onClick={() => open(rulesetsImg, "Rulesets screen")} />
                  <figcaption className="text-sm text-muted-foreground mt-3">Rulesets</figcaption>
                </figure>
                <figure>
                  <img loading="lazy" decoding="async" src={addLocationsImg} alt="Add locations state view screen" className="w-full h-auto rounded-sm border border-border cursor-zoom-in" onClick={() => open(addLocationsImg, "Add locations state view screen")} />
                  <figcaption className="text-sm text-muted-foreground mt-3">Adding locations — state view</figcaption>
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
