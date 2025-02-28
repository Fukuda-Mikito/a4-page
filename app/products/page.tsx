"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

const products = [
  {
    id: "gohan",
    title: "えーごはん",
    description: "学食のメニューをチェック・レビュー",
    features: ["リアルタイムメニュー表示", "混雑状況確認", "お気に入り登録", "レビュー・評価機能"],
    image: "/placeholder.svg",
  },
  {
    id: "rent",
    title: "賃貸",
    description: "学生向け物件情報をカンタン検索",
    features: ["大学周辺の物件検索", "お気に入り保存", "条件絞り込み", "内見予約機能"],
    image: "/placeholder.svg",
  },
  {
    id: "class",
    title: "授業",
    description: "シラバス検索と授業レビュー",
    features: ["シラバス検索", "授業レビュー投稿", "時間割作成", "課題管理"],
    image: "/placeholder.svg",
  },
  {
    id: "map",
    title: "学内マップ",
    description: "キャンパス内の施設をスマートに案内",
    features: ["施設検索", "ナビゲーション", "混雑状況表示", "イベント情報"],
    image: "/placeholder.svg",
  },
]

export default function ProductsPage() {
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
            Products
          </motion.h1>
        </div>
      </div>

      {/* プロダクト一覧 */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/products/${product.id}`}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2 text-[var(--primary)]">{product.title}</h2>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <ul className="space-y-2 mb-4">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center text-[var(--primary)] font-medium">
                      詳しく見る
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

