export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="mb-4 text-sm font-semibold text-blue-600">
          NISA・証券口座選びをシンプルに
        </p>

        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
          5問でわかる
          <br />
          NISA向け証券口座診断
        </h1>

        <p className="mb-8 max-w-2xl text-lg text-gray-600">
          クレカ積立、ポイント還元、使いやすさ、米国株対応などから、
          あなたに合う証券口座候補を絞り込みます。
        </p>

        <div className="mb-12 flex flex-col gap-4 sm:flex-row">
          <a
            href="/shindan"
            className="rounded-xl bg-black px-6 py-3 text-center text-white transition hover:opacity-90"
          >
            診断をはじめる
          </a>

          <a
            href="/how-it-works"
            className="rounded-xl border border-gray-300 px-6 py-3 text-center transition hover:bg-gray-50"
          >
            このサイトの使い方
          </a>
        </div>

        <section className="rounded-2xl bg-gray-50 p-6">
          <h2 className="mb-4 text-2xl font-semibold">
            このサイトでできること
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-gray-700">
            <li>5つの質問から証券口座候補を絞り込む</li>
            <li>候補ごとの特徴や向いている人を確認する</li>
            <li>診断結果をもとに公式サイトを比較する</li>
          </ul>
        </section>
      </section>
<section className="mt-8 rounded-2xl border border-gray-200 p-6">
  <h2 className="mb-4 text-2xl font-semibold">
    このサイトで比較しているポイント
  </h2>

  <div className="grid gap-4 sm:grid-cols-2">
    <div className="rounded-xl bg-gray-50 p-4">
      <h3 className="mb-2 font-semibold">クレカ積立対応</h3>
      <p className="text-sm text-gray-600">
        クレジットカード積立に対応しているかを比較します。
      </p>
    </div>

    <div className="rounded-xl bg-gray-50 p-4">
      <h3 className="mb-2 font-semibold">ポイント還元</h3>
      <p className="text-sm text-gray-600">
        積立や利用時のポイント還元の違いを整理します。
      </p>
    </div>

    <div className="rounded-xl bg-gray-50 p-4">
      <h3 className="mb-2 font-semibold">使いやすさ</h3>
      <p className="text-sm text-gray-600">
        初心者でも使いやすいか、操作性の観点で確認します。
      </p>
    </div>

    <div className="rounded-xl bg-gray-50 p-4">
      <h3 className="mb-2 font-semibold">米国株対応</h3>
      <p className="text-sm text-gray-600">
        米国株や商品ラインナップの広さも比較対象に含めます。
      </p>
    </div>

    <div className="rounded-xl bg-gray-50 p-4">
      <h3 className="mb-2 font-semibold">初心者向けか</h3>
      <p className="text-sm text-gray-600">
        これから始める人でも選びやすいサービスかを見ます。
      </p>
    </div>

    <div className="rounded-xl bg-gray-50 p-4">
      <h3 className="mb-2 font-semibold">少額積立のしやすさ</h3>
      <p className="text-sm text-gray-600">
        少額から始めやすいかどうかも重視しています。
      </p>
    </div>
  </div>
</section>

      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <a href="/about" className="hover:underline">
              About
            </a>
            <a href="/privacy" className="hover:underline">
              Privacy
            </a>
            <a href="/disclosure" className="hover:underline">
              Disclosure
            </a>
            <a href="/how-it-works" className="hover:underline">
              How it works
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}