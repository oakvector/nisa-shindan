export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-gray-900">
      <section className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-semibold text-blue-600">
          サイトの使い方
        </p>

        <h1 className="mb-6 text-3xl font-bold md:text-4xl">
          このサイトの使い方
        </h1>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="mb-3 text-xl font-semibold">1. まず診断を行う</h2>
            <p>
              診断ページでは、投資経験、重視するポイント、米国株の利用意向、
              クレカ積立の希望、毎月の積立予定額などを入力します。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">2. 候補を比較する</h2>
            <p>
              診断結果では、入力内容に応じて証券口座候補を表示します。
              まずは上位候補を確認し、それぞれの特徴や向いている人を比べてください。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              3. 詳細ページで特徴を確認する
            </h2>
            <p>
              各候補の詳細ページでは、向いている人、注意点、使い方の相性などを
              確認できます。診断結果だけで決めず、詳細ページも確認してください。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              4. 最終判断は公式サイトで確認する
            </h2>
            <p>
              掲載情報はできる限り更新しますが、手数料、取扱商品、キャンペーン、
              口座開設条件などの最新情報は、必ず各公式サイトをご確認ください。
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}