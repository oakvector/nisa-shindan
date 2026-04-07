type ResultPageProps = {
  searchParams: Promise<{
    pace?: string;
    motivation?: string;
    management?: string;
    stress?: string;
    idealState?: string;
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

type ContinueStyleKey =
  | "easy_keep"
  | "reward_keep"
  | "steady_keep"
  | "flex_keep"
  | "simple_keep";

type ContinueStyleInfo = {
  title: string;
  description: string;
  points: string[];
};

const styleMaster: Record<ContinueStyleKey, ContinueStyleInfo> = {
  easy_keep: {
    title: "自然体継続型",
    description:
      "気合いで頑張るより、無理なく自然に続けたいタイプです。操作のわかりやすさや、迷いにくさと相性が良い傾向があります。",
    points: ["わかりやすさ", "始めやすさ", "少額積立", "迷いにくさ"],
  },
  reward_keep: {
    title: "還元実感型",
    description:
      "続けるなら、還元やお得さを感じながら続けたいタイプです。クレカ積立やポイント活用との相性を重視しやすい傾向があります。",
    points: ["ポイント還元", "クレカ積立", "経済圏との相性", "続ける実感"],
  },
  steady_keep: {
    title: "安定継続型",
    description:
      "極端な強みより、無難さや安心感を重視して続けたいタイプです。バランスのよい候補を選ぶと続けやすい傾向があります。",
    points: ["総合力", "安心感", "使いやすさ", "継続しやすさ"],
  },
  flex_keep: {
    title: "拡張継続型",
    description:
      "今は積立中心でも、将来の選択肢を残しながら続けたいタイプです。商品ラインナップや拡張性との相性を見やすい傾向があります。",
    points: ["拡張性", "商品ラインナップ", "米国株対応", "将来の自由度"],
  },
  simple_keep: {
    title: "省力継続型",
    description:
      "設定や管理に手間をかけすぎず、できるだけ負担なく続けたいタイプです。シンプルさや管理のしやすさと相性が良い傾向があります。",
    points: ["シンプルさ", "管理のしやすさ", "少額積立", "負担の少なさ"],
  },
};

export default async function ContinueStyleResultPage({
  searchParams,
}: ResultPageProps) {
  const params = await searchParams;

  const pace = params.pace ?? "";
  const motivation = params.motivation ?? "";
  const management = params.management ?? "";
  const stress = params.stress ?? "";
  const idealState = params.idealState ?? "";

  const styleScores: Record<ContinueStyleKey, number> = {
    easy_keep: 0,
    reward_keep: 0,
    steady_keep: 0,
    flex_keep: 0,
    simple_keep: 0,
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
        "情報量が多いため、最初は機能の多さを感じる場合があります。",
    },
    {
      name: "楽天証券",
      slug: "rakuten-sec",
      officialUrl: "https://www.rakuten-sec.co.jp/",
      score: 0,
      reason: "",
      strengths: ["ポイント活用しやすい", "NISAの始めやすさと相性が良い", "比較的なじみやすい"],
      caution:
        "重視する経済圏によって優先度が変わりやすい候補です。",
    },
    {
      name: "マネックス証券",
      slug: "monex-sec",
      officialUrl: "https://www.monex.co.jp/",
      score: 0,
      reason: "",
      strengths: ["米国株重視と相性が良い", "商品ラインナップを見たい人向け", "将来の拡張性を見やすい"],
      caution:
        "シンプルさ重視だけで選ぶなら他候補も見比べたいところです。",
    },
    {
      name: "三菱UFJ eスマート証券",
      slug: "musmart-sec",
      officialUrl: "https://kabu.com/",
      score: 0,
      reason: "",
      strengths: ["au / Ponta経済圏と相性が良い", "少額積立と相性が良い", "条件が合う人には候補化しやすい"],
      caution:
        "重視する経済圏が薄いと優先度が下がる場合があります。",
    },
    {
      name: "松井証券",
      slug: "matsui-sec",
      officialUrl: "https://www.matsui.co.jp/",
      score: 0,
      reason: "",
      strengths: ["初心者向け", "シンプルに使いやすい", "サポート重視と相性が良い"],
      caution:
        "商品ラインナップや拡張性を最優先する場合は他候補も見たいところです。",
    },
  ];

  const addStyle = (style: ContinueStyleKey, score: number) => {
    styleScores[style] += score;
  };

  const addBroker = (name: string, score: number) => {
    const broker = brokers.find((b) => b.name === name);
    if (broker) broker.score += score;
  };

  if (pace === "simple") {
    addStyle("simple_keep", 2);
    addStyle("easy_keep", 1);
    addBroker("松井証券", 2);
    addBroker("楽天証券", 1);
  }
  if (pace === "reward") {
    addStyle("reward_keep", 3);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 2);
    addBroker("三菱UFJ eスマート証券", 1);
  }
  if (pace === "balanced") {
    addStyle("steady_keep", 3);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 1);
    addBroker("松井証券", 1);
  }
  if (pace === "flexible") {
    addStyle("flex_keep", 3);
    addBroker("SBI証券", 2);
    addBroker("マネックス証券", 2);
  }

  if (motivation === "easy") {
    addStyle("easy_keep", 2);
    addBroker("松井証券", 2);
    addBroker("楽天証券", 1);
  }
  if (motivation === "points") {
    addStyle("reward_keep", 2);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 2);
    addBroker("三菱UFJ eスマート証券", 1);
  }
  if (motivation === "stable") {
    addStyle("steady_keep", 2);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 1);
  }
  if (motivation === "options") {
    addStyle("flex_keep", 2);
    addBroker("マネックス証券", 2);
    addBroker("SBI証券", 1);
  }

  if (management === "minimal") {
    addStyle("simple_keep", 3);
    addBroker("松井証券", 2);
    addBroker("楽天証券", 1);
  }
  if (management === "worth") {
    addStyle("reward_keep", 1);
    addStyle("steady_keep", 1);
    addBroker("SBI証券", 1);
    addBroker("楽天証券", 1);
  }
  if (management === "normal") {
    addStyle("steady_keep", 2);
    addBroker("SBI証券", 1);
    addBroker("楽天証券", 1);
    addBroker("松井証券", 1);
  }
  if (management === "many") {
    addStyle("flex_keep", 2);
    addBroker("マネックス証券", 2);
    addBroker("SBI証券", 1);
  }

  if (stress === "complex") {
    addStyle("easy_keep", 2);
    addStyle("simple_keep", 1);
    addBroker("松井証券", 2);
    addBroker("楽天証券", 1);
  }
  if (stress === "no_benefit") {
    addStyle("reward_keep", 2);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 2);
  }
  if (stress === "unclear") {
    addStyle("steady_keep", 2);
    addBroker("SBI証券", 2);
    addBroker("松井証券", 1);
  }
  if (stress === "limited") {
    addStyle("flex_keep", 2);
    addBroker("マネックス証券", 2);
    addBroker("SBI証券", 1);
  }

  if (idealState === "keep_easy") {
    addStyle("easy_keep", 2);
    addStyle("simple_keep", 1);
    addBroker("松井証券", 2);
    addBroker("楽天証券", 1);
  }
  if (idealState === "keep_reward") {
    addStyle("reward_keep", 2);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 2);
    addBroker("三菱UFJ eスマート証券", 1);
  }
  if (idealState === "keep_safe") {
    addStyle("steady_keep", 2);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 1);
    addBroker("松井証券", 1);
  }
  if (idealState === "keep_expand") {
    addStyle("flex_keep", 2);
    addBroker("マネックス証券", 2);
    addBroker("SBI証券", 2);
  }

  const dominantStyle = (Object.entries(styleScores).sort(
    (a, b) => b[1] - a[1]
  )[0]?.[0] ?? "steady_keep") as ContinueStyleKey;

  const styleInfo = styleMaster[dominantStyle];

  brokers.forEach((item) => {
    if (item.name === "SBI証券") {
      item.reason =
        "総合力や還元、商品ラインナップの広さまで含めて長く使いやすい候補です。";
    }
    if (item.name === "楽天証券") {
      item.reason =
        "ポイント活用や始めやすさを感じながら無理なく続けたい人向けの候補です。";
    }
    if (item.name === "マネックス証券") {
      item.reason =
        "積立の先の選択肢まで視野に入れて、拡張性を持って続けたい人向けの候補です。";
    }
    if (item.name === "三菱UFJ eスマート証券") {
      item.reason =
        "条件が合えば、少額積立や経済圏の活用で続けやすさを感じやすい候補です。";
    }
    if (item.name === "松井証券") {
      item.reason =
        "できるだけシンプルに、管理の負担を増やしすぎず続けたい人向けの候補です。";
    }
  });

  const sortedResults = [...brokers].sort((a, b) => b.score - a.score).slice(0, 3);

  const answerSummary = [
    { label: "理想のペース", value: mapPace(pace) },
    { label: "気分が上がること", value: mapMotivation(motivation) },
    { label: "管理や設定の考え方", value: mapManagement(management) },
    { label: "続かなくなる原因", value: mapStress(stress) },
    { label: "1年後の理想", value: mapIdealState(idealState) },
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
                        続けやすい候補
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

function mapPace(value: string) {
  if (value === "simple") return "できるだけ手間なく淡々と続けたい";
  if (value === "reward") return "還元やメリットを感じながら続けたい";
  if (value === "balanced") return "無理なくバランスよく続けたい";
  if (value === "flexible") return "将来の選択肢も持ちながら続けたい";
  return "未選択";
}

function mapMotivation(value: string) {
  if (value === "easy") return "操作がわかりやすいこと";
  if (value === "points") return "ポイントや還元があること";
  if (value === "stable") return "無難で安心感があること";
  if (value === "options") return "選択肢が広いこと";
  return "未選択";
}

function mapManagement(value: string) {
  if (value === "minimal") return "できるだけ少ない方がいい";
  if (value === "worth") return "メリットがあるなら多少は問題ない";
  if (value === "normal") return "普通";
  if (value === "many") return "多くてもあまり気にならない";
  return "未選択";
}

function mapStress(value: string) {
  if (value === "complex") return "複雑でわかりにくいこと";
  if (value === "no_benefit") return "お得さを感じにくいこと";
  if (value === "unclear") return "何を基準に見ればいいかわからないこと";
  if (value === "limited") return "あとで選択肢が足りなくなること";
  return "未選択";
}

function mapIdealState(value: string) {
  if (value === "keep_easy") return "無理なく自然に積立が続いている";
  if (value === "keep_reward") return "還元やメリットを感じながら続けられている";
  if (value === "keep_safe") return "無難で安心感のある選び方ができている";
  if (value === "keep_expand") return "積立の先の選択肢も見えている";
  return "未選択";
}