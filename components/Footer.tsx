"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Mail } from "lucide-react"

export default function Footer() {
  const links = [
    { title: "お問い合わせ", href: "/contact" },
    { title: "よくある質問", href: "/faq" },
    { title: "プライバシーポリシー", href: "/privacy" },
    { title: "採用情報", href: "/careers" },
  ]

  const socials = [
    { icon: Instagram, href: "https://instagram.com" },
    { icon: Facebook, href: "https://facebook.com" },
    { icon: Mail, href: "mailto:contact@example.com" },
  ]

  return (
    <footer className="bg-[var(--primary)] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-0"
          >
            <div className="bg-white p-4 rounded-lg shadow-lg hover-scale">
              <Image src="/placeholder.svg" alt="A4 アイコン" width={80} height={80} className="rounded" />
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {links.map((link, index) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <Link href={link.href} className="block hover:text-gray-300 transition-colors duration-300">
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center md:justify-end space-x-6"
            >
              {socials.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="hover-scale"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

