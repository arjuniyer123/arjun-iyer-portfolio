import React from "react";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { useLightbox } from "@/components/lightbox";
import redesign01Img from "@/assets/work/oms/redesign-01.webp";
import legacyCatalogConfigImg from "@/assets/work/oms/legacy-catalog-config.webp";
import legacyEditCatalogImg from "@/assets/work/oms/legacy-edit-catalog.webp";
import flowMappingImg from "@/assets/work/oms/flow-mapping.webp";
import createCatalogImg from "@/assets/work/oms/create-catalog.webp";
import redesign02Img from "@/assets/work/oms/redesign-02.webp";
import redesign03Img from "@/assets/work/oms/redesign-03.webp";

export default function OmsAccountSetup() {
  const { open, node } = useLightbox();
  return (
    <div className="min-h-screen flex flex-col">
      {node}
      <NavBar />
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-12 py-12 md:py-16 lg:py-24">
        
        <header className="max-w-4xl mx-auto text-center mb-12 md:mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="text-sm font-medium tracking-widest uppercase text-primary mb-4 md:mb-6">Enterprise Setup Flow</div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-6 md:mb-8 text-foreground leading-tight">OMS Account Setup</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed mx-auto">
            Translating a complex, disjointed legacy process into an intuitive enterprise setup flow.
          </p>
        </header>

        <div className="w-full bg-secondary mb-16 md:mb-24 rounded-sm px-4 py-6 md:px-8 lg:px-12 md:py-10 lg:py-14 animate-in fade-in duration-1000 delay-150 fill-mode-both">
          <div className="aspect-[4/3] md:aspect-[15/7] overflow-hidden w-full rounded-sm">
            <img
              src={redesign01Img}
              alt="OMS Account Setup redesigned interface"
              className="w-full h-full object-cover object-top cursor-zoom-in"
              onClick={() => open(redesign01Img, "OMS Account Setup redesigned interface")}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 md:gap-12 lg:gap-24 mb-16 md:mb-24 animate-in fade-in duration-1000 delay-300 fill-mode-both">
          <div className="flex flex-col gap-8 text-sm">
            <div>
              <span className="block text-muted-foreground uppercase tracking-widest mb-2 font-medium">Timeline</span>
              <span className="text-foreground">Oct 2017 – Jun 2018</span>
            </div>
            <div>
              <span className="block text-muted-foreground uppercase tracking-widest mb-2 font-medium">Role</span>
              <span className="text-foreground">UX/UI Designer</span>
            </div>
            <div>
              <span className="block text-muted-foreground uppercase tracking-widest mb-2 font-medium">Company</span>
              <span className="text-foreground text-xl font-serif italic text-primary mt-1">Kibo</span>
            </div>
          </div>

          <div className="prose prose-lg prose-p:text-foreground/80 hover:prose-p:text-foreground transition-all flex flex-col gap-12 md:gap-16">
            <section className="flex flex-col gap-6">
              <h2 className="text-3xl font-serif text-foreground">The Problem</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                The new account setup process has been a sore point for many Kibo employees and customers. The old setup process consisted of a bunch of incongruent legacy interfaces which had not been updated since creation. The functionality of these pages was so confusing that only a few Project Managers (some who had left the company) were the only people that knew all the ins and outs of the set up process. The entire set up would require multiple Kibo employees and take days. Revamping this set up process and opening it up to third party partners was a roadmap item for the company and Product department. I was tasked to redesign the new account set up process and make it so that a <strong>user new to Kibo</strong> would be able to create an account easily.
              </p>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="text-3xl font-serif text-foreground">Research</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I began my research by speaking with the team that handled the implementation of new accounts. I asked this team of a project manager and technical consultants to walk me through the process of setting up a new account and point out anything they felt interfered with their ability to do their job. As they walked through the process, I made sure to take note of relevant pages and the sections within those pages that the implementation team actually used. A major issue with the current design is that the interfaces were bloated with information that either was not necessary or antiquated. It was the responsibility of the implementation team to find the relevant fields and make sure they were completed for the client.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start not-prose">
                <figure>
                  <img loading="lazy" decoding="async" src={legacyCatalogConfigImg} alt="Legacy catalog configuration interface" className="w-full h-auto rounded-sm border border-border cursor-zoom-in" onClick={() => open(legacyCatalogConfigImg, "Legacy catalog configuration interface")} />
                  <figcaption className="text-sm text-muted-foreground mt-3">The legacy catalog configuration screen</figcaption>
                </figure>
                <figure>
                  <img loading="lazy" decoding="async" src={legacyEditCatalogImg} alt="Legacy edit catalog interface" className="w-full h-auto rounded-sm border border-border cursor-zoom-in" onClick={() => open(legacyEditCatalogImg, "Legacy edit catalog interface")} />
                  <figcaption className="text-sm text-muted-foreground mt-3">The legacy catalog editing screen</figcaption>
                </figure>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                After the (long) sessions with the implementation team, I decided to map out the existing interfaces and organize them into a flow that would make sense to someone new to Kibo.
              </p>
              <figure className="not-prose">
                <img loading="lazy" decoding="async" src={flowMappingImg} alt="Mapping the account setup flow" className="w-full h-auto rounded-sm border border-border cursor-zoom-in" onClick={() => open(flowMappingImg, "Mapping the account setup flow")} />
                <figcaption className="text-sm text-muted-foreground mt-3">Mapping the existing interfaces into a comprehensible flow</figcaption>
              </figure>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I chose to organize the interfaces by the sections which the implementation team called out as important to the process. There were other areas which were "optional" in the process, and I chose to focus on the steps that would be absolutely necessary in order to proceed. I organized these areas into contextually relevant groups where the functionalities would be achieving the same end goal for that step.
              </p>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="text-3xl font-serif text-foreground">Decisions</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                After interviewing the implementation team, I met with the resident expert on the entire Order Management System, Nelson, who also happened to be my boss. Nelson is a longtime employee of Kibo and knows the system better than anyone. I met with him to go over my findings from the interviews and plot the next steps of the redesign. Nelson filled in the gaps of my interface map by providing context to each screen and explaining their underlying functionality and purpose. The final decision made was to design a setup flow that would provision the new user to set up a provisional account that could begin taking orders. After finishing the initial setup, the user could then go to a centralized dashboard and edit more complicated functionality. Separating the creation and configuration of the account would alleviate the overwhelming nature of the entire process and make the entire set up more palatable for a person new to the software.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                This was one of my favorite projects to work on at Kibo because it allowed me to speak with a variety of stakeholders and sort through the different perspectives that go into setting up a new client with their Order Management account. I had to consider the frustrations of the implementation team as well as the business goals the Product team wanted to accomplish with the new setup process, and to balance those two aspects in my research and design was a unique challenge that helped me grow as a designer.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I used <strong>UXPin</strong> to design these screens.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-serif mb-6 text-foreground">Screenshots</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start not-prose">
                <figure>
                  <img loading="lazy" decoding="async" src={createCatalogImg} alt="Redesigned create catalog screen" className="w-full h-auto rounded-sm border border-border cursor-zoom-in" onClick={() => open(createCatalogImg, "Redesigned create catalog screen")} />
                  <figcaption className="text-sm text-muted-foreground mt-3">The redesigned catalog creation flow</figcaption>
                </figure>
                <figure className="flex flex-col gap-6">
                  <img loading="lazy" decoding="async" src={redesign02Img} alt="Redesigned account setup screen" className="w-full h-auto rounded-sm border border-border cursor-zoom-in" onClick={() => open(redesign02Img, "Redesigned account setup screen")} />
                  <img loading="lazy" decoding="async" src={redesign03Img} alt="Redesigned account setup screen with grouped inputs" className="w-full h-auto rounded-sm border border-border cursor-zoom-in" onClick={() => open(redesign03Img, "Redesigned account setup screen with grouped inputs")} />
                  <figcaption className="text-sm text-muted-foreground">The redesigned account setup screens</figcaption>
                </figure>
              </div>
            </section>
          </div>
        </div>

      </main>
      
      <Footer />
    </div>
  );
}
