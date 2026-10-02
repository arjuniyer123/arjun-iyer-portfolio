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
    <div className="min-h-screen flex flex-col">
      {node}
      <NavBar />
      
      <main className="signal-main signal-case-main">
        
        <header className="signal-case-header">
          <div className="signal-case-eyebrow">Real Estate Investment</div>
          <h1 className="signal-case-title">MyHouseDeals</h1>
          <p className="signal-case-summary">
            Demystifying property listings to connect investors with actionable financing guidance.
          </p>
        </header>

        <div className="signal-case-hero">
          <div className="signal-case-hero-frame">
            <img
              src={finalListingImg}
              alt="MyHouseDeals Property Listing Interface"
              className="signal-case-hero-img"
              onClick={() => open(finalListingImg, "MyHouseDeals Property Listing Interface")}
            />
          </div>
        </div>

        <div className="signal-case-layout">
          
          <div className="signal-case-meta">
            <div>
              <span className="signal-case-meta-label">Timeline</span>
              <span className="text-foreground">July 2018</span>
            </div>
            <div>
              <span className="signal-case-meta-label">Role</span>
              <span className="text-foreground">UX/UI Designer</span>
            </div>
            <div>
              <span className="signal-case-meta-label">Scope</span>
              <span className="text-foreground">Website design (listing page)</span>
            </div>
          </div>
          
          <div className="signal-case-body">
            <div>
              <h2 className="signal-case-h2 mb-4">The Problem</h2>
              <p className="signal-case-p">
                MyHouseDeals is a platform that helps connect real estate investors with properties in their area and and also provides helpful information about financing and best practices when purchasing investment properties. Their parent company, <strong>REI Network</strong>, was looking to improve the listing pages for their properties and tasked me with taking a look at their competitors and updating their listing page to be more user-friendly.
              </p>
              <figure className="mt-6">
                <img loading="lazy" decoding="async" src={listingBeforeImg} alt="The original property listing page before the redesign" className="signal-case-img" onClick={() => open(listingBeforeImg, "The original property listing page before the redesign")} />
                <figcaption className="signal-case-caption">The original listing page before the redesign</figcaption>
              </figure>
            </div>

            <div>
              <h2 className="signal-case-h2 mb-4">Moodboard</h2>
              <p className="signal-case-p mb-6">
                I took a look at other investment real estate websites to get an idea of what they emphasized when listing their properties. An important value that REI Network wanted to emphasize was to inform the user about the whole process of real estate investment and be able to guide them throughout the entire process without confusing or intimidating them.
              </p>
              <p className="signal-case-p mb-6">
                I put together a mood-board with various elements from the competitors' sites and used these ideas to influence what I wanted to include in my redesign of the property listing page.
              </p>
              <figure>
                <img loading="lazy" decoding="async" src={moodboardImg} alt="Moodboard for the REI Network redesign" className="signal-case-img" onClick={() => open(moodboardImg, "Moodboard for the REI Network redesign")} />
                <figcaption className="signal-case-caption">The moodboard that informed the redesign direction</figcaption>
              </figure>
            </div>

            <div className="signal-callout">
              <h2 className="signal-case-h2 mb-4">Final Design</h2>
              <p className="signal-case-p mb-6">
                The final design put an emphasis on the images of the properties and provided some quick access information at the top of the page so that the user can quickly review the important stuff and continue to read or move on if it doesn't interest them.
              </p>
              <p className="signal-case-p mb-6">
                I also added in a <strong>Numbers</strong> section that will give the user an overview of the financial information behind the property so they can have an idea of how much this will cost them, and the potential money they can make from the investment. Right next to that are informational links and funding information that can move the user right along in the process of buying this property.
              </p>
              <figure>
                <img loading="lazy" decoding="async" src={finalListingImg} alt="The redesigned property listing page, full length" className="signal-case-img" onClick={() => open(finalListingImg, "The redesigned property listing page, full length")} />
                <figcaption className="signal-case-caption">The redesigned property listing page</figcaption>
              </figure>
            </div>
          </div>
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
