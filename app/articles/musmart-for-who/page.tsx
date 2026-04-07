import RelatedArticles from "@/components/RelatedArticles";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "三菱UFJ eスマート証券はどんな人に向いている？ | NISA向け証券口座診断",
  description:
    "三菱UFJ eスマート証券が向いている人の特徴を整理した記事です。少額から始めたい人や、お得さと続けやすさのバランスを重視する人向けの特徴がわかります。",
  alternates: {
    canonical: "/articles/musmart-for-who",
  },
};

export default function MusmartForWhoPage() {
  const strongPoints = [
    {
      title: "1. 条件が合うと使いやすさを感じやすい人",
      text: "三菱UFJ eスマート証券は、誰にでも一番向いているというより、条件が合う人には相性を感じやすい候補です。特に、普段のポイント利用や積立の相性を見ながら選びたい人には候補に入りやすいです。",
    },
    {
      title: "2. 少額から無理なく始めたい人",
      text: "NISAを始めるときは、最初から完璧を目指すより、無理なく続けられることの方が大切です。三菱UFJ eスマート証券は、少額から始めながら自分に合う形を探したい人とも相性があります。",
    },
    {
      title: "3. お得さと続けやすさの両方を見たい人",
      text: "ポイントやクレカ積立を重視する人でも、使いにくいと続かなくなります。三菱UFJ eスマート証券は、条件が合えば『お得さ』と『無理のなさ』のバランスを見たい人に向きやすい候補です。",
    },
  ];

  const maybeNotFit = [
    {
      title: "商品ラインナップの広さを最優先する人",
      text: "最初から商品の多さや将来の広がりを強く重視するなら、SBI証券やマネックス証券も比較した方が納得しやすいです。",
    },
    {
      title: "とにかく分かりやすさだけを重視する人",
      text: "まずはシンプルさや安心感を最優先したいなら、松井証券や楽天証券の方がなじみやすく感じることがあります。",
    },
    {
      title: "自分の経済圏をあまり意識していない人",
      text: "三菱UFJ eスマート証券は、相性が合うと強みを感じやすいタイプです。普段使うポイントやお得さとのつながりを重視しない人は、他社の方が判断しやすいことがあります。",
    },
  ];

    const relatedArticles = [
    {
      title: "クレカ積立を重視する人の証券口座比較",
      description:
        "クレカ積立やポイント還元を重視する人向けに、証券口座の見方を整理した比較記事です。",
      href: "/articles/credit-card-tsumitate",
      tag: "比較記事",
    },
    {
      title: "楽天証券はどんな人に向いている？",
      description:
        "楽天証券が向いている人の特徴や、他社も比較した方がよいケースを整理した記事です。",
      href: "/articles/rakuten-for-who",
      tag: "単独理解",
    },
    {
      title: "SBI証券はどんな人に向いている？",
      description:
        "SBI証券が向いている人の特徴や、他社も比較した方がよいケースを整理した記事です。",
      href: "/articles/sbi-for-who",
      tag: "単独理解",
    },
  ];

  const breadcrumbs = [
  { label: "ホーム", href: "/" },
  { label: "記事一覧", href: "/articles" },
  { label: "三菱UFJ eスマート証券はどんな人に向いている？" },
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
            三菱UFJ eスマート証券は
            <br />
            どんな人に向いている？
          </h1>

          <p className="mb-6 text-base leading-8 text-slate-600 sm:text-lg">
            三菱UFJ eスマート証券は、診断で出てきても特徴がイメージしにくいと感じる人が多いです。
            実際には、誰にでも同じように向くというより、
            条件が合う人には相性を感じやすいタイプの候補です。
            この記事では、向いている人と、他社も見た方がいい人を整理します。
          </p>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="mb-3 text-sm font-semibold text-slate-950">
              先に結論
            </p>
            <ul className="space-y-2 text-sm leading-7 text-slate-600 sm:text-base">
              <li>・ 少額から無理なく始めたい人には候補に入りやすいです。</li>
              <li>・ お得さと続けやすさのバランスを見たい人と相性が良いです。</li>
              <li>・ 一方で、商品数の多さや自由度を最優先する人は他社も比較した方が納得しやすいです。</li>
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
            三菱UFJ eスマート証券が合うか迷うなら、診断で整理するのがおすすめです
          </h2>
          <p className="mb-6 text-sm leading-7 text-slate-600 sm:text-base">
            三菱UFJ eスマート証券が向くのは、主に「少額から始めたい」「お得さも見たい」「無理なく続けたい」人です。
            逆に、商品数や将来の広がりを重視するのか、分かりやすさを最優先するのかで候補は変わります。
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
            実際の条件、取扱商品、キャンペーンなどは変わることがあるため、
            最終的には必ず各公式サイトをご確認ください。
          </p>
        </section>
      </article>

<RelatedArticles heading="お得さと続けやすさで比較したい人向けの関連記事" articles={relatedArticles} />

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