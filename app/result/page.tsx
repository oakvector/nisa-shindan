type ResultPageProps = {
  searchParams: Promise<{
    experience?: string;
    focus?: string;
    usStocks?: string;
    creditCard?: string;
    monthly?: string;
  }>;
};

type ServiceResult = {
  name: string;
  slug: string;
  score: number;
  reason: string;
  strengths: string[];
  caution: string;
};

export default async function ResultPage({ searchParams }: ResultPageProps) {
  const params = await searchParams;

  const experience = params.experience ?? "";
  const focus = params.focus ?? "";
  const usStocks = params.usStocks ?? "";
  const creditCard = params.creditCard ?? "";
  const monthly = params.monthly ?? "";

  const results: ServiceResult[] = [
    {
      name: "SBI証券",
      slug: "sbi-sec",
      score: 0,
      reason: "",
      strengths: [
        "総合力が高い",
        "クレカ積立と相性が良い",
        "ポイント活用の選択肢が広い",
      ],
      caution:
        "機能が多いため、最初は情報量が多く感じる場合があります。",
    },
    {
      name: "楽天証券",
      slug: "rakuten-sec",
      score: 0,
      reason: "",
      strengths: [
        "楽天ポイントとの相性が良い",
        "NISA利用者が多い",
        "初心者にも比較的なじみやすい",
      ],
      caution:
        "楽天経済圏との相性で評価が分かれやすい候補です。",
    },
    {
      name: "マネックス証券",
      slug: "monex-sec",
      score: 0,
      reason: "",
      strengths: [
        "米国株の比較軸で強い",
        "商品ラインナップを見たい人向け",
        "中級者にも相性が良い",
      ],
      caution:
        "ポイント重視だけで選ぶ場合は他候補も比較した方が自然です。",
    },
    {
      name: "三菱UFJ eスマート証券",
      slug: "musmart-sec",
      score: 0,
      reason: "",
      strengths: [
        "au PAYカード積立と相性が良い",
        "Pontaポイント活用がしやすい",
        "少額投資との相性が良い",
      ],
      caution:
        "重視する経済圏が異なる場合は優先度が下がることがあります。",
    },
    {
      name: "松井証券",
      slug: "matsui-sec",
      score: 0,
      reason: "",
      strengths: [
        "初心者向けの印象が強い",
        "シンプルに使いやすい",
        "サポート重視の人と相性が良い",
      ],
      caution:
        "米国株や商品数を最優先するなら他候補も見比べたいところです。",
    },
  ];

  // 投資経験
  if (experience === "beginner") {
    results.find((r) => r.name === "楽天証券")!.score += 2;
    results.find((r) => r.name === "松井証券")!.score += 3;
    results.find((r) => r.name === "SBI証券")!.score += 2;
    results.find((r) => r.name === "三菱UFJ eスマート証券")!.score += 1;
  }
  if (experience === "some") {
    results.find((r) => r.name === "SBI証券")!.score += 2;
    results.find((r) => r.name === "楽天証券")!.score += 2;
    results.find((r) => r.name === "マネックス証券")!.score += 2;
  }
  if (experience === "advanced") {
    results.find((r) => r.name === "SBI証券")!.score += 2;
    results.find((r) => r.name === "マネックス証券")!.score += 3;
  }

  // 重視ポイント
  if (focus === "points") {
    results.find((r) => r.name === "楽天証券")!.score += 3;
    results.find((r) => r.name === "SBI証券")!.score += 3;
    results.find((r) => r.name === "三菱UFJ eスマート証券")!.score += 2;
  }
  if (focus === "ease") {
    results.find((r) => r.name === "松井証券")!.score += 3;
    results.find((r) => r.name === "楽天証券")!.score += 2;
    results.find((r) => r.name === "三菱UFJ eスマート証券")!.score += 1;
  }
  if (focus === "products") {
    results.find((r) => r.name === "SBI証券")!.score += 3;
    results.find((r) => r.name === "マネックス証券")!.score += 3;
    results.find((r) => r.name === "楽天証券")!.score += 1;
  }

  // 米国株
  if (usStocks === "yes") {
    results.find((r) => r.name === "マネックス証券")!.score += 3;
    results.find((r) => r.name === "SBI証券")!.score += 2;
    results.find((r) => r.name === "楽天証券")!.score += 2;
  } else if (usStocks === "no") {
    results.find((r) => r.name === "松井証券")!.score += 1;
    results.find((r) => r.name === "三菱UFJ eスマート証券")!.score += 1;
  }

  // クレカ積立
  if (creditCard === "yes") {
    results.find((r) => r.name === "SBI証券")!.score += 3;
    results.find((r) => r.name === "楽天証券")!.score += 3;
    results.find((r) => r.name === "三菱UFJ eスマート証券")!.score += 2;
  } else if (creditCard === "no") {
    results.find((r) => r.name === "松井証券")!.score += 1;
    results.find((r) => r.name === "マネックス証券")!.score += 1;
  }

  // 毎月の積立額
  if (monthly === "small") {
    results.find((r) => r.name === "松井証券")!.score += 2;
    results.find((r) => r.name === "三菱UFJ eスマート証券")!.score += 2;
    results.find((r) => r.name === "楽天証券")!.score += 1;
  }
  if (monthly === "mid") {
    results.find((r) => r.name === "SBI証券")!.score += 2;
    results.find((r) => r.name === "楽天証券")!.score += 2;
    results.find((r) => r.name === "三菱UFJ eスマート証券")!.score += 1;
  }
  if (monthly === "large") {
    results.find((r) => r.name === "SBI証券")!.score += 2;
    results.find((r) => r.name === "マネックス証券")!.score += 2;
  }

  // 理由文
  results.forEach((item) => {
    if (item.name === "SBI証券") {
      item.reason =
        "クレカ積立・ポイント・商品ラインナップの総合力を重視する人向けの候補です。";
    }
    if (item.name === "楽天証券") {
      item.reason =
        "ポイント活用やNISA利用のしやすさを重視する人向けの候補です。";
    }
    if (item.name === "マネックス証券") {
      item.reason =
        "米国株や商品ラインナップを重視する人向けの候補です。";
    }
    if (item.name === "三菱UFJ eスマート証券") {
      item.reason =
        "au / Ponta 経済圏や少額積立との相性を重視する人向けの候補です。";
    }
    if (item.name === "松井証券") {
      item.reason =
        "初心者の始めやすさやシンプルな使いやすさを重視する人向けの候補です。";
    }
  });

  const sortedResults = [...results].sort((a, b) => b.score - a.score);

  const answerSummary = [
    { label: "投資経験", value: mapExperience(experience) },
    { label: "重視するもの", value: mapFocus(focus) },
    { label: "米国株利用", value: mapYesNo(usStocks) },
    { label: "クレカ積立", value: mapYesNo(creditCard) },
    { label: "毎月の積立額", value: mapMonthly(monthly) },
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

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 md:p-10">
            <p className="mb-3 text-sm font-semibold tracking-wide text-blue-700">
              診断結果
            </p>

            <h1 className="mb-5 text-4xl font-bold leading-[1.15] tracking-tight text-slate-950 sm:text-5xl">
              あなたに合いそうな
              <br />
              <span className="whitespace-nowrap">証券口座候補</span>
            </h1>

            <p className="mb-6 text-base leading-8 text-slate-600 sm:text-lg">
              回答内容をもとに、条件に合いやすい候補を整理して表示しています。
              まずは上位候補の特徴を確認し、その後に詳細ページと公式サイトをご覧ください。
            </p>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="mb-3 text-sm font-semibold text-slate-950">
                あなたの回答
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {answerSummary.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3"
                  >
                    <p className="text-xs font-semibold text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-900">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
              <p className="mb-2 text-sm font-semibold text-slate-950">
                結果の見方
              </p>
              <ul className="space-y-2 text-sm leading-6 text-slate-600">
                <li>・ 上位ほど、現在の回答条件と相性が良い候補です。</li>
                <li>・ 結果は候補整理の参考情報であり、最終判断は公式情報をご確認ください。</li>
                <li>・ 気になる候補は詳細ページで違いを比べてください。</li>
              </ul>
            </div>
          </div>

          <div className="space-y-5">
            {sortedResults.map((item, index) => (
              <section
                key={item.name}
                className={`rounded-3xl bg-white p-6 shadow-sm ring-1 sm:p-8 ${
                  index === 0
                    ? "border border-blue-100 ring-blue-200"
                    : "ring-slate-200"
                }`}
              >
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        index === 0
                          ? "bg-blue-50 text-blue-700"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {index + 1}位
                    </span>
                    {index === 0 && (
                      <span className="inline-flex rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold text-white">
                        最有力候補
                      </span>
                    )}
                  </div>

                  <span className="text-sm font-medium text-slate-400">
                    スコア {item.score}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-slate-950">{item.name}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  {item.reason}
                </p>

                <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="mb-3 text-sm font-semibold text-slate-950">
                      この候補の主な特徴
                    </p>
                    <ul className="space-y-2 text-sm leading-6 text-slate-600">
                      {item.strengths.map((strength) => (
                        <li key={strength}>・ {strength}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="mb-3 text-sm font-semibold text-slate-950">
                      比較時の注意点
                    </p>
                    <p className="text-sm leading-6 text-slate-600">
                      {item.caution}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`/services/${item.slug}`}
                    className="rounded-xl bg-slate-950 px-6 py-3 text-center font-medium text-white transition hover:opacity-90"
                  >
                    詳細を見る
                  </a>

                  <a
                    href="#"
                    className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-center font-medium text-slate-700 transition hover:bg-slate-100"
                  >
                    公式サイトを見る
                  </a>
                </div>
              </section>
            ))}
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
            本サイトは一般的な比較情報をもとに候補整理を行っています。
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

function mapExperience(value: string) {
  if (value === "beginner") return "これから始める";
  if (value === "some") return "少し経験がある";
  if (value === "advanced") return "慣れている";
  return "未選択";
}

function mapFocus(value: string) {
  if (value === "points") return "ポイント還元";
  if (value === "ease") return "使いやすさ";
  if (value === "products") return "商品ラインナップ";
  return "未選択";
}

function mapYesNo(value: string) {
  if (value === "yes") return "はい";
  if (value === "no") return "いいえ";
  return "未選択";
}

function mapMonthly(value: string) {
  if (value === "small") return "1万円未満";
  if (value === "mid") return "1〜5万円";
  if (value === "large") return "5万円超";
  return "未選択";
}