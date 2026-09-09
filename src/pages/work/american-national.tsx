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
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-12 py-12 md:py-16 lg:py-24">
        <header className="max-w-4xl mx-auto text-center mb-12 md:mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="text-sm font-medium tracking-widest uppercase text-primary mb-4 md:mb-6">Mobile App Redesign</div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-6 md:mb-8 text-foreground leading-tight">AN Mobile</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed mx-auto">
            Aligning the mobile app experience with the desktop portal for American National's policyholders.
          </p>
        </header>

        <div className="w-full bg-secondary mb-16 md:mb-24 rounded-sm px-4 py-6 md:px-8 lg:px-12 md:py-10 lg:py-14 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 fill-mode-both">
          <div className="w-full flex items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 max-w-4xl mx-auto w-full">
              {[
                { src: homeScreen, alt: "AN Mobile home screen with policies and quick actions" },
                { src: screen03, alt: "AN Mobile Report a Claim screen" },
                { src: roadsideScreen, alt: "AN Mobile Roadside Assistance screen" },
                { src: screen06, alt: "AN Mobile claims flow — adding damaged property" },
              ].map((img, i) => (
                <img key={i} src={img.src} alt={img.alt} className="w-full h-auto rounded-sm shadow-md cursor-zoom-in" onClick={() => open(img.src, img.alt)} />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 md:gap-12 lg:gap-24 mb-16 md:mb-24 animate-in fade-in duration-1000 delay-300 fill-mode-both">
          <div className="flex flex-col gap-8 text-sm">
            <div>
              <span className="block text-muted-foreground uppercase tracking-widest mb-2 font-medium">Timeline</span>
              <span className="text-foreground">June 2021</span>
            </div>
            <div>
              <span className="block text-muted-foreground uppercase tracking-widest mb-2 font-medium">Role</span>
              <span className="text-foreground">UX Designer, Product Owner</span>
            </div>
            <div>
              <span className="block text-muted-foreground uppercase tracking-widest mb-2 font-medium">Type</span>
              <span className="text-foreground">Mobile app redesign</span>
            </div>
          </div>
          
          <div className="prose prose-lg prose-p:text-foreground/80 hover:prose-p:text-foreground transition-all">
            <h2 className="text-2xl font-serif text-primary italic mb-6">The Problem</h2>
            <p className="mb-12">
              American National was established in 1905, and expanded through a merger of various local insurance companies to become the company it is today. Through the 100+ years the company has been in business, they've acquired customers that span generations and are used to the personalized, local service they can get from an agent they've known their whole lives. So, the main challenge we found with the mobile app redesign was making sure we kept the experience similar to the desktop Client Site and ensure customers can easily reach their local agent for all their needs.
            </p>

            <h2 className="text-2xl font-serif text-primary italic mb-6">The Initial Brief</h2>
            <p className="mb-6">
              Before getting started with the redesign, the UX team had made a lot of improvements to the Client Site (our desktop portal for customers) and wanted to bring over some of those improvements to the mobile side of things. This decision came in tandem with the fact that more and more people were using mobile devices for their daily tasks and the competitive landscape in insurance had made large investments into their mobile platforms. I couldn't remember the last time I pulled out the little cards from my glovebox, I just used the mobile ID card on my phone when I was getting my car inspected.
            </p>
            <p className="mb-6">
              The first question was determining who the app was for. As mentioned before, a large majority of our users relied on their local agents to manage their policy, and weren't really checking in on the site or the office everyday. They were business and farm owners who had very complicated policies they weren't really checking in on everyday. They would speak with their agent when they needed to file a claim, and would rely on the institutional knowledge of the local offices when they had to make any changes to policies that had been in affect for years. The mobile app was designed to service the Home, Auto, and Life insurance policyholders, when they needed to check in on their policy status, documents or claims. These were the use cases most of us are used to and can be successfully serviced online without the need for an agent to have to step in.
            </p>
            <p className="mb-12">
              These users also were the ones using our Client Site desktop portal, and making sure they had all the features available on mobile that they had on their computer was critical to the success of the mobile app. Reporting a claim was an important process that we currently only had on the Client Site that was necessary to have on mobile.
            </p>

            <figure className="mb-8 not-prose">
              <img loading="lazy" decoding="async" src={competitiveAnalysisImg} alt="Competitive analysis of mobile insurance apps" className="w-full h-auto rounded-sm border border-border cursor-zoom-in" onClick={() => open(competitiveAnalysisImg, "Competitive analysis of mobile insurance apps")} />
              <figcaption className="text-sm text-muted-foreground mt-3 italic">Some notes from our preliminary competitive analysis</figcaption>
            </figure>

            <figure className="mb-12 not-prose">
              <img loading="lazy" decoding="async" src={audienceImg} alt="Audience definition for American National policyholders" className="w-full h-auto rounded-sm border border-border cursor-zoom-in" onClick={() => open(audienceImg, "Audience definition for American National policyholders")} />
              <figcaption className="text-sm text-muted-foreground mt-3 italic">The source of truth for our design process, this would guide what we built</figcaption>
            </figure>

            <h2 className="text-2xl font-serif text-primary italic mb-6">Feature Design</h2>
            <p className="mb-6">
              The mobile insurance app market is highly competitive, with established national brands already providing mature offerings. Our objective was to bring AN Mobile up to that standard and matching their capabilities, while keeping our stakeholders' priorities central.
            </p>
            <p className="mb-6">
              We needed to add in the features that our users were taking advantage of in the Client Site and also add new features that are mobile specific, like Biometric login and mobile ID cards.
            </p>
            <p className="mb-8">
              I worked with our development team to plan out the new features, and what it would take to update the current ones to the new design.
            </p>

            <figure className="mb-12 not-prose">
              <img loading="lazy" decoding="async" src={featurePlanningImg} alt="Feature planning for the mobile app" className="w-full h-auto rounded-sm border border-border cursor-zoom-in" onClick={() => open(featurePlanningImg, "Feature planning for the mobile app")} />
              <figcaption className="text-sm text-muted-foreground mt-3 italic">Planning the new features with the development team</figcaption>
            </figure>

            <h2 className="text-2xl font-serif text-primary italic mb-6">Final Design</h2>
            <p className="mb-12">
              I worked along with our talented UI Designer, Justin, to translate our wireframes into a beautiful experience that incorporated the American National brand and design language. Some of the features that we were proud of were the clear process for reporting a claim and the comprehensive Roadside Assistance page, two features that are vital on a cell phone.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 not-prose">
              {[
                { src: screen02, alt: "AN Mobile final design — policy details" },
                { src: screen04, alt: "AN Mobile final design — payments" },
                { src: screen05, alt: "AN Mobile final design — ID cards" },
                { src: screen07, alt: "AN Mobile final design — claims" },
              ].map((img, i) => (
                <img key={i} src={img.src} alt={img.alt} loading="lazy" decoding="async" className="w-full h-auto rounded-sm shadow-md cursor-zoom-in" onClick={() => open(img.src, img.alt)} />
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
