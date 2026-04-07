export default function ArticlesPage() {
  const articles = [
    {
      title: "SBI証券と楽天証券の違いは？",
      description:
        "NISAを始めるときに迷いやすい2社の違いを、シンプルに整理した比較記事です。",
      href: "/articles/sbi-vs-rakuten",
      tag: "比較記事",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="/" className="min-w-0">
            <p className="truncate text-sm font-bold tracking-wide text-blue-700">
              NISA向け証券口座診断
            </p>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="/shindan" className="transition hover:text-slate-900">
              診断一覧
            </a>
            <a href="/articles" className="transition hover:text-slate-900">
              記事一覧
            </a>
            <a href="/about" className="transition hover:text-slate-900">
              About
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 md:p-10">
          <p className="mb-3 text-sm font-semibold tracking-wide text-blue-700">
            記事一覧
          </p>

          <h1 className="mb-5 text-4xl font-bold leading-[1.15] tracking-tight text-slate-950 sm:text-5xl">
            比較記事から
            <br />
            <span className="whitespace-nowrap">違いを整理する</span>
          </h1>

          <p className="text-base leading-8 text-slate-600 sm:text-lg">
            診断だけでなく、証券口座の違いや選び方を整理した記事も公開していきます。
            比較記事を読んでから診断に進むと、より判断しやすくなります。
          </p>
        </div>

        <div className="mt-8 grid gap-6">
          {articles.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8"
            >
              <div className="mb-3">
                <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {item.tag}
                </span>
              </div>

              <h2 className="mb-3 text-2xl font-bold text-slate-950">
                {item.title}
              </h2>
              <p className="mb-5 text-sm leading-7 text-slate-600 sm:text-base">
                {item.description}
              </p>

              <a
                href={item.href}
                className="inline-flex rounded-xl bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                記事を読む
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}