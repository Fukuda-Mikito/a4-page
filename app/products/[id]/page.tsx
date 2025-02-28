"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Home, Download, Share2 } from "lucide-react"

const products = {
  gohan: {
    title: "えーごはん",
    description: "学食のメニューをチェック・レビュー",
    longDescription: `
      えーごはんは、神戸大学の学生のための食事支援アプリケーションです。
      毎日の学食メニューをリアルタイムで確認でき、混雑状況もわかるので、
      効率的な食事計画を立てることができます。
    `,
    features: [
      {
        title: "リアルタイムメニュー表示",
        description: "日替わりメニューや価格をリアルタイムで確認できます。",
      },
      {
        title: "混雑状況確認",
        description: "現在の混雑状況をリアルタイムで確認できます。",
      },
      {
        title: "お気に入り登録",
        description: "好きなメニューをお気に入りに登録して、提供日をお知らせします。",
      },
      {
        title: "レビュー・評価機能",
        description: "メニューの評価やレビューを投稿・閲覧できます。",
      },
    ],
    screenshots: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    downloadLink: "https://example.com/download",
    image: "/placeholder.svg",
  },
  // 他のプロダクトも同様に定義...
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products[params.id as keyof typeof products]

  if (!product) {
    return <div>Product not found</div>
  }

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
            {product.title}
          </motion.h1>
        </div>
      </div>

      {/* メインコンテンツ */}
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
              href="/products"
              className="inline-flex items-center text-[var(--primary)] hover:text-[var(--primary)]/80"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              プロダクト一覧に戻る
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/" className="inline-flex items-center text-[var(--primary)] hover:text-[var(--primary)]/80">
              <Home className="w-4 h-4 mr-2" />
              ホームに戻る
            </Link>
          </div>

          {/* プロダクト詳細 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="relative h-[400px]">
              <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
            </div>
            <div className="p-8">
              <p className="text-xl text-gray-600 mb-8">{product.longDescription}</p>

              {/* 機能一覧 */}
              <h2 className="text-2xl font-bold mb-6 text-[var(--primary)]">主な機能</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {product.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-50 p-6 rounded-lg"
                  >
                    <h3 className="text-lg font-bold mb-2 text-[var(--primary)]">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* スクリーンショット */}
              <h2 className="text-2xl font-bold mb-6 text-[var(--primary)]">スクリーンショット</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {product.screenshots.map((screenshot, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative h-48 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={screenshot || "/placeholder.svg"}
                      alt={`${product.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>

              {/* アクションボタン */}
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href={product.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[var(--primary)] text-white rounded-full hover:bg-[var(--primary)]/90 transition-colors duration-300"
                >
                  <Download className="w-5 h-5 mr-2" />
                  ダウンロード
                </a>
                <button className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-[var(--primary)] text-[var(--primary)] rounded-full hover:bg-gray-50 transition-colors duration-300">
                  <Share2 className="w-5 h-5 mr-2" />
                  共有する
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

