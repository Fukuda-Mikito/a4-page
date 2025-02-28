"use client"

import { motion } from "framer-motion"

export default function MissionSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold mb-3 text-[var(--primary)]">Mission</h2>
            <p className="text-xl font-medium">Hack Kobe.Uni</p>
            <p className="mt-2 text-gray-600">
              最新のテクノロジーを活用し、神戸大学をよりよいキャンパスに変えていきます。
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-3 text-[var(--primary)]">Vision</h2>
            <p className="text-xl font-medium">神大生に最高の学生生活を届ける</p>
            <p className="mt-2 text-gray-600">
              学生生活の様々な課題をテクノロジーの力で解決し、より充実したキャンパスライフを実現します。
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

