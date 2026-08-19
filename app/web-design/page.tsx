import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Web Design for Small Businesses",
  description: "Custom, mobile-friendly business websites designed to build trust, explain your services clearly, and turn more visitors into inquiries.",
  alternates: {
    canonical: "/web-design",
  },
  openGraph: {
    title: "Web Design for Small Businesses | Webryxo",
    description: "Custom, mobile-friendly business websites designed to build trust, explain your services clearly, and turn more visitors into inquiries.",
    url: "https://www.webryxo.com/web-design",
  },
};

export default function Page() {
  return (
    <ServicePage
      eyebrow="Web Design"
      title="Websites built for"
      accentTitle="real businesses."
      description="Custom, mobile-friendly business websites designed to build trust, explain your services clearly, and turn more visitors into inquiries."
      intro="A good business website should do more than look modern. It should immediately explain what you offer, make your business feel trustworthy, work beautifully on every device, and make the next action obvious."
      outcomes={[
        "A professional first impression",
    "Clear service and business information",
    "Mobile-friendly customer experience",
    "Easy calls, inquiries, bookings, or quote requests",
    "A strong technical foundation for SEO",
    "A website that can grow with your business"
      ]}
      deliverables={[
        { title: "Custom Website Design", description: "A visual direction built around your brand, audience, services, and goals rather than a one-size-fits-all template." },
    { title: "Responsive Development", description: "Pages are built to work across phones, tablets, laptops, and desktop displays." },
    { title: "Conversion-Focused Structure", description: "Clear calls to action, service sections, trust signals, and contact paths help visitors know what to do next." },
    { title: "SEO Foundations", description: "Clean titles, descriptions, headings, page structure, internal links, sitemap support, and crawl-friendly technical setup." },
    { title: "Performance Optimization", description: "Images, layouts, and front-end code are designed with speed and usability in mind." },
    { title: "Launch Support", description: "We help connect the domain, verify the final experience, and get the website live." }
      ]}
      process={[
        { title: "Learn the business", description: "We start with your services, customers, goals, brand direction, and the action you want visitors to take." },
    { title: "Create the direction", description: "We build a visual and structural direction so you can see how the website could look before the project is finalized." },
    { title: "Build and refine", description: "We develop the approved pages, test responsive layouts, and make agreed revisions." },
    { title: "Launch", description: "We connect the website, check the final experience, and make sure the important technical pieces are in place." }
      ]}
      faqs={[
        { question: "How much does a website cost?", answer: "Webryxo currently offers Starter, Business, and Premium website packages. The right package depends on page count, design complexity, integrations, and functionality." },
    { question: "Will my website work on phones?", answer: "Yes. Responsive design is part of every website package." },
    { question: "Can you redesign an existing website?", answer: "Yes. If your current website feels outdated, slow, confusing, or difficult to use, we can rebuild it around your current business needs." },
    { question: "Do you also provide SEO?", answer: "Yes. Webryxo offers technical SEO, on-page SEO, local SEO, content strategy, and ongoing search visibility services." }
      ]}
      relatedLinks={[
        { label: "SEO Services", href: "/seo" },
    { label: "Local SEO", href: "/local-seo" },
    { label: "Website Redesign", href: "/website-redesign" },
    { label: "Webryxo Blog", href: "/blog" }
      ]}
    />
  );
}
