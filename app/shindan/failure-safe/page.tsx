"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Metadata } from "next";

export default function FailureSafeShindanPage() {
  const router = useRouter();

  const [avoidMost, setAvoidMost] = useState("");
  const [whenLost, setWhenLost] = useState("");
  const [firstLook, setFirstLook] = useState("");
  const [supportLevel, setSupportLevel] = useState("");
  const [oneYear安心, setOneYear安心] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams({
      avoidMost,
      whenLost,
      firstLook,
      supportLevel,
      oneYear安心,
    });

    router.push(`/shindan/failure-safe/result?${params.toString()}`);
  };

  const allAnswered =
    avoidMost && whenLost && firstLook && supportLevel && oneYear安心;

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
              5つの質問から、あなたが避けたい失敗や不安を整理します。
              「むずかしすぎるのは嫌」「あとで後悔したくない」などの感覚から、
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
                  "迷いにくさ",
                  "後悔しにくさ",
                  "サポート",
                  "お得さの取りこぼし",
                  "将来の不足感",
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
                <li>3. 比較するときに見落としやすいポイント</li>
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
              <QuestionCard title="質問1: 口座選びで、いちばん避けたいのはどれですか？">
                <RadioOption
                  name="avoidMost"
                  value="too_hard"
                  checked={avoidMost === "too_hard"}
                  onChange={setAvoidMost}
                  label="むずかしすぎて途中で使わなくなること"
                />
                <RadioOption
                  name="avoidMost"
                  value="miss_benefit"
                  checked={avoidMost === "miss_benefit"}
                  onChange={setAvoidMost}
                  label="後からもっとお得な選び方があったと気づくこと"
                />
                <RadioOption
                  name="avoidMost"
                  value="lack_future"
                  checked={avoidMost === "lack_future"}
                  onChange={setAvoidMost}
                  label="あとで機能や商品が足りないと感じること"
                />
                <RadioOption
                  name="avoidMost"
                  value="wrong_fit"
                  checked={avoidMost === "wrong_fit"}
                  onChange={setAvoidMost}
                  label="なんとなく選んで自分に合わなかったと気づくこと"
                />
              </QuestionCard>

              <QuestionCard title="質問2: 迷ったとき、どちらの考え方に近いですか？">
                <RadioOption
                  name="whenLost"
                  value="quick"
                  checked={whenLost === "quick"}
                  onChange={setWhenLost}
                  label="なるべく迷わず決めたい"
                />
                <RadioOption
                  name="whenLost"
                  value="deal"
                  checked={whenLost === "deal"}
                  onChange={setWhenLost}
                  label="お得な方をちゃんと選びたい"
                />
                <RadioOption
                  name="whenLost"
                  value="safe"
                  checked={whenLost === "safe"}
                  onChange={setWhenLost}
                  label="無難で失敗しにくい方を選びたい"
                />
                <RadioOption
                  name="whenLost"
                  value="future"
                  checked={whenLost === "future"}
                  onChange={setWhenLost}
                  label="あとで困らない方を選びたい"
                />
              </QuestionCard>

              <QuestionCard title="質問3: 口座を見たとき、最初に確認したいのはどれですか？">
                <RadioOption
                  name="firstLook"
                  value="easy"
                  checked={firstLook === "easy"}
                  onChange={setFirstLook}
                  label="使いやすそうか"
                />
                <RadioOption
                  name="firstLook"
                  value="points"
                  checked={firstLook === "points"}
                  onChange={setFirstLook}
                  label="ポイントや還元があるか"
                />
                <RadioOption
                  name="firstLook"
                  value="support"
                  checked={firstLook === "support"}
                  onChange={setFirstLook}
                  label="説明やサポートがわかりやすいか"
                />
                <RadioOption
                  name="firstLook"
                  value="products"
                  checked={firstLook === "products"}
                  onChange={setFirstLook}
                  label="商品や選択肢が十分あるか"
                />
              </QuestionCard>

              <QuestionCard title="質問4: 困ったときに、サポートや説明はどれくらい欲しいですか？">
                <RadioOption
                  name="supportLevel"
                  value="very_need"
                  checked={supportLevel === "very_need"}
                  onChange={setSupportLevel}
                  label="かなり欲しい"
                />
                <RadioOption
                  name="supportLevel"
                  value="need"
                  checked={supportLevel === "need"}
                  onChange={setSupportLevel}
                  label="あった方が安心"
                />
                <RadioOption
                  name="supportLevel"
                  value="normal"
                  checked={supportLevel === "normal"}
                  onChange={setSupportLevel}
                  label="普通"
                />
                <RadioOption
                  name="supportLevel"
                  value="self"
                  checked={supportLevel === "self"}
                  onChange={setSupportLevel}
                  label="自分で調べるのであまり気にしない"
                />
              </QuestionCard>

              <QuestionCard title="質問5: 1年後を考えると、どれがいちばん安心ですか？">
                <RadioOption
                  name="oneYear安心"
                  value="easy_continue"
                  checked={oneYear安心 === "easy_continue"}
                  onChange={setOneYear安心}
                  label="無理なく積立が続いていること"
                />
                <RadioOption
                  name="oneYear安心"
                  value="use_benefit"
                  checked={oneYear安心 === "use_benefit"}
                  onChange={setOneYear安心}
                  label="ちゃんとお得さを活かせていること"
                />
                <RadioOption
                  name="oneYear安心"
                  value="no_regret"
                  checked={oneYear安心 === "no_regret"}
                  onChange={setOneYear安心}
                  label="大きな後悔なく選べていること"
                />
                <RadioOption
                  name="oneYear安心"
                  value="future_room"
                  checked={oneYear安心 === "future_room"}
                  onChange={setOneYear安心}
                  label="後から別の投資にも広げやすいこと"
                />
              </QuestionCard>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-3 text-sm font-semibold text-slate-950">
                  回答状況
                </p>
                <p className="text-sm text-slate-600">
                  {[avoidMost, whenLost, firstLook, supportLevel, oneYear安心].filter(Boolean).length}
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