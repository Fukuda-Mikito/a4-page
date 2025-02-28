import Image from "next/image"
import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <section className="relative h-screen">
      <Image src="/hero-background.jpg" alt="Hotel and Cycling" layout="fill" objectFit="cover" quality={100} />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-center"
        >
          ホテルと自転車の旅
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-center"
        >
          自然と文化を楽しむ新しい旅のカタチ
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image src="/cafe-interaction.png" alt="Café Interaction" width={200} height={200} className="rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection

