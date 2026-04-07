import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "楽天証券はどんな人に向いている？ | NISA向け証券口座診断",
  description:
    "楽天証券が向いている人の特徴を整理した記事です。始めやすさ、楽天ポイント活用、なじみやすさを重視する人向けの特徴がわかります。",
  alternates: {
    canonical: "/articles/rakuten-for-who",
  },
};

export default function RakutenForWhoPage() {
  const strongPoints = [
    {
      title: "1. 始めやすさを重視したい人",
      text: "楽天証券は、最初から機能の多さを使いこなすより、まずは始めやすさやなじみやすさを重視したい人に向きやすい候補です。初心者が最初の一歩を踏み出しやすいかどうかは、かなり大事なポイントです。",
    },
    {
      title: "2. 楽天ポイントを活かしたい人",
      text: "普段から楽天ポイントを使っている人にとっては、楽天証券は候補に入りやすいです。ポイントを貯める、使う、活かす流れが日常とつながっていると、積立も続けやすくなります。",
    },
    {
      title: "3. シンプルさとお得さのバランスを見たい人",
      text: "楽天証券は、分かりやすさだけでなく、ポイント活用も気になる人と相性が良いです。『まずは始めやすく、できればお得さも感じたい』という人に向いています。",
    },
  ];

  const maybeNotFit = [
    {
      title: "将来の広がりを最優先する人",
      text: "今後、商品ラインナップや自由度をかなり重視したいなら、SBI証券やマネックス証券も比較した方が納得しやすいです。",
    },
    {
      title: "とにかくシンプルさだけを最優先する人",
      text: "お得さよりも、まずは迷いにくさや安心感だけを重視したいなら、松井証券の方が合うことがあります。",
    },
    {
      title: "楽天経済圏とのつながりをあまり意識しない人",
      text: "楽天証券の強みを感じやすいのは、楽天ポイントや楽天カードとの相性を重視する人です。そこをあまり重視しないなら、他社も比較した方が判断しやすいです。",
    },
  ];

  const breadcrumbs = [
  { label: "ホーム", href: "/" },
  { label: "記事一覧", href: "/articles" },
  { label: "楽天証券はどんな人に向いている？" },
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

      <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumbs items={breadcrumbs} />
        <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 md:p-10">
          <p className="mb-3 text-sm font-semibold tracking-wide text-blue-700">
            単独理解記事
          </p>

          <h1 className="mb-5 text-4xl font-bold leading-[1.15] tracking-tight text-slate-950 sm:text-5xl">
            楽天証券は
            <br />
            どんな人に向いている？
          </h1>

          <p className="mb-6 text-base leading-8 text-slate-600 sm:text-lg">
            楽天証券は、NISAを始めるときの候補としてよく名前が挙がります。
            実際、始めやすさや楽天ポイント活用のしやすさから、初心者にも選ばれやすい候補です。
            ただし、誰にでも一番向いているとは限りません。
            この記事では、楽天証券が向いている人と、他社も見た方がいい人を整理します。
          </p>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="mb-3 text-sm font-semibold text-slate-950">
              先に結論
            </p>
            <ul className="space-y-2 text-sm leading-7 text-slate-600 sm:text-base">
              <li>・ 始めやすさやなじみやすさを重視する人に向いています。</li>
              <li>・ 楽天ポイントを活かしたい人と相性が良いです。</li>
              <li>・ 一方で、将来の広がりや商品ラインナップを最優先する人は他社も比較した方が納得しやすいです。</li>
            </ul>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          {strongPoints.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8"
            >
              <h2 className="mb-4 text-2xl font-bold text-slate-950">
                {item.title}
              </h2>
              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                {item.text}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <p className="mb-2 text-sm font-semibold text-blue-700">他社も見たい人</p>
          <h2 className="mb-5 text-2xl font-bold text-slate-950">
            こんな人は別の候補も比較した方がいいです
          </h2>

          <div className="grid gap-4 lg:grid-cols-3">
            {maybeNotFit.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <h3 className="mb-2 font-semibold text-slate-950">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <p className="mb-2 text-sm font-semibold text-blue-700">迷う人向け</p>
          <h2 className="mb-4 text-2xl font-bold text-slate-950">
            楽天証券が合うか迷うなら、診断で整理するのがおすすめです
          </h2>
          <p className="mb-6 text-sm leading-7 text-slate-600 sm:text-base">
            楽天証券が向くのは、主に「始めやすさ」「ポイント活用」「なじみやすさ」を重視する人です。
            逆に、総合力重視なのか、将来の広がり重視なのかで候補は変わります。
            まだ自分の軸がはっきりしていないなら、先に診断で整理した方が判断しやすいです。
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="/shindan/style"
              className="rounded-xl bg-slate-950 px-6 py-3 text-center font-medium text-white transition hover:opacity-90"
            >
              資産形成スタイル診断をやってみる
            </a>
            <a
              href="/shindan/continue-style"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-center font-medium text-slate-700 transition hover:bg-slate-100"
            >
              続けやすさ診断を見る
            </a>
          </div>
        </section>

        <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <p className="mb-2 text-sm font-semibold text-blue-700">注意</p>
          <h2 className="mb-4 text-2xl font-bold text-slate-950">
            最後は公式サイトで確認してください
          </h2>
          <p className="text-sm leading-7 text-slate-600 sm:text-base">
            本記事は一般的な比較の整理を目的としています。
            実際の条件、取扱商品、ポイント制度、キャンペーンなどは変わることがあるため、
            最終的には必ず各公式サイトをご確認ください。
          </p>
        </section>
      </article>

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