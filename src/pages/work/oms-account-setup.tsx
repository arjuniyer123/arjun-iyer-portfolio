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
      
      <main className="signal-main signal-case-main">
        
        <header className="signal-case-header">
          <div className="signal-case-eyebrow">Enterprise Setup Flow</div>
          <h1 className="signal-case-title">OMS Account Setup</h1>
          <p className="signal-case-summary">
            Translating a complex, disjointed legacy process into an intuitive enterprise setup flow.
          </p>
        </header>

        <div className="signal-case-hero">
          <div className="signal-case-hero-frame">
            <img
              src={redesign01Img}
              alt="OMS Account Setup redesigned interface"
              className="signal-case-hero-img"
              onClick={() => open(redesign01Img, "OMS Account Setup redesigned interface")}
            />
          </div>
        </div>

        <div className="signal-case-layout">
          <div className="signal-case-meta">
            <div>
              <span className="signal-case-meta-label">Timeline</span>
              <span className="text-foreground">Oct 2017 – Jun 2018</span>
            </div>
            <div>
              <span className="signal-case-meta-label">Role</span>
              <span className="text-foreground">UX/UI Designer</span>
            </div>
            <div>
              <span className="signal-case-meta-label">Company</span>
              <span className="text-foreground">Kibo</span>
            </div>
          </div>

          <div className="signal-case-body">
            <section className="flex flex-col gap-6">
              <h2 className="signal-case-h2">The Problem</h2>
              <p className="signal-case-p">
                The new account setup process has been a sore point for many Kibo employees and customers. The old setup process consisted of a bunch of incongruent legacy interfaces which had not been updated since creation. The functionality of these pages was so confusing that only a few Project Managers (some who had left the company) were the only people that knew all the ins and outs of the set up process. The entire set up would require multiple Kibo employees and take days. Revamping this set up process and opening it up to third party partners was a roadmap item for the company and Product department. I was tasked to redesign the new account set up process and make it so that a <strong>user new to Kibo</strong> would be able to create an account easily.
              </p>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="signal-case-h2">Research</h2>
              <p className="signal-case-p">
                I began my research by speaking with the team that handled the implementation of new accounts. I asked this team of a project manager and technical consultants to walk me through the process of setting up a new account and point out anything they felt interfered with their ability to do their job. As they walked through the process, I made sure to take note of relevant pages and the sections within those pages that the implementation team actually used. A major issue with the current design is that the interfaces were bloated with information that either was not necessary or antiquated. It was the responsibility of the implementation team to find the relevant fields and make sure they were completed for the client.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                <figure>
                  <img loading="lazy" decoding="async" src={legacyCatalogConfigImg} alt="Legacy catalog configuration interface" className="signal-case-img" onClick={() => open(legacyCatalogConfigImg, "Legacy catalog configuration interface")} />
                  <figcaption className="signal-case-caption">The legacy catalog configuration screen</figcaption>
                </figure>
                <figure>
                  <img loading="lazy" decoding="async" src={legacyEditCatalogImg} alt="Legacy edit catalog interface" className="signal-case-img" onClick={() => open(legacyEditCatalogImg, "Legacy edit catalog interface")} />
                  <figcaption className="signal-case-caption">The legacy catalog editing screen</figcaption>
                </figure>
              </div>
              <p className="signal-case-p">
                After the (long) sessions with the implementation team, I decided to map out the existing interfaces and organize them into a flow that would make sense to someone new to Kibo.
              </p>
              <figure>
                <img loading="lazy" decoding="async" src={flowMappingImg} alt="Mapping the account setup flow" className="signal-case-img" onClick={() => open(flowMappingImg, "Mapping the account setup flow")} />
                <figcaption className="signal-case-caption">Mapping the existing interfaces into a comprehensible flow</figcaption>
              </figure>
              <p className="signal-case-p">
                I chose to organize the interfaces by the sections which the implementation team called out as important to the process. There were other areas which were "optional" in the process, and I chose to focus on the steps that would be absolutely necessary in order to proceed. I organized these areas into contextually relevant groups where the functionalities would be achieving the same end goal for that step.
              </p>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="signal-case-h2">Decisions</h2>
              <p className="signal-case-p">
                After interviewing the implementation team, I met with the resident expert on the entire Order Management System, Nelson, who also happened to be my boss. Nelson is a longtime employee of Kibo and knows the system better than anyone. I met with him to go over my findings from the interviews and plot the next steps of the redesign. Nelson filled in the gaps of my interface map by providing context to each screen and explaining their underlying functionality and purpose. The final decision made was to design a setup flow that would provision the new user to set up a provisional account that could begin taking orders. After finishing the initial setup, the user could then go to a centralized dashboard and edit more complicated functionality. Separating the creation and configuration of the account would alleviate the overwhelming nature of the entire process and make the entire set up more palatable for a person new to the software.
              </p>
              <p className="signal-case-p">
                This was one of my favorite projects to work on at Kibo because it allowed me to speak with a variety of stakeholders and sort through the different perspectives that go into setting up a new client with their Order Management account. I had to consider the frustrations of the implementation team as well as the business goals the Product team wanted to accomplish with the new setup process, and to balance those two aspects in my research and design was a unique challenge that helped me grow as a designer.
              </p>
              <p className="signal-case-p">
                I used <strong>UXPin</strong> to design these screens.
              </p>
            </section>

            <section>
              <h2 className="signal-case-h2 mb-6">Screenshots</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                <figure>
                  <img loading="lazy" decoding="async" src={createCatalogImg} alt="Redesigned create catalog screen" className="signal-case-img" onClick={() => open(createCatalogImg, "Redesigned create catalog screen")} />
                  <figcaption className="signal-case-caption">The redesigned catalog creation flow</figcaption>
                </figure>
                <figure className="flex flex-col gap-6">
                  <img loading="lazy" decoding="async" src={redesign02Img} alt="Redesigned account setup screen" className="signal-case-img" onClick={() => open(redesign02Img, "Redesigned account setup screen")} />
                  <img loading="lazy" decoding="async" src={redesign03Img} alt="Redesigned account setup screen with grouped inputs" className="signal-case-img" onClick={() => open(redesign03Img, "Redesigned account setup screen with grouped inputs")} />
                  <figcaption className="signal-case-caption">The redesigned account setup screens</figcaption>
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
