"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "続けやすい投資スタイル診断 | NISA向け証券口座診断",
  description:
    "無理なく続けやすい投資スタイルを5つの質問から整理する診断です。手間の少なさ、お得さ、安心感、将来の広がりから候補を見つけやすくします。",
  alternates: {
    canonical: "/shindan/continue-style",
  },
};

export default function ContinueStyleShindanPage() {
  const router = useRouter();

  const [idealPace, setIdealPace] = useState("");
  const [feelGood, setFeelGood] = useState("");
  const [manageFeeling, setManageFeeling] = useState("");
  const [stopReason, setStopReason] = useState("");
  const [idealAfterYear, setIdealAfterYear] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams({
      idealPace,
      feelGood,
      manageFeeling,
      stopReason,
      idealAfterYear,
    });

    router.push(`/shindan/continue-style/result?${params.toString()}`);
  };

  const allAnswered =
    idealPace && feelGood && manageFeeling && stopReason && idealAfterYear;

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
              あなたに合う
              <br />
              <span className="whitespace-nowrap">続けやすい投資スタイル診断</span>
            </h1>

            <p className="mb-6 text-base leading-8 text-slate-600 sm:text-lg">
              5つの質問から、あなたが無理なく続けやすい投資スタイルを整理します。
              「手間を増やしたくない」「少しお得だと続きやすい」などの感覚から、
              相性の良い候補を見つけやすくする診断です。
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
                  "無理のない継続",
                  "管理のしやすさ",
                  "お得さの感じやすさ",
                  "ストレスの少なさ",
                  "習慣化しやすさ",
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
                <li>1. あなたが続けやすい投資の形</li>
                <li>2. 相性の良い証券口座候補</li>
                <li>3. 続けやすさの観点で重視したいポイント</li>
              </ol>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 md:p-10">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-blue-700">質問に回答</p>
                <h2 className="mt-1 text-2xl font-bold text-slate-950">
                  いちばん近いものを選んでください
                </h2>
              </div>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                全5問
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <QuestionCard title="質問1: 積立を続けるなら、どんな感じが理想ですか？">
                <RadioOption
                  name="idealPace"
                  value="easy"
                  checked={idealPace === "easy"}
                  onChange={setIdealPace}
                  label="あまり手間をかけずに淡々と続けたい"
                />
                <RadioOption
                  name="idealPace"
                  value="reward"
                  checked={idealPace === "reward"}
                  onChange={setIdealPace}
                  label="ちょっと得している感じがあると続けやすい"
                />
                <RadioOption
                  name="idealPace"
                  value="stable"
                  checked={idealPace === "stable"}
                  onChange={setIdealPace}
                  label="無理のないバランスで続けたい"
                />
                <RadioOption
                  name="idealPace"
                  value="expand"
                  checked={idealPace === "expand"}
                  onChange={setIdealPace}
                  label="慣れたらいろいろ広げられる形がいい"
                />
              </QuestionCard>

              <QuestionCard title="質問2: 続けるうえで、気分が上がるのはどれですか？">
                <RadioOption
                  name="feelGood"
                  value="easy_ui"
                  checked={feelGood === "easy_ui"}
                  onChange={setFeelGood}
                  label="操作がわかりやすいこと"
                />
                <RadioOption
                  name="feelGood"
                  value="points"
                  checked={feelGood === "points"}
                  onChange={setFeelGood}
                  label="ポイントや還元があること"
                />
                <RadioOption
                  name="feelGood"
                  value="安心"
                  checked={feelGood === "安心"}
                  onChange={setFeelGood}
                  label="安心感があること"
                />
                <RadioOption
                  name="feelGood"
                  value="options"
                  checked={feelGood === "options"}
                  onChange={setFeelGood}
                  label="選べる商品が多いこと"
                />
              </QuestionCard>

              <QuestionCard title="質問3: 設定や管理の手間についてはどう思いますか？">
                <RadioOption
                  name="manageFeeling"
                  value="few"
                  checked={manageFeeling === "few"}
                  onChange={setManageFeeling}
                  label="できるだけ少ない方がいい"
                />
                <RadioOption
                  name="manageFeeling"
                  value="worth"
                  checked={manageFeeling === "worth"}
                  onChange={setManageFeeling}
                  label="得なら多少の手間は気にしない"
                />
                <RadioOption
                  name="manageFeeling"
                  value="normal"
                  checked={manageFeeling === "normal"}
                  onChange={setManageFeeling}
                  label="普通くらいなら大丈夫"
                />
                <RadioOption
                  name="manageFeeling"
                  value="many"
                  checked={manageFeeling === "many"}
                  onChange={setManageFeeling}
                  label="多くてもあまり気にしない"
                />
              </QuestionCard>

              <QuestionCard title="質問4: もし続かなくなるとしたら、理由はどれが近いですか？">
                <RadioOption
                  name="stopReason"
                  value="complex"
                  checked={stopReason === "complex"}
                  onChange={setStopReason}
                  label="むずかしくて面倒に感じる"
                />
                <RadioOption
                  name="stopReason"
                  value="no_benefit"
                  checked={stopReason === "no_benefit"}
                  onChange={setStopReason}
                  label="お得さを感じられなくなる"
                />
                <RadioOption
                  name="stopReason"
                  value="not_fit"
                  checked={stopReason === "not_fit"}
                  onChange={setStopReason}
                  label="自分に合っているかわからなくなる"
                />
                <RadioOption
                  name="stopReason"
                  value="not_enough"
                  checked={stopReason === "not_enough"}
                  onChange={setStopReason}
                  label="やれることが少なくて物足りなくなる"
                />
              </QuestionCard>

              <QuestionCard title="質問5: 1年後に理想なのはどれですか？">
                <RadioOption
                  name="idealAfterYear"
                  value="natural"
                  checked={idealAfterYear === "natural"}
                  onChange={setIdealAfterYear}
                  label="何も無理せず自然に積立が続いている"
                />
                <RadioOption
                  name="idealAfterYear"
                  value="reward_keep"
                  checked={idealAfterYear === "reward_keep"}
                  onChange={setIdealAfterYear}
                  label="還元をうまく使いながら続けられている"
                />
                <RadioOption
                  name="idealAfterYear"
                  value="calm"
                  checked={idealAfterYear === "calm"}
                  onChange={setIdealAfterYear}
                  label="不安なく落ち着いて続けられている"
                />
                <RadioOption
                  name="idealAfterYear"
                  value="expand_keep"
                  checked={idealAfterYear === "expand_keep"}
                  onChange={setIdealAfterYear}
                  label="積立以外も少し見えるようになっている"
                />
              </QuestionCard>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-3 text-sm font-semibold text-slate-950">
                  回答状況
                </p>
                <p className="text-sm text-slate-600">
                  {[idealPace, feelGood, manageFeeling, stopReason, idealAfterYear].filter(Boolean).length}
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