"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ShindanPage() {
  const router = useRouter();

  const [experience, setExperience] = useState("");
  const [focus, setFocus] = useState("");
  const [usStocks, setUsStocks] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [monthly, setMonthly] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams({
      experience,
      focus,
      usStocks,
      creditCard,
      monthly,
    });

    router.push(`/result?${params.toString()}`);
  };

  const allAnswered =
    experience && focus && usStocks && creditCard && monthly;

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
              5問でわかる
              <br />
              <span className="whitespace-nowrap">証券口座診断</span>
            </h1>

            <p className="mb-6 text-base leading-8 text-slate-600 sm:text-lg">
              投資経験や重視するポイントを選ぶと、条件に合いそうな証券口座候補を
              整理しやすい形で表示します。
            </p>

            <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
              <span>5問・30秒で完了</span>
              <span>無料</span>
              <span>会員登録不要</span>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="mb-3 text-sm font-semibold text-slate-950">
                この診断で見ているポイント
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "クレカ積立",
                  "ポイント還元",
                  "使いやすさ",
                  "米国株対応",
                  "少額積立",
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
                診断の流れ
              </p>
              <ol className="space-y-3 text-sm text-slate-600">
                <li>1. 5つの質問に答える</li>
                <li>2. 条件に合う候補を表示する</li>
                <li>3. 詳細ページで違いを確認する</li>
              </ol>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 md:p-10">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-blue-700">質問に回答</p>
                <h2 className="mt-1 text-2xl font-bold text-slate-950">
                  あなたに合う条件を選んでください
                </h2>
              </div>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                全5問
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <QuestionCard title="質問1: 投資経験はどれくらいですか？">
                <RadioOption
                  name="experience"
                  value="beginner"
                  checked={experience === "beginner"}
                  onChange={setExperience}
                  label="これから始める"
                />
                <RadioOption
                  name="experience"
                  value="some"
                  checked={experience === "some"}
                  onChange={setExperience}
                  label="少し経験がある"
                />
                <RadioOption
                  name="experience"
                  value="advanced"
                  checked={experience === "advanced"}
                  onChange={setExperience}
                  label="慣れている"
                />
              </QuestionCard>

              <QuestionCard title="質問2: 何を重視しますか？">
                <RadioOption
                  name="focus"
                  value="points"
                  checked={focus === "points"}
                  onChange={setFocus}
                  label="ポイント還元"
                />
                <RadioOption
                  name="focus"
                  value="ease"
                  checked={focus === "ease"}
                  onChange={setFocus}
                  label="使いやすさ"
                />
                <RadioOption
                  name="focus"
                  value="products"
                  checked={focus === "products"}
                  onChange={setFocus}
                  label="商品ラインナップ"
                />
              </QuestionCard>

              <QuestionCard title="質問3: 米国株も使いたいですか？">
                <RadioOption
                  name="usStocks"
                  value="yes"
                  checked={usStocks === "yes"}
                  onChange={setUsStocks}
                  label="はい"
                />
                <RadioOption
                  name="usStocks"
                  value="no"
                  checked={usStocks === "no"}
                  onChange={setUsStocks}
                  label="いいえ"
                />
              </QuestionCard>

              <QuestionCard title="質問4: クレカ積立を使いたいですか？">
                <RadioOption
                  name="creditCard"
                  value="yes"
                  checked={creditCard === "yes"}
                  onChange={setCreditCard}
                  label="はい"
                />
                <RadioOption
                  name="creditCard"
                  value="no"
                  checked={creditCard === "no"}
                  onChange={setCreditCard}
                  label="いいえ"
                />
              </QuestionCard>

              <QuestionCard title="質問5: 毎月の積立予定額は？">
                <RadioOption
                  name="monthly"
                  value="small"
                  checked={monthly === "small"}
                  onChange={setMonthly}
                  label="1万円未満"
                />
                <RadioOption
                  name="monthly"
                  value="mid"
                  checked={monthly === "mid"}
                  onChange={setMonthly}
                  label="1〜5万円"
                />
                <RadioOption
                  name="monthly"
                  value="large"
                  checked={monthly === "large"}
                  onChange={setMonthly}
                  label="5万円超"
                />
              </QuestionCard>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-3 text-sm font-semibold text-slate-950">
                  回答状況
                </p>
                <p className="text-sm text-slate-600">
                  {[
                    experience,
                    focus,
                    usStocks,
                    creditCard,
                    monthly,
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