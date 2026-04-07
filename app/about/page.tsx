import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | NISA向け証券口座診断",
  description:
    "NISA向け証券口座診断のサイト概要ページです。診断と比較記事を通して、証券口座選びをわかりやすく整理することを目的としています。",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
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
              運営者情報
            </p>

            <h1 className="mb-5 text-4xl font-bold leading-[1.15] tracking-tight text-slate-950 sm:text-5xl">
              このサイトについて
            </h1>

            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              このサイトは、NISAや証券口座選びで迷っている人向けに、
              比較情報と診断コンテンツを提供することを目的とした情報サイトです。
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {["比較情報", "診断コンテンツ", "初心者向け", "公式サイト確認前の整理"].map(
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
          </div>

          <div className="space-y-5">
            <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
              <h2 className="mb-4 text-2xl font-bold text-slate-950">
                このサイトで扱う内容
              </h2>
              <div className="space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
                <p>
                  投資経験、重視するポイント、クレカ積立、米国株対応、
                  少額積立のしやすさなどの比較軸から、証券口座候補を整理しやすい形で掲載しています。
                </p>
                <p>
                  現在は、SBI証券、楽天証券、マネックス証券、
                  三菱UFJ eスマート証券、松井証券を比較対象として扱っています。
                </p>
              </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
              <h2 className="mb-4 text-2xl font-bold text-slate-950">
                サイトの考え方
              </h2>
              <div className="space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
                <p>
                  いきなり各証券会社の公式情報を見るのではなく、
                  まず候補を整理してから詳細を比較したい人向けの入口として使えることを目指しています。
                </p>
                <p>
                  診断結果は候補整理の参考情報であり、最終的な条件確認や判断は各公式サイトを前提としています。
                </p>
              </div>
            </section>
          </div>
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