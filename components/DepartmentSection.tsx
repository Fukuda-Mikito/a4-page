"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Code, Users, Megaphone } from "lucide-react";

const departments = [
  {
    id: "development",
    title: "開発",
    icon: Code,
    description: "アプリケーションの企画から開発、運用までを担当",
    color: "bg-blue-100",
  },
  {
    id: "management",
    title: "組織管理",
    icon: Users,
    description: "メンバーのマネジメントや組織の運営を担当",
    color: "bg-green-100",
  },
  {
    id: "marketing",
    title: "マーケティング",
    icon: Megaphone,
    description: "広報活動やユーザー分析を担当",
    color: "bg-yellow-100",
  },
];

export default function DepartmentSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-2xl font-bold mb-8 text-[var(--primary)]"
        >
          部署紹介
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/departments/${dept.id}`}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className={`${dept.color} p-6 flex justify-center`}>
                      <Icon className="w-12 h-12 text-[var(--primary)]" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-[var(--primary)]">
                        {dept.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{dept.description}</p>
                      <div className="flex items-center text-[var(--primary)] font-medium">
                        詳しく見る
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
