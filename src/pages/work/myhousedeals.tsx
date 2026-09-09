import React from "react";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { useLightbox } from "@/components/lightbox";
import finalListingImg from "@/assets/work/myhousedeals/property-listing-final.webp";
import moodboardImg from "@/assets/work/myhousedeals/moodboard.webp";
import listingBeforeImg from "@/assets/work/myhousedeals/listing-before.webp";

export default function MyHouseDeals() {
  const { open, node } = useLightbox();
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {node}
      <NavBar />
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-12 py-12 md:py-16 lg:py-24">
        
        <header className="max-w-4xl mx-auto text-center mb-12 md:mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="text-sm font-medium tracking-widest uppercase text-primary mb-4 md:mb-6">Real Estate Investment</div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-6 md:mb-8 text-foreground leading-tight">MyHouseDeals</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed mx-auto">
            Demystifying property listings to connect investors with actionable financing guidance.
          </p>
        </header>

        <div className="w-full bg-secondary mb-16 md:mb-24 rounded-sm px-4 py-6 md:px-8 lg:px-12 md:py-10 lg:py-14 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 fill-mode-both">
          <div className="aspect-[4/3] md:aspect-[15/7] overflow-hidden w-full rounded-sm">
            <img
              src={finalListingImg}
              alt="MyHouseDeals Property Listing Interface"
              className="w-full h-full object-cover object-top cursor-zoom-in"
              onClick={() => open(finalListingImg, "MyHouseDeals Property Listing Interface")}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 md:gap-12 lg:gap-24 mb-16 md:mb-24 animate-in fade-in duration-1000 delay-300 fill-mode-both">
          
          <div className="flex flex-col gap-8 text-sm">
            <div>
              <span className="block text-muted-foreground uppercase tracking-widest mb-2 font-medium">Timeline</span>
              <span className="text-foreground">July 2018</span>
            </div>
            <div>
              <span className="block text-muted-foreground uppercase tracking-widest mb-2 font-medium">Role</span>
              <span className="text-foreground">UX/UI Designer</span>
            </div>
            <div>
              <span className="block text-muted-foreground uppercase tracking-widest mb-2 font-medium">Scope</span>
              <span className="text-foreground">Website design (listing page)</span>
            </div>
          </div>
          
          <div className="prose prose-lg prose-p:text-foreground/80 hover:prose-p:text-foreground transition-all flex flex-col gap-12 md:gap-16">
            <div>
              <h2 className="text-2xl font-serif text-primary italic mb-4">The Problem</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                MyHouseDeals is a platform that helps connect real estate investors with properties in their area and and also provides helpful information about financing and best practices when purchasing investment properties. Their parent company, <strong>REI Network</strong>, was looking to improve the listing pages for their properties and tasked me with taking a look at their competitors and updating their listing page to be more user-friendly.
              </p>
              <figure className="mt-6 not-prose">
                <img loading="lazy" decoding="async" src={listingBeforeImg} alt="The original property listing page before the redesign" className="w-full h-auto rounded-sm border border-border cursor-zoom-in" onClick={() => open(listingBeforeImg, "The original property listing page before the redesign")} />
                <figcaption className="text-sm text-muted-foreground mt-3">The original listing page before the redesign</figcaption>
              </figure>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-primary italic mb-4">Moodboard</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                I took a look at other investment real estate websites to get an idea of what they emphasized when listing their properties. An important value that REI Network wanted to emphasize was to inform the user about the whole process of real estate investment and be able to guide them throughout the entire process without confusing or intimidating them.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                I put together a mood-board with various elements from the competitors' sites and used these ideas to influence what I wanted to include in my redesign of the property listing page.
              </p>
              <figure className="not-prose">
                <img loading="lazy" decoding="async" src={moodboardImg} alt="Moodboard for the REI Network redesign" className="w-full h-auto rounded-sm border border-border cursor-zoom-in" onClick={() => open(moodboardImg, "Moodboard for the REI Network redesign")} />
                <figcaption className="text-sm text-muted-foreground mt-3">The moodboard that informed the redesign direction</figcaption>
              </figure>
            </div>

            <div className="bg-secondary/50 p-5 md:p-6 lg:p-8 rounded-sm not-prose">
              <h2 className="text-2xl font-serif text-foreground mb-4">Final Design</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                The final design put an emphasis on the images of the properties and provided some quick access information at the top of the page so that the user can quickly review the important stuff and continue to read or move on if it doesn't interest them.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                I also added in a <strong>Numbers</strong> section that will give the user an overview of the financial information behind the property so they can have an idea of how much this will cost them, and the potential money they can make from the investment. Right next to that are informational links and funding information that can move the user right along in the process of buying this property.
              </p>
              <figure>
                <img loading="lazy" decoding="async" src={finalListingImg} alt="The redesigned property listing page, full length" className="w-full h-auto rounded-sm border border-border cursor-zoom-in" onClick={() => open(finalListingImg, "The redesigned property listing page, full length")} />
                <figcaption className="text-sm text-muted-foreground mt-3">The redesigned property listing page</figcaption>
              </figure>
            </div>
          </div>
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
