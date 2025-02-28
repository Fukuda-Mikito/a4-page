"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Home, Code, Users, Megaphone } from "lucide-react";

const departments = {
  development: {
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
  management: {
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
  marketing: {
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
};

export default function DepartmentPage({ params }: { params: { id: string } }) {
  const department = departments[params.id as keyof typeof departments];

  if (!department) {
    return <div>Department not found</div>;
  }

  const Icon = department.icon;

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
            {department.title}
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
              href="/departments"
              className="inline-flex items-center text-[var(--primary)] hover:text-[var(--primary)]/80"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              部署一覧に戻る
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/"
              className="inline-flex items-center text-[var(--primary)] hover:text-[var(--primary)]/80"
            >
              <Home className="w-4 h-4 mr-2" />
              ホームに戻る
            </Link>
          </div>

          {/* 部署詳細 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className={`${department.color} p-8 flex items-center`}>
              <Icon className="w-12 h-12 text-[var(--primary)] mr-6" />
              <div>
                <h2 className="text-2xl font-bold text-[var(--primary)]">
                  {department.title}
                </h2>
                <p className="text-gray-600 mt-2">{department.description}</p>
              </div>
            </div>
            <div className="p-8">
              {department.longDescription
                .split("\n")
                .map((paragraph, index) => (
                  <p
                    key={index}
                    className="mb-4 text-gray-600 whitespace-pre-wrap"
                  >
                    {paragraph}
                  </p>
                ))}
            </div>
          </div>

          {/* 問い合わせボタン */}
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-[var(--primary)] text-white rounded-full hover:bg-[var(--primary)]/90 transition-colors duration-300"
            >
              この部署に問い合わせる
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
