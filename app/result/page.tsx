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
  score: number;
  reason: string;
};

export default async function ResultPage({ searchParams }: ResultPageProps) {
  const params = await searchParams;

  const experience = params.experience ?? "";
  const focus = params.focus ?? "";
  const usStocks = params.usStocks ?? "";
  const creditCard = params.creditCard ?? "";
  const monthly = params.monthly ?? "";

  const results: ServiceResult[] = [
    { name: "A証券", score: 0, reason: "" },
    { name: "B証券", score: 0, reason: "" },
    { name: "C証券", score: 0, reason: "" },
  ];

  // 投資経験
  if (experience === "beginner") {
    results[0].score += 3; // A証券
    results[1].score += 2; // B証券
  }
  if (experience === "some") {
    results[1].score += 2;
    results[2].score += 2;
  }
  if (experience === "advanced") {
    results[2].score += 3;
  }

  // 重視するもの
  if (focus === "points") {
    results[0].score += 3;
  }
  if (focus === "ease") {
    results[1].score += 3;
  }
  if (focus === "products") {
    results[2].score += 3;
  }

  // 米国株
  if (usStocks === "yes") {
    results[2].score += 3;
  } else if (usStocks === "no") {
    results[0].score += 1;
    results[1].score += 1;
  }

  // クレカ積立
  if (creditCard === "yes") {
    results[0].score += 3;
    results[1].score += 1;
  } else if (creditCard === "no") {
    results[2].score += 1;
  }

  // 毎月の積立額
  if (monthly === "small") {
    results[0].score += 2;
    results[1].score += 1;
  }
  if (monthly === "mid") {
    results[1].score += 2;
    results[2].score += 1;
  }
  if (monthly === "large") {
    results[2].score += 2;
  }

  // 理由文を入れる
  results.forEach((item) => {
    if (item.name === "A証券") {
      item.reason =
        "初心者向け、ポイント還元、クレカ積立との相性を重視した候補です。";
    }
    if (item.name === "B証券") {
      item.reason =
        "使いやすさとバランスを重視した、中間的な候補です。";
    }
    if (item.name === "C証券") {
      item.reason =
        "米国株や商品ラインナップを重視する人向けの候補です。";
    }
  });

  const sortedResults = [...results].sort((a, b) => b.score - a.score);

  return (
    <main className="min-h-screen bg-white px-6 py-16 text-gray-900">
      <section className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-semibold text-blue-600">診断結果</p>

        <h1 className="mb-6 text-3xl font-bold md:text-4xl">
          あなたに合いそうな証券口座候補
        </h1>

        <p className="mb-10 text-gray-600">
          回答内容に応じて、3つの候補を点数順に並べています。
        </p>

        <div className="mb-10 rounded-2xl border border-gray-200 p-6">
          <h2 className="mb-4 text-xl font-semibold">受け取った回答</h2>
          <ul className="space-y-2 text-gray-700">
            <li>投資経験: {experience || "未選択"}</li>
            <li>重視するもの: {focus || "未選択"}</li>
            <li>米国株利用: {usStocks || "未選択"}</li>
            <li>クレカ積立: {creditCard || "未選択"}</li>
            <li>毎月の積立額: {monthly || "未選択"}</li>
          </ul>
        </div>

        <div className="space-y-6">
          {sortedResults.map((item, index) => (
            <section
              key={item.name}
              className="rounded-2xl border border-gray-200 p-6"
            >
              <p className="mb-2 text-sm text-gray-500">{index + 1}位</p>
              <h2 className="text-2xl font-semibold">{item.name}</h2>
              <p className="mt-3 text-gray-700">{item.reason}</p>
              <p className="mt-3 text-sm text-gray-500">スコア: {item.score}</p>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}