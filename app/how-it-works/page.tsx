export default function HowItWorksPage() {
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
              診断する
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

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 md:p-10">
            <p className="mb-3 text-sm font-semibold tracking-wide text-blue-700">
              サイトの使い方
            </p>

            <h1 className="mb-5 text-4xl font-bold leading-[1.15] tracking-tight text-slate-950 sm:text-5xl">
              このサイトの
              <br />
              使い方
            </h1>

            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              このサイトでは、NISAや証券口座選びで迷っている人向けに、
              複数の比較軸から候補を整理しやすい形で診断結果を表示しています。
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {["5問診断", "5社比較", "初心者向け", "公式サイト確認前の整理"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <div className="mt-8">
              <a
                href="/shindan"
                className="inline-flex rounded-xl bg-slate-950 px-6 py-3 font-medium text-white transition hover:opacity-90"
              >
                診断をはじめる
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 md:p-10">
            <p className="mb-3 text-sm font-semibold text-blue-700">
              現在の比較対象
            </p>
            <h2 className="mb-5 text-2xl font-bold text-slate-950">
              現在は5社を比較対象としています
            </h2>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "SBI証券",
                "楽天証券",
                "マネックス証券",
                "三菱UFJ eスマート証券",
                "松井証券",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <p className="mb-2 text-sm font-semibold text-blue-700">STEP 1</p>
            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              5つの質問に答える
            </h2>
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              投資経験、重視するポイント、米国株の利用意向、クレカ積立、
              毎月の積立予定額などを入力します。
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <p className="mb-2 text-sm font-semibold text-blue-700">STEP 2</p>
            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              候補を確認する
            </h2>
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              回答内容に応じて、SBI証券、楽天証券、マネックス証券、
              三菱UFJ eスマート証券、松井証券の中から候補を整理して表示します。
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <p className="mb-2 text-sm font-semibold text-blue-700">STEP 3</p>
            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              詳細を比べて公式サイトへ
            </h2>
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              診断結果だけで決めるのではなく、詳細ページで向いている人や注意点を確認したうえで、
              各公式サイトの最新情報を確認してください。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <p className="mb-2 text-sm font-semibold text-blue-700">比較の考え方</p>
          <h2 className="mb-5 text-2xl font-bold text-slate-950">
            このサイトで見ている主な比較軸
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {[
              "クレカ積立対応",
              "ポイント還元",
              "使いやすさ",
              "米国株対応",
              "初心者向けか",
              "少額積立のしやすさ",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <p className="mb-2 text-sm font-semibold text-blue-700">ご利用前の注意</p>
          <h2 className="mb-4 text-2xl font-bold text-slate-950">
            ご利用前にご確認ください
          </h2>
          <p className="text-sm leading-7 text-slate-600 sm:text-base">
            本サイトは一般的な情報提供を目的としており、特定の投資判断を推奨するものではありません。
            比較対象や掲載内容は見直しを行いますが、最新の条件、手数料、取扱商品、
            キャンペーンなどは必ず各公式サイトをご確認ください。
          </p>
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