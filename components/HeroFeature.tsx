"use client"

import { motion } from "framer-motion"
import { Truck, RefreshCw, ShieldCheck, Headphones } from "lucide-react"

const featureData = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "For all orders $200",
    border: "border-pink-300",
    iconBg: "bg-pink-200",
  },
  {
    icon: RefreshCw,
    title: "Premium Quality Guarantee",
    description: "Every item crafted with care and durable materials",
    border: "border-blue-300",
    iconBg: "bg-blue-200",
  },
  {
    icon: ShieldCheck,
    title: "100% Secure Payments",
    description: "Guarantee secure payments",
    border: "border-green-300",
    iconBg: "bg-green-200",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Anywhere & anytime",
    border: "border-yellow-300",
    iconBg: "bg-yellow-200",
  },
  // {
  //   icon: Leaf,
  //   title: "Eco Friendly",
  //   description: "Sustainable packaging",
  //   border: "border-purple-300",
  //   iconBg: "bg-purple-200",
  // },
]

const HeroFeature = () => {
  return (
    <div className="max-w-[1200px] w-full mx-auto px-2 sm:px-4 py-8 sm:py-10 ">
    
      {/* Mobile layout (< 640px) */}
      <div className="">
        {/* First row - 3 items */}
        <div className="grid md:grid-cols-4 lg:grid-cols-4 grid-cols-2 gap-2 mb-4">
          {featureData.map((item, key) => (
            <FeatureItem item={item} key={key} index={key} />
          ))}
        </div>
      </div>
    </div>
  )
}
type Feature = {
  icon: React.ElementType;
  title: string;
  description: string;
  border: string;
  iconBg: string;
};  
type FeatureItemProps = {
  item: Feature;
  index: number;
  className?: string;
};
// Extracted feature item component for reuse
const FeatureItem = ({ item, index, className = "" }:FeatureItemProps) => {
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`rounded-2xl sm:rounded-3xl border-2 ${item.border} p-3 sm:p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${className}`}
    >
      <div className="flex flex-col items-center text-center">
        <div
          className={`p-2 sm:p-3 rounded-full mb-2 sm:mb-3 border-2 ${item.iconBg} ${item.border} flex items-center justify-center`}
        >
          <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
        </div>
        <div>
          <h3 className="font-semibold text-xs sm:text-base text-gray-800 mb-1">{item.title}</h3>
          <p className="text-[10px] sm:text-sm text-gray-600">{item.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default HeroFeature
