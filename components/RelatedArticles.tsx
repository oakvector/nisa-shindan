type RelatedArticle = {
  title: string;
  description: string;
  href: string;
  tag: string;
};

type RelatedArticlesProps = {
  heading?: string;
  articles: RelatedArticle[];
};

export default function RelatedArticles({
  heading = "関連記事",
  articles,
}: RelatedArticlesProps) {
  if (!articles.length) return null;

  return (
    <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
      <p className="mb-2 text-sm font-semibold text-blue-700">あわせて読みたい</p>
      <h2 className="mb-5 text-2xl font-bold text-slate-950">{heading}</h2>

      <div className="grid gap-4 lg:grid-cols-3">
        {articles.map((item) => (
          <div
            key={item.href}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
          >
            <div className="mb-3">
              <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                {item.tag}
              </span>
            </div>

            <h3 className="mb-2 text-lg font-semibold text-slate-950">
              {item.title}
            </h3>
            <p className="mb-4 text-sm leading-6 text-slate-600">
              {item.description}
            </p>

            <a
              href={item.href}
              className="inline-flex rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              記事を読む
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}