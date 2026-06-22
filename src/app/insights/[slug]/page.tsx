import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft, Clock } from "lucide-react";
import {
  articles,
  getArticleBySlug,
  getRelatedArticles,
  type Article,
} from "@/data/articles";

type RouteParams = { slug: string };

export function generateStaticParams(): RouteParams[] {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<RouteParams> }
): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticleBySlug(slug);
  if (!a) return { title: "Insight not found" };
  return {
    title: a.title,
    description: a.dek,
    openGraph: {
      title: a.title,
      description: a.dek,
      type: "article",
      publishedTime: a.publishedAt,
      authors: [a.author.name],
    },
  };
}

function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-IE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();
  const related = getRelatedArticles(slug, 3);
  return <ArticleView article={article} related={related} />;
}

function ArticleView({
  article,
  related,
}: {
  article: Article;
  related: Article[];
}) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/[0.05] pt-32 pb-12 sm:pt-44 sm:pb-16 lg:pt-52">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(ellipse_at_top,rgba(15,55,168,0.35),transparent_60%)]"
        />
        <div className="container">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-white/45 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Insights
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-white/45 sm:mt-10">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-white/70">
              {article.category}
            </span>
            <span className="tabular">{formatDate(article.publishedAt)}</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3 w-3" /> {article.readMinutes} min read
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl font-display text-balance text-[34px] font-medium leading-[1.05] tracking-tightest sm:text-5xl md:text-6xl">
            {article.title}
          </h1>
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-white/65 sm:mt-8 sm:text-[19px]">
            {article.dek}
          </p>
          <div className="mt-8 flex items-center gap-3 text-[13px] text-white/55">
            <span className="h-px w-8 bg-white/30" />
            By <span className="text-white/85">{article.author.name}</span>{" "}
            <span className="text-white/35">· {article.author.role}</span>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 lg:py-32">
        <div className="container">
          <article className="prose-helioran mx-auto max-w-2xl">
            {article.sections.map((section, i) => (
              <div key={i} className={i === 0 ? "" : "mt-12"}>
                {section.heading && (
                  <h3 id={section.id} className="!mt-0 scroll-mt-32">
                    {section.heading}
                  </h3>
                )}
                {section.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((b, k) => (
                      <li key={k}>{b}</li>
                    ))}
                  </ul>
                )}
                {section.pullquote && (
                  <blockquote className="!my-10 border-l-2 border-white/30 pl-6 font-display text-xl font-medium italic leading-snug text-white/85 sm:text-2xl">
                    &ldquo;{section.pullquote}&rdquo;
                  </blockquote>
                )}
              </div>
            ))}
          </article>

          <div className="mx-auto mt-16 max-w-2xl">
            <div className="hairline" />
            <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <p className="text-[13px] text-white/50">
                Helioran Capital · Editorial briefing
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[14px] tracking-tight text-white underline-offset-4 hover:underline"
              >
                Discuss this with the desk
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="relative border-t border-white/[0.06] py-16 sm:py-20 lg:py-28">
          <div className="container">
            <div className="mb-10 flex items-end justify-between gap-6">
              <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
                More from the desk
              </h2>
              <Link
                href="/insights"
                className="text-[13px] tracking-tight text-white/60 underline-offset-4 hover:text-white hover:underline"
              >
                All insights
              </Link>
            </div>
            <ul className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/insights/${r.slug}`}
                    className="group grid grid-cols-[1fr_auto] items-center gap-x-5 gap-y-2 py-6 transition-colors hover:bg-white/[0.02] sm:grid-cols-12 sm:gap-4"
                  >
                    <span className="col-start-1 row-start-1 text-[10px] uppercase tracking-[0.18em] text-white/45 sm:col-span-2 sm:text-[11px]">
                      {r.category}
                    </span>
                    <span className="col-span-2 row-start-2 font-display text-[18px] font-medium leading-snug tracking-tight text-white sm:col-span-7 sm:row-start-auto sm:text-[20px]">
                      {r.title}
                    </span>
                    <span className="col-start-1 row-start-3 mt-1 inline-flex items-center gap-1.5 text-[11px] text-white/45 sm:col-span-2 sm:row-start-auto sm:mt-0 sm:text-[12px]">
                      <Clock className="h-3.5 w-3.5" /> {r.readMinutes} min
                    </span>
                    <span className="col-start-2 row-span-3 row-start-1 inline-flex h-9 w-9 items-center justify-center self-start rounded-full border border-white/10 bg-white/[0.02] transition-all group-hover:bg-white group-hover:text-ink-950 sm:col-span-1 sm:row-span-1 sm:self-center">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
