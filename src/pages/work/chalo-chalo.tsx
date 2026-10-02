import React from "react";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { useLightbox } from "@/components/lightbox";
import browseIncidentsImg from "@/assets/work/chalo-chalo/browse-incidents-desktop.webp";
import matchesConceptImg from "@/assets/work/chalo-chalo/matches-concept.webp";
import mobileHomeImg from "@/assets/work/chalo-chalo/mobile-home.webp";
import mobileBrowseImg from "@/assets/work/chalo-chalo/mobile-browse-incidents.webp";
import mobileIncidentImg from "@/assets/work/chalo-chalo/mobile-incident-detail.webp";
import mobileStoreImg from "@/assets/work/chalo-chalo/mobile-store.webp";
import bePreparedImg from "@/assets/work/chalo-chalo/be-prepared.webp";
import supplyStoreImg from "@/assets/work/chalo-chalo/supply-store.webp";

export default function ChaloChalo() {
  const { open, node } = useLightbox();
  return (
    <div className="min-h-screen flex flex-col">
      {node}
      <NavBar />
      
      <main className="signal-main signal-case-main">
        <header className="signal-case-header">
          <div className="signal-case-eyebrow">Disaster Relief Platform</div>
          <h1 className="signal-case-title">Chalo Chalo!</h1>
          <p className="signal-case-summary">
            A community-driven platform for disaster relief and first responder coordination.
          </p>
        </header>

        <div className="signal-case-hero">
          <div className="signal-case-hero-frame">
            <img
              src={browseIncidentsImg}
              alt="Chalo Chalo Browse Incidents desktop design"
              className="signal-case-hero-img"
              onClick={() => open(browseIncidentsImg, "Chalo Chalo Browse Incidents desktop design")}
            />
          </div>
        </div>

        <div className="signal-case-layout">
          <div className="signal-case-meta">
            <div>
              <span className="signal-case-meta-label">Timeline</span>
              <span className="text-foreground">March 2016</span>
            </div>
            <div>
              <span className="signal-case-meta-label">Role</span>
              <span className="text-foreground">UX/UI Designer</span>
            </div>
          </div>

          <div className="signal-case-body">
            <section>
              <h2 className="signal-case-h2 mb-6">The Problem</h2>
              <p className="signal-case-p mb-6">
                Natural disasters wreak havoc on a local community and it can be difficult to rebuild your home and life after one. After every disaster, you always see the local community come together and help each other when they need it the most. Sometimes this is difficult to accomplish even with modern technology. The goal of ChaloChalo! is to remedy this problem and provide another tool that can help first responders and victims of natural disasters.
              </p>
              <p className="signal-case-p">
                I was tasked to design a desktop and mobile website that would incorporate a <strong>social community</strong> that would allow people to connect and help each other out, as well as provide important information on how to come out of a natural disaster intact.
              </p>
            </section>

            <section className="signal-callout">
              <h2 className="signal-case-h2 mb-4">Connecting People</h2>
              <p className="signal-case-p mb-6">
                The first challenge was determining how to connect the victims and people with resources. On the detail screen for the incident, users can <strong>request</strong> and <strong>offer</strong> food, water, and other necessities to people in their area. These requests would be matched and then transfer to the <strong>Matches</strong> area below.
              </p>
              <p className="signal-case-p mb-8">
                The <strong>Matches</strong> section would contain the participants and also a button to allow them to find each other. Once completed, the requests/offers will stay in the box and act as a collection of goodwill and information for other observers.
              </p>
              <figure>
                <img loading="lazy" decoding="async" src={matchesConceptImg} alt="Requests, offers, and matches concept" className="signal-case-img signal-case-img-inset" onClick={() => open(matchesConceptImg, "Requests, offers, and matches concept")} />
                <figcaption className="signal-case-caption signal-case-caption-center">Requests and offers are matched and transfer to the Matches area</figcaption>
              </figure>
            </section>

            <section>
              <h2 className="signal-case-h2 mb-6">Tracking Incidents</h2>
              <p className="signal-case-p mb-6">
                An important feature within ChaloChalo! is the ability to track incidents and be aware of what's going on in your area, as well as around the world. This screen provides a short summary for each incident and how many people have been affected by it.
              </p>
              <p className="signal-case-p mb-6">
                Each incident blurb contains important information that lets the user know the location, scale, and category of the natural disaster. The color indicator is a simple indicator of the type of incident and the location will allow the user to know how close they are to the incident. The goal was to have the <strong>necessary information</strong> easily available to the user so they can be informed of the situation at all times.
              </p>
              <p className="signal-case-p mb-8">
                The Incident page was an important feature for ChaloChalo! because it provides updates for each incident to the entire network and <strong>crowdsources</strong> the relief effort by providing a central area for information and resources. This makes it easier to keep up with all the incidents around you and see if they need more assistance.
              </p>
              <figure>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                  <img loading="lazy" decoding="async" src={mobileBrowseImg} alt="Chalo Chalo mobile browse incidents screen" className="signal-case-img" onClick={() => open(mobileBrowseImg, "Chalo Chalo mobile browse incidents screen")} />
                  <img loading="lazy" decoding="async" src={mobileIncidentImg} alt="Chalo Chalo mobile incident detail screen" className="signal-case-img" onClick={() => open(mobileIncidentImg, "Chalo Chalo mobile incident detail screen")} />
                </div>
                <figcaption className="signal-case-caption">Browsing incidents and the incident detail screen</figcaption>
              </figure>
            </section>

            <section>
              <h2 className="signal-case-h2 mb-6">Be Prepared</h2>
              <p className="signal-case-p mb-6">
                The Be Prepared section of the website contains informational videos that detail important procedures and advice that you would need during a natural disaster. Along with being an important source of information for the victims of the incident, the Be Prepared page can also act as a preemptive measure to inform user following the incidents from elsewhere.
              </p>
              <p className="signal-case-p mb-8">
                The goal of this page was to be <strong>simple</strong> and <strong>straightforward</strong> to allow for easy access and understanding of the information presented. A user that needs to know what to do when their basement is being flooded can filter the videos according to their specific incident type and then glance through the <strong>large video thumbnails</strong> to find the necessary information.
              </p>
              <figure>
                <img loading="lazy" decoding="async" src={bePreparedImg} alt="Be Prepared video library" className="signal-case-img" onClick={() => open(bePreparedImg, "Be Prepared video library")} />
                <figcaption className="signal-case-caption">The "Be Prepared" video library</figcaption>
              </figure>
            </section>

            <section>
              <h2 className="signal-case-h2 mb-6">Merchant Stores</h2>
              <p className="signal-case-p mb-6">
                In order with providing information and news about incidents, ChaloChalo! also included an area for local merchants to list their products that would be useful in a natural disaster. This is another important aspect of the social community that the website is trying to accomplish. The local merchants can assist their community in being prepared and it will support the local economy.
              </p>
              <p className="signal-case-p mb-4">
                The ChaloChalo! store hierarchy is organized like this:
              </p>
              <p className="signal-case-p signal-case-emph mb-6">
                Main Store &rarr; Merchant Store &rarr; Product Listings
              </p>
              <p className="signal-case-p mb-8">
                Users can select the specific merchant store based on the type of products their looking for, the type of incident they're preparing for, or the stores that are closest to them. The main store page will also contain recommended products based on store and product ratings. This hierarchy promotes stores and product with good reviews and also encourages users to frequent their local merchants.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                <figure>
                  <img loading="lazy" decoding="async" src={supplyStoreImg} alt="Supply store with emergency essentials" className="signal-case-img" onClick={() => open(supplyStoreImg, "Supply store with emergency essentials")} />
                  <figcaption className="signal-case-caption">The ChaloChalo! store</figcaption>
                </figure>
                <figure>
                  <img loading="lazy" decoding="async" src={mobileStoreImg} alt="Chalo Chalo mobile store screen" className="signal-case-img" onClick={() => open(mobileStoreImg, "Chalo Chalo mobile store screen")} />
                  <figcaption className="signal-case-caption">The store on mobile</figcaption>
                </figure>
              </div>
            </section>

            <section>
              <p className="signal-case-p mb-6">
                I designed the website for ChaloChalo! keeping in mind the website's goal of creating a social community that will foster a collaborative environment to recovering from and preparing for natural disasters.
              </p>
              <p className="signal-case-p mb-8">
                I used <strong>Sketch 3</strong> to design these screens.
              </p>
              <figure>
                <img loading="lazy" decoding="async" src={mobileHomeImg} alt="Chalo Chalo mobile home screen" className="signal-case-img signal-case-img-narrow" onClick={() => open(mobileHomeImg, "Chalo Chalo mobile home screen")} />
                <figcaption className="signal-case-caption signal-case-caption-center">The mobile home screen</figcaption>
              </figure>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
