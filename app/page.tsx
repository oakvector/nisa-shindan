export default function Home() {
  const comparisonPoints = [
    {
      title: "クレカ積立対応",
      text: "クレジットカード積立に対応しているかを比較します。",
    },
    {
      title: "ポイント還元",
      text: "積立や利用時のポイント還元の違いを整理します。",
    },
    {
      title: "使いやすさ",
      text: "初心者でも使いやすいか、操作性の観点で確認します。",
    },
    {
      title: "米国株対応",
      text: "米国株や商品ラインナップの広さも比較対象に含めます。",
    },
    {
      title: "初心者向けか",
      text: "これから始める人でも選びやすいサービスかを見ます。",
    },
    {
      title: "少額積立のしやすさ",
      text: "少額から始めやすいかどうかも重視しています。",
    },
  ];

  const targetUsers = [
    "これからNISAを始めたい",
    "証券口座の違いがよく分からない",
    "クレカ積立やポイント還元を重視したい",
    "候補を絞ってから公式サイトを見たい",
  ];

  const steps = [
    {
      step: "STEP 1",
      title: "5つの質問に答える",
      text: "投資経験や重視する条件を選びます。",
    },
    {
      step: "STEP 2",
      title: "候補を確認する",
      text: "条件に合う証券口座候補を順位つきで表示します。",
    },
    {
      step: "STEP 3",
      title: "詳細を比較して公式サイトへ",
      text: "各候補の特徴を見たうえで、公式サイトを確認します。",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="/" className="min-w-0">
            <p className="truncate text-sm font-semibold tracking-wide text-blue-700">
              NISA向け証券口座診断
            </p>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
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

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <p className="mb-4 text-sm font-semibold tracking-wide text-blue-700">
              NISA・証券口座選びをシンプルに
            </p>

            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
              5問でわかる
              <br />
              NISA向け証券口座診断
            </h1>

            <p className="mb-6 text-base leading-8 text-slate-600 sm:text-lg">
              クレカ積立、ポイント還元、使いやすさ、米国株対応などの観点から、
              あなたに合う証券口座候補を整理しやすくする診断サイトです。
            </p>

            <div className="mb-4 flex flex-col gap-3 sm:flex-row">
              <a
                href="/shindan"
                className="rounded-xl bg-slate-950 px-6 py-3 text-center font-medium text-white transition hover:opacity-90"
              >
                診断をはじめる
              </a>

              <a
                href="/how-it-works"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-center font-medium text-slate-700 transition hover:bg-slate-100"
              >
                このサイトの使い方
              </a>
            </div>

            <p className="mb-6 text-sm text-slate-500">
              5問・30秒で完了 / 無料 / 会員登録不要
            </p>

            <div className="flex flex-wrap gap-2.5">
              {["クレカ積立", "ポイント還元", "初心者向け", "米国株対応", "少額積立"].map(
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

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <p className="mb-4 text-sm font-semibold text-blue-700">
              このサイトでできること
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-1 text-sm font-semibold text-slate-950">
                  5つの質問で候補を絞る
                </p>
                <p className="text-sm leading-6 text-slate-600">
                  投資経験や重視したい条件から、証券口座候補を整理します。
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-1 text-sm font-semibold text-slate-950">
                  候補の違いを比較する
                </p>
                <p className="text-sm leading-6 text-slate-600">
                  使いやすさやクレカ積立対応など、比較しやすい形で特徴を見られます。
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-1 text-sm font-semibold text-slate-950">
                  公式サイト確認前の整理に使う
                </p>
                <p className="text-sm leading-6 text-slate-600">
                  いきなり各社サイトを見る前に、自分に合う候補を把握しやすくします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 sm:pb-20">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <div className="mb-6 flex flex-col gap-2">
            <p className="text-sm font-semibold text-blue-700">比較軸</p>
            <h2 className="text-2xl font-bold text-slate-950">
              このサイトで比較しているポイント
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {comparisonPoints.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <h3 className="mb-2 font-semibold text-slate-950">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 sm:pb-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <p className="mb-2 text-sm font-semibold text-blue-700">対象ユーザー</p>
            <h2 className="mb-5 text-2xl font-bold text-slate-950">
              こんな人に向いています
            </h2>

            <ul className="space-y-3">
              {targetUsers.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <p className="mb-2 text-sm font-semibold text-blue-700">診断の流れ</p>
            <h2 className="mb-5 text-2xl font-bold text-slate-950">
              3ステップで使えます
            </h2>

            <div className="space-y-4">
              {steps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <p className="mb-1 text-sm font-semibold text-blue-700">
                    {item.step}
                  </p>
                  <p className="font-semibold text-slate-950">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <p className="mb-2 text-sm font-semibold text-blue-700">ご利用前の注意</p>
          <h2 className="mb-4 text-2xl font-bold text-slate-950">
            ご利用前にご確認ください
          </h2>
          <p className="text-sm leading-7 text-slate-600 sm:text-base">
            本サイトは一般的な情報提供を目的としており、特定の投資判断を推奨するものではありません。
            掲載内容はできる限り見直しを行いますが、手数料、取扱商品、キャンペーン、
            口座開設条件などの最新情報は必ず各公式サイトをご確認ください。
          </p>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
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
            <a
              href="/disclosure"
              className="hover:text-slate-900 hover:underline"
            >
              Disclosure
            </a>
            <a
              href="/how-it-works"
              className="hover:text-slate-900 hover:underline"
            >
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