import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Massachusetts Web Design & SEO for Small Businesses",
  description:
    "Webryxo provides modern web design, website redesign, SEO, and local SEO services for small businesses across Massachusetts.",
  alternates: {
    canonical: "/massachusetts-web-design",
  },
  openGraph: {
    title: "Massachusetts Web Design & SEO for Small Businesses | Webryxo",
    description:
      "Modern websites and search visibility services for Massachusetts small businesses.",
    url: "https://www.webryxo.com/massachusetts-web-design",
  },
};

export default function MassachusettsWebDesignPage() {
  return (
    <ServicePage
      eyebrow="Massachusetts Web Design & SEO"
      title="Helping Massachusetts businesses"
      accentTitle="stand out online."
      description="Webryxo builds modern websites and search strategies for small businesses across Massachusetts — helping businesses look professional, communicate clearly, and become easier for potential customers to find online."
      intro="Your website is often one of the first places a potential customer checks before calling, booking, visiting, or requesting a quote. We combine modern web design with strong SEO foundations so your online presence supports the way your business actually grows."
      outcomes={[
        "A professional website built around your business",
        "Fast, mobile-friendly pages",
        "Clear services and calls to action",
        "Strong technical SEO foundations",
        "Better local search relevance",
        "A website that can grow with your business",
      ]}
      deliverables={[
        {
          title: "Custom Web Design",
          description:
            "Modern business websites designed around your services, customers, brand, and goals rather than a generic one-size-fits-all template.",
        },
        {
          title: "Local SEO",
          description:
            "We improve the website signals that help search engines understand what your business does and the Massachusetts communities or service areas you genuinely serve.",
        },
        {
          title: "Search Engine Optimization",
          description:
            "Technical SEO, page titles, descriptions, headings, internal links, service-page targeting, sitemap support, and content strategy designed to create a stronger search foundation.",
        },
        {
          title: "Website Redesign",
          description:
            "We transform outdated, confusing, or underperforming websites into cleaner, faster, more modern experiences built around today's customers.",
        },
        {
          title: "Mobile & Performance Optimization",
          description:
            "Your website is built to work smoothly across phones, tablets, laptops, and desktops while keeping performance and usability in mind.",
        },
        {
          title: "Ongoing Website Support",
          description:
            "Webryxo can continue helping with hosting, maintenance, website improvements, SEO updates, new pages, and future growth.",
        },
      ]}
      process={[
        {
          title: "Understand your business",
          description:
            "We learn what your business offers, who your customers are, where you operate, and what you want website visitors to do.",
        },
        {
          title: "Plan the website and search strategy",
          description:
            "We determine the right page structure, messaging, design direction, service targeting, and SEO foundation for your business.",
        },
        {
          title: "Design and build",
          description:
            "We create the website, develop responsive pages, organize the content, and implement the agreed SEO foundations.",
        },
        {
          title: "Launch and improve",
          description:
            "After testing the important pages and functionality, we launch the website and can continue improving it as your business and search presence grow.",
        },
      ]}
      faqs={[
        {
          question:
            "Does Webryxo work with businesses throughout Massachusetts?",
          answer:
            "Yes. Webryxo can work remotely with businesses throughout Massachusetts. The exact website and SEO strategy depends on the business, its services, customers, competition, and actual service area.",
        },
        {
          question:
            "What types of Massachusetts businesses do you work with?",
          answer:
            "Webryxo is built for small and growing businesses, including local service businesses, restaurants, barbershops and salons, auto repair businesses, contractors, professional services, and other companies that need a stronger online presence.",
        },
        {
          question: "Do you provide both web design and SEO?",
          answer:
            "Yes. Webryxo provides web design, website redesign, technical SEO, on-page SEO, local SEO, content strategy, performance optimization, and ongoing website support.",
        },
        {
          question: "Can you guarantee that my business will rank #1 on Google?",
          answer:
            "No legitimate agency can control or guarantee a specific Google ranking. Search performance depends on many factors, including competition, website quality, content, relevance, authority, location, and Google's search systems. Webryxo focuses on building a strong search foundation and making measurable improvements over time.",
        },
        {
          question: "Can you redesign my existing business website?",
          answer:
            "Yes. If your current website feels outdated, loads poorly, is difficult to use on mobile, or no longer represents your business, Webryxo can redesign and rebuild it.",
        },
        {
          question: "How do we get started?",
          answer:
            "Start by telling us about your business, your current website if you have one, the services you provide, and what you want the new website or SEO work to accomplish.",
        },
      ]}
      relatedLinks={[
        {
          label: "Web Design",
          href: "/web-design",
        },
        {
          label: "SEO Services",
          href: "/seo",
        },
        {
          label: "Local SEO",
          href: "/local-seo",
        },
        {
          label: "Website Redesign",
          href: "/website-redesign",
        },
        {
          label: "Webryxo Blog",
          href: "/blog",
        },
      ]}
    />
  );
}