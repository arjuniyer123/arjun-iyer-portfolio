import React from "react";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import headshotImg from "@/assets/about/arjun-headshot.webp";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-12 py-12 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-24">
          
          <div className="md:col-span-4 lg:col-span-4 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="aspect-[3/4] md:aspect-auto md:max-w-sm overflow-hidden rounded-sm mb-6 md:mb-8 bg-muted">
              <img src={headshotImg} alt="Arjun Iyer" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-6 text-sm">
              <div>
                <h3 className="font-medium text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground">Houston, TX</p>
              </div>
              
              <div>
                <h3 className="font-medium text-foreground mb-1">Contact</h3>
                <a href="mailto:arjuniyer123@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  arjuniyer123@gmail.com
                </a>
              </div>
              
              <div className="pt-4">
                <a 
                  href="/arjun-iyer-resume.pdf" 
                  download
                  className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background text-sm font-medium hover:bg-primary transition-colors rounded-sm"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-8 lg:col-span-8 flex flex-col gap-6 md:gap-8 text-base md:text-lg text-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 fill-mode-both">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium uppercase tracking-wide text-primary">
              About Me
            </h1>

            <p>
              I am a UX professional in Houston that enjoys solving problems, whether it's tinkering with a smart home gadget or trying out a new recipe that my wife is craving. Curiosity is a trait I value and I try to exercise it everyday, whenever I get the opportunity.
            </p>
            
            <p>
              The one thing I've enjoyed about the UX industry, and software in general, is that there's always a new problem to solve. People's needs are evolving and it's important to figure out what they want, before they know they want it. And when we get it wrong, it's important to keep listening and figure out how to fix it. Adhering to that philosophy has been vital to my success and I want to use that success to keep working on interesting projects.
            </p>
            
            <p>
              Beyond UX, I make a mean cup of coffee, so if you're lucky, you might be able to snag an invite to one of our home cafes!
            </p>
          </div>
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
