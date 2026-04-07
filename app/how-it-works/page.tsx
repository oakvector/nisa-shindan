import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "使い方 | NISA向け証券口座診断",
  description:
    "このサイトの使い方をまとめています。3つの診断と比較記事をどう使い分けるか、診断から候補比較までの流れを確認できます。",
  alternates: {
    canonical: "/how-it-works",
  },
};

export default function HowItWorksPage() {
  const diagnoses = [
    {
      title: "あなたの資産形成スタイル診断",
      text: "どんな考え方で口座を選ぶと納得しやすいかを整理する、いちばん基本の診断です。",
      href: "/shindan/style",
      tag: "基本診断",
    },
    {
      title: "NISAで失敗しにくい口座タイプ診断",
      text: "避けたい失敗や不安から、自分に合う口座タイプを探す診断です。",
      href: "/shindan/failure-safe",
      tag: "失敗回避",
    },
    {
      title: "あなたに合う続けやすい投資スタイル診断",
      text: "無理なく続けやすい投資の形から、相性の良い候補を整理する診断です。",
      href: "/shindan/continue-style",
      tag: "継続重視",
    },
  ];

  const comparePoints = [
    "クレカ積立対応",
    "ポイント還元",
    "使いやすさ",
    "米国株対応",
    "初心者向けか",
    "少額積立のしやすさ",
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

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 md:p-10">
            <p className="mb-3 text-sm font-semibold tracking-wide text-blue-700">
              このサイトの使い方
            </p>

            <h1 className="mb-5 text-4xl font-bold leading-[1.15] tracking-tight text-slate-950 sm:text-5xl">
              はじめる前に
              <br />
              <span className="whitespace-nowrap">知っておきたいこと</span>
            </h1>

            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              このサイトは、NISAや証券口座選びで迷っている人向けに、
              3つの違う切り口から自分に合う選び方を整理しやすくする診断サイトです。
              いきなり会社名だけで比較するのではなく、
              まずは自分に合う選び方を知る入口として使えます。
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {["3つの診断", "5社比較", "初心者にも使いやすい", "会員登録不要"].map(
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
                診断一覧を見る
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

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
              <p className="mb-2 text-sm font-semibold text-slate-950">
                このサイトの役割
              </p>
              <p className="text-sm leading-6 text-slate-600">
                診断で候補を整理し、その後に詳細ページや公式サイトで条件を確認する流れを想定しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <div className="mb-6 flex flex-col gap-2">
            <p className="text-sm font-semibold text-blue-700">公開中の診断</p>
            <h2 className="text-2xl font-bold text-slate-950">
              まずは3つの診断から選べます
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {diagnoses.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="mb-3">
                  <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    {item.tag}
                  </span>
                </div>

                <h3 className="mb-2 font-semibold text-slate-950">{item.title}</h3>
                <p className="mb-5 text-sm leading-6 text-slate-600">{item.text}</p>

                <a
                  href={item.href}
                  className="inline-flex rounded-xl bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  この診断をはじめる
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <p className="mb-2 text-sm font-semibold text-blue-700">STEP 1</p>
            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              診断を選ぶ
            </h2>
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              自分のタイプを知りたいのか、失敗を避けたいのか、続けやすさを重視したいのかで選びます。
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <p className="mb-2 text-sm font-semibold text-blue-700">STEP 2</p>
            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              質問に答える
            </h2>
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              それぞれの診断テーマに合った5つの質問に答えて、自分に近いタイプを整理します。
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <p className="mb-2 text-sm font-semibold text-blue-700">STEP 3</p>
            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              候補を比較する
            </h2>
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              診断結果から相性の良い候補を見て、その後に詳細ページや公式サイトで条件を確認します。
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
            {comparePoints.map((item) => (
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