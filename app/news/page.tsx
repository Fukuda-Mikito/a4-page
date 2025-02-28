"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ArrowLeft } from "lucide-react"

// カテゴリーの定義
const categories = [
  { id: "all", name: "すべて" },
  { id: "event", name: "イベント" },
  { id: "release", name: "リリース" },
  { id: "media", name: "メディア" },
  { id: "other", name: "その他" },
]

// ニュース記事のデータ
const newsItems = [
  {
    id: 1,
    title: "新機能リリースのお知らせ：学内マップにAR機能を追加",
    date: "2024/02/26",
    category: "release",
    image: "/placeholder.svg",
    excerpt:
      "学内マップアプリに新しくAR機能が追加されました。スマートフォンのカメラを通して、建物の情報や道順をリアルタイムで確認できます。",
  },
  {
    id: 2,
    title: "プログラミングワークショップ開催のお知らせ",
    date: "2024/02/21",
    category: "event",
    image: "/placeholder.svg",
    excerpt: "初心者向けプログラミングワークショップを開催します。Webアプリケーション開発の基礎を学べる機会です。",
  },
  {
    id: 3,
    title: "地域メディアに掲載されました",
    date: "2024/02/13",
    category: "media",
    image: "/placeholder.svg",
    excerpt:
      "神戸新聞にて、A4の活動が紹介されました。学生主体のテクノロジー活用による地域貢献について取り上げていただきました。",
  },
  // 追加のニュース記事をここに記述
]

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredNews =
    selectedCategory === "all" ? newsItems : newsItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー部分 */}
      <div className="bg-[var(--primary)] text-white py-20 relative">
        {/* ホームに戻るボタン */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-8 left-8"
        >
          <Link
            href="/"
            className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">ホームに戻る</span>
          </Link>
        </motion.div>

        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center"
          >
            News
          </motion.h1>
        </div>
      </div>

      {/* カテゴリーフィルター */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-lg mb-4">カテゴリーで絞り込む：</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300
                  ${
                    selectedCategory === category.id
                      ? "bg-[var(--primary)] text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ニュース一覧 */}
        <div className="space-y-6">
          {filteredNews.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <Link
                href={`/news/${news.id}`}
                className="flex flex-col md:flex-row hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="md:w-1/4 relative">
                  <Image
                    src={news.image || "/placeholder.svg"}
                    alt={news.title}
                    width={300}
                    height={200}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm text-gray-500">{news.date}</span>
                    <span className="px-3 py-1 bg-[var(--secondary)] text-[var(--primary)] text-xs rounded-full">
                      {categories.find((cat) => cat.id === news.category)?.name}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.excerpt}</p>
                  <div className="flex items-center text-[var(--primary)] font-medium">
                    続きを読む
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ページネーション（必要に応じて実装） */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center gap-2">
            <button className="px-4 py-2 rounded-lg bg-white shadow hover:bg-gray-50 disabled:opacity-50">前へ</button>
            <div className="flex items-center gap-1">
              <button className="w-10 h-10 rounded-lg bg-[var(--primary)] text-white flex items-center justify-center">
                1
              </button>
              <button className="w-10 h-10 rounded-lg bg-white shadow hover:bg-gray-50 flex items-center justify-center">
                2
              </button>
              <button className="w-10 h-10 rounded-lg bg-white shadow hover:bg-gray-50 flex items-center justify-center">
                3
              </button>
            </div>
            <button className="px-4 py-2 rounded-lg bg-white shadow hover:bg-gray-50">次へ</button>
          </nav>
        </div>
      </div>
    </div>
  )
}

