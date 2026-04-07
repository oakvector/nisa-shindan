"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ShindanPage() {
  const router = useRouter();

  const [startStyle, setStartStyle] = useState("");
  const [priority, setPriority] = useState("");
  const [continuity, setContinuity] = useState("");
  const [complexity, setComplexity] = useState("");
  const [futureView, setFutureView] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams({
      startStyle,
      priority,
      continuity,
      complexity,
      futureView,
    });

    router.push(`/result?${params.toString()}`);
  };

  const allAnswered =
    startStyle && priority && continuity && complexity && futureView;

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
              診断する
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
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 md:p-10">
            <p className="mb-3 text-sm font-semibold tracking-wide text-blue-700">
              診断ページ
            </p>

            <h1 className="mb-5 text-4xl font-bold leading-[1.15] tracking-tight text-slate-950 sm:text-5xl">
              あなたの
              <br />
              <span className="whitespace-nowrap">資産形成スタイル診断</span>
            </h1>

            <p className="mb-6 text-base leading-8 text-slate-600 sm:text-lg">
              5つの質問から、あなたに合う証券口座の選び方を整理します。
              重視する考え方や続けやすさの感覚から、相性の良い候補を見つけやすくします。
            </p>

            <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
              <span>5問・30秒で完了</span>
              <span>無料</span>
              <span>会員登録不要</span>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="mb-3 text-sm font-semibold text-slate-950">
                この診断で見ていること
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "始めやすさ",
                  "還元重視",
                  "バランス感覚",
                  "拡張性",
                  "続けやすさ",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
              <p className="mb-2 text-sm font-semibold text-slate-950">
                結果でわかること
              </p>
              <ol className="space-y-3 text-sm text-slate-600">
                <li>1. あなたの資産形成スタイル</li>
                <li>2. 相性が良い証券口座候補</li>
                <li>3. 比較時に重視したいポイント</li>
              </ol>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 md:p-10">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-blue-700">質問に回答</p>
                <h2 className="mt-1 text-2xl font-bold text-slate-950">
                  あなたの考え方に近いものを選んでください
                </h2>
              </div>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                全5問
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <QuestionCard title="質問1: 投資を始めるとき、いちばん近い気持ちは？">
                <RadioOption
                  name="startStyle"
                  value="safe"
                  checked={startStyle === "safe"}
                  onChange={setStartStyle}
                  label="まずは失敗しにくく始めたい"
                />
                <RadioOption
                  name="startStyle"
                  value="reward"
                  checked={startStyle === "reward"}
                  onChange={setStartStyle}
                  label="せっかくならお得さも重視したい"
                />
                <RadioOption
                  name="startStyle"
                  value="balanced"
                  checked={startStyle === "balanced"}
                  onChange={setStartStyle}
                  label="バランスよく選びたい"
                />
                <RadioOption
                  name="startStyle"
                  value="expand"
                  checked={startStyle === "expand"}
                  onChange={setStartStyle}
                  label="将来の選択肢の広さも見たい"
                />
              </QuestionCard>

              <QuestionCard title="質問2: 証券口座を選ぶとき、何が一番気になりますか？">
                <RadioOption
                  name="priority"
                  value="ease"
                  checked={priority === "ease"}
                  onChange={setPriority}
                  label="使いやすさ"
                />
                <RadioOption
                  name="priority"
                  value="points"
                  checked={priority === "points"}
                  onChange={setPriority}
                  label="ポイントや還元"
                />
                <RadioOption
                  name="priority"
                  value="balance"
                  checked={priority === "balance"}
                  onChange={setPriority}
                  label="総合力"
                />
                <RadioOption
                  name="priority"
                  value="products"
                  checked={priority === "products"}
                  onChange={setPriority}
                  label="商品ラインナップ"
                />
              </QuestionCard>

              <QuestionCard title="質問3: 積立を続けるうえで重要だと思うのは？">
                <RadioOption
                  name="continuity"
                  value="simple"
                  checked={continuity === "simple"}
                  onChange={setContinuity}
                  label="手間が少ないこと"
                />
                <RadioOption
                  name="continuity"
                  value="benefit"
                  checked={continuity === "benefit"}
                  onChange={setContinuity}
                  label="還元やメリットがあること"
                />
                <RadioOption
                  name="continuity"
                  value="stable"
                  checked={continuity === "stable"}
                  onChange={setContinuity}
                  label="無難でバランスが良いこと"
                />
                <RadioOption
                  name="continuity"
                  value="expandable"
                  checked={continuity === "expandable"}
                  onChange={setContinuity}
                  label="今後の拡張性があること"
                />
              </QuestionCard>

              <QuestionCard title="質問4: 情報量の多いサービスについてどう感じますか？">
                <RadioOption
                  name="complexity"
                  value="simple"
                  checked={complexity === "simple"}
                  onChange={setComplexity}
                  label="できるだけシンプルな方がいい"
                />
                <RadioOption
                  name="complexity"
                  value="benefit"
                  checked={complexity === "benefit"}
                  onChange={setComplexity}
                  label="多少多くてもメリットがあるならOK"
                />
                <RadioOption
                  name="complexity"
                  value="middle"
                  checked={complexity === "middle"}
                  onChange={setComplexity}
                  label="バランス次第"
                />
                <RadioOption
                  name="complexity"
                  value="many"
                  checked={complexity === "many"}
                  onChange={setComplexity}
                  label="多機能でも問題ない"
                />
              </QuestionCard>

              <QuestionCard title="質問5: NISAの先も考えるなら、どちらに近いですか？">
                <RadioOption
                  name="futureView"
                  value="continue"
                  checked={futureView === "continue"}
                  onChange={setFutureView}
                  label="まずは積立を無理なく続けたい"
                />
                <RadioOption
                  name="futureView"
                  value="reward"
                  checked={futureView === "reward"}
                  onChange={setFutureView}
                  label="お得さを活かして続けたい"
                />
                <RadioOption
                  name="futureView"
                  value="balance"
                  checked={futureView === "balance"}
                  onChange={setFutureView}
                  label="長く使える無難な口座がいい"
                />
                <RadioOption
                  name="futureView"
                  value="global"
                  checked={futureView === "global"}
                  onChange={setFutureView}
                  label="米国株なども視野に入れたい"
                />
              </QuestionCard>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-3 text-sm font-semibold text-slate-950">
                  回答状況
                </p>
                <p className="text-sm text-slate-600">
                  {[
                    startStyle,
                    priority,
                    continuity,
                    complexity,
                    futureView,
                  ].filter(Boolean).length}
                  /5 問入力済み
                </p>
              </div>

              <button
                type="submit"
                disabled={!allAnswered}
                className={`w-full rounded-xl px-6 py-3 text-center font-medium transition ${
                  allAnswered
                    ? "bg-slate-950 text-white hover:opacity-90"
                    : "cursor-not-allowed bg-slate-200 text-slate-500"
                }`}
              >
                診断結果を見る
              </button>

              <p className="text-xs leading-6 text-slate-500">
                診断結果は一般的な比較情報をもとに候補整理を行うものであり、
                最終的な条件や最新情報は各公式サイトをご確認ください。
              </p>
            </form>
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

function QuestionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <h3 className="mb-4 text-lg font-semibold text-slate-950">{title}</h3>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function RadioOption({
  name,
  value,
  checked,
  onChange,
  label,
}: {
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  label: string;
}) {
  return (
    <label className="flex cursor-pointer items-center rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 transition hover:border-slate-300">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
        className="mr-3"
      />
      <span>{label}</span>
    </label>
  );
}