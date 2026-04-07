type ResultPageProps = {
  searchParams: Promise<{
    startStyle?: string;
    priority?: string;
    continuity?: string;
    complexity?: string;
    futureView?: string;
  }>;
};

type BrokerResult = {
  name: string;
  slug: string;
  officialUrl: string;
  score: number;
  reason: string;
  strengths: string[];
  caution: string;
};

type StyleKey =
  | "careful"
  | "reward"
  | "balanced"
  | "expansion"
  | "simple";

type StyleInfo = {
  title: string;
  description: string;
  points: string[];
};

const styleMaster: Record<StyleKey, StyleInfo> = {
  careful: {
    title: "堅実スタート型",
    description:
      "まずは失敗しにくく、無理なく始めたいタイプです。複雑さより、始めやすさや分かりやすさを重視しやすい傾向があります。",
    points: ["始めやすさ", "使いやすさ", "少額積立", "迷いにくさ"],
  },
  reward: {
    title: "還元活用型",
    description:
      "積立を続けるなら、お得さや還元も活かしたいタイプです。クレカ積立やポイント活用との相性を重視しやすい傾向があります。",
    points: ["クレカ積立", "ポイント還元", "経済圏との相性", "継続しやすさ"],
  },
  balanced: {
    title: "バランス重視型",
    description:
      "何か一つに特化するより、総合力の高い候補を選びたいタイプです。使いやすさ、商品数、続けやすさのバランスを見やすい傾向があります。",
    points: ["総合力", "使いやすさ", "商品ラインナップ", "継続しやすさ"],
  },
  expansion: {
    title: "拡張重視型",
    description:
      "NISAの先も見据えて、選択肢の広さや拡張性を重視したいタイプです。米国株や商品ラインナップも比較軸に入りやすい傾向があります。",
    points: ["米国株対応", "商品ラインナップ", "拡張性", "情報量"],
  },
  simple: {
    title: "シンプル継続型",
    description:
      "高機能さより、わかりやすく続けやすいことを重視するタイプです。情報量が多すぎず、自然に続けられる候補と相性が良い傾向があります。",
    points: ["シンプルさ", "使いやすさ", "少額積立", "継続しやすさ"],
  },
};

