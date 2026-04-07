export default function ArticlesPage() {
  const articles = [
    {
      title: "SBI証券と楽天証券の違いは？",
      description:
        "NISAを始めるときに迷いやすい2社の違いを、初心者にもわかりやすく整理した比較記事です。",
      href: "/articles/sbi-vs-rakuten",
      tag: "比較記事",
    },
    {
      title: "NISA初心者に向いている証券口座の選び方",
      description:
        "初心者が見落としやすいポイントを整理しながら、証券口座選びの考え方をまとめた記事です。",
      href: "/articles/nisa-beginner-choice",
      tag: "選び方ガイド",
    },
    {
      title: "クレカ積立を重視する人の証券口座比較",
      description:
        "クレカ積立やポイント還元を重視する人向けに、証券口座の見方を整理した比較記事です。",
      href: "/articles/credit-card-tsumitate",
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
            <a href="/how-it-works" className="transition hover:text-slate-900">
              使い方
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
            診断だけでなく、証券口座の違いや選び方を整理した記事も読めます。
            まず記事で比較のポイントをざっくり理解してから診断に進むと、
            より判断しやすくなります。
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

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          <div className="mb-4">
            <p className="text-sm font-semibold text-slate-900">
              NISA向け証券口座診断
            </p>
            <p className="mt-1 text-sm text-slate-500">
              比較と診断で、証券口座選びをわかりやすく。
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            <a href="/about" className="hover:text-slate-900 hover:underline">
              About
            </a>
            <a href="/privacy" className="hover:text-slate-900 hover:underline">
              Privacy
            </a>
            <a href="/disclosure" className="hover:text-slate-900 hover:underline">
              Disclosure
            </a>
            <a href="/how-it-works" className="hover:text-slate-900 hover:underline">
              How it works
            </a>
          </div>

          <p className="mt-6 text-xs text-slate-400">
            © 2026 NISA向け証券口座診断
          </p>
        </div>
      </footer>
    </main>
  );
}