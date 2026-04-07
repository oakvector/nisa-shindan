"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Metadata } from "next";

export default function StyleShindanPage() {
  const router = useRouter();

  const [startMood, setStartMood] = useState("");
  const [firstCheck, setFirstCheck] = useState("");
  const [continueStyle, setContinueStyle] = useState("");
  const [featureFeeling, setFeatureFeeling] = useState("");
  const [oneYearLater, setOneYearLater] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams({
      startMood,
      firstCheck,
      continueStyle,
      featureFeeling,
      oneYearLater,
    });

    router.push(`/result?${params.toString()}`);
  };

  const allAnswered =
    startMood && firstCheck && continueStyle && featureFeeling && oneYearLater;

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
              あなたの
              <br />
              <span className="whitespace-nowrap">資産形成スタイル診断</span>
            </h1>

            <p className="mb-6 text-base leading-8 text-slate-600 sm:text-lg">
              5つの質問から、あなたがどんな考え方で口座を選ぶと納得しやすいかを整理します。
              「始めやすさ」「お得さ」「バランス」「将来の広がり」などの感覚から、
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
                  "始めやすさ",
                  "お得さ",
                  "バランス感覚",
                  "将来の広がり",
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
                <li>1. あなたの口座選びのタイプ</li>
                <li>2. 相性の良い証券口座候補</li>
                <li>3. 比較するときに重視したいポイント</li>
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
              <QuestionCard title="質問1: NISAを始めるなら、いちばん近い気持ちはどれですか？">
                <RadioOption
                  name="startMood"
                  value="easy_start"
                  checked={startMood === "easy_start"}
                  onChange={setStartMood}
                  label="まずはむずかしくないところから始めたい"
                />
                <RadioOption
                  name="startMood"
                  value="good_deal"
                  checked={startMood === "good_deal"}
                  onChange={setStartMood}
                  label="どうせ始めるなら、お得さも大事にしたい"
                />
                <RadioOption
                  name="startMood"
                  value="balanced_choice"
                  checked={startMood === "balanced_choice"}
                  onChange={setStartMood}
                  label="なるべくバランスのいいところを選びたい"
                />
                <RadioOption
                  name="startMood"
                  value="future_room"
                  checked={startMood === "future_room"}
                  onChange={setStartMood}
                  label="将来やりたいことが増えても困らない口座がいい"
                />
              </QuestionCard>

              <QuestionCard title="質問2: 口座を選ぶとき、いちばん気になるのはどれですか？">
                <RadioOption
                  name="firstCheck"
                  value="easy_screen"
                  checked={firstCheck === "easy_screen"}
                  onChange={setFirstCheck}
                  label="画面や操作がわかりやすいこと"
                />
                <RadioOption
                  name="firstCheck"
                  value="points"
                  checked={firstCheck === "points"}
                  onChange={setFirstCheck}
                  label="ポイントや還元があること"
                />
                <RadioOption
                  name="firstCheck"
                  value="balance"
                  checked={firstCheck === "balance"}
                  onChange={setFirstCheck}
                  label="いろいろ見たときに全体のバランスがいいこと"
                />
                <RadioOption
                  name="firstCheck"
                  value="many_products"
                  checked={firstCheck === "many_products"}
                  onChange={setFirstCheck}
                  label="取り扱っている商品が多いこと"
                />
              </QuestionCard>

              <QuestionCard title="質問3: 積立を続けるなら、どんな形が理想ですか？">
                <RadioOption
                  name="continueStyle"
                  value="auto_continue"
                  checked={continueStyle === "auto_continue"}
                  onChange={setContinueStyle}
                  label="あまり考えずにそのまま続けられる形"
                />
                <RadioOption
                  name="continueStyle"
                  value="feel_benefit"
                  checked={continueStyle === "feel_benefit"}
                  onChange={setContinueStyle}
                  label="ちょっと得している実感がある形"
                />
                <RadioOption
                  name="continueStyle"
                  value="safe_continue"
                  checked={continueStyle === "safe_continue"}
                  onChange={setContinueStyle}
                  label="変に偏らず安心して続けられる形"
                />
                <RadioOption
                  name="continueStyle"
                  value="expand_later"
                  checked={continueStyle === "expand_later"}
                  onChange={setContinueStyle}
                  label="将来ほかの投資にも広げやすい形"
                />
              </QuestionCard>

              <QuestionCard title="質問4: サービスに機能が多いと、どう感じますか？">
                <RadioOption
                  name="featureFeeling"
                  value="simple_is_best"
                  checked={featureFeeling === "simple_is_best"}
                  onChange={setFeatureFeeling}
                  label="できればシンプルな方が安心"
                />
                <RadioOption
                  name="featureFeeling"
                  value="ok_if_benefit"
                  checked={featureFeeling === "ok_if_benefit"}
                  onChange={setFeatureFeeling}
                  label="メリットがあるなら多少多くてもOK"
                />
                <RadioOption
                  name="featureFeeling"
                  value="middle_best"
                  checked={featureFeeling === "middle_best"}
                  onChange={setFeatureFeeling}
                  label="多すぎず少なすぎずがいい"
                />
                <RadioOption
                  name="featureFeeling"
                  value="many_ok"
                  checked={featureFeeling === "many_ok"}
                  onChange={setFeatureFeeling}
                  label="多機能でも自分で使い分けられる"
                />
              </QuestionCard>

              <QuestionCard title="質問5: 1年後に『この口座でよかった』と思いたいのはどんな状態ですか？">
                <RadioOption
                  name="oneYearLater"
                  value="easy_keep"
                  checked={oneYearLater === "easy_keep"}
                  onChange={setOneYearLater}
                  label="無理なく積立が続いている"
                />
                <RadioOption
                  name="oneYearLater"
                  value="benefit_keep"
                  checked={oneYearLater === "benefit_keep"}
                  onChange={setOneYearLater}
                  label="還元やポイントをうまく活かせている"
                />
                <RadioOption
                  name="oneYearLater"
                  value="no_big_complaint"
                  checked={oneYearLater === "no_big_complaint"}
                  onChange={setOneYearLater}
                  label="特に大きな不満なく使えている"
                />
                <RadioOption
                  name="oneYearLater"
                  value="expand_future"
                  checked={oneYearLater === "expand_future"}
                  onChange={setOneYearLater}
                  label="NISA以外にも広げやすくなっている"
                />
              </QuestionCard>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-3 text-sm font-semibold text-slate-950">
                  回答状況
                </p>
                <p className="text-sm text-slate-600">
                  {[
                    startMood,
                    firstCheck,
                    continueStyle,
                    featureFeeling,
                    oneYearLater,
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