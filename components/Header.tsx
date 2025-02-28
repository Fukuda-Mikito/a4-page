"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[var(--primary)] text-white py-12"
    >
      <div className="container mx-auto px-4">
        <div className="relative flex justify-between items-start">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mx-auto"
          >
            <h1 className="text-5xl font-bold mb-2">A4</h1>
            <p className="text-lg font-medium">神戸大学</p>
            <p className="text-lg font-medium">アプリ企画・開発・運用サークル</p>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute right-0 top-0"
          >
            <div className="bg-white p-4 rounded-lg shadow-lg hover-scale">
              <Image src="/placeholder.svg" alt="A4 アイコン" width={80} height={80} className="rounded" />
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8"
        >
          <div className="bg-white text-[var(--primary)] text-center py-3 text-xl font-bold rounded-lg shadow-lg hover-scale">
            SHINDAI HUB
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}

