"use client";

import { motion } from "framer-motion";

const defaultProducts = [
  {
    title: "Name Slips",
    color: "bg-blue-500",
    hoverColor: "hover:bg-blue-600",
    image:
      "./products/name-slip-1.jpg",
    description:
      "Personalized name slips perfect for kids to label school supplies, books, and gifts.",
  },
  {
    title: "Face Sticker",
    color: "bg-yellow-500",
    hoverColor: "hover:bg-yellow-600",
    image:
      "./products/tiffin.png",
    description: "Cute and custom face stickers that add personality to notebooks, bottles, and more.",
  },
  {
    title: "Name Tags",
    color: "bg-green-500",
    hoverColor: "hover:bg-green-600",
    image:
      "./products/bag-tag-1.jpg",
    description: "Custom name tags to personalize bags, lunch boxes, and school essentials.",
  },
  {
    title: "Bottle",
    color: "bg-purple-500",
    hoverColor: "hover:bg-purple-600",
    image:
      "./products/bottle-1.png",
    description:
      "Stylish and sturdy water bottle with customizable name, perfect for school use.",
  },
  {
    title: "Lunch Box",
    color: "bg-pink-500",
    hoverColor: "hover:bg-pink-600",
    image:
      "./products/tiffin.png",
    description:
      "Compact and fun lunch box for kids, includes a personal name label on the lid.",
  },
  {
    title: "Calculator",
    color: "bg-teal-500",
    hoverColor: "hover:bg-teal-600",
    image:
      "./products/calculator-1.jpg",
    description:
      "Lightweight and colorful calculator ideal for kids and students in school.",
  },
];

interface TrendingCollectionsProps {
  title?: string;
  products?: typeof defaultProducts;
  className?: string;
}

const TrendingCollections = ({
  title = "Explore Our Trending Products",
  products = defaultProducts,
  className = "",
}: TrendingCollectionsProps) => {
  return (
    <div className={`w-full  max-w-6xl mx-auto items-center pb-10 ${className}`}>
      <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-800 mb-10 mt-10">
        {title}
      </h2>

      {/* Desktop View - 6 Columns */}
      <div className="hidden lg:grid lg:grid-cols-6 gap-4 px-0">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} index={index} />
        ))}
      </div>

      {/* Tablet View - 3 Columns */}
      <div className="hidden sm:grid sm:grid-cols-3 lg:hidden gap-4 px-0">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} index={index} />
        ))}
      </div>

      {/* Mobile View - 3 Columns */}
      <div className="grid grid-cols-2 md:hidden lg:hidden  sm:grid-cols-3 gap-4 px-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} index={index} />
        ))}
      </div>
    </div>
  );
};

interface ProductCardProps {
  product: {
    title: string;
    color: string;
    hoverColor: string;
    image: string;
    description: string;
  };
  index: number;
  isMobile?: boolean;
}

const ProductCard = ({
  product,
  index,
  isMobile = false,
}: ProductCardProps) => {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="overflow-hidden rounded-xl mb-3 transition-transform duration-300 group-hover:scale-105 shadow">
        <img
          src={product.image}
          alt={product.title}
          width={300}
          height={200}
          className="w-full h-32 sm:h-40 object-cover"
        />
      </div>
      <div className="flex flex-col items-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className={`${product.color} ${product.hoverColor} text-white font-medium py-2 px-3 sm:px-5 rounded-full mb-1 sm:mb-2 text-xs sm:text-sm`}
        >
          {product.title}
        </motion.button>
        {!isMobile && (
          <p className="text-center text-gray-600 text-[10px] sm:text-sm px-1">
            {product.description}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default TrendingCollections;
