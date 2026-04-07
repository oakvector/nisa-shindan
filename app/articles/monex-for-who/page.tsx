import RelatedArticles from "@/components/RelatedArticles";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function MonexForWhoPage() {
  const strongPoints = [
    {
      title: "1. 将来の選択肢も見ながら選びたい人",
      text: "今はNISA中心でも、あとから米国株やほかの投資にも興味が広がる人は少なくありません。マネックス証券は、最初の使いやすさだけでなく、その先の広がりまで意識したい人に向きやすい候補です。",
    },
    {
      title: "2. 商品ラインナップを重視したい人",
      text: "最初は初心者でも、あとから『もっと選べる方がよかった』と感じる人はいます。商品数や比較できる幅を重視する人にとって、マネックス証券は候補に入りやすいです。",
    },
    {
      title: "3. シンプルさより自由度を重視したい人",
      text: "とにかく分かりやすいことを優先する人より、多少情報量があっても、自分で比較しながら選びたい人との相性が良いです。",
    },
  ];

  const maybeNotFit = [
    {
      title: "まずは分かりやすさを最優先したい人",
      text: "最初のハードルをできるだけ下げたいなら、松井証券や楽天証券の方がなじみやすく感じることがあります。",
    },
    {
      title: "ポイント還元を一番重視する人",
      text: "クレカ積立やポイント活用を最優先するなら、SBI証券や楽天証券、三菱UFJ eスマート証券も比較した方が納得しやすいです。",
    },
    {
      title: "『まずは無難に』で決めたい人",
      text: "機能の広さより、無難さや安心感を重視したい人は、総合力寄りの候補も合わせて見た方が判断しやすいです。",
    },
  ];

    const relatedArticles = [
    {
      title: "SBI証券はどんな人に向いている？",
      description:
        "SBI証券が向いている人の特徴や、他社も比較した方がよいケースを整理した記事です。",
      href: "/articles/sbi-for-who",
      tag: "単独理解",
    },
    {
      title: "三菱UFJ eスマート証券はどんな人に向いている？",
      description:
        "三菱UFJ eスマート証券が向いている人の特徴や、他社も比較した方がよいケースを整理した記事です。",
      href: "/articles/musmart-for-who",
      tag: "単独理解",
    },
    {
      title: "SBI証券と楽天証券の違いは？",
      description:
        "NISAを始めるときに迷いやすい2社の違いを、初心者にもわかりやすく整理した比較記事です。",
      href: "/articles/sbi-vs-rakuten",
      tag: "比較記事",
    },
  ];

  const breadcrumbs = [
  { label: "ホーム", href: "/" },
  { label: "記事一覧", href: "/articles" },
  { label: "マネックス証券はどんな人に向いている？" },
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
            マネックス証券は
            <br />
            どんな人に向いている？
          </h1>

          <p className="mb-6 text-base leading-8 text-slate-600 sm:text-lg">
            マネックス証券は、診断結果で出てきても他社よりイメージしにくいと感じる人が多いです。
            実際には、誰にでも一番向いているというより、
            「将来の広がり」や「商品ラインナップ」を重視する人と相性が良い候補です。
            この記事では、向いている人と、他社も見た方がいい人を整理します。
          </p>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="mb-3 text-sm font-semibold text-slate-950">
              先に結論
            </p>
            <ul className="space-y-2 text-sm leading-7 text-slate-600 sm:text-base">
              <li>・ 今は初心者でも、将来の選択肢を残しておきたい人に向いています。</li>
              <li>・ 商品ラインナップや自由度を重視する人と相性が良いです。</li>
              <li>・ 一方で、始めやすさやポイント還元を最優先する人は、他社の方が合うことがあります。</li>
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
            マネックス証券が合うか迷うなら、診断で整理するのがおすすめです
          </h2>
          <p className="mb-6 text-sm leading-7 text-slate-600 sm:text-base">
            マネックス証券が向くのは、主に「将来の広がり」「商品ラインナップ」「自由度」を重視する人です。
            逆に、始めやすさ重視なのか、お得さ重視なのかで候補は変わります。
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
              href="/shindan/failure-safe"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-center font-medium text-slate-700 transition hover:bg-slate-100"
            >
              失敗しにくい診断を見る
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

<RelatedArticles heading="将来の広がりを重視する人向けの関連記事" articles={relatedArticles} />

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