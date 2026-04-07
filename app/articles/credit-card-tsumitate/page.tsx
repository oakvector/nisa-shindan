import RelatedArticles from "@/components/RelatedArticles";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "クレカ積立を重視する人の証券口座比較 | NISA向け証券口座診断",
  description:
    "クレカ積立やポイント還元を重視する人向けに、証券口座の選び方を整理した比較記事です。SBI証券、楽天証券、三菱UFJ eスマート証券の見方をまとめています。",
  alternates: {
    canonical: "/articles/credit-card-tsumitate",
  },
};

export default function CreditCardTsumitatePage() {
  const compareRows = [
    {
      point: "向いている人",
      sbi: "総合力や還元の広さも見たい人",
      rakuten: "楽天経済圏を活かしたい人",
      musmart: "au / Ponta経済圏も含めて見たい人",
    },
    {
      point: "お得さの感じやすさ",
      sbi: "条件を比較しながら選びやすい",
      rakuten: "楽天ポイントを活かしやすい",
      musmart: "条件が合えば相性を感じやすい",
    },
    {
      point: "始めやすさ",
      sbi: "慣れると幅広く使いやすい",
      rakuten: "比較的なじみやすい",
      musmart: "条件が合えば使いやすい",
    },
    {
      point: "比較時に見ること",
      sbi: "還元条件と総合力",
      rakuten: "楽天カード・楽天ポイントとの相性",
      musmart: "au / Pontaとの相性や条件",
    },
  ];

  const checkPoints = [
    {
      title: "1. 還元率だけで決めない",
      text: "クレカ積立は還元率が目立ちますが、条件や使い方によって体感は変わります。数字だけで決めるより、自分が実際に使う経済圏とかみ合うかを見る方が失敗しにくいです。",
    },
    {
      title: "2. 普段使うポイントとの相性を見る",
      text: "楽天ポイント、Vポイント、Pontaポイントなど、普段どのポイントを使っているかで納得感が変わります。続けやすさは、制度そのものより日常とのつながりで決まることが多いです。",
    },
    {
      title: "3. お得さと使いやすさのバランスを見る",
      text: "少し還元が高くても、使いにくいと積立自体が続かなくなることがあります。クレカ積立を重視する人ほど、実は使いやすさも同じくらい重要です。",
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
      title: "楽天証券はどんな人に向いている？",
      description:
        "楽天証券が向いている人の特徴や、他社も比較した方がよいケースを整理した記事です。",
      href: "/articles/rakuten-for-who",
      tag: "単独理解",
    },
    {
      title: "三菱UFJ eスマート証券はどんな人に向いている？",
      description:
        "三菱UFJ eスマート証券が向いている人の特徴や、他社も比較した方がよいケースを整理した記事です。",
      href: "/articles/musmart-for-who",
      tag: "単独理解",
    },
  ];

  const breadcrumbs = [
  { label: "ホーム", href: "/" },
  { label: "記事一覧", href: "/articles" },
  { label: "クレカ積立を重視する人の証券口座比較" },
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
            比較記事
          </p>

          <h1 className="mb-5 text-4xl font-bold leading-[1.15] tracking-tight text-slate-950 sm:text-5xl">
            クレカ積立を重視する人の
            <br />
            証券口座比較
          </h1>

          <p className="mb-6 text-base leading-8 text-slate-600 sm:text-lg">
            NISAを始めるときに、クレカ積立を重視して証券口座を選びたい人は多いです。
            ただ、クレカ積立は「還元率が高そうだから」という理由だけで決めると、
            後から使いにくさや相性のズレを感じることがあります。
            この記事では、クレカ積立を重視する人が見たいポイントを整理します。
          </p>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="mb-3 text-sm font-semibold text-slate-950">
              先に結論
            </p>
            <ul className="space-y-2 text-sm leading-7 text-slate-600 sm:text-base">
              <li>・ 総合力や比較のしやすさも見たいなら、SBI証券は候補に入りやすいです。</li>
              <li>・ 楽天ポイントを活かしたいなら、楽天証券は候補に入りやすいです。</li>
              <li>・ au / Ponta 経済圏との相性も見たいなら、三菱UFJ eスマート証券も比較候補に入ります。</li>
              <li>・ 還元だけで決めず、普段使うポイントや続けやすさまで見るのが大事です。</li>
            </ul>
          </div>
        </section>

        <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <div className="mb-5">
            <p className="mb-2 text-sm font-semibold text-blue-700">比較表</p>
            <h2 className="text-2xl font-bold text-slate-950">
              クレカ積立目線でざっくり比べる
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-0 overflow-hidden rounded-2xl border border-slate-200">
              <thead>
                <tr className="bg-slate-100 text-left text-sm text-slate-700">
                  <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                    比較ポイント
                  </th>
                  <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                    SBI証券
                  </th>
                  <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                    楽天証券
                  </th>
                  <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                    三菱UFJ eスマート証券
                  </th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.point} className="bg-white text-sm text-slate-700">
                    <td className="border-b border-slate-200 px-4 py-3 font-medium">
                      {row.point}
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      {row.sbi}
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      {row.rakuten}
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      {row.musmart}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          {checkPoints.map((item) => (
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
          <p className="mb-2 text-sm font-semibold text-blue-700">向いている人</p>
          <h2 className="mb-5 text-2xl font-bold text-slate-950">
            こんな人はクレカ積立重視で選びやすいです
          </h2>

          <div className="grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="mb-2 font-semibold text-slate-950">
                お得さをちゃんと活かしたい人
              </h3>
              <p className="text-sm leading-6 text-slate-600">
                積立を続けるなら、少しでも還元やポイントを活かしたい人に向いています。
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="mb-2 font-semibold text-slate-950">
                普段使う経済圏がある人
              </h3>
              <p className="text-sm leading-6 text-slate-600">
                楽天ポイントや Ponta など、普段の生活で使うポイントがある人は判断しやすいです。
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="mb-2 font-semibold text-slate-950">
                続ける実感が欲しい人
              </h3>
              <p className="text-sm leading-6 text-slate-600">
                ただ積み立てるだけより、少しお得さを感じながら続けたい人に向いています。
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <p className="mb-2 text-sm font-semibold text-blue-700">迷う人向け</p>
          <h2 className="mb-4 text-2xl font-bold text-slate-950">
            クレカ積立を重視する人は、この診断が向いています
          </h2>
          <p className="mb-6 text-sm leading-7 text-slate-600 sm:text-base">
            クレカ積立を重視する人でも、
            「とにかくお得さを見たい」のか、「使いやすさも同じくらい大事」なのか、
            「将来の広がりも見たい」のかで向いている候補は変わります。
            迷う人は、先に診断で自分のタイプを整理すると判断しやすいです。
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
            実際の条件、ポイント制度、クレカ積立条件、取扱商品、キャンペーンなどは変わることがあるため、
            最終的には必ず各公式サイトをご確認ください。
          </p>
        </section>
      </article>

<RelatedArticles heading="クレカ積立重視ならあわせて読みたい記事" articles={relatedArticles} />

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