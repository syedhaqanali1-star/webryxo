import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Website Redesign Services for Small Businesses",
  description: "Modern website redesign services for businesses with outdated, confusing, slow, or underperforming websites.",
  alternates: {
    canonical: "/website-redesign",
  },
  openGraph: {
    title: "Website Redesign Services for Small Businesses | Webryxo",
    description: "Modern website redesign services for businesses with outdated, confusing, slow, or underperforming websites.",
    url: "https://www.webryxo.com/website-redesign",
  },
};

export default function Page() {
  return (
    <ServicePage
      eyebrow="Website Redesign"
      title="Your business evolved."
      accentTitle="Your website should too."
      description="Modern website redesign services for businesses with outdated, confusing, slow, or underperforming websites."
      intro="A redesign is more than changing colors. We look at how the website communicates, how quickly customers can find what they need, how it behaves on mobile, how well it supports search visibility, and whether the overall experience still represents the business."
      outcomes={[
        "A more modern visual identity",
    "Clearer navigation and page hierarchy",
    "Better mobile usability",
    "Stronger calls to action",
    "Cleaner SEO and technical structure",
    "Improved performance and maintainability"
      ]}
      deliverables={[
        { title: "Website Audit", description: "We review the current design, page structure, mobile experience, content, conversion paths, SEO basics, and obvious technical issues." },
    { title: "New Visual Direction", description: "We rebuild the look and feel around the current business instead of simply reskinning the old design." },
    { title: "Content Restructure", description: "Important services, trust signals, FAQs, calls to action, and business information are organized around customer needs." },
    { title: "Responsive Rebuild", description: "The new website is designed to work properly across modern device sizes." },
    { title: "SEO Migration Basics", description: "We preserve important page intent, use appropriate redirects when routes change, and avoid unnecessary indexing problems during a rebuild." },
    { title: "Launch & Testing", description: "We test important pages, forms, responsive layouts, and navigation before the redesigned website goes live." }
      ]}
      process={[
        { title: "Audit the current site", description: "We identify what should stay, what should change, and what is creating friction." },
    { title: "Plan the new structure", description: "We define the navigation, page priorities, content hierarchy, and new design direction." },
    { title: "Redesign and rebuild", description: "We create the new experience and implement the agreed pages and functionality." },
    { title: "Launch carefully", description: "We test the website, connect the domain, and handle important migration details." }
      ]}
      faqs={[
        { question: "Do I need to keep my old website online during the redesign?", answer: "Usually, yes. The existing site can stay live while the new version is being built, then the domain can be switched when the redesign is ready." },
    { question: "Will I lose my Google rankings?", answer: "Redesigns can affect search performance if URLs, content, redirects, or technical setup are handled poorly. We plan the migration carefully, but no agency can promise rankings will stay exactly the same." },
    { question: "Can you keep my existing content?", answer: "Yes. Useful existing content can be retained, reorganized, rewritten, or expanded depending on the project." },
    { question: "Can you redesign only part of my website?", answer: "Sometimes. If the existing technical foundation is suitable, specific pages or sections may be redesigned. In other cases, a full rebuild is cleaner and more efficient." }
      ]}
      relatedLinks={[
        { label: "Web Design", href: "/web-design" },
    { label: "SEO Services", href: "/seo" },
    { label: "Local SEO", href: "/local-seo" },
    { label: "Redesign Guide", href: "/blog/website-redesign-signs" }
      ]}
    />
  );
}
