"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Code, Users, Megaphone, ChevronRight } from "lucide-react";

const departments = [
  {
    id: "development",
    title: "開発",
    icon: Code,
    description: "アプリケーションの企画から開発、運用までを担当",
    longDescription: `
      開発部署では、学生生活をより良くするためのアプリケーション開発を行っています。

      【主な活動内容】
      ・新規アプリケーションの企画立案
      ・UI/UXデザインの作成
      ・フロントエンド/バックエンド開発
      ・品質管理とテスト
      ・アプリケーションの保守運用

      【使用技術】
      ・フロントエンド: React, Next.js, TypeScript
      ・バックエンド: Node.js, Python
      ・データベース: PostgreSQL, MongoDB
      ・インフラ: AWS, Vercel

      【開発フロー】
      1. 企画立案とユーザーリサーチ
      2. プロトタイプ作成
      3. 開発とテスト
      4. リリースと運用
    `,
    color: "bg-blue-100",
  },
  {
    id: "management",
    title: "組織管理",
    icon: Users,
    description: "メンバーのマネジメントや組織の運営を担当",
    longDescription: `
      組織管理部署では、サークル全体の円滑な運営とメンバーの成長をサポートしています。

      【主な活動内容】
      ・新メンバーの採用と育成
      ・チーム編成とプロジェクト管理
      ・イベントの企画と運営
      ・予算管理と経理
      ・他団体との連携

      【組織体制】
      ・リーダーシップチーム
      ・メンバーシップチーム
      ・イベントチーム
      ・総務チーム

      【年間スケジュール】
      ・春季採用（4月）
      ・夏季合宿（8月）
      ・秋季採用（10月）
      ・年度末成果発表会（2月）
    `,
    color: "bg-green-100",
  },
  {
    id: "marketing",
    title: "マーケティング",
    icon: Megaphone,
    description: "広報活動やユーザー分析を担当",
    longDescription: `
      マーケティング部署では、サービスの認知度向上とユーザー満足度の分析を行っています。

      【主な活動内容】
      ・SNSでの情報発信
      ・ユーザーアンケートの実施と分析
      ・広報資料の作成
      ・イベント企画とプロモーション
      ・ブランディング戦略の立案

      【使用ツール】
      ・分析: Google Analytics, Mixpanel
      ・デザイン: Figma, Adobe CC
      ・SNS運用: Buffer, Later
      ・CRM: HubSpot

      【成果指標】
      ・アプリユーザー数
      ・エンゲージメント率
      ・ユーザー満足度
      ・メディア掲載数
    `,
    color: "bg-yellow-100",
  },
];

export default function DepartmentsPage() {
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
            部署紹介
          </motion.h1>
        </div>
      </div>

      {/* 部署一覧 */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/departments/${dept.id}`}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className={`${dept.color} p-6 flex items-center`}>
                      <Icon className="w-8 h-8 text-[var(--primary)] mr-4" />
                      <h2 className="text-2xl font-bold text-[var(--primary)]">
                        {dept.title}
                      </h2>
                    </div>
                    <div className="p-6">
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
    </div>
  );
}
