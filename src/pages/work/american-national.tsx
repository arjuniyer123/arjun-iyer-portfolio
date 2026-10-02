import React from "react";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { useLightbox } from "@/components/lightbox";
import homeScreen from "@/assets/work/american-national/app-screen-01.webp";
import screen03 from "@/assets/work/american-national/app-screen-03.webp";
import roadsideScreen from "@/assets/work/american-national/app-screen-08.webp";
import screen06 from "@/assets/work/american-national/app-screen-06.webp";
import screen02 from "@/assets/work/american-national/app-screen-02.webp";
import screen04 from "@/assets/work/american-national/app-screen-04.webp";
import screen05 from "@/assets/work/american-national/app-screen-05.webp";
import screen07 from "@/assets/work/american-national/app-screen-07.webp";
import competitiveAnalysisImg from "@/assets/work/american-national/competitive-analysis.webp";
import audienceImg from "@/assets/work/american-national/audience-definition.webp";
import featurePlanningImg from "@/assets/work/american-national/feature-planning.webp";

export default function AmericanNational() {
  const { open, node } = useLightbox();
  return (
    <div className="min-h-screen flex flex-col">
      {node}
      <NavBar />
      
      <main className="signal-main signal-case-main">
        <header className="signal-case-header">
          <div className="signal-case-eyebrow">Mobile App Redesign</div>
          <h1 className="signal-case-title">AN Mobile</h1>
          <p className="signal-case-summary">
            Aligning the mobile app experience with the desktop portal for American National's policyholders.
          </p>
        </header>

        <div className="signal-case-hero">
          <div className="w-full flex items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 max-w-4xl mx-auto w-full">
              {[
                { src: homeScreen, alt: "AN Mobile home screen with policies and quick actions" },
                { src: screen03, alt: "AN Mobile Report a Claim screen" },
                { src: roadsideScreen, alt: "AN Mobile Roadside Assistance screen" },
                { src: screen06, alt: "AN Mobile claims flow — adding damaged property" },
              ].map((img, i) => (
                <img key={i} src={img.src} alt={img.alt} className="signal-case-img" onClick={() => open(img.src, img.alt)} />
              ))}
            </div>
          </div>
        </div>

        <div className="signal-case-layout">
          <div className="signal-case-meta">
            <div>
              <span className="signal-case-meta-label">Timeline</span>
              <span className="text-foreground">June 2021</span>
            </div>
            <div>
              <span className="signal-case-meta-label">Role</span>
              <span className="text-foreground">UX Designer, Product Owner</span>
            </div>
            <div>
              <span className="signal-case-meta-label">Type</span>
              <span className="text-foreground">Mobile app redesign</span>
            </div>
          </div>
          
          <div className="signal-case-body signal-case-flow">
            <h2 className="signal-case-h2 mb-6">The Problem</h2>
            <p className="signal-case-p mb-12">
              American National was established in 1905, and expanded through a merger of various local insurance companies to become the company it is today. Through the 100+ years the company has been in business, they've acquired customers that span generations and are used to the personalized, local service they can get from an agent they've known their whole lives. So, the main challenge we found with the mobile app redesign was making sure we kept the experience similar to the desktop Client Site and ensure customers can easily reach their local agent for all their needs.
            </p>

            <h2 className="signal-case-h2 mb-6">The Initial Brief</h2>
            <p className="signal-case-p mb-6">
              Before getting started with the redesign, the UX team had made a lot of improvements to the Client Site (our desktop portal for customers) and wanted to bring over some of those improvements to the mobile side of things. This decision came in tandem with the fact that more and more people were using mobile devices for their daily tasks and the competitive landscape in insurance had made large investments into their mobile platforms. I couldn't remember the last time I pulled out the little cards from my glovebox, I just used the mobile ID card on my phone when I was getting my car inspected.
            </p>
            <p className="signal-case-p mb-6">
              The first question was determining who the app was for. As mentioned before, a large majority of our users relied on their local agents to manage their policy, and weren't really checking in on the site or the office everyday. They were business and farm owners who had very complicated policies they weren't really checking in on everyday. They would speak with their agent when they needed to file a claim, and would rely on the institutional knowledge of the local offices when they had to make any changes to policies that had been in affect for years. The mobile app was designed to service the Home, Auto, and Life insurance policyholders, when they needed to check in on their policy status, documents or claims. These were the use cases most of us are used to and can be successfully serviced online without the need for an agent to have to step in.
            </p>
            <p className="signal-case-p mb-12">
              These users also were the ones using our Client Site desktop portal, and making sure they had all the features available on mobile that they had on their computer was critical to the success of the mobile app. Reporting a claim was an important process that we currently only had on the Client Site that was necessary to have on mobile.
            </p>

            <figure className="mb-8">
              <img loading="lazy" decoding="async" src={competitiveAnalysisImg} alt="Competitive analysis of mobile insurance apps" className="signal-case-img" onClick={() => open(competitiveAnalysisImg, "Competitive analysis of mobile insurance apps")} />
              <figcaption className="signal-case-caption">Some notes from our preliminary competitive analysis</figcaption>
            </figure>

            <figure className="mb-12">
              <img loading="lazy" decoding="async" src={audienceImg} alt="Audience definition for American National policyholders" className="signal-case-img" onClick={() => open(audienceImg, "Audience definition for American National policyholders")} />
              <figcaption className="signal-case-caption">The source of truth for our design process, this would guide what we built</figcaption>
            </figure>

            <h2 className="signal-case-h2 mb-6">Feature Design</h2>
            <p className="signal-case-p mb-6">
              The mobile insurance app market is highly competitive, with established national brands already providing mature offerings. Our objective was to bring AN Mobile up to that standard and matching their capabilities, while keeping our stakeholders' priorities central.
            </p>
            <p className="signal-case-p mb-6">
              We needed to add in the features that our users were taking advantage of in the Client Site and also add new features that are mobile specific, like Biometric login and mobile ID cards.
            </p>
            <p className="signal-case-p mb-8">
              I worked with our development team to plan out the new features, and what it would take to update the current ones to the new design.
            </p>

            <figure className="mb-12">
              <img loading="lazy" decoding="async" src={featurePlanningImg} alt="Feature planning for the mobile app" className="signal-case-img" onClick={() => open(featurePlanningImg, "Feature planning for the mobile app")} />
              <figcaption className="signal-case-caption">Planning the new features with the development team</figcaption>
            </figure>

            <h2 className="signal-case-h2 mb-6">Final Design</h2>
            <p className="signal-case-p mb-12">
              I worked along with our talented UI Designer, Justin, to translate our wireframes into a beautiful experience that incorporated the American National brand and design language. Some of the features that we were proud of were the clear process for reporting a claim and the comprehensive Roadside Assistance page, two features that are vital on a cell phone.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {[
                { src: screen02, alt: "AN Mobile final design — policy details" },
                { src: screen04, alt: "AN Mobile final design — payments" },
                { src: screen05, alt: "AN Mobile final design — ID cards" },
                { src: screen07, alt: "AN Mobile final design — claims" },
              ].map((img, i) => (
                <img key={i} src={img.src} alt={img.alt} loading="lazy" decoding="async" className="signal-case-img" onClick={() => open(img.src, img.alt)} />
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
