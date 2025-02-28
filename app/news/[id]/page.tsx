"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"

// 記事データの型定義
type NewsArticle = {
  id: number
  title: string
  date: string
  category: string
  content: string
  image: string
}

// サンプル記事データ
const newsArticle: NewsArticle = {
  id: 1,
  title: "新機能リリースのお知らせ：学内マップにAR機能を追加",
  date: "2024/02/26",
  category: "リリース",
  content: `
    学内マップアプリに新しくAR機能が追加されました。

    【主な機能】
    ・建物情報のリアルタイム表示
    ・最短経路のナビゲーション
    ・施設の混雑状況確認
    ・イベント情報の表示

    スマートフォンのカメラを通して、建物の情報や道順をリアルタイムで確認できます。
    この機能により、新入生や来訪者の方々がよりスムーズにキャンパス内を移動できるようになります。

    【今後の展開】
    ・季節イベントとの連携
    ・施設予約システムとの統合
    ・多言語対応の拡充

    今後もユーザーの皆様のご意見を参考に、より使いやすい機能を追加していく予定です。
  `,
  image: "/placeholder.svg",
}

export default function NewsArticlePage() {
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

      {/* 記事コンテンツ */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* ナビゲーションリンク */}
          <div className="flex items-center gap-4 mb-8">
            <Link
              href="/news"
              className="inline-flex items-center text-[var(--primary)] hover:text-[var(--primary)]/80"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              ニュース一覧に戻る
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/" className="inline-flex items-center text-[var(--primary)] hover:text-[var(--primary)]/80">
              <Home className="w-4 h-4 mr-2" />
              ホームに戻る
            </Link>
          </div>

          {/* 記事ヘッダー */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <Image
              src={newsArticle.image || "/placeholder.svg"}
              alt={newsArticle.title}
              width={1200}
              height={600}
              className="w-full h-[400px] object-cover"
            />
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm text-gray-500">{newsArticle.date}</span>
                <span className="px-3 py-1 bg-[var(--secondary)] text-[var(--primary)] text-xs rounded-full">
                  {newsArticle.category}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{newsArticle.title}</h2>
              <div className="prose max-w-none">
                {newsArticle.content.split("\n").map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* シェアボタン */}
          <div className="flex justify-center gap-4">
            <button className="px-6 py-2 bg-[#1DA1F2] text-white rounded-full hover:bg-[#1DA1F2]/90">Twitter</button>
            <button className="px-6 py-2 bg-[#1877F2] text-white rounded-full hover:bg-[#1877F2]/90">Facebook</button>
            <button className="px-6 py-2 bg-[#25D366] text-white rounded-full hover:bg-[#25D366]/90">LINE</button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

