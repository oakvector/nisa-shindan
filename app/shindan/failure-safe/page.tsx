"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FailureSafeShindanPage() {
  const router = useRouter();

  const [mistakeFear, setMistakeFear] = useState("");
  const [decisionStyle, setDecisionStyle] = useState("");
  const [priority, setPriority] = useState("");
  const [supportNeed, setSupportNeed] = useState("");
  const [futureConcern, setFutureConcern] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams({
      mistakeFear,
      decisionStyle,
      priority,
      supportNeed,
      futureConcern,
    });

    router.push(`/shindan/failure-safe/result?${params.toString()}`);
  };

  const allAnswered =
    mistakeFear && decisionStyle && priority && supportNeed && futureConcern;

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
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 md:p-10">
            <p className="mb-3 text-sm font-semibold tracking-wide text-blue-700">
              診断ページ
            </p>

            <h1 className="mb-5 text-4xl font-bold leading-[1.15] tracking-tight text-slate-950 sm:text-5xl">
              NISAで
              <br />
              <span className="whitespace-nowrap">失敗しにくい口座タイプ診断</span>
            </h1>

            <p className="mb-6 text-base leading-8 text-slate-600 sm:text-lg">
              5つの質問から、あなたが避けたい失敗や迷いやすいポイントを整理し、
              相性の良い証券口座候補を見つけやすくする診断です。
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
                  "迷いにくさ",
                  "始めやすさ",
                  "サポート",
                  "還元の取りこぼし",
                  "機能不足の回避",
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
                <li>1. あなたが避けたい失敗パターン</li>
                <li>2. 相性の良い口座タイプ</li>
                <li>3. 比較時に見落としにくい候補</li>
              </ol>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 md:p-10">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-blue-700">質問に回答</p>
                <h2 className="mt-1 text-2xl font-bold text-slate-950">
                  失敗したくないポイントに近いものを選んでください
                </h2>
              </div>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                全5問
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <QuestionCard title="質問1: いちばん避けたいのはどれですか？">
                <RadioOption
                  name="mistakeFear"
                  value="too_complex"
                  checked={mistakeFear === "too_complex"}
                  onChange={setMistakeFear}
                  label="複雑すぎて続かなくなること"
                />
                <RadioOption
                  name="mistakeFear"
                  value="miss_rewards"
                  checked={mistakeFear === "miss_rewards"}
                  onChange={setMistakeFear}
                  label="還元やメリットを取りこぼすこと"
                />
                <RadioOption
                  name="mistakeFear"
                  value="lack_features"
                  checked={mistakeFear === "lack_features"}
                  onChange={setMistakeFear}
                  label="あとで機能不足を感じること"
                />
                <RadioOption
                  name="mistakeFear"
                  value="wrong_choice"
                  checked={mistakeFear === "wrong_choice"}
                  onChange={setMistakeFear}
                  label="無難だと思って選んだのに合わないこと"
                />
              </QuestionCard>

              <QuestionCard title="質問2: 選ぶときのスタンスはどれに近いですか？">
                <RadioOption
                  name="decisionStyle"
                  value="simple"
                  checked={decisionStyle === "simple"}
                  onChange={setDecisionStyle}
                  label="できるだけ迷わず選びたい"
                />
                <RadioOption
                  name="decisionStyle"
                  value="benefit"
                  checked={decisionStyle === "benefit"}
                  onChange={setDecisionStyle}
                  label="メリットが大きい方を選びたい"
                />
                <RadioOption
                  name="decisionStyle"
                  value="balanced"
                  checked={decisionStyle === "balanced"}
                  onChange={setDecisionStyle}
                  label="極端ではなく総合力で選びたい"
                />
                <RadioOption
                  name="decisionStyle"
                  value="future"
                  checked={decisionStyle === "future"}
                  onChange={setDecisionStyle}
                  label="あとで後悔しない拡張性も欲しい"
                />
              </QuestionCard>

              <QuestionCard title="質問3: 口座を選ぶとき、最初に確認したいのは？">
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
                  value="support"
                  checked={priority === "support"}
                  onChange={setPriority}
                  label="サポートやわかりやすさ"
                />
                <RadioOption
                  name="priority"
                  value="products"
                  checked={priority === "products"}
                  onChange={setPriority}
                  label="商品ラインナップ"
                />
              </QuestionCard>

              <QuestionCard title="質問4: サポートや案内のわかりやすさはどれくらい重要ですか？">
                <RadioOption
                  name="supportNeed"
                  value="very_high"
                  checked={supportNeed === "very_high"}
                  onChange={setSupportNeed}
                  label="かなり重要"
                />
                <RadioOption
                  name="supportNeed"
                  value="important"
                  checked={supportNeed === "important"}
                  onChange={setSupportNeed}
                  label="ある程度重要"
                />
                <RadioOption
                  name="supportNeed"
                  value="normal"
                  checked={supportNeed === "normal"}
                  onChange={setSupportNeed}
                  label="普通"
                />
                <RadioOption
                  name="supportNeed"
                  value="low"
                  checked={supportNeed === "low"}
                  onChange={setSupportNeed}
                  label="あまり重視しない"
                />
              </QuestionCard>

              <QuestionCard title="質問5: 1年後を考えたとき、どちらが近いですか？">
                <RadioOption
                  name="futureConcern"
                  value="keep_going"
                  checked={futureConcern === "keep_going"}
                  onChange={setFutureConcern}
                  label="まずは無理なく積立を続けていたい"
                />
                <RadioOption
                  name="futureConcern"
                  value="maximize_rewards"
                  checked={futureConcern === "maximize_rewards"}
                  onChange={setFutureConcern}
                  label="還元やお得さを活かせていたい"
                />
                <RadioOption
                  name="futureConcern"
                  value="safe_choice"
                  checked={futureConcern === "safe_choice"}
                  onChange={setFutureConcern}
                  label="無難で後悔の少ない選び方をしていたい"
                />
                <RadioOption
                  name="futureConcern"
                  value="more_options"
                  checked={futureConcern === "more_options"}
                  onChange={setFutureConcern}
                  label="選択肢の広い口座を使えていたい"
                />
              </QuestionCard>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-3 text-sm font-semibold text-slate-950">
                  回答状況
                </p>
                <p className="text-sm text-slate-600">
                  {[
                    mistakeFear,
                    decisionStyle,
                    priority,
                    supportNeed,
                    futureConcern,
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