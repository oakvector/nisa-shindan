type ResultPageProps = {
  searchParams: Promise<{
    mistakeFear?: string;
    decisionStyle?: string;
    priority?: string;
    supportNeed?: string;
    futureConcern?: string;
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

type FailureStyleKey =
  | "safe_simple"
  | "reward_guard"
  | "balanced_safe"
  | "future_safe"
  | "support_safe";

type FailureStyleInfo = {
  title: string;
  description: string;
  points: string[];
};

const styleMaster: Record<FailureStyleKey, FailureStyleInfo> = {
  safe_simple: {
    title: "迷いにくい安心型",
    description:
      "複雑すぎず、わかりやすく始められることを重視するタイプです。最初のつまずきを避けながら、無理なく続けられる候補と相性が良い傾向があります。",
    points: ["わかりやすさ", "始めやすさ", "少額積立", "迷いにくさ"],
  },
  reward_guard: {
    title: "還元取りこぼし防止型",
    description:
      "どうせ始めるなら、還元やクレカ積立のメリットを取りこぼしたくないタイプです。ポイント活用や経済圏との相性も重視しやすい傾向があります。",
    points: ["ポイント還元", "クレカ積立", "経済圏との相性", "継続しやすさ"],
  },
  balanced_safe: {
    title: "バランス確認型",
    description:
      "極端に偏るのではなく、総合力の高い候補を選んで後悔を減らしたいタイプです。無難さと納得感の両方を見たい傾向があります。",
    points: ["総合力", "使いやすさ", "商品ラインナップ", "継続しやすさ"],
  },
  future_safe: {
    title: "機能不足回避型",
    description:
      "今は初心者でも、あとで物足りなくなるのは避けたいタイプです。将来の選択肢や拡張性まで視野に入れて選びたい傾向があります。",
    points: ["拡張性", "米国株対応", "商品ラインナップ", "総合力"],
  },
  support_safe: {
    title: "サポート重視型",
    description:
      "始める段階で迷いすぎないよう、サポートや案内のわかりやすさを重視するタイプです。使いやすさや安心感と相性が良い候補を選びやすい傾向があります。",
    points: ["サポート", "使いやすさ", "始めやすさ", "迷いにくさ"],
  },
};

export default async function FailureSafeResultPage({
  searchParams,
}: ResultPageProps) {
  const params = await searchParams;

  const mistakeFear = params.mistakeFear ?? "";
  const decisionStyle = params.decisionStyle ?? "";
  const priority = params.priority ?? "";
  const supportNeed = params.supportNeed ?? "";
  const futureConcern = params.futureConcern ?? "";

  const styleScores: Record<FailureStyleKey, number> = {
    safe_simple: 0,
    reward_guard: 0,
    balanced_safe: 0,
    future_safe: 0,
    support_safe: 0,
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

  const addStyle = (style: FailureStyleKey, score: number) => {
    styleScores[style] += score;
  };

  const addBroker = (name: string, score: number) => {
    const broker = brokers.find((b) => b.name === name);
    if (broker) broker.score += score;
  };

  if (mistakeFear === "too_complex") {
    addStyle("safe_simple", 3);
    addStyle("support_safe", 1);
    addBroker("松井証券", 3);
    addBroker("楽天証券", 1);
  }
  if (mistakeFear === "miss_rewards") {
    addStyle("reward_guard", 3);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 2);
    addBroker("三菱UFJ eスマート証券", 1);
  }
  if (mistakeFear === "lack_features") {
    addStyle("future_safe", 3);
    addBroker("SBI証券", 2);
    addBroker("マネックス証券", 3);
  }
  if (mistakeFear === "wrong_choice") {
    addStyle("balanced_safe", 3);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 1);
    addBroker("松井証券", 1);
  }

  if (decisionStyle === "simple") {
    addStyle("safe_simple", 2);
    addStyle("support_safe", 1);
    addBroker("松井証券", 2);
    addBroker("楽天証券", 1);
  }
  if (decisionStyle === "benefit") {
    addStyle("reward_guard", 2);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 2);
  }
  if (decisionStyle === "balanced") {
    addStyle("balanced_safe", 2);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 1);
    addBroker("松井証券", 1);
  }
  if (decisionStyle === "future") {
    addStyle("future_safe", 2);
    addBroker("SBI証券", 1);
    addBroker("マネックス証券", 2);
  }

  if (priority === "ease") {
    addStyle("safe_simple", 1);
    addStyle("support_safe", 2);
    addBroker("松井証券", 2);
    addBroker("楽天証券", 1);
  }
  if (priority === "points") {
    addStyle("reward_guard", 2);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 2);
    addBroker("三菱UFJ eスマート証券", 1);
  }
  if (priority === "support") {
    addStyle("support_safe", 3);
    addBroker("松井証券", 3);
    addBroker("楽天証券", 1);
  }
  if (priority === "products") {
    addStyle("future_safe", 2);
    addStyle("balanced_safe", 1);
    addBroker("マネックス証券", 2);
    addBroker("SBI証券", 1);
  }

  if (supportNeed === "very_high") {
    addStyle("support_safe", 3);
    addBroker("松井証券", 3);
    addBroker("楽天証券", 1);
  }
  if (supportNeed === "important") {
    addStyle("support_safe", 2);
    addStyle("safe_simple", 1);
    addBroker("松井証券", 2);
    addBroker("楽天証券", 1);
  }
  if (supportNeed === "normal") {
    addStyle("balanced_safe", 1);
    addBroker("SBI証券", 1);
    addBroker("楽天証券", 1);
  }
  if (supportNeed === "low") {
    addStyle("future_safe", 1);
    addStyle("reward_guard", 1);
    addBroker("SBI証券", 1);
    addBroker("マネックス証券", 1);
  }

  if (futureConcern === "keep_going") {
    addStyle("safe_simple", 2);
    addStyle("support_safe", 1);
    addBroker("松井証券", 2);
    addBroker("楽天証券", 1);
  }
  if (futureConcern === "maximize_rewards") {
    addStyle("reward_guard", 2);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 2);
    addBroker("三菱UFJ eスマート証券", 1);
  }
  if (futureConcern === "safe_choice") {
    addStyle("balanced_safe", 2);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 1);
    addBroker("松井証券", 1);
  }
  if (futureConcern === "more_options") {
    addStyle("future_safe", 2);
    addBroker("マネックス証券", 2);
    addBroker("SBI証券", 2);
  }

  const dominantStyle = (Object.entries(styleScores).sort(
    (a, b) => b[1] - a[1]
  )[0]?.[0] ?? "balanced_safe") as FailureStyleKey;

  const styleInfo = styleMaster[dominantStyle];

  brokers.forEach((item) => {
    if (item.name === "SBI証券") {
      item.reason =
        "総合力や還元、拡張性まで含めて後悔しにくい候補を探したい人と相性が良い候補です。";
    }
    if (item.name === "楽天証券") {
      item.reason =
        "ポイント活用や始めやすさを重視しながら、比較的迷いにくく選びたい人向けの候補です。";
    }
    if (item.name === "マネックス証券") {
      item.reason =
        "あとで機能不足を感じたくない人や、商品ラインナップまで見たい人向けの候補です。";
    }
    if (item.name === "三菱UFJ eスマート証券") {
      item.reason =
        "条件が合えば、少額積立や経済圏の活用で失敗感を減らしやすい候補です。";
    }
    if (item.name === "松井証券") {
      item.reason =
        "複雑すぎるサービスを避けて、わかりやすく始めたい人向けの候補です。";
    }
  });

  const sortedResults = [...brokers].sort((a, b) => b.score - a.score).slice(0, 3);

  const answerSummary = [
    { label: "避けたい失敗", value: mapMistakeFear(mistakeFear) },
    { label: "選ぶときのスタンス", value: mapDecisionStyle(decisionStyle) },
    { label: "最初に見たいこと", value: mapPriority(priority) },
    { label: "サポートの重要度", value: mapSupportNeed(supportNeed) },
    { label: "1年後のイメージ", value: mapFutureConcern(futureConcern) },
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
                        失敗しにくい候補
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

function mapMistakeFear(value: string) {
  if (value === "too_complex") return "複雑すぎて続かなくなること";
  if (value === "miss_rewards") return "還元やメリットを取りこぼすこと";
  if (value === "lack_features") return "あとで機能不足を感じること";
  if (value === "wrong_choice") return "無難だと思って選んだのに合わないこと";
  return "未選択";
}

function mapDecisionStyle(value: string) {
  if (value === "simple") return "できるだけ迷わず選びたい";
  if (value === "benefit") return "メリットが大きい方を選びたい";
  if (value === "balanced") return "極端ではなく総合力で選びたい";
  if (value === "future") return "あとで後悔しない拡張性も欲しい";
  return "未選択";
}

function mapPriority(value: string) {
  if (value === "ease") return "使いやすさ";
  if (value === "points") return "ポイントや還元";
  if (value === "support") return "サポートやわかりやすさ";
  if (value === "products") return "商品ラインナップ";
  return "未選択";
}

function mapSupportNeed(value: string) {
  if (value === "very_high") return "かなり重要";
  if (value === "important") return "ある程度重要";
  if (value === "normal") return "普通";
  if (value === "low") return "あまり重視しない";
  return "未選択";
}

function mapFutureConcern(value: string) {
  if (value === "keep_going") return "まずは無理なく積立を続けていたい";
  if (value === "maximize_rewards") return "還元やお得さを活かせていたい";
  if (value === "safe_choice") return "無難で後悔の少ない選び方をしていたい";
  if (value === "more_options") return "選択肢の広い口座を使えていたい";
  return "未選択";
}