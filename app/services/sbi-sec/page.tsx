export default function SbiSecPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="/" className="min-w-0">
            <p className="truncate text-sm font-bold tracking-wide text-blue-700">
              NISA向け証券口座診断
            </p>
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 md:p-10">
            <p className="mb-3 text-sm font-semibold tracking-wide text-blue-700">
              詳細ページ
            </p>

            <h1 className="mb-5 text-4xl font-bold leading-[1.15] tracking-tight text-slate-950 sm:text-5xl">
              SBI証券
            </h1>

            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              クレカ積立、ポイント活用、商品ラインナップなどを総合的に見たい人に向く候補です。
              比較軸を広く取りたい人との相性が良いタイプです。
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {["総合力", "クレカ積立", "ポイント活用", "商品数"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="https://www.sbisec.co.jp/"
target="_blank"
rel="noopener noreferrer"
                className="inline-flex rounded-xl bg-slate-950 px-6 py-3 font-medium text-white transition hover:opacity-90"
              >
                公式サイトを見る
              </a>
            </div>
          </div>

          <div className="space-y-5">
            <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
              <h2 className="mb-4 text-2xl font-bold text-slate-950">向いている人</h2>
              <ul className="space-y-3 text-slate-700">
                <li className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  クレカ積立とポイント活用を重視したい人
                </li>
                <li className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  幅広い商品ラインナップを見たい人
                </li>
                <li className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  1社で総合的に使いやすい候補を探している人
                </li>
              </ul>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
              <h2 className="mb-4 text-2xl font-bold text-slate-950">比較時の見どころ</h2>
              <div className="space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
                <p>
                  ポイント還元、クレカ積立、商品ラインナップなど複数の比較軸で見たときに、
                  総合力の高い候補として整理しやすいタイプです。
                </p>
                <p>
                  一方で、最初は機能の多さから情報量が多く感じられる場合もあるため、
                  初心者は使いやすさとのバランスも見て比較すると自然です。
                </p>
              </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
              <h2 className="mb-4 text-2xl font-bold text-slate-950">確認したいポイント</h2>
              <ul className="space-y-2 text-sm leading-7 text-slate-600 sm:text-base">
                <li>・ クレカ積立の条件</li>
                <li>・ 利用できるポイント体系</li>
                <li>・ NISA対象商品の確認</li>
                <li>・ 取扱商品の範囲</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}