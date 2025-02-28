"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function NewsSection() {
  const news = [
    {
      id: 1,
      title: "新機能リリースのお知らせ",
      date: "2024.02.18",
      link: "/news/1",
    },
    {
      id: 2,
      title: "アプリコンテスト優勝のお知らせ",
      date: "2024.02.15",
      link: "/news/2",
    },
    {
      id: 3,
      title: "春季開発メンバー募集開始",
      date: "2024.02.10",
      link: "/news/3",
    },
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-100 p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-[var(--primary)]">お知らせ</h2>
          <div className="space-y-4">
            {news.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={item.link}
                  className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-sm text-gray-500">{item.date}</div>
                  <div className="text-lg mt-1">{item.title}</div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

