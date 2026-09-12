import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Local SEO Services for Small Businesses",
  description: "Local SEO services that help businesses strengthen their website, location relevance, Google presence, and local search visibility.",
  alternates: {
    canonical: "/local-seo",
  },
  openGraph: {
    title: "Local SEO Services for Small Businesses | Webryxo",
    description: "Local SEO services that help businesses strengthen their website, location relevance, Google presence, and local search visibility.",
    url: "https://www.webryxo.com/local-seo",
  },
};

export default function Page() {
  return (
    <ServicePage
      eyebrow="Local SEO"
      title="Help nearby customers"
      accentTitle="find your business."
      description="Local SEO services that help businesses strengthen their website, location relevance, Google presence, and local search visibility."
      intro="Local SEO is especially important for businesses that serve customers in a specific city, region, or service area. We improve the website and local search signals that help search engines understand what you do and where you do it."
      outcomes={[
        "Stronger local service relevance",
    "Better location and service clarity",
    "More consistent business information",
    "Improved website support for Google Business Profile",
    "Local landing-page opportunities",
    "A stronger path from local search to contact"
      ]}
      deliverables={[
        { title: "Local Website Optimization", description: "We improve service, location, contact, and business information so local relevance is clear to both visitors and search engines." },
    { title: "Google Business Profile Guidance", description: "We help organize the website and business information that supports a strong, accurate Google Business Profile presence." },
    { title: "Local Keyword Research", description: "We identify useful service-and-location topics without stuffing city names unnaturally across the website." },
    { title: "Location & Service Pages", description: "When genuinely useful, we create dedicated pages that explain a specific service or service area with unique, helpful content." },
    { title: "Local Content Strategy", description: "We plan content around customer questions, local services, project types, and topics that have real relevance to your market." },
    { title: "Tracking & Search Console", description: "We use search performance and indexing data to understand how the site is being discovered and where opportunities exist." }
      ]}
      process={[
        { title: "Review your local presence", description: "We look at the website, business information, service areas, current pages, and local search setup." },
    { title: "Define local opportunities", description: "We identify the services and areas worth targeting based on what the business actually offers." },
    { title: "Build the foundation", description: "We improve pages, internal links, local signals, metadata, and relevant content." },
    { title: "Continue improving", description: "Local search visibility grows through useful pages, consistent information, strong customer experience, and ongoing optimization." }
      ]}
      faqs={[
        { question: "Is local SEO only for stores?", answer: "No. Local SEO can also help service-area businesses such as contractors, repair shops, salons, barbers, restaurants, and professional services." },
    { question: "Do I need a Google Business Profile?", answer: "For many local businesses, a well-maintained Google Business Profile is an important part of local visibility." },
    { question: "Should I create a page for every city?", answer: "Not automatically. Location pages should be useful and genuinely relevant. Large numbers of near-duplicate city pages can create poor user experiences and weak content." },
    { question: "Can local SEO work without a good website?", answer: "Your Google presence and website work together. A strong website gives potential customers a place to understand your services, trust the business, and take action." }
      ]}
      relatedLinks={[
        { label: "SEO Services", href: "/seo" },
    { label: "Web Design", href: "/web-design" },
    { label: "Website Redesign", href: "/website-redesign" },
    { label: "Local SEO Guide", href: "/blog/local-seo-guide-small-business" }
      ]}
    />
  );
}
