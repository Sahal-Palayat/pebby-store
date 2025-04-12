"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, MessageCircle, Star, Truck, Shield, RotateCcw } from "lucide-react"
import { motion } from "framer-motion"
import Header from "@/components/Header"

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

export default function ProductDetails() {
  const params = useParams()
  const router = useRouter()
  const [product, setProduct] = useState<Product | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("description")
  const [isLoading, setIsLoading] = useState(true)
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])

  // Product data - in a real app this would come from an API
  const products = [
    {
      id: 1,
      category: "Toys",
      title: "Creative Building Blocks Set",
      description:
        "Colorful blocks to enhance creativity and imagination. Perfect for children ages 3-8. These building blocks are designed to stimulate young minds and encourage creative play. Each block is made from high-quality, child-safe materials that are durable and built to last through years of play.",
      image: "https://i.pinimg.com/736x/a2/a2/68/a2a26854c0b56033676f4d6d5115ca85.jpg",
      rating: 5,
      price: 24.99,
      offerPrice: 19.99,
      offerPercentage: 20,
      features: [
        "50+ colorful pieces",
        "Storage box included",
        "Develops motor skills",
        "Ages 3+",
        "Non-toxic materials",
        "Educational play",
      ],
    },
    {
      id: 2,
      category: "Books",
      title: "Interactive Storybook Collection",
      description:
        "Engaging stories for young readers with interactive elements on every page. These beautifully illustrated books bring stories to life with touch-responsive elements that make reading an immersive experience for children.",
      image: "https://i.pinimg.com/736x/a2/a2/68/a2a26854c0b56033676f4d6d5115ca85.jpg",
      rating: 4,
      price: 19.99,
      offerPrice: 14.99,
      offerPercentage: 25,
      features: [
        "5 stories included",
        "Touch-responsive pages",
        "Audio narration",
        "Ages 4+",
        "Develops reading skills",
      ],
    },
    {
      id: 3,
      category: "Games",
      title: "Memory Match Card Game",
      description:
        "Fun educational game for kids that improves memory and concentration skills. This classic memory matching game has been redesigned with vibrant, child-friendly illustrations that capture attention and make learning fun.",
      image: "https://i.pinimg.com/736x/a2/a2/68/a2a26854c0b56033676f4d6d5115ca85.jpg",
      rating: 5,
      price: 14.99,
      offerPrice: 11.99,
      offerPercentage: 20,
      features: ["36 cards", "Durable material", "Travel-friendly", "Ages 5+", "Improves concentration"],
    },
    {
      id: 4,
      category: "Crafts",
      title: "DIY Craft Kit for Kids",
      description:
        "Creative art supplies for little artists to make their own masterpieces. This comprehensive craft kit includes everything your child needs to explore their artistic side and create beautiful projects they'll be proud to display.",
      image: "https://i.pinimg.com/736x/a2/a2/68/a2a26854c0b56033676f4d6d5115ca85.jpg",
      rating: 4,
      price: 22.99,
      offerPrice: 18.99,
      offerPercentage: 17,
      features: ["Non-toxic materials", "Instruction booklet", "10+ projects", "Ages 6+", "Develops fine motor skills"],
    },
    {
      id: 5,
      category: "Puzzles",
      title: "Animal Kingdom Puzzle Set",
      description:
        "Educational puzzles for development featuring adorable animals from around the world. These wooden puzzles are designed to challenge young minds while teaching them about different animals and their habitats.",
      image: "https://i.pinimg.com/736x/a2/a2/68/a2a26854c0b56033676f4d6d5115ca85.jpg",
      rating: 5,
      price: 18.99,
      offerPrice: 15.99,
      offerPercentage: 15,
      features: [
        "3 difficulty levels",
        "Wooden pieces",
        "Educational guide",
        "Ages 4+",
        "Develops problem-solving skills",
      ],
    },
    {
      id: 6,
      category: "Learning",
      title: "ABC Learning Blocks",
      description:
        "Alphabet learning made fun with interactive blocks that speak letters and words. These electronic blocks respond when arranged in different combinations, teaching letter recognition, phonics, and simple spelling.",
      image: "https://i.pinimg.com/736x/a2/a2/68/a2a26854c0b56033676f4d6d5115ca85.jpg",
      rating: 5,
      price: 29.99,
      offerPrice: 23.99,
      offerPercentage: 20,
      features: ["26 alphabet blocks", "Light-up buttons", "Multiple learning modes", "Ages 2+", "Batteries included"],
    },
    {
      id: 7,
      category: "Toys",
      title: "Plush Animal Collection",
      description:
        "Super soft plush animals that are perfect for cuddling and imaginative play. Each animal is crafted with premium materials for maximum softness and durability, making them perfect companions for children of all ages.",
      image: "https://i.pinimg.com/736x/a2/a2/68/a2a26854c0b56033676f4d6d5115ca85.jpg",
      rating: 5,
      price: 34.99,
      offerPrice: 27.99,
      offerPercentage: 20,
      features: ["Set of 3 animals", "Machine washable", "Hypoallergenic", "Ages 0+", "Ultra-soft fabric"],
    },
    {
      id: 8,
      category: "Games",
      title: "Junior Strategy Board Game",
      description:
        "Introduction to strategy games designed specifically for young minds. This board game teaches basic strategy concepts in a fun, engaging way that's accessible to children while still being enjoyable for adults to play along.",
      image: "https://i.pinimg.com/736x/a2/a2/68/a2a26854c0b56033676f4d6d5115ca85.jpg",
      rating: 4,
      price: 24.99,
      offerPrice: 19.99,
      offerPercentage: 20,
      features: ["2-4 players", "30 minute gameplay", "Develops critical thinking", "Ages 6+", "Family-friendly"],
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

  // Simulate fetching product data
  useEffect(() => {
    const productId = Number(params.id)

    // Find the product with the matching ID
    const foundProduct = products.find((p) => p.id === productId) || null

    // Find related products (same category or random if none found)
    let related: any = []
    if (foundProduct) {
      related = products.filter((p) => p.category === foundProduct.category && p.id !== foundProduct.id).slice(0, 4)

      // If we don't have enough related products, add some random ones
      if (related.length < 4) {
        const randomProducts = products
          .filter((p) => p.id !== foundProduct.id && !related.find((r: any) => r.id === p.id))
          .slice(0, 4 - related.length)

        related = [...related, ...randomProducts]
      }
    }

    // Simulate loading delay
    setTimeout(() => {
      setProduct(foundProduct)
      setRelatedProducts(related)
      setIsLoading(false)
    }, 500)
  }, [params.id])

  const openWhatsApp = () => {
    if (!product) return

    // Format price with 2 decimal places
    const price:any = (product.offerPrice || product.price).toFixed(2)
    const totalPrice = (price * quantity).toFixed(2)

    // Create a detailed message with product information
    const message = `
*Order Request*
------------------
*Product:* ${product.title}
*Category:* ${product.category}
*Price:* $${price} each
*Quantity:* ${quantity}
*Total:* $${totalPrice}
*Features:* ${product.features.join(", ")}
------------------
I would like to place an order for this product. Please provide payment and delivery details.
`

    // Open WhatsApp with the formatted message
    const whatsappUrl = `https://wa.me/+919633167249?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  // Handle quantity changes
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  // If loading, show skeleton
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-6 w-32 bg-gray-200 rounded mb-8"></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-200 rounded-lg h-96"></div>
            <div>
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-6"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
              <div className="h-10 bg-gray-200 rounded w-1/3 mb-6"></div>
              <div className="h-12 bg-gray-200 rounded mb-4"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // If product not found
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-8">Sorry, we couldn't find the product you're looking for.</p>
        <Link
          href="/"
          className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-white">
      {/* Breadcrumb */}

      <Header />
      <div className="container mx-auto px-4 py-8 mt-20">
        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center text-blue-500 hover:text-blue-700 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Products
        </button>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="relative">
            <div className="bg-gray-50 rounded-xl overflow-hidden mb-4">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                className="w-full h-auto object-contain aspect-square"
              />
              {product.offerPercentage && (
                <div className="absolute top-4 left-4 bg-red-500 text-white font-bold px-3 py-1 rounded-full">
                  {product.offerPercentage}% OFF
                </div>
              )}
              <div
                className={`absolute top-4 right-4 ${getCategoryColor(
                  product.category,
                )} text-white px-3 py-1 rounded-full`}
              >
                {product.category}
              </div>
            </div>

            {/* Thumbnail images - would be actual product images in a real app */}
            <div className="grid grid-cols-4 gap-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="border-2 border-gray-200 hover:border-blue-500 rounded-lg overflow-hidden cursor-pointer"
                >
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={`${product.title} view ${i + 1}`}
                    className="w-full h-auto aspect-square object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h1>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < product.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-500">(24 Reviews)</span>
              </div>

              <span className="text-sm text-green-600 font-medium">In Stock</span>
            </div>

            <div className="mb-6">
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-green-600">${product.offerPrice}</span>
              {product.offerPrice && <span className="text-lg text-gray-500 line-through">${product.price}</span>}
              {product.offerPercentage && (
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm font-medium">
                  Save {product.offerPercentage}%
                </span>
              )}
            </div>

            {/* Quantity selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
              <div className="flex items-center">
                <button
                  onClick={decreaseQuantity}
                  className="w-10 h-10 rounded-l-lg border border-gray-300 flex items-center justify-center bg-gray-50 hover:bg-gray-100"
                >
                  -
                </button>
                <div className="w-14 h-10 border-t border-b border-gray-300 flex items-center justify-center">
                  {quantity}
                </div>
                <button
                  onClick={increaseQuantity}
                  className="w-10 h-10 rounded-r-lg border border-gray-300 flex items-center justify-center bg-gray-50 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action button */}
            <div className="mb-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full flex items-center justify-center gap-2 font-medium"
                onClick={openWhatsApp}
              >
                <MessageCircle className="w-5 h-5" />
                Order on WhatsApp
              </motion.button>
            </div>

            {/* Shipping info */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3 mb-3">
                <Truck className="w-5 h-5 text-blue-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Free Shipping</h3>
                  <p className="text-sm text-gray-600">Free standard shipping on orders over $35</p>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <Shield className="w-5 h-5 text-blue-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Satisfaction Guaranteed</h3>
                  <p className="text-sm text-gray-600">30-day money-back guarantee</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RotateCcw className="w-5 h-5 text-blue-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Easy Returns</h3>
                  <p className="text-sm text-gray-600">Hassle-free returns within 14 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product tabs */}
        <div className="mb-12">
          <div className="border-b border-gray-200 mb-6">
            <div className="flex space-x-8">
              <button
                className={`py-4 text-sm font-medium border-b-2 ${
                  activeTab === "description"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
              <button
                className={`py-4 text-sm font-medium border-b-2 ${
                  activeTab === "features"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("features")}
              >
                Features
              </button>
              <button
                className={`py-4 text-sm font-medium border-b-2 ${
                  activeTab === "reviews"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews
              </button>
            </div>
          </div>

          <div>
            {activeTab === "description" && (
              <div className="prose max-w-none">
                <p>{product.description}</p>
                <p>
                  Our {product.title} is designed with children's development in mind. Each product undergoes rigorous
                  safety testing to ensure it meets the highest standards for quality and durability.
                </p>
                <p>
                  Perfect for birthdays, holidays, or just because, this {product.category.toLowerCase()} item will
                  bring joy and educational value to any child's collection.
                </p>
              </div>
            )}

            {activeTab === "features" && (
              <div>
                <h3 className="font-bold text-lg mb-4">Product Features</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span
                        className={`inline-block w-2 h-2 ${getCategoryColor(
                          product.category,
                        )} rounded-full mt-1.5 mr-2`}
                      ></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg">Customer Reviews</h3>
                  <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">Write a Review</button>
                </div>

                <div className="space-y-6">
                  {/* Sample reviews */}
                  <div className="border-b pb-6">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < 5 ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm font-medium">Sarah J.</span>
                      <span className="ml-auto text-sm text-gray-500">2 weeks ago</span>
                    </div>
                    <h4 className="font-medium mb-1">Perfect for my 5-year-old!</h4>
                    <p className="text-gray-600 text-sm">
                      My child absolutely loves this product. It's been great for their development and they play with
                      it every day. The quality is excellent and it has held up well to daily use.
                    </p>
                  </div>

                  <div className="border-b pb-6">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < 4 ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm font-medium">Michael T.</span>
                      <span className="ml-auto text-sm text-gray-500">1 month ago</span>
                    </div>
                    <h4 className="font-medium mb-1">Great educational value</h4>
                    <p className="text-gray-600 text-sm">
                      This product has been wonderful for my child's learning. I'm impressed with how much they've
                      developed while having fun with it. Would definitely recommend to other parents.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related products */}
        <div>
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((relatedProduct) => (
              <motion.div
                key={relatedProduct.id}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 group relative"
              >
                <Link href={`/product/${relatedProduct.id}`} className="absolute inset-0 z-10">
                  <span className="sr-only">View {relatedProduct.title}</span>
                </Link>

                <div className="relative">
                  <img
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.title}
                    className="w-full h-36 object-cover"
                  />
                  <div
                    className={`absolute top-2 right-2 ${getCategoryColor(
                      relatedProduct.category,
                    )} text-white text-xs font-medium px-2 py-1 rounded-full`}
                  >
                    {relatedProduct.category}
                  </div>
                  {relatedProduct.offerPercentage && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {relatedProduct.offerPercentage}% OFF
                    </div>
                  )}
                </div>

                <div className="p-3">
                  <h3 className="text-sm font-bold mb-1 text-gray-800 line-clamp-1">{relatedProduct.title}</h3>

                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < relatedProduct.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-end gap-2">
                    <span className="font-bold text-sm text-green-600">${relatedProduct.offerPrice}</span>
                    {relatedProduct.offerPrice && (
                      <span className="text-xs text-gray-500 line-through">${relatedProduct.price}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
