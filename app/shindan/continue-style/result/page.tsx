type ResultPageProps = {
  searchParams: Promise<{
    idealPace?: string;
    feelGood?: string;
    manageFeeling?: string;
    stopReason?: string;
    idealAfterYear?: string;
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
  | "natural_keep"
  | "reward_keep"
  | "steady_keep"
  | "expand_keep"
  | "light_keep";

type ContinueStyleInfo = {
  title: string;
  description: string;
  points: string[];
};

const styleMaster: Record<ContinueStyleKey, ContinueStyleInfo> = {
  natural_keep: {
    title: "自然体継続型",
    description:
      "気合いで頑張るより、無理なく自然に続けたいタイプです。わかりやすさや、迷いにくさと相性が良い候補を選びやすい傾向があります。",
    points: ["わかりやすさ", "始めやすさ", "少額積立", "迷いにくさ"],
  },
  reward_keep: {
    title: "還元実感型",
    description:
      "続けるなら、少しでもお得さを感じたいタイプです。ポイント還元やクレカ積立との相性を重視しやすい傾向があります。",
    points: ["ポイント還元", "クレカ積立", "経済圏との相性", "続ける実感"],
  },
  steady_keep: {
    title: "安定継続型",
    description:
      "派手さより、安心感や無難さを大事にして続けたいタイプです。総合力や落ち着いて使えることを重視しやすい傾向があります。",
    points: ["総合力", "安心感", "使いやすさ", "継続しやすさ"],
  },
  expand_keep: {
    title: "将来ひろがる型",
    description:
      "今は積立中心でも、その先の選択肢も持っていたいタイプです。商品ラインナップや将来の広がりと相性が良い候補を見やすい傾向があります。",
    points: ["商品ラインナップ", "拡張性", "米国株対応", "将来の自由度"],
  },
  light_keep: {
    title: "省力継続型",
    description:
      "設定や管理の負担を増やしすぎず、軽い感覚で続けたいタイプです。シンプルさや管理のしやすさと相性が良い候補を選びやすい傾向があります。",
    points: ["シンプルさ", "管理のしやすさ", "少額積立", "負担の少なさ"],
  },
};

export default async function ContinueStyleResultPage({
  searchParams,
}: ResultPageProps) {
  const params = await searchParams;

  const idealPace = params.idealPace ?? "";
  const feelGood = params.feelGood ?? "";
  const manageFeeling = params.manageFeeling ?? "";
  const stopReason = params.stopReason ?? "";
  const idealAfterYear = params.idealAfterYear ?? "";

  const styleScores: Record<ContinueStyleKey, number> = {
    natural_keep: 0,
    reward_keep: 0,
    steady_keep: 0,
    expand_keep: 0,
    light_keep: 0,
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

  if (idealPace === "easy") {
    addStyle("natural_keep", 2);
    addStyle("light_keep", 1);
    addBroker("松井証券", 2);
    addBroker("楽天証券", 1);
    addBroker("三菱UFJ eスマート証券", 1);
  }
  if (idealPace === "reward") {
    addStyle("reward_keep", 3);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 2);
    addBroker("三菱UFJ eスマート証券", 2);
  }
  if (idealPace === "stable") {
    addStyle("steady_keep", 3);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 1);
    addBroker("松井証券", 1);
  }
  if (idealPace === "expand") {
    addStyle("expand_keep", 3);
    addBroker("マネックス証券", 3);
    addBroker("SBI証券", 2);
  }

  if (feelGood === "easy_ui") {
    addStyle("natural_keep", 2);
    addBroker("松井証券", 2);
    addBroker("楽天証券", 1);
  }
  if (feelGood === "points") {
    addStyle("reward_keep", 2);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 2);
    addBroker("三菱UFJ eスマート証券", 2);
  }
  if (feelGood === "安心") {
    addStyle("steady_keep", 2);
    addBroker("SBI証券", 2);
    addBroker("松井証券", 1);
    addBroker("楽天証券", 1);
  }
  if (feelGood === "options") {
    addStyle("expand_keep", 2);
    addBroker("マネックス証券", 2);
    addBroker("SBI証券", 1);
  }

  if (manageFeeling === "few") {
    addStyle("light_keep", 3);
    addBroker("松井証券", 2);
    addBroker("楽天証券", 1);
  }
  if (manageFeeling === "worth") {
    addStyle("reward_keep", 1);
    addStyle("steady_keep", 1);
    addBroker("SBI証券", 1);
    addBroker("楽天証券", 1);
    addBroker("三菱UFJ eスマート証券", 1);
  }
  if (manageFeeling === "normal") {
    addStyle("steady_keep", 2);
    addBroker("SBI証券", 1);
    addBroker("楽天証券", 1);
    addBroker("松井証券", 1);
  }
  if (manageFeeling === "many") {
    addStyle("expand_keep", 2);
    addBroker("マネックス証券", 2);
    addBroker("SBI証券", 1);
  }

  if (stopReason === "complex") {
    addStyle("natural_keep", 2);
    addStyle("light_keep", 1);
    addBroker("松井証券", 2);
    addBroker("楽天証券", 1);
  }
  if (stopReason === "no_benefit") {
    addStyle("reward_keep", 2);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 2);
    addBroker("三菱UFJ eスマート証券", 1);
  }
  if (stopReason === "not_fit") {
    addStyle("steady_keep", 2);
    addBroker("SBI証券", 2);
    addBroker("松井証券", 1);
  }
  if (stopReason === "not_enough") {
    addStyle("expand_keep", 2);
    addBroker("マネックス証券", 2);
    addBroker("SBI証券", 1);
  }

  if (idealAfterYear === "natural") {
    addStyle("natural_keep", 2);
    addStyle("light_keep", 1);
    addBroker("松井証券", 2);
    addBroker("楽天証券", 1);
  }
  if (idealAfterYear === "reward_keep") {
    addStyle("reward_keep", 2);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 2);
    addBroker("三菱UFJ eスマート証券", 2);
  }
  if (idealAfterYear === "calm") {
    addStyle("steady_keep", 2);
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 1);
    addBroker("松井証券", 1);
  }
  if (idealAfterYear === "expand_keep") {
    addStyle("expand_keep", 2);
    addBroker("マネックス証券", 3);
    addBroker("SBI証券", 2);
  }

  const dominantStyle = (Object.entries(styleScores).sort(
    (a, b) => b[1] - a[1]
  )[0]?.[0] ?? "steady_keep") as ContinueStyleKey;

  if (dominantStyle === "natural_keep") {
    addBroker("松井証券", 2);
    addBroker("楽天証券", 1);
  }
  if (dominantStyle === "reward_keep") {
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 2);
    addBroker("三菱UFJ eスマート証券", 2);
  }
  if (dominantStyle === "steady_keep") {
    addBroker("SBI証券", 2);
    addBroker("楽天証券", 1);
    addBroker("松井証券", 1);
  }
  if (dominantStyle === "expand_keep") {
    addBroker("マネックス証券", 3);
    addBroker("SBI証券", 2);
  }
  if (dominantStyle === "light_keep") {
    addBroker("松井証券", 2);
    addBroker("三菱UFJ eスマート証券", 1);
    addBroker("楽天証券", 1);
  }

  const styleInfo = styleMaster[dominantStyle];

  brokers.forEach((item) => {
    if (item.name === "SBI証券") {
      item.reason =
        "総合力や還元、商品ラインナップの広さまで含めて長く使いやすい候補です。";
    }
    if (item.name === "楽天証券") {
      item.reason =
        "始めやすさとポイント活用の両方を感じながら、無理なく続けたい人向けの候補です。";
    }
    if (item.name === "マネックス証券") {
      item.reason =
        "積立の先の選択肢まで視野に入れて、将来の広がりを持って続けたい人向けの候補です。";
    }
    if (item.name === "三菱UFJ eスマート証券") {
      item.reason =
        "条件が合えば、少額から始めつつお得さも感じながら続けやすい候補です。";
    }
    if (item.name === "松井証券") {
      item.reason =
        "シンプルさやわかりやすさを重視して、気負わず続けたい人向けの候補です。";
    }
  });

  const sortedResults = [...brokers].sort((a, b) => b.score - a.score).slice(0, 3);

  const answerSummary = [
    { label: "理想の続け方", value: mapIdealPace(idealPace) },
    { label: "気分が上がること", value: mapFeelGood(feelGood) },
    { label: "管理や設定の考え方", value: mapManageFeeling(manageFeeling) },
    { label: "続かなくなる理由", value: mapStopReason(stopReason) },
    { label: "1年後の理想", value: mapIdealAfterYear(idealAfterYear) },
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

function mapIdealPace(value: string) {
  if (value === "easy") return "あまり手間をかけずに淡々と続けたい";
  if (value === "reward") return "ちょっと得している感じがあると続けやすい";
  if (value === "stable") return "無理のないバランスで続けたい";
  if (value === "expand") return "慣れたらいろいろ広げられる形がいい";
  return "未選択";
}

function mapFeelGood(value: string) {
  if (value === "easy_ui") return "操作がわかりやすいこと";
  if (value === "points") return "ポイントや還元があること";
  if (value === "安心") return "安心感があること";
  if (value === "options") return "選べる商品が多いこと";
  return "未選択";
}

function mapManageFeeling(value: string) {
  if (value === "few") return "できるだけ少ない方がいい";
  if (value === "worth") return "得なら多少の手間は気にしない";
  if (value === "normal") return "普通くらいなら大丈夫";
  if (value === "many") return "多くてもあまり気にしない";
  return "未選択";
}

function mapStopReason(value: string) {
  if (value === "complex") return "むずかしくて面倒に感じる";
  if (value === "no_benefit") return "お得さを感じられなくなる";
  if (value === "not_fit") return "自分に合っているかわからなくなる";
  if (value === "not_enough") return "やれることが少なくて物足りなくなる";
  return "未選択";
}

function mapIdealAfterYear(value: string) {
  if (value === "natural") return "何も無理せず自然に積立が続いている";
  if (value === "reward_keep") return "還元をうまく使いながら続けられている";
  if (value === "calm") return "不安なく落ち着いて続けられている";
  if (value === "expand_keep") return "積立以外も少し見えるようになっている";
  return "未選択";
}