import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "SEO Services for Small Businesses",
  description: "Technical SEO, on-page optimization, keyword strategy, content planning, and search visibility improvements for business websites.",
  alternates: {
    canonical: "/seo",
  },
  openGraph: {
    title: "SEO Services for Small Businesses | Webryxo",
    description: "Technical SEO, on-page optimization, keyword strategy, content planning, and search visibility improvements for business websites.",
    url: "https://www.webryxo.com/seo",
  },
};

export default function Page() {
  return (
    <ServicePage
      eyebrow="SEO & Search Visibility"
      title="Build a website Google"
      accentTitle="can understand."
      description="Technical SEO, on-page optimization, keyword strategy, content planning, and search visibility improvements for business websites."
      intro="SEO is the process of making your website easier for search engines and people to understand, discover, and use. We focus on technical foundations, useful content, page targeting, and measurable improvements instead of guaranteed ranking promises."
      outcomes={[
        "Clearer search engine understanding",
    "Better page titles and descriptions",
    "More useful service-page targeting",
    "Improved internal linking and crawlability",
    "Google Search Console and sitemap readiness",
    "A content plan based on real business topics"
      ]}
      deliverables={[
        { title: "Technical SEO Review", description: "We review indexing signals, crawlability, metadata, canonical setup, sitemap and robots configuration, page structure, and performance basics." },
    { title: "Keyword & Intent Research", description: "We identify relevant topics and searches connected to your services and the intent behind those searches." },
    { title: "On-Page SEO", description: "We improve titles, descriptions, headings, copy structure, internal links, image context, and page relevance." },
    { title: "Service Page Strategy", description: "Instead of forcing every keyword onto one homepage, we create focused pages around important services and customer needs." },
    { title: "Search Console Setup", description: "We help connect Google Search Console, submit the sitemap, and use indexing and performance data to guide future improvements." },
    { title: "Content Strategy", description: "We build a realistic list of useful articles and landing pages that answer questions customers actually search for." }
      ]}
      process={[
        { title: "Audit", description: "We review what search engines currently see and identify technical, content, and structure problems." },
    { title: "Prioritize", description: "We separate high-impact fixes from lower-priority work so the project has a clear order." },
    { title: "Optimize", description: "We improve technical signals, page targeting, content structure, and internal linking." },
    { title: "Measure and improve", description: "SEO is ongoing. Search Console and site performance data help us decide what to improve next." }
      ]}
      faqs={[
        { question: "Can you guarantee #1 rankings?", answer: "No. Search rankings are controlled by search engines and affected by many factors outside any agency's control. We focus on strong SEO practices, measurable improvements, and long-term search visibility." },
    { question: "How long does SEO take?", answer: "SEO is usually a longer-term process. Technical fixes can be implemented quickly, but crawling, indexing, competition, content quality, authority, and search demand affect how soon performance changes appear." },
    { question: "Do I need new pages for SEO?", answer: "Often, yes. A focused page for an important service can be more useful than trying to make one homepage rank for every service." },
    { question: "Do you write blog content?", answer: "Webryxo can help plan and create useful SEO-focused content. The goal is quality and relevance, not publishing large amounts of generic content." }
      ]}
      relatedLinks={[
        { label: "Web Design", href: "/web-design" },
    { label: "Local SEO", href: "/local-seo" },
    { label: "Website Redesign", href: "/website-redesign" },
    { label: "SEO Blog", href: "/blog" }
      ]}
    />
  );
}
