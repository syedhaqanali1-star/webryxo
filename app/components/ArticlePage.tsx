import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

type ArticlePageProps = {
  title: string;
  description: string;
  date: string;
  readTime: string;
  children: React.ReactNode;
};

export default function ArticlePage({
  title,
  description,
  date,
  readTime,
  children,
}: ArticlePageProps) {
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
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-white"
          >
            <ArrowLeft size={15} />
            Back to Blog
          </a>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.22em] text-violet-300">
          Webryxo Insights
        </p>

        <h1 className="mt-6 text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl md:text-6xl">
          {title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-white/50">{description}</p>

        <div className="mt-6 flex gap-4 text-sm text-white/30">
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>

        <div className="mt-14 max-w-none [&_h2]:mt-12 [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:tracking-[-0.025em] [&_h2]:text-white [&_p]:mt-5 [&_p]:text-[17px] [&_p]:leading-8 [&_p]:text-white/60 [&_ul]:mt-5 [&_ul]:space-y-3 [&_ul]:pl-6 [&_li]:list-disc [&_li]:text-[17px] [&_li]:leading-8 [&_li]:text-white/60 [&_strong]:text-white [&_a]:text-violet-300">
          {children}
        </div>

        <div className="mt-16 rounded-[30px] border border-violet-400/20 bg-violet-500/[0.08] p-7 sm:p-9">
          <h2 className="text-2xl font-semibold">Need help with your website or SEO?</h2>
          <p className="mt-3 max-w-2xl leading-7 text-white/50">
            Webryxo helps businesses improve their websites, search visibility,
            and local online presence.
          </p>
          <a
            href="/book"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
          >
            Start a Project
            <ArrowRight size={16} />
          </a>
        </div>
      </article>
    </main>
  );
}
