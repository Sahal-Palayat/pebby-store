"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const categories = [
  {
    name: "small glitter",
    image: "/images/blog/blog-02.jpg",
    designer: "Arch Armchair",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    border: "border-blue-300",
    shape: "star-shape",
    icon: "✨",
  },
  {
    name: "flower",
    image: "/images/blog/blog-02.jpg",
    designer: "Choo Away",
    color: "text-yellow-500",
    bgColor: "bg-yellow-100",
    border: "border-yellow-300",
    shape: "circle-shape",
    icon: "🌸",
  },
  {
    name: "spiral",
    image: "/images/blog/blog-02.jpg",
    designer: "Onde Mirror",
    color: "text-green-500",
    bgColor: "bg-green-100",
    border: "border-green-300",
    shape: "diamond-shape",
    icon: "🌀",
  },
  {
    name: "party set",
    image: "/images/blog/blog-02.jpg",
    designer: "Anna Toop",
    color: "text-pink-500",
    bgColor: "bg-pink-100",
    border: "border-pink-300",
    shape: "cloud-shape",
    icon: "🎉",
  },
]

export default function ProductCategoriesAlt() {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 xl:px-0 py-16 bg-[#f9f3e6]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">
          <span className="text-black">Candles</span> <span className="text-pink-400 font-serif italic">Shop</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          A selection of curated goods, hand-picked by our team for you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center"
          >
            <Link href={`/category/${category.name.replace(" ", "-")}`} className="block w-full">
              <div
                className={`relative ${category.bgColor} p-5 rounded-2xl transition-all duration-300 hover:shadow-lg`}
              >
                {/* Shape container */}
                <div className="relative mx-auto" style={{ width: "150px", height: "150px" }}>
                  {/* Star shape */}
                  {category.shape === "star-shape" && (
                    <div className="relative w-full h-full">
                      <div
                        className={`absolute inset-0 border-4 ${category.border}`}
                        style={{
                          clipPath:
                            "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                        }}
                      ></div>
                      <div
                        className="absolute inset-4 overflow-hidden"
                        style={{
                          clipPath:
                            "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                        }}
                      >
                        <Image
                          src={category.image || "/placeholder.svg"}
                          alt={category.name}
                          width={140}
                          height={140}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}

                  {/* Circle shape */}
                  {category.shape === "circle-shape" && (
                    <div className="relative w-full h-full">
                      <div className={`absolute inset-0 rounded-full border-4 ${category.border} overflow-hidden`}>
                        <div className="absolute inset-0 rounded-full overflow-hidden border-8 border-dashed border-yellow-200">
                          <Image
                            src={category.image || "/placeholder.svg"}
                            alt={category.name}
                            width={140}
                            height={140}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Diamond shape */}
                  {category.shape === "diamond-shape" && (
                    <div className="relative w-full h-full">
                      <div
                        className={`absolute inset-0 border-4 ${category.border}`}
                        style={{
                          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                        }}
                      ></div>
                      <div
                        className="absolute inset-4 overflow-hidden"
                        style={{
                          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                        }}
                      >
                        <Image
                          src={category.image || "/placeholder.svg"}
                          alt={category.name}
                          width={140}
                          height={140}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}

                  {/* Cloud shape */}
                  {category.shape === "cloud-shape" && (
                    <div className="relative w-full h-full">
                      <div
                        className={`absolute inset-0 border-4 ${category.border}`}
                        style={{
                          borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                        }}
                      ></div>
                      <div
                        className="absolute inset-4 overflow-hidden"
                        style={{
                          borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                        }}
                      >
                        <Image
                          src={category.image || "/placeholder.svg"}
                          alt={category.name}
                          width={140}
                          height={140}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}

                  {/* Icon */}
                  <motion.div
                    className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white border-2 border-dashed border-gray-300 flex items-center justify-center text-xl shadow-md"
                    animate={{
                      rotate: [0, 10, -10, 10, 0],
                      scale: [1, 1.1, 1, 1.1, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                    }}
                  >
                    {category.icon}
                  </motion.div>
                </div>

                <motion.div className="mt-4 text-center" whileHover={{ scale: 1.05 }}>
                  <h3 className={`text-xl font-bold ${category.color}`}>{category.name}</h3>
                  <p className="text-gray-500 text-sm">{category.designer}</p>
                </motion.div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

