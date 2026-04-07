import RelatedArticles from "@/components/RelatedArticles";

export default function MatsuiForBeginnersPage() {
  const merits = [
    {
      title: "1. シンプルで始めやすい",
      text: "初心者が最初につまずきやすいのは、機能が多すぎて何を見ればいいか分からなくなることです。松井証券は、まず始めやすさや分かりやすさを重視したい人に向きやすい候補です。",
    },
    {
      title: "2. 『とりあえず始める』のハードルを下げやすい",
      text: "最初から完璧な口座を選ぼうとすると、比較疲れで止まりやすくなります。松井証券のようなシンプル寄りの候補は、まず始めるハードルを下げたい人に相性が良いです。",
    },
    {
      title: "3. サポートや安心感を重視する人と相性がいい",
      text: "初心者のうちは、困ったときに分かりやすい案内やサポートがあるだけでも続けやすさが変わります。『難しすぎるのは不安』という人には特に向いています。",
    },
  ];

  const cautionPoints = [
    {
      title: "商品ラインナップを最優先する人",
      text: "最初から幅広い商品や将来の広がりを強く重視する人は、SBI証券やマネックス証券なども比較した方が納得しやすいです。",
    },
    {
      title: "ポイント還元を最優先する人",
      text: "クレカ積立やポイント活用を強く重視する人は、楽天証券やSBI証券、三菱UFJ eスマート証券も候補に入ります。",
    },
    {
      title: "『無難さ』より『お得さ』が大事な人",
      text: "松井証券は、どちらかといえばシンプルさや始めやすさ寄りです。お得さを一番の軸にするなら、別の候補の方が合うことがあります。",
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
            単独理解記事
          </p>

          <h1 className="mb-5 text-4xl font-bold leading-[1.15] tracking-tight text-slate-950 sm:text-5xl">
            松井証券は初心者向きか？
          </h1>

          <p className="mb-6 text-base leading-8 text-slate-600 sm:text-lg">
            松井証券は、初心者向けの候補としてよく名前が挙がります。
            実際、シンプルさや始めやすさを重視する人とは相性が良い場面があります。
            ただし、初心者向きかどうかは「どんな初心者か」で少し変わります。
            この記事では、松井証券が向いている人と、他社も見た方がよい人を整理します。
          </p>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="mb-3 text-sm font-semibold text-slate-950">
              先に結論
            </p>
            <ul className="space-y-2 text-sm leading-7 text-slate-600 sm:text-base">
              <li>・ むずかしすぎる口座は避けたい人には、松井証券は候補に入りやすいです。</li>
              <li>・ シンプルさ、始めやすさ、安心感を重視する人と相性が良いです。</li>
              <li>・ 一方で、ポイント還元や商品数を最優先する人は、他社も比較した方が納得しやすいです。</li>
            </ul>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          {merits.map((item) => (
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
          <p className="mb-2 text-sm font-semibold text-blue-700">注意したい点</p>
          <h2 className="mb-5 text-2xl font-bold text-slate-950">
            こんな人は他社も比較した方がいいです
          </h2>

          <div className="grid gap-4 lg:grid-cols-3">
            {cautionPoints.map((item) => (
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
            松井証券が合うか迷うなら、診断で整理するのがおすすめです
          </h2>
          <p className="mb-6 text-sm leading-7 text-slate-600 sm:text-base">
            松井証券が向くのは、主に「始めやすさ」「分かりやすさ」「安心感」を重視する人です。
            逆に、お得さ重視なのか、将来の広がり重視なのかで候補は変わります。
            自分に合う選び方がまだはっきりしていないなら、先に診断で整理した方が判断しやすいです。
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
            実際の条件、取扱商品、キャンペーン、サポート内容などは変わることがあるため、
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