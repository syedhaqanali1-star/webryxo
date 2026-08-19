import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Design & SEO Blog",
  description:
    "Practical web design, SEO, local SEO, website redesign, and small-business website guidance from Webryxo.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Web Design & SEO Blog | Webryxo",
    description:
      "Practical guidance for businesses improving their websites and search visibility.",
    url: "https://www.webryxo.com/blog",
  },
};

const articles = [
  {
    title: "Does My Small Business Really Need a Website?",
    description:
      "What a business website actually does, when social media is not enough, and what a useful small-business site should include.",
    href: "/blog/does-my-small-business-need-a-website",
    tag: "Web Design",
  },
  {
    title: "A Practical Local SEO Guide for Small Businesses",
    description:
      "The core pieces of local SEO: your website, Google Business Profile, service relevance, consistency, useful content, and measurement.",
    href: "/blog/local-seo-guide-small-business",
    tag: "Local SEO",
  },
  {
    title: "7 Signs It’s Time to Redesign Your Business Website",
    description:
      "How to recognize when an outdated website is creating friction for customers, search engines, or your own team.",
    href: "/blog/website-redesign-signs",
    tag: "Website Redesign",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#040404] text-white">
      <header className="border-b border-white/[0.06] bg-black/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl">
              <Image
                src="/icon.png"
                alt="Webryxo logo"
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
            <span className="text-xl font-semibold">
              Webryxo<span className="text-violet-400">.</span>
            </span>
          </a>
          <a
            href="/book"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black"
          >
            Start a Project
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-white/45">
            <span className="h-px w-9 bg-violet-400/70" />
            Webryxo Insights
          </div>

          <h1 className="mt-7 text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl">
            Better websites.
            <span className="block bg-gradient-to-r from-white via-violet-200 to-fuchsia-400 bg-clip-text text-transparent">
              Smarter search strategy.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/50">
            Practical articles for business owners who want a stronger website,
            clearer digital presence, and better search visibility.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {articles.map((article, index) => (
            <article
              key={article.href}
              className="flex min-h-[360px] flex-col justify-between rounded-[30px] border border-white/10 bg-white/[0.025] p-7"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-300">
                    {article.tag}
                  </span>
                  <BookOpen size={18} className="text-white/25" />
                </div>

                <p className="mt-10 text-xs uppercase tracking-[0.18em] text-white/20">
                  0{index + 1}
                </p>

                <h2 className="mt-4 text-2xl font-medium tracking-[-0.025em]">
                  {article.title}
                </h2>

                <p className="mt-4 leading-7 text-white/42">
                  {article.description}
                </p>
              </div>

              <a
                href={article.href}
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium"
              >
                Read article
                <ArrowRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
