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

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="/shindan"
            className="rounded-xl bg-black px-6 py-3 text-center text-white transition hover:opacity-90"
          >
            診断をはじめる
          </a>

          <a
            href="/hikaku"
            className="rounded-xl border border-gray-300 px-6 py-3 text-center transition hover:bg-gray-50"
          >
            比較一覧を見る
          </a>
        </div>
      </section>
    </main>
  );
}