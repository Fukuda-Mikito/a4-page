"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductSection() {
  const products = [
    {
      id: 1,
      title: "えーごはん",
      description: "学食のメニューをチェック・レビュー",
      link: "/products/gohan",
    },
    {
      id: 2,
      title: "賃貸",
      description: "学生向け物件情報をカンタン検索",
      link: "/products/rent",
    },
    {
      id: 3,
      title: "授業",
      description: "シラバス検索と授業レビュー",
      link: "/products/class",
    },
    {
      id: 4,
      title: "学内マップ",
      description: "キャンパス内の施設をスマートに案内",
      link: "/products/map",
    },
  ];

  return (
    <section className="py-12 bg-[var(--secondary)]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-2xl font-bold mb-8 text-[var(--primary)]"
        >
          プロダクト
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            href="https://kobe-uni-hub.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-80 transition-opacity duration-300"
          >
            <div className="bg-white p-4 mb-12 text-center rounded-lg shadow-lg text-xl font-bold text-[var(--primary)]">
              SHINDAI HUB
            </div>
          </Link>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={product.link}>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold mb-2 text-[var(--primary)]">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center text-[var(--primary)] font-medium">
                    詳しく見る
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
