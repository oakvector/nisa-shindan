export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-gray-900">
      <section className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-semibold text-blue-600">運営者情報</p>

        <h1 className="mb-6 text-3xl font-bold md:text-4xl">
          このサイトについて
        </h1>

        <div className="space-y-6 text-gray-700">
          <p>
            このサイトは、NISAや証券口座選びで迷っている人向けに、
            比較情報や診断コンテンツを提供することを目的としています。
          </p>

          <p>
            各サービスの特徴、使いやすさ、ポイント還元、クレカ積立対応などを整理し、
            自分に合う候補を見つけやすくするための情報を掲載しています。
          </p>

          <p>
            なお、本サイトの内容は一般的な情報提供を目的としており、
            特定の投資判断を推奨するものではありません。
            最終的な判断は、各公式サイトの最新情報をご確認のうえ、
            ご自身で行ってください。
          </p>
        </div>
      </section>
    </main>
  );
}