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

  return (
    <main className="min-h-screen bg-white px-6 py-16 text-gray-900">
      <section className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-semibold text-blue-600">
          診断ページ
        </p>

        <h1 className="mb-6 text-3xl font-bold md:text-4xl">
          あなたに合う証券口座を診断します
        </h1>

        <p className="mb-10 text-gray-600">
          5つの質問に答えると、条件に合う証券口座候補を返す形にしていきます。
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="mb-4 text-xl font-semibold">
              質問1: 投資経験はどれくらいですか？
            </h2>
            <div className="space-y-3">
              <label className="block">
                <input
                  type="radio"
                  name="experience"
                  value="beginner"
                  className="mr-2"
                  checked={experience === "beginner"}
                  onChange={(e) => setExperience(e.target.value)}
                />
                これから始める
              </label>
              <label className="block">
                <input
                  type="radio"
                  name="experience"
                  value="some"
                  className="mr-2"
                  checked={experience === "some"}
                  onChange={(e) => setExperience(e.target.value)}
                />
                少し経験がある
              </label>
              <label className="block">
                <input
                  type="radio"
                  name="experience"
                  value="advanced"
                  className="mr-2"
                  checked={experience === "advanced"}
                  onChange={(e) => setExperience(e.target.value)}
                />
                慣れている
              </label>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="mb-4 text-xl font-semibold">
              質問2: 何を重視しますか？
            </h2>
            <div className="space-y-3">
              <label className="block">
                <input
                  type="radio"
                  name="focus"
                  value="points"
                  className="mr-2"
                  checked={focus === "points"}
                  onChange={(e) => setFocus(e.target.value)}
                />
                ポイント還元
              </label>
              <label className="block">
                <input
                  type="radio"
                  name="focus"
                  value="ease"
                  className="mr-2"
                  checked={focus === "ease"}
                  onChange={(e) => setFocus(e.target.value)}
                />
                使いやすさ
              </label>
              <label className="block">
                <input
                  type="radio"
                  name="focus"
                  value="products"
                  className="mr-2"
                  checked={focus === "products"}
                  onChange={(e) => setFocus(e.target.value)}
                />
                商品ラインナップ
              </label>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="mb-4 text-xl font-semibold">
              質問3: 米国株も使いたいですか？
            </h2>
            <div className="space-y-3">
              <label className="block">
                <input
                  type="radio"
                  name="usStocks"
                  value="yes"
                  className="mr-2"
                  checked={usStocks === "yes"}
                  onChange={(e) => setUsStocks(e.target.value)}
                />
                はい
              </label>
              <label className="block">
                <input
                  type="radio"
                  name="usStocks"
                  value="no"
                  className="mr-2"
                  checked={usStocks === "no"}
                  onChange={(e) => setUsStocks(e.target.value)}
                />
                いいえ
              </label>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="mb-4 text-xl font-semibold">
              質問4: クレカ積立を使いたいですか？
            </h2>
            <div className="space-y-3">
              <label className="block">
                <input
                  type="radio"
                  name="creditCard"
                  value="yes"
                  className="mr-2"
                  checked={creditCard === "yes"}
                  onChange={(e) => setCreditCard(e.target.value)}
                />
                はい
              </label>
              <label className="block">
                <input
                  type="radio"
                  name="creditCard"
                  value="no"
                  className="mr-2"
                  checked={creditCard === "no"}
                  onChange={(e) => setCreditCard(e.target.value)}
                />
                いいえ
              </label>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="mb-4 text-xl font-semibold">
              質問5: 毎月の積立予定額は？
            </h2>
            <div className="space-y-3">
              <label className="block">
                <input
                  type="radio"
                  name="monthly"
                  value="small"
                  className="mr-2"
                  checked={monthly === "small"}
                  onChange={(e) => setMonthly(e.target.value)}
                />
                1万円未満
              </label>
              <label className="block">
                <input
                  type="radio"
                  name="monthly"
                  value="mid"
                  className="mr-2"
                  checked={monthly === "mid"}
                  onChange={(e) => setMonthly(e.target.value)}
                />
                1〜5万円
              </label>
              <label className="block">
                <input
                  type="radio"
                  name="monthly"
                  value="large"
                  className="mr-2"
                  checked={monthly === "large"}
                  onChange={(e) => setMonthly(e.target.value)}
                />
                5万円超
              </label>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="inline-block rounded-xl bg-black px-6 py-3 text-white transition hover:opacity-90"
            >
              診断結果を見る
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}