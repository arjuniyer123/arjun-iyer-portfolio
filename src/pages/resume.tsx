import React from "react";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";

const experiences = [
  {
    role: "Senior UX Designer",
    company: "Empyrean Benefit Solutions",
    period: "March 2022 – Present",
    description: "Designed and delivered features for Benefits Enrollment and Administration platforms; developed prototypes with AI tools for internal/external stakeholder presentations; partnered with Sales and Solutions on tailored product demos; led an offshore team of designers."
  },
  {
    role: "User Experience Analyst II",
    company: "American National",
    period: "April 2020 – February 2022",
    description: "Acted as Product Owner for AN Mobile; managed content & design of AmericanNational.com and Client Site customer portal; led redesign of AN Mobile; performed accessibility audit and worked with Engineering to implement ADA guideline standards."
  },
  {
    role: "User Experience Designer",
    company: "Pointsmith",
    period: "May 2019 – November 2019",
    description: "Designed wireframes & assets for redesign of Promo Architect (marketing promotion planning tool); developed & deployed new style guide standards across a suite of applications; redesigned specific application interfaces for multiple clients."
  },
  {
    role: "Associate Product Manager",
    company: "Sycamore Life Sciences",
    period: "October 2018 – May 2019",
    description: "Responsible for site content across three websites in the Sycamore Life Sciences portfolio; automated invoice processing using RPA; managed orders and fulfillment across multiple sales channels; researched competitors for new features."
  },
  {
    role: "User Experience Designer",
    company: "Kibo",
    period: "August 2016 – October 2018",
    description: "Primary designer for Order Management and eCommerce applications; redesigned Order Management account setup to enable self-service capabilities; managed and maintained design style guide for all Kibo products in UXPin; reviewed & iterated designs based on Product Management feedback."
  }
];

export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 md:px-6 lg:px-12 py-12 md:py-16 lg:py-24">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-10 md:mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">Curriculum Vitae</h1>
            <p className="text-muted-foreground text-base md:text-lg">UX Designer with 8 years of experience</p>
          </div>
          <a 
            href="/arjun-iyer-resume.pdf" 
            download
            className="inline-flex items-center justify-center px-6 py-2 border border-foreground text-foreground text-sm font-medium hover:bg-foreground hover:text-background transition-colors rounded-sm w-max"
          >
            Download PDF
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 md:gap-12 lg:gap-24 mb-16 md:mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both">
          <div>
            <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4 md:mb-6 md:sticky md:top-8">Summary of Skills</h2>
          </div>
          <div className="prose prose-p:text-foreground prose-li:text-foreground">
            <ul className="space-y-3 md:space-y-4 list-disc pl-5 text-base md:text-lg leading-relaxed">
              <li>Design and maintain products used by enterprise clients and end users</li>
              <li>Interview stakeholders, collect contextual feedback, and conduct user research to enhance the overall experience</li>
              <li>Collaborate with Engineering, Product, and Sales teams to deliver for company vision</li>
              <li>Advanced prototyping to validate design decisions and present future-facing roadmap features</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 md:gap-12 lg:gap-24 mb-16 md:mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
          <div>
            <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4 md:mb-6 md:sticky md:top-8">Experience</h2>
          </div>
          <div className="flex flex-col gap-12 md:gap-16">
            {experiences.map((exp, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-2">
                  <h3 className="text-xl font-medium text-foreground">{exp.role}</h3>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
                </div>
                <h4 className="text-primary font-serif italic text-xl mb-4">{exp.company}</h4>
                <p className="text-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 md:gap-12 lg:gap-24 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 fill-mode-both">
          <div>
            <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4 md:mb-6 md:sticky md:top-8">Education</h2>
          </div>
          <div>
            <h3 className="text-xl font-medium text-foreground mb-2">University of California, San Diego</h3>
            <p className="text-foreground leading-relaxed">BS Cognitive Science with Human-Computer Interaction.</p>
          </div>
        </div>

      </main>
      
      <Footer />
    </div>
  );
}
