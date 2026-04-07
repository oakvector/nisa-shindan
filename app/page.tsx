export default function Home() {
  const comparisonPoints = [
    {
      label: "積立",
      title: "クレカ積立対応",
      text: "クレジットカード積立に対応しているかを比較します。",
    },
    {
      label: "還元",
      title: "ポイント還元",
      text: "積立や利用時のポイント還元の違いを整理します。",
    },
    {
      label: "操作性",
      title: "使いやすさ",
      text: "初心者でも使いやすいか、操作性の観点で確認します。",
    },
    {
      label: "商品",
      title: "米国株対応",
      text: "米国株や商品ラインナップの広さも比較対象に含めます。",
    },
    {
      label: "初心者",
      title: "初心者向けか",
      text: "これから始める人でも選びやすいサービスかを見ます。",
    },
    {
      label: "少額",
      title: "少額積立のしやすさ",
      text: "少額から始めやすいかどうかも重視しています。",
    },
  ];

  const targetUsers = [
    "これからNISAを始めたい",
    "証券口座の違いがよく分からない",
    "自分に合う選び方を先に整理したい",
    "候補を絞ってから公式サイトを見たい",
  ];

  const diagnosisCards = [
    {
      title: "あなたの資産形成スタイル診断",
      text: "どんな考え方で口座を選ぶと納得しやすいかを整理する、いちばん基本の診断です。",
      href: "/shindan/style",
      status: "公開中",
    },
    {
      title: "NISAで失敗しにくい口座タイプ診断",
      text: "避けたい失敗や不安から、自分に合う口座タイプを探す診断です。",
      href: "/shindan/failure-safe",
      status: "公開中",
    },
    {
      title: "あなたに合う続けやすい投資スタイル診断",
      text: "無理なく続けやすい投資の形から、相性の良い候補を整理する診断です。",
      href: "/shindan/continue-style",
      status: "公開中",
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
            <a href="/how-it-works" className="transition hover:text-slate-900">
              使い方
            </a>
            <a href="/about" className="transition hover:text-slate-900">
              About
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 md:p-10">
            <p className="mb-4 text-sm font-semibold tracking-wide text-blue-700">
              NISA・証券口座選びをシンプルに
            </p>

            <h1 className="mb-5 text-4xl font-bold leading-[1.15] tracking-tight text-slate-950 sm:text-5xl">
              3つの診断からわかる
              <br />
              <span className="whitespace-nowrap">あなたに合う証券口座の選び方</span>
            </h1>

            <p className="mb-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              「自分のタイプ」「失敗しにくさ」「続けやすさ」の3つの切り口から、
              あなたに合う証券口座候補を整理しやすくする診断サイトです。
              いきなり証券会社を決める前に、まず自分に合う選び方を見つけられます。
            </p>

            <div className="mb-3 flex flex-col gap-3 sm:flex-row">
              <a
                href="/shindan"
                className="rounded-xl bg-slate-950 px-6 py-3 text-center font-medium text-white transition hover:opacity-90"
              >
                診断一覧を見る
              </a>

              <a
                href="/shindan/style"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-center font-medium text-slate-700 transition hover:bg-slate-100"
              >
                まずは基本診断をやってみる
              </a>
            </div>

            <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
              <span>公開中の診断 3本</span>
              <span>無料</span>
              <span>会員登録不要</span>
            </div>

            <div className="mb-5 flex flex-wrap gap-2.5">
              {[
                "資産形成スタイル",
                "失敗しにくさ",
                "続けやすさ",
                "ポイント還元",
                "米国株対応",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href="/shindan"
                className="font-medium text-blue-700 hover:underline"
              >
                3つの診断を見る
              </a>
              <a
                href="/about"
                className="font-medium text-slate-600 hover:text-slate-900 hover:underline"
              >
                このサイトについて
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-7 md:p-8">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm font-semibold text-blue-700">
                このサイトでできること
              </p>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                3診断公開中
              </span>
            </div>

            <div className="space-y-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-2 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                    1
                  </span>
                  <p className="text-sm font-semibold text-slate-950">
                    3つの切り口から選べる
                  </p>
                </div>
                <p className="text-sm leading-6 text-slate-600">
                  自分のタイプ、失敗しにくさ、続けやすさの3つの視点から診断できます。
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-2 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                    2
                  </span>
                  <p className="text-sm font-semibold text-slate-950">
                    自分に合う選び方が先にわかる
                  </p>
                </div>
                <p className="text-sm leading-6 text-slate-600">
                  いきなり会社名で選ぶ前に、自分がどんな基準で選ぶべきかを整理できます。
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-2 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                    3
                  </span>
                  <p className="text-sm font-semibold text-slate-950">
                    候補を絞ってから比較できる
                  </p>
                </div>
                <p className="text-sm leading-6 text-slate-600">
                  診断結果で候補を絞ったあとに、詳細ページや公式サイトを確認しやすくします。
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4">
              <p className="mb-2 text-sm font-semibold text-slate-950">
                いま公開中の診断
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "資産形成スタイル診断",
                  "失敗しにくい診断",
                  "続けやすさ診断",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <div className="mb-6 flex flex-col gap-2">
            <p className="text-sm font-semibold text-blue-700">公開中の診断</p>
            <h2 className="text-2xl font-bold text-slate-950">
              目的に合う診断を選ぶ
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {diagnosisCards.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="mb-3">
                  <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    {item.status}
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
                <span className="mb-3 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {item.label}
                </span>
                <h3 className="mb-2 font-semibold text-slate-950">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20">
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
              まずは3つの中から選べます
            </h2>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-1 text-sm font-semibold text-blue-700">
                  STEP 1
                </p>
                <p className="font-semibold text-slate-950">
                  診断テーマを選ぶ
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  自分に近い切り口の診断を一覧から選びます。
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-1 text-sm font-semibold text-blue-700">
                  STEP 2
                </p>
                <p className="font-semibold text-slate-950">
                  質問に答える
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  それぞれの診断テーマに合った質問に答えて、自分のタイプを整理します。
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-1 text-sm font-semibold text-blue-700">
                  STEP 3
                </p>
                <p className="font-semibold text-slate-950">
                  候補を比べて公式サイトへ
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  タイプ結果と候補を見たうえで、詳細ページや公式サイトを確認します。
                </p>
              </div>
            </div>
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
            掲載内容はできる限り見直しを行いますが、手数料、取扱商品、キャンペーン、
            口座開設条件などの最新情報は必ず各公式サイトをご確認ください。
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