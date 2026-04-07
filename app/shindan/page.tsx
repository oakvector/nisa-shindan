export default function ShindanIndexPage() {
  const diagnoses = [
    {
      title: "あなたの資産形成スタイル診断",
      description:
        "自分がどんな考え方で口座を選ぶと納得しやすいかを整理する、いちばん基本の診断です。",
      href: "/shindan/style",
      status: "公開中",
      tag: "基本診断",
    },
    {
      title: "NISAで失敗しにくい口座タイプ診断",
      description:
        "避けたい失敗や不安から、自分に合う口座タイプを探す診断です。",
      href: "/shindan/failure-safe",
      status: "公開中",
      tag: "失敗回避",
    },
    {
      title: "あなたに合う続けやすい投資スタイル診断",
      description:
        "無理なく続けやすい投資の形から、相性の良い候補を整理する診断です。",
      href: "/shindan/continue-style",
      status: "公開中",
      tag: "継続重視",
    },
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
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 md:p-10">
          <p className="mb-3 text-sm font-semibold tracking-wide text-blue-700">
            診断一覧
          </p>

          <h1 className="mb-5 text-4xl font-bold leading-[1.15] tracking-tight text-slate-950 sm:text-5xl">
            目的に合った
            <br />
            <span className="whitespace-nowrap">診断を選ぶ</span>
          </h1>

          <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            このサイトでは、証券口座選びをひとつの基準だけで決めないために、
            3つの違う切り口から診断できる形にしています。
            まずは今の自分にいちばん近いテーマを選んでください。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {diagnoses.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {item.status}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  {item.tag}
                </span>
              </div>

              <h2 className="mb-4 text-2xl font-bold text-slate-950">
                {item.title}
              </h2>

              <p className="mb-6 text-sm leading-7 text-slate-600 sm:text-base">
                {item.description}
              </p>

              <a
                href={item.href}
                className="inline-flex rounded-xl bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                この診断をはじめる
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <p className="mb-2 text-sm font-semibold text-blue-700">1本目</p>
            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              自分のタイプを知りたい人向け
            </h2>
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              まずは広く、自分がどんな基準で口座を選ぶと納得しやすいかを知りたい人に向いています。
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <p className="mb-2 text-sm font-semibold text-blue-700">2本目</p>
            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              後悔や失敗を減らしたい人向け
            </h2>
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              口座選びで何を避けたいかがはっきりしている人は、この切り口から選ぶと整理しやすいです。
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <p className="mb-2 text-sm font-semibold text-blue-700">3本目</p>
            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              無理なく続けたい人向け
            </h2>
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              続けられるかどうかを一番大事にしたい人は、この診断から入ると相性が見えやすいです。
            </p>
          </div>
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