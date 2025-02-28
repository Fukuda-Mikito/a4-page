import Image from "next/image"
import { motion } from "framer-motion"

const categories = [
  { title: "Stay", description: "快適な宿泊施設", image: "/stay.jpg" },
  { title: "Meal", description: "地元の味覚を楽しむ", image: "/meal.jpg" },
  { title: "Shop", description: "お土産と自転車用品", image: "/shop.jpg" },
  { title: "Activity", description: "サイクリングアドベンチャー", image: "/activity.jpg" },
]

const ContentGrid = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContentGrid

