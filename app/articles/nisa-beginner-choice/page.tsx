export default function NisaBeginnerChoicePage() {
  const points = [
    {
      title: "1. まずは『使いやすさ』を軽視しない",
      text: "NISAは長く続ける前提の人が多いので、最初に使いにくいと感じると、そのまま放置しやすくなります。初心者のうちは、機能の多さより、わかりやすさや始めやすさを重視した方が失敗しにくいです。",
    },
    {
      title: "2. ポイントや還元だけで決めない",
      text: "ポイント還元は魅力ですが、それだけで決めると後から使いにくさや物足りなさを感じることがあります。還元は大事な比較軸ですが、使いやすさや商品ラインナップと合わせて見るのが安心です。",
    },
    {
      title: "3. 『将来どうしたいか』も少しだけ考える",
      text: "今はNISAの積立だけを考えていても、あとから米国株や他の商品に興味が出ることがあります。最初から完璧に決める必要はありませんが、将来の広がりも少し意識すると後悔が減ります。",
    },
  ];

  const beginnerPatterns = [
    {
      title: "まずは始めやすさを重視したい人",
      text: "むずかしすぎると続かない不安がある人は、使いやすさやなじみやすさを優先して選ぶと安心です。",
    },
    {
      title: "お得さもちゃんと活かしたい人",
      text: "クレカ積立やポイント還元を活かしたい人は、経済圏との相性や還元条件を見ながら選ぶと納得しやすいです。",
    },
    {
      title: "将来の選択肢も残したい人",
      text: "今は初心者でも、あとから商品ラインナップや米国株対応が気になる人は、総合力や拡張性も見ておくと安心です。",
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

      <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 md:p-10">
          <p className="mb-3 text-sm font-semibold tracking-wide text-blue-700">
            選び方ガイド
          </p>

          <h1 className="mb-5 text-4xl font-bold leading-[1.15] tracking-tight text-slate-950 sm:text-5xl">
            NISA初心者に向いている
            <br />
            証券口座の選び方
          </h1>

          <p className="mb-6 text-base leading-8 text-slate-600 sm:text-lg">
            NISAを始めたいけれど、証券口座が多くて違いが分からない。
            そんなときは、いきなり会社名で決めるより、
            まず「自分は何を重視したいのか」を整理した方が失敗しにくいです。
            この記事では、初心者が見落としやすいポイントをシンプルにまとめます。
          </p>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="mb-3 text-sm font-semibold text-slate-950">
              先に結論
            </p>
            <ul className="space-y-2 text-sm leading-7 text-slate-600 sm:text-base">
              <li>・ 初心者は、まず「使いやすさ」と「続けやすさ」を重視した方が安心です。</li>
              <li>・ ポイント還元だけで決めず、使いやすさや将来の選択肢も合わせて見た方が後悔しにくいです。</li>
              <li>・ 迷う人は、先に診断で自分のタイプを整理すると選びやすくなります。</li>
            </ul>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          {points.map((item) => (
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
          <p className="mb-2 text-sm font-semibold text-blue-700">よくあるタイプ</p>
          <h2 className="mb-5 text-2xl font-bold text-slate-950">
            初心者でも重視するポイントは人によって違います
          </h2>

          <div className="grid gap-4 lg:grid-cols-3">
            {beginnerPatterns.map((item) => (
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
            初心者こそ、先に診断で整理するのがおすすめです
          </h2>
          <p className="mb-6 text-sm leading-7 text-slate-600 sm:text-base">
            初心者に向いている口座はひとつに決まるわけではありません。
            「始めやすさ重視なのか」「お得さ重視なのか」「将来の広がりを見たいのか」で、
            向いている候補は変わります。迷う人は、まず診断で自分のタイプを整理した方が判断しやすいです。
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
            実際の条件、ポイント制度、クレカ積立条件、取扱商品、キャンペーンなどは変わることがあるため、
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