export default async function ResultPage({ searchParams }: ResultPageProps) {
  const params = await searchParams;

  const startStyle = params.startStyle ?? "";
  const priority = params.priority ?? "";
  const continuity = params.continuity ?? "";
  const complexity = params.complexity ?? "";
  const futureView = params.futureView ?? "";

  const styleScores: Record<StyleKey, number> = {
    careful: 0,
    reward: 0,
    balanced: 0,
    expansion: 0,
    simple: 0,
  };

  const brokers: BrokerResult[] = [
    {
      name: "SBI証券",
      slug: "sbi-sec",
      officialUrl: "https://www.sbisec.co.jp/",
      score: 0,
      reason: "",
      strengths: ["総合力が高い", "クレカ積立と相性が良い", "商品ラインナップが広い"],
      caution:
        "機能が多いため、最初は情報量が多く感じる場合があります。",
    },
    {
      name: "楽天証券",
      slug: "rakuten-sec",
      officialUrl: "https://www.rakuten-sec.co.jp/",
      score: 0,
      reason: "",
      strengths: ["ポイント活用しやすい", "NISA利用者が多い", "比較的なじみやすい"],
      caution:
        "重視する経済圏によって評価が分かれやすい候補です。",
    },
    {
      name: "マネックス証券",
      slug: "monex-sec",
      officialUrl: "https://www.monex.co.jp/",
      score: 0,
      reason: "",
      strengths: ["米国株重視と相性が良い", "商品ラインナップを見たい人向け", "比較軸を広げやすい"],
      caution:
        "シンプルさやポイント重視だけなら他候補も比較したいところです。",
    },
    {
      name: "三菱UFJ eスマート証券",
      slug: "musmart-sec",
      officialUrl: "https://kabu.com/",
      score: 0,
      reason: "",
      strengths: ["au / Ponta経済圏と相性が良い", "少額積立と相性が良い", "条件が合う人には候補化しやすい"],
      caution:
        "経済圏との相性が薄い場合は優先度が下がることがあります。",
    },
    {
      name: "松井証券",
      slug: "matsui-sec",
      officialUrl: "https://www.matsui.co.jp/",
      score: 0,
      reason: "",
      strengths: ["初心者向け", "シンプルに使いやすい", "始めやすさを重視しやすい"],
      caution:
        "商品ラインナップや米国株を最優先する場合は他候補も見比べたいです。",
    },
  ];

  const addBroker = (name: string, score: number) => {
    const broker = brokers.find((b) => b.name === name);
    if (broker) broker.score += score;
  };

  const addStyle = (style: StyleKey, score: number) => {
    styleScores[style] += score;
  };

  // 質問1
  if (startStyle === "safe") {
    addStyle("careful", 3);
    addStyle("simple", 2);
    addBroker("松井証券", 3);
    addBroker("楽天証券", 1);
    addBroker("三菱UFJ eスマート証券", 1);
  }
  if (startStyle === "reward") {
    addStyle("reward", 3);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 2);
    addBroker("三菱UFJ eスマート証券", 1);
  }
  if (startStyle === "balanced") {
    addStyle("balanced", 3);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 2);
    addBroker("松井証券", 1);
  }
  if (startStyle === "expand") {
    addStyle("expansion", 3);
    addBroker("SBI証券", 2);
    addBroker("マネックス証券", 2);
  }

  // 質問2
  if (priority === "ease") {
    addStyle("careful", 1);
    addStyle("simple", 2);
    addBroker("松井証券", 3);
    addBroker("楽天証券", 2);
  }
  if (priority === "points") {
    addStyle("reward", 3);
    addBroker("SBI証券", 3);
    addBroker("楽天証券", 3);
    addBroker("三菱UFJ eスマート証券", 2);
  }
  if (priority === "balance") {
    addStyle("balanced", 3);
    addBroker("SBI証券", 3);
    addBroker("楽天証券", 2);
    addBroker("松井証券", 1);
  }
  if (priority === "products") {
    addStyle("expansion", 3);
    addBroker("SBI証券", 2);
    addBroker("マネックス証券", 3);
  }

  // 質問3
  if (continuity === "simple") {
    addStyle("simple", 3);
    addBroker("松井証券", 2);
    addBroker("三菱UFJ eスマート証券", 1);
    addBroker("楽天証券", 1);
  }
  if (continuity === "benefit") {
    addStyle("reward", 3);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 2);
    addBroker("三菱UFJ eスマート証券", 1);
  }
  if (continuity === "stable") {
    addStyle("balanced", 3);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 2);
    addBroker("松井証券", 1);
  }
  if (continuity === "expandable") {
    addStyle("expansion", 3);
    addBroker("SBI証券", 2);
    addBroker("マネックス証券", 2);
  }

  // 質問4
  if (complexity === "simple") {
    addStyle("simple", 2);
    addStyle("careful", 1);
    addBroker("松井証券", 2);
    addBroker("楽天証券", 1);
  }
  if (complexity === "benefit") {
    addStyle("reward", 2);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 1);
    addBroker("三菱UFJ eスマート証券", 1);
  }
  if (complexity === "middle") {
    addStyle("balanced", 2);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 1);
    addBroker("松井証券", 1);
  }
  if (complexity === "many") {
    addStyle("expansion", 2);
    addBroker("SBI証券", 1);
    addBroker("マネックス証券", 2);
  }

  // 質問5
  if (futureView === "continue") {
    addStyle("simple", 2);
    addStyle("careful", 1);
    addBroker("松井証券", 2);
    addBroker("楽天証券", 1);
    addBroker("三菱UFJ eスマート証券", 1);
  }
  if (futureView === "reward") {
    addStyle("reward", 2);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 2);
    addBroker("三菱UFJ eスマート証券", 1);
  }
  if (futureView === "balance") {
    addStyle("balanced", 2);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 2);
  }
  if (futureView === "global") {
    addStyle("expansion", 2);
    addBroker("マネックス証券", 3);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 1);
  }

  const dominantStyle = (Object.entries(styleScores).sort(
    (a, b) => b[1] - a[1]
  )[0]?.[0] ?? "balanced") as StyleKey;

  const styleInfo = styleMaster[dominantStyle];

  brokers.forEach((item) => {
    if (item.name === "SBI証券") {
      item.reason =
        "総合力、クレカ積立、商品ラインナップを広く見たい人と相性が良い候補です。";
    }
    if (item.name === "楽天証券") {
      item.reason =
        "ポイント活用やNISAの始めやすさを重視したい人と相性が良い候補です。";
    }
    if (item.name === "マネックス証券") {
      item.reason =
        "米国株や商品ラインナップの広さまで視野に入れたい人向けの候補です。";
    }
    if (item.name === "三菱UFJ eスマート証券") {
      item.reason =
        "経済圏との相性や少額積立のしやすさを重視する人向けの候補です。";
    }
    if (item.name === "松井証券") {
      item.reason =
        "わかりやすさや始めやすさを重視して、無理なく続けたい人向けの候補です。";
    }
  });

  const sortedResults = [...brokers].sort((a, b) => b.score - a.score).slice(0, 3);

  const answerSummary = [
    { label: "始めるときの気持ち", value: mapStartStyle(startStyle) },
    { label: "一番気になること", value: mapPriority(priority) },
    { label: "続けるうえで重要なこと", value: mapContinuity(continuity) },
    { label: "情報量への感じ方", value: mapComplexity(complexity) },
    { label: "NISAの先の考え方", value: mapFutureView(futureView) },
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
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
          <div className="space-y-5">
            <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 md:p-10">
              <p className="mb-3 text-sm font-semibold tracking-wide text-blue-700">
                診断結果
              </p>

              <h1 className="mb-3 text-4xl font-bold leading-[1.15] tracking-tight text-slate-950 sm:text-5xl">
                あなたは
                <br />
                <span className="whitespace-nowrap">{styleInfo.title}</span>
                です
              </h1>

              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                {styleInfo.description}
              </p>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="mb-3 text-sm font-semibold text-slate-950">
                  このタイプが重視したいポイント
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {styleInfo.points.map((point) => (
                    <span
                      key={point}
                      className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
              <p className="mb-3 text-sm font-semibold text-blue-700">
                あなたの回答
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {answerSummary.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
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
            </section>
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
                        相性が良い候補
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
                    href={item.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
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

function mapStartStyle(value: string) {
  if (value === "safe") return "まずは失敗しにくく始めたい";
  if (value === "reward") return "せっかくならお得さも重視したい";
  if (value === "balanced") return "バランスよく選びたい";
  if (value === "expand") return "将来の選択肢の広さも見たい";
  return "未選択";
}

function mapPriority(value: string) {
  if (value === "ease") return "使いやすさ";
  if (value === "points") return "ポイントや還元";
  if (value === "balance") return "総合力";
  if (value === "products") return "商品ラインナップ";
  return "未選択";
}

function mapContinuity(value: string) {
  if (value === "simple") return "手間が少ないこと";
  if (value === "benefit") return "還元やメリットがあること";
  if (value === "stable") return "無難でバランスが良いこと";
  if (value === "expandable") return "今後の拡張性があること";
  return "未選択";
}

function mapComplexity(value: string) {
  if (value === "simple") return "できるだけシンプルな方がいい";
  if (value === "benefit") return "多少多くてもメリットがあるならOK";
  if (value === "middle") return "バランス次第";
  if (value === "many") return "多機能でも問題ない";
  return "未選択";
}

function mapFutureView(value: string) {
  if (value === "continue") return "まずは積立を無理なく続けたい";
  if (value === "reward") return "お得さを活かして続けたい";
  if (value === "balance") return "長く使える無難な口座がいい";
  if (value === "global") return "米国株なども視野に入れたい";
  return "未選択";
}