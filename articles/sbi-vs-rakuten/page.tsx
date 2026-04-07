export default function SbiVsRakutenPage() {
  const compareRows = [
    {
      point: "向いている人",
      sbi: "総合力や選択肢の広さも重視したい人",
      rakuten: "始めやすさやポイント活用を重視したい人",
    },
    {
      point: "ポイント活用",
      sbi: "複数のポイント経済圏を比較しやすい",
      rakuten: "楽天ポイントとの相性を感じやすい",
    },
    {
      point: "クレカ積立",
      sbi: "還元や組み合わせを広く見たい人向け",
      rakuten: "楽天カードとの組み合わせを考えやすい",
    },
    {
      point: "使いやすさ",
      sbi: "慣れると幅広く使いやすい",
      rakuten: "比較的なじみやすく始めやすい",
    },
    {
      point: "商品ラインナップ",
      sbi: "広く比較したい人に向く",
      rakuten: "基本を押さえつつ始めたい人に向く",
    },
  ];

  const sbiFor = [
    "ポイントだけでなく、総合力でも選びたい",
    "今後の選択肢の広さも気になる",
    "1社で広く使える候補を探したい",
  ];

  const rakutenFor = [
    "まずは始めやすさを重視したい",
    "楽天ポイントを活かしたい",
    "なるべくなじみやすい候補から選びたい",
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

      <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 md:p-10">
          <p className="mb-3 text-sm font-semibold tracking-wide text-blue-700">
            比較記事
          </p>

          <h1 className="mb-5 text-4xl font-bold leading-[1.15] tracking-tight text-slate-950 sm:text-5xl">
            SBI証券と楽天証券の違いは？
          </h1>

          <p className="mb-6 text-base leading-8 text-slate-600 sm:text-lg">
            NISAを始めるときに、SBI証券と楽天証券で迷う人はとても多いです。
            どちらが良いかは一概には決められず、
            「何を重視するか」で向いている候補が変わります。
            この記事では、違いをシンプルに整理します。
          </p>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="mb-3 text-sm font-semibold text-slate-950">
              先に結論
            </p>
            <ul className="space-y-2 text-sm leading-7 text-slate-600 sm:text-base">
              <li>・ 総合力や選択肢の広さを見たいなら、SBI証券が候補に入りやすいです。</li>
              <li>・ 始めやすさや楽天ポイント活用を重視するなら、楽天証券が候補に入りやすいです。</li>
              <li>・ 迷う人は、会社名だけで決めるより先に診断で自分のタイプを整理した方が判断しやすいです。</li>
            </ul>
          </div>
        </section>

        <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <div className="mb-5">
            <p className="mb-2 text-sm font-semibold text-blue-700">比較表</p>
            <h2 className="text-2xl font-bold text-slate-950">
              SBI証券と楽天証券をざっくり比べる
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <p className="mb-2 text-sm font-semibold text-blue-700">SBI証券</p>
            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              SBI証券が向いている人
            </h2>
            <ul className="space-y-3">
              {sbiFor.map((item) => (
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
            <p className="mb-2 text-sm font-semibold text-blue-700">楽天証券</p>
            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              楽天証券が向いている人
            </h2>
            <ul className="space-y-3">
              {rakutenFor.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <p className="mb-2 text-sm font-semibold text-blue-700">見るポイント</p>
          <h2 className="mb-5 text-2xl font-bold text-slate-950">
            迷ったときに見るべき違い
          </h2>

          <div className="space-y-6 text-sm leading-7 text-slate-600 sm:text-base">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-slate-950">
                1. ポイント活用をどれくらい重視するか
              </h3>
              <p>
                楽天ポイントを普段から使っている人にとっては、楽天証券は候補に入りやすいです。
                一方で、ポイントだけでなく総合力も見たいなら、SBI証券も有力候補になります。
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-slate-950">
                2. 使いやすさを優先するか、選択肢の広さを優先するか
              </h3>
              <p>
                まずは始めやすさを大事にしたい人は楽天証券がなじみやすく感じる場合があります。
                将来の広がりや商品ラインナップまで見たい人は、SBI証券の方が合いやすいことがあります。
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-slate-950">
                3. 会社名で決めるより、自分のタイプを先に整理する
              </h3>
              <p>
                本当によくあるのが、「SBIか楽天か」で先に迷ってしまうことです。
                でも実際には、どちらが向くかは自分が何を重視するかで変わります。
                迷う人ほど、先に診断で整理した方が納得しやすいです。
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <p className="mb-2 text-sm font-semibold text-blue-700">迷う人向け</p>
          <h2 className="mb-4 text-2xl font-bold text-slate-950">
            まだ迷うなら、診断で整理するのがおすすめです
          </h2>
          <p className="mb-6 text-sm leading-7 text-slate-600 sm:text-base">
            SBI証券と楽天証券のどちらが良いかは、
            ポイント重視なのか、使いやすさ重視なのか、将来の広がりを見たいのかで変わります。
            迷ったまま比較を続けるより、先に自分のタイプを整理した方が判断しやすくなります。
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="/shindan/style"
              className="rounded-xl bg-slate-950 px-6 py-3 text-center font-medium text-white transition hover:opacity-90"
            >
              資産形成スタイル診断をやってみる
            </a>
            <a
              href="/shindan"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-center font-medium text-slate-700 transition hover:bg-slate-100"
            >
              診断一覧を見る
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
    </main>
  );
}