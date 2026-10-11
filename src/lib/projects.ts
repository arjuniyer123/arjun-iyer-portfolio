import americanNationalImg from "@/assets/work/american-national/app-screen-01.webp";
import chaloChaloImg from "@/assets/work/chalo-chalo/browse-incidents-desktop.webp";
import myHouseDealsImg from "@/assets/work/myhousedeals/property-listing-final.webp";
import promoArchitectImg from "@/assets/work/promo-architect/dashboard.webp";
import omsAccountSetupImg from "@/assets/work/oms/redesign-01.webp";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

/**
 * Case studies in display order. Shared by the homepage list and the
 * previous/next navigation at the end of each case study.
 */
export const projects: Project[] = [
  {
    id: "american-national",
    title: "American National",
    description: "Aligning the mobile experience with the desktop Client Site while ensuring customers could easily reach their local agent.",
    image: americanNationalImg,
    href: "/work/american-national",
  },
  {
    id: "promo-architect",
    title: "Promo Architect",
    description: "Streamlining a complex marketing promotion planning tool used by national fast food and quick-serve chains.",
    image: promoArchitectImg,
    href: "/work/promo-architect",
  },
  {
    id: "oms-account-setup",
    title: "OMS Account Setup",
    description: "Translating a disjointed legacy interface into a clear, understandable flow for new users and third-party partners.",
    image: omsAccountSetupImg,
    href: "/work/oms-account-setup",
  },
  {
    id: "chalo-chalo",
    title: "Chalo Chalo!",
    description: "Designing a social community for first responders and disaster victims to connect and coordinate aid.",
    image: chaloChaloImg,
    href: "/work/chalo-chalo",
  },
  {
    id: "myhousedeals",
    title: "MyHouseDeals",
    description: "Demystifying real estate investment with a clear, user-friendly property listing interface.",
    image: myHouseDealsImg,
    href: "/work/myhousedeals",
  },
];
