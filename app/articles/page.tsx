"use client";

import { useMemo, useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "記事一覧 | NISA向け証券口座診断",
  description:
    "SBI証券と楽天証券の比較、NISA初心者向けの選び方、クレカ積立比較、各社の特徴解説など、証券口座選びに役立つ記事をまとめています。",
  alternates: {
    canonical: "/articles",
  },
};

type Article = {
  title: string;
  description: string;
  href: string;
  tag: "比較記事" | "選び方ガイド" | "単独理解";
};

type FilterKey = "all" | "comparison" | "guide" | "broker";

export default function ArticlesPage() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const featured: Article[] = [
    {
      title: "SBI証券と楽天証券の違いは？",
      description:
        "NISAを始めるときに迷いやすい2社の違いを、初心者にもわかりやすく整理した比較記事です。",
      href: "/articles/sbi-vs-rakuten",
      tag: "比較記事",
    },
    {
      title: "NISA初心者に向いている証券口座の選び方",
      description:
        "初心者が見落としやすいポイントを整理しながら、証券口座選びの考え方をまとめた記事です。",
      href: "/articles/nisa-beginner-choice",
      tag: "選び方ガイド",
    },
    {
      title: "クレカ積立を重視する人の証券口座比較",
      description:
        "クレカ積立やポイント還元を重視する人向けに、証券口座の見方を整理した比較記事です。",
      href: "/articles/credit-card-tsumitate",
      tag: "比較記事",
    },
  ];

  const brokerArticles: Article[] = [
    {
      title: "SBI証券はどんな人に向いている？",
      description:
        "SBI証券が向いている人の特徴や、他社も比較した方がよいケースを整理した記事です。",
      href: "/articles/sbi-for-who",
      tag: "単独理解",
    },
    {
      title: "楽天証券はどんな人に向いている？",
      description:
        "楽天証券が向いている人の特徴や、他社も比較した方がよいケースを整理した記事です。",
      href: "/articles/rakuten-for-who",
      tag: "単独理解",
    },
    {
      title: "松井証券は初心者向きか？",
      description:
        "松井証券が初心者向きと言われる理由と、他社も比較した方がよい人を整理した記事です。",
      href: "/articles/matsui-for-beginners",
      tag: "単独理解",
    },
    {
      title: "マネックス証券はどんな人に向いている？",
      description:
        "マネックス証券と相性が良い人の特徴や、他社も比較した方がよいケースを整理した記事です。",
      href: "/articles/monex-for-who",
      tag: "単独理解",
    },
    {
      title: "三菱UFJ eスマート証券はどんな人に向いている？",
      description:
        "三菱UFJ eスマート証券が向いている人の特徴や、他社も比較した方がよいケースを整理した記事です。",
      href: "/articles/musmart-for-who",
      tag: "単独理解",
    },
  ];

  const allArticles = [...featured, ...brokerArticles];

  const filteredArticles = useMemo(() => {
    if (activeFilter === "all") return allArticles;
    if (activeFilter === "comparison") {
      return allArticles.filter((article) => article.tag === "比較記事");
    }
    if (activeFilter === "guide") {
      return allArticles.filter((article) => article.tag === "選び方ガイド");
    }
    return allArticles.filter((article) => article.tag === "単独理解");
  }, [activeFilter]);

  const filterButtons: { key: FilterKey; label: string }[] = [
    { key: "all", label: "すべて" },
    { key: "comparison", label: "比較記事" },
    { key: "guide", label: "選び方ガイド" },
    { key: "broker", label: "単独理解" },
  ];

    const breadcrumbs = [
    { label: "ホーム", href: "/" },
    { label: "記事一覧" },
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
            <a href="/articles" className="transition hover:text-slate-900">
              記事一覧
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

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumbs items={breadcrumbs} />
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 md:p-10">
          <p className="mb-3 text-sm font-semibold tracking-wide text-blue-700">
            記事一覧
          </p>

          <h1 className="mb-5 text-4xl font-bold leading-[1.15] tracking-tight text-slate-950 sm:text-5xl">
            比較記事と解説記事から
            <br />
            <span className="whitespace-nowrap">違いを整理する</span>
          </h1>

          <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            診断だけでなく、証券口座の違いや選び方を整理した記事も読めます。
            まず記事で全体像をつかみ、そのあと診断で自分向けの候補を絞る流れがおすすめです。
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {["比較記事", "選び方ガイド", "各社の解説記事", "診断導線あり"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <section className="mt-8">
          <div className="mb-5 flex flex-col gap-2">
            <p className="text-sm font-semibold text-blue-700">まず読みたい記事</p>
            <h2 className="text-2xl font-bold text-slate-950">
              比較と選び方の入口
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featured.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8"
              >
                <div className="mb-3">
                  <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    {item.tag}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="mb-5 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <a
                  href={item.href}
                  className="inline-flex rounded-xl bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  記事を読む
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-5 flex flex-col gap-2">
            <p className="text-sm font-semibold text-blue-700">探しやすくする</p>
            <h2 className="text-2xl font-bold text-slate-950">
              カテゴリで絞り込む
            </h2>
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              比較記事だけ見たい人、各社の解説だけ読みたい人向けに、カテゴリごとに絞り込めます。
            </p>
          </div>

          <div className="mb-6 flex flex-wrap gap-3">
            {filterButtons.map((button) => {
              const isActive = activeFilter === button.key;
              return (
                <button
                  key={button.key}
                  type="button"
                  onClick={() => setActiveFilter(button.key)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-slate-950 text-white"
                      : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {button.label}
                </button>
              );
            })}
          </div>

          <div className="mb-4 rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-sm leading-6 text-slate-600">
              {activeFilter === "all" &&
                "全体を見ながら、自分に合いそうな入口を探したい人向けです。"}
              {activeFilter === "comparison" &&
                "複数社の違いを先に整理したい人向けです。"}
              {activeFilter === "guide" &&
                "まずは選び方の考え方から知りたい人向けです。"}
              {activeFilter === "broker" &&
                "気になる会社がすでにある人向けです。"}
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {filteredArticles.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="mb-3">
                  <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    {item.tag}
                  </span>
                </div>

                <h3 className="mb-2 text-lg font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
                <a
                  href={item.href}
                  className="inline-flex rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                >
                  記事を読む
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <p className="mb-2 text-sm font-semibold text-blue-700">次の一歩</p>
            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              読んだあとに診断で整理する
            </h2>
            <p className="mb-6 text-sm leading-7 text-slate-600 sm:text-base">
              記事で違いを理解しても、最終的にどれが自分に合うかは重視するポイントで変わります。
              迷う場合は、診断で自分のタイプを整理すると判断しやすくなります。
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/shindan"
                className="rounded-xl bg-slate-950 px-6 py-3 text-center font-medium text-white transition hover:opacity-90"
              >
                診断一覧を見る
              </a>
              <a
                href="/shindan/style"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-center font-medium text-slate-700 transition hover:bg-slate-100"
              >
                基本診断をやってみる
              </a>
            </div>
          </div>
        </section>
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