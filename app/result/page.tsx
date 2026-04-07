type ResultPageProps = {
  searchParams: Promise<{
    startMood?: string;
    firstCheck?: string;
    continueStyle?: string;
    featureFeeling?: string;
    oneYearLater?: string;
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
  | "easy_start"
  | "reward_use"
  | "balanced_choice"
  | "future_expand"
  | "simple_safe";

type StyleInfo = {
  title: string;
  description: string;
  points: string[];
};

const styleMaster: Record<StyleKey, StyleInfo> = {
  easy_start: {
    title: "はじめやすさ重視型",
    description:
      "むずかしさより、まず始めやすいことを大事にするタイプです。画面や流れがわかりやすく、迷いにくい候補と相性が良い傾向があります。",
    points: ["わかりやすさ", "始めやすさ", "少額積立", "迷いにくさ"],
  },
  reward_use: {
    title: "還元活用型",
    description:
      "どうせ続けるなら、お得さもちゃんと活かしたいタイプです。クレカ積立やポイント活用との相性を重視しやすい傾向があります。",
    points: ["ポイント還元", "クレカ積立", "経済圏との相性", "続けやすさ"],
  },
  balanced_choice: {
    title: "バランス重視型",
    description:
      "何か一つだけで決めるより、全体のバランスを見て選びたいタイプです。総合力の高い候補を選ぶと納得しやすい傾向があります。",
    points: ["総合力", "使いやすさ", "商品ラインナップ", "安心感"],
  },
  future_expand: {
    title: "将来ひろげたい型",
    description:
      "今はNISA中心でも、あとからやりたいことが増えるかもしれないタイプです。商品ラインナップや将来の広がりを見やすい候補と相性が良い傾向があります。",
    points: ["商品ラインナップ", "拡張性", "米国株対応", "将来の自由度"],
  },
  simple_safe: {
    title: "シンプル安心型",
    description:
      "高機能さより、シンプルで安心して使えることを大事にするタイプです。情報量が多すぎず、無理なく使いやすい候補と相性が良い傾向があります。",
    points: ["シンプルさ", "使いやすさ", "少額積立", "安心感"],
  },
};

export default async function ResultPage({ searchParams }: ResultPageProps) {
  const params = await searchParams;

  const startMood = params.startMood ?? "";
  const firstCheck = params.firstCheck ?? "";
  const continueStyle = params.continueStyle ?? "";
  const featureFeeling = params.featureFeeling ?? "";
  const oneYearLater = params.oneYearLater ?? "";

  const styleScores: Record<StyleKey, number> = {
    easy_start: 0,
    reward_use: 0,
    balanced_choice: 0,
    future_expand: 0,
    simple_safe: 0,
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

  const addStyle = (style: StyleKey, score: number) => {
    styleScores[style] += score;
  };

  const addBroker = (name: string, score: number) => {
    const broker = brokers.find((b) => b.name === name);
    if (broker) broker.score += score;
  };

  if (startMood === "easy_start") {
    addStyle("easy_start", 2);
    addStyle("simple_safe", 2);
    addBroker("松井証券", 3);
    addBroker("楽天証券", 2);
    addBroker("三菱UFJ eスマート証券", 1);
  }
  if (startMood === "good_deal") {
    addStyle("reward_use", 3);
    addBroker("SBI証券", 3);
    addBroker("楽天証券", 3);
    addBroker("三菱UFJ eスマート証券", 2);
  }
  if (startMood === "balanced_choice") {
    addStyle("balanced_choice", 3);
    addBroker("SBI証券", 3);
    addBroker("楽天証券", 2);
    addBroker("松井証券", 1);
  }
  if (startMood === "future_room") {
    addStyle("future_expand", 3);
    addBroker("マネックス証券", 3);
    addBroker("SBI証券", 2);
  }

  if (firstCheck === "easy_screen") {
    addStyle("easy_start", 2);
    addStyle("simple_safe", 1);
    addBroker("松井証券", 2);
    addBroker("楽天証券", 2);
  }
  if (firstCheck === "points") {
    addStyle("reward_use", 3);
    addBroker("SBI証券", 3);
    addBroker("楽天証券", 3);
    addBroker("三菱UFJ eスマート証券", 2);
  }
  if (firstCheck === "balance") {
    addStyle("balanced_choice", 3);
    addBroker("SBI証券", 3);
    addBroker("楽天証券", 2);
    addBroker("松井証券", 1);
  }
  if (firstCheck === "many_products") {
    addStyle("future_expand", 3);
    addBroker("マネックス証券", 3);
    addBroker("SBI証券", 2);
  }

  if (continueStyle === "auto_continue") {
    addStyle("simple_safe", 2);
    addStyle("easy_start", 2);
    addBroker("松井証券", 2);
    addBroker("楽天証券", 1);
    addBroker("三菱UFJ eスマート証券", 1);
  }
  if (continueStyle === "feel_benefit") {
    addStyle("reward_use", 3);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 2);
    addBroker("三菱UFJ eスマート証券", 2);
  }
  if (continueStyle === "safe_continue") {
    addStyle("balanced_choice", 2);
    addStyle("simple_safe", 1);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 1);
    addBroker("松井証券", 1);
  }
  if (continueStyle === "expand_later") {
    addStyle("future_expand", 3);
    addBroker("マネックス証券", 2);
    addBroker("SBI証券", 2);
  }

  if (featureFeeling === "simple_is_best") {
    addStyle("simple_safe", 3);
    addStyle("easy_start", 1);
    addBroker("松井証券", 3);
    addBroker("楽天証券", 1);
  }
  if (featureFeeling === "ok_if_benefit") {
    addStyle("reward_use", 2);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 1);
    addBroker("三菱UFJ eスマート証券", 1);
  }
  if (featureFeeling === "middle_best") {
    addStyle("balanced_choice", 2);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 1);
  }
  if (featureFeeling === "many_ok") {
    addStyle("future_expand", 2);
    addBroker("マネックス証券", 2);
    addBroker("SBI証券", 1);
  }

  if (oneYearLater === "easy_keep") {
    addStyle("easy_start", 2);
    addStyle("simple_safe", 1);
    addBroker("松井証券", 2);
    addBroker("楽天証券", 1);
  }
  if (oneYearLater === "benefit_keep") {
    addStyle("reward_use", 2);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 2);
    addBroker("三菱UFJ eスマート証券", 2);
  }
  if (oneYearLater === "no_big_complaint") {
    addStyle("balanced_choice", 2);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 1);
    addBroker("松井証券", 1);
  }
  if (oneYearLater === "expand_future") {
    addStyle("future_expand", 2);
    addBroker("マネックス証券", 3);
    addBroker("SBI証券", 2);
  }

  const dominantStyle = (Object.entries(styleScores).sort(
    (a, b) => b[1] - a[1]
  )[0]?.[0] ?? "balanced_choice") as StyleKey;

  if (dominantStyle === "easy_start") {
    addBroker("松井証券", 2);
    addBroker("楽天証券", 1);
  }
  if (dominantStyle === "reward_use") {
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 2);
    addBroker("三菱UFJ eスマート証券", 2);
  }
  if (dominantStyle === "balanced_choice") {
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 1);
    addBroker("松井証券", 1);
  }
  if (dominantStyle === "future_expand") {
    addBroker("マネックス証券", 3);
    addBroker("SBI証券", 2);
  }
  if (dominantStyle === "simple_safe") {
    addBroker("松井証券", 2);
    addBroker("三菱UFJ eスマート証券", 1);
    addBroker("楽天証券", 1);
  }

  const styleInfo = styleMaster[dominantStyle];

  brokers.forEach((item) => {
    if (item.name === "SBI証券") {
      item.reason =
        "総合力や還元、商品ラインナップの広さまで含めて広く見たい人向けの候補です。";
    }
    if (item.name === "楽天証券") {
      item.reason =
        "始めやすさとポイント活用の両方を感じながら使いたい人向けの候補です。";
    }
    if (item.name === "マネックス証券") {
      item.reason =
        "今後の広がりや商品ラインナップまで見ながら選びたい人向けの候補です。";
    }
    if (item.name === "三菱UFJ eスマート証券") {
      item.reason =
        "少額から始めながら、条件が合えば還元も活かしたい人向けの候補です。";
    }
    if (item.name === "松井証券") {
      item.reason =
        "シンプルさやわかりやすさを重視して、気負わず始めたい人向けの候補です。";
    }
  });

  const sortedResults = [...brokers].sort((a, b) => b.score - a.score).slice(0, 3);

  const answerSummary = [
    { label: "始めるときの気持ち", value: mapStartMood(startMood) },
    { label: "最初に気になること", value: mapFirstCheck(firstCheck) },
    { label: "続け方の理想", value: mapContinueStyle(continueStyle) },
    { label: "機能が多いときの感じ方", value: mapFeatureFeeling(featureFeeling) },
    { label: "1年後の理想", value: mapOneYearLater(oneYearLater) },
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

function mapStartMood(value: string) {
  if (value === "easy_start") return "まずはむずかしくないところから始めたい";
  if (value === "good_deal") return "どうせ始めるなら、お得さも大事にしたい";
  if (value === "balanced_choice") return "なるべくバランスのいいところを選びたい";
  if (value === "future_room") return "将来やりたいことが増えても困らない口座がいい";
  return "未選択";
}

function mapFirstCheck(value: string) {
  if (value === "easy_screen") return "画面や操作がわかりやすいこと";
  if (value === "points") return "ポイントや還元があること";
  if (value === "balance") return "いろいろ見たときに全体のバランスがいいこと";
  if (value === "many_products") return "取り扱っている商品が多いこと";
  return "未選択";
}

function mapContinueStyle(value: string) {
  if (value === "auto_continue") return "あまり考えずにそのまま続けられる形";
  if (value === "feel_benefit") return "ちょっと得している実感がある形";
  if (value === "safe_continue") return "変に偏らず安心して続けられる形";
  if (value === "expand_later") return "将来ほかの投資にも広げやすい形";
  return "未選択";
}

function mapFeatureFeeling(value: string) {
  if (value === "simple_is_best") return "できればシンプルな方が安心";
  if (value === "ok_if_benefit") return "メリットがあるなら多少多くてもOK";
  if (value === "middle_best") return "多すぎず少なすぎずがいい";
  if (value === "many_ok") return "多機能でも自分で使い分けられる";
  return "未選択";
}

function mapOneYearLater(value: string) {
  if (value === "easy_keep") return "無理なく積立が続いている";
  if (value === "benefit_keep") return "還元やポイントをうまく活かせている";
  if (value === "no_big_complaint") return "特に大きな不満なく使えている";
  if (value === "expand_future") return "NISA以外にも広げやすくなっている";
  return "未選択";
}