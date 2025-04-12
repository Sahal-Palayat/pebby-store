"use client"
import { Star, ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function KidsProductGrid() {
  // Product type definition
  type Product = {
    id: number
    title: string
    image: string
    category: string
    rating: number
    description: string
    features: string[]
    price: number
    offerPrice?: number
    offerPercentage?: number
  }

  // Product data
  const products = [
    {
      id: 1,
      category: "Toys",
      title: "Creative Building Blocks Set",
      description: "Colorful blocks to enhance creativity and imagination. Perfect for children ages 3-8.",
      image: "https://i.pinimg.com/736x/a2/a2/68/a2a26854c0b56033676f4d6d5115ca85.jpg",
      rating: 5,
      price: 24.99,
      offerPrice: 19.99,
      offerPercentage: 20,
      features: ["50+ colorful pieces", "Storage box included", "Develops motor skills", "Ages 3+"],
    },
    {
      id: 2,
      category: "Books",
      title: "Interactive Storybook Collection",
      description: "Engaging stories for young readers with interactive elements on every page.",
      image: "https://i.pinimg.com/736x/a2/a2/68/a2a26854c0b56033676f4d6d5115ca85.jpg",
      rating: 4,
      price: 19.99,
      offerPrice: 14.99,
      offerPercentage: 25,
      features: ["5 stories included", "Touch-responsive pages", "Audio narration", "Ages 4+"],
    },
    {
      id: 3,
      category: "Games",
      title: "Memory Match Card Game",
      description: "Fun educational game for kids that improves memory and concentration skills.",
      image: "https://i.pinimg.com/736x/a2/a2/68/a2a26854c0b56033676f4d6d5115ca85.jpg",
      rating: 5,
      price: 14.99,
      offerPrice: 11.99,
      offerPercentage: 20,
      features: ["36 cards", "Durable material", "Travel-friendly", "Ages 5+"],
    },
    {
      id: 4,
      category: "Crafts",
      title: "DIY Craft Kit for Kids",
      description: "Creative art supplies for little artists to make their own masterpieces.",
      image: "https://i.pinimg.com/736x/a2/a2/68/a2a26854c0b56033676f4d6d5115ca85.jpg",
      rating: 4,
      price: 22.99,
      offerPrice: 18.99,
      offerPercentage: 17,
      features: ["Non-toxic materials", "Instruction booklet", "10+ projects", "Ages 6+"],
    },
    {
      id: 5,
      category: "Puzzles",
      title: "Animal Kingdom Puzzle Set",
      description: "Educational puzzles for development featuring adorable animals from around the world.",
      image: "https://i.pinimg.com/736x/a2/a2/68/a2a26854c0b56033676f4d6d5115ca85.jpg",
      rating: 5,
      price: 18.99,
      offerPrice: 15.99,
      offerPercentage: 15,
      features: ["3 difficulty levels", "Wooden pieces", "Educational guide", "Ages 4+"],
    },
    {
      id: 6,
      category: "Learning",
      title: "ABC Learning Blocks",
      description: "Alphabet learning made fun with interactive blocks that speak letters and words.",
      image: "https://i.pinimg.com/736x/a2/a2/68/a2a26854c0b56033676f4d6d5115ca85.jpg",
      rating: 5,
      price: 29.99,
      offerPrice: 23.99,
      offerPercentage: 20,
      features: ["26 alphabet blocks", "Light-up buttons", "Multiple learning modes", "Ages 2+"],
    },
    {
      id: 7,
      category: "Toys",
      title: "Plush Animal Collection",
      description: "Super soft plush animals that are perfect for cuddling and imaginative play.",
      image: "https://i.pinimg.com/736x/a2/a2/68/a2a26854c0b56033676f4d6d5115ca85.jpg",
      rating: 5,
      price: 34.99,
      offerPrice: 27.99,
      offerPercentage: 20,
      features: ["Set of 3 animals", "Machine washable", "Hypoallergenic", "Ages 0+"],
    },
    {
      id: 8,
      category: "Games",
      title: "Junior Strategy Board Game",
      description: "Introduction to strategy games designed specifically for young minds.",
      image: "https://i.pinimg.com/736x/a2/a2/68/a2a26854c0b56033676f4d6d5115ca85.jpg",
      rating: 4,
      price: 24.99,
      offerPrice: 19.99,
      offerPercentage: 20,
      features: ["2-4 players", "30 minute gameplay", "Develops critical thinking", "Ages 6+"],
    },
  ]

  // Get category background color based on category name
  const getCategoryColor = (category: string) => {
    const colorMap: Record<string, string> = {
      Toys: "bg-green-400",
      Books: "bg-blue-400",
      Games: "bg-purple-400",
      Crafts: "bg-pink-400",
      Puzzles: "bg-yellow-400",
      Learning: "bg-red-400",
    }

    return colorMap[category] || "bg-gray-400"
  }

  return (
    <div className="relative bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">Kids Favorites</h1>
        <p className="text-center text-gray-500 mb-8">Discover our collection of fun and educational products</p>

        {/* Products grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group relative"
            >
              {/* Make the entire card clickable with Link */}
              <Link href={`/product/${product.id}`} className="absolute inset-0 z-10">
                <span className="sr-only">View {product.title}</span>
              </Link>

              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  width={300}
                  height={200}
                  className="w-full h-36 sm:h-44 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  className={`absolute top-2 right-2 ${getCategoryColor(product.category)} text-white text-xs font-medium px-2 py-1 rounded-full`}
                >
                  {product.category}
                </div>
                {product.offerPercentage && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {product.offerPercentage}% OFF
                  </div>
                )}
              </div>

              <div className="p-3 sm:p-4">
                <h3 className="text-sm sm:text-base font-bold mb-1 text-gray-800 line-clamp-1">{product.title}</h3>
                <p className="text-gray-600 mb-2 text-xs line-clamp-2">{product.description}</p>

                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${i < product.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                    />
                  ))}
                </div>

                <div className="flex items-end gap-2">
                  <span className="font-bold text-sm sm:text-base text-green-600">${product.offerPrice}</span>
                  {product.offerPrice && <span className="text-xs text-gray-500 line-through">${product.price}</span>}
                </div>

                {/* Quick add to cart button that doesn't navigate (stops propagation) */}
                <button
                  className="absolute bottom-3 right-3 z-20 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    // Add to cart logic would go here
                    alert(`Added ${product.title} to cart!`)
                  }}
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span className="sr-only">Add to cart</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
