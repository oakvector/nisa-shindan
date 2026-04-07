export default function MatsuiSecPage() {
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
              松井証券
            </h1>

            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              初心者向けの始めやすさやシンプルさを重視する人に向く候補です。
              最初の比較対象として理解しやすいタイプです。
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {["初心者向け", "使いやすさ", "サポート", "シンプル"].map((tag) => (
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
                href="https://www.matsui.co.jp/"
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
                  これからNISAを始めたい人
                </li>
                <li className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  できるだけシンプルに選びたい人
                </li>
                <li className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  サポートの分かりやすさも重視したい人
                </li>
              </ul>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
              <h2 className="mb-4 text-2xl font-bold text-slate-950">比較時の見どころ</h2>
              <div className="space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
                <p>
                  初心者向けの分かりやすさや、始めやすさを比較軸にする場合に候補へ入りやすいタイプです。
                  最初の1社をどう選ぶかという観点では比較しやすい存在です。
                </p>
                <p>
                  一方で、米国株や商品ラインナップを最優先する場合は、
                  他候補と見比べてから決めた方が自然です。
                </p>
              </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
              <h2 className="mb-4 text-2xl font-bold text-slate-950">確認したいポイント</h2>
              <ul className="space-y-2 text-sm leading-7 text-slate-600 sm:text-base">
                <li>・ 使いやすさやサポート内容</li>
                <li>・ NISA利用条件</li>
                <li>・ 積立可能な商品</li>
                <li>・ 自分が重視する比較軸との相性</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}