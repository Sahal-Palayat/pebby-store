"use client"

import { motion } from "framer-motion"

interface PassionateTeamProps {
  title?: string
  description?: string[]
  buttonText?: string
  buttonLink?: string
  imageSrc?: string
  imageAlt?: string
  className?: string
}

const PassionateTeam = ({
  title = "Passionate team",
  description = [
    "We're all about making childhood fun, creative, and full of joy! Our team is dedicated to bringing smiles with exciting, personalized products that add a special touch to everyday moments.",
    "From custom name labels to fun learning boards, we create items that spark imagination and make life easier for parents. Every product is designed to bring happiness, organization, and a little extra magic to a child's world!",
  ],
  buttonText = "Meet Our Team",
  buttonLink = "#",
  imageSrc = "https://i.pinimg.com/736x/75/7f/c9/757fc9be08a8ffd0c7ce642d220227ed.jpg",
  imageAlt = "Passionate team of educators",
  className = "",
}: PassionateTeamProps) => {
  return (
    <div
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 py-10 relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-pink-50 ${className}`}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200 rounded-full opacity-20 -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-200 rounded-full opacity-20 translate-y-1/3 -translate-x-1/3"></div>
      <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-purple-300 rounded-full opacity-40 animate-pulse"></div>
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-green-300 rounded-full opacity-40"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      {/* Content */}
      <div className="md:w-1/2 z-10">
        <div className="inline-block mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 relative">
            <span className="relative z-10">{title}</span>
            <div className="absolute -bottom-3 left-0 h-4 w-full bg-yellow-300 opacity-40 -rotate-1 z-0"></div>
          </h2>
        </div>
        <div className="space-y-6 text-gray-600 relative">
          {description.map((paragraph, index) => (
            <p key={index} className={`text-base md:text-lg leading-relaxed`}>
              {paragraph}
            </p>
          ))}
          <div className="pt-4">
            <motion.a
              href={buttonLink}
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.4)" }}
            >
              {buttonText}
            </motion.a>
          </div>
        </div>
      </div>

      {/* Image section */}
      <div className="md:w-1/2 relative mt-10 md:mt-0">
        <motion.div
          className="relative w-full h-80 md:h-96 overflow-hidden rounded-3xl shadow-xl"
          initial={{ rotate: 2 }}
          whileHover={{ rotate: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <img src={imageSrc || "/placeholder.svg"} alt={imageAlt} className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-500/30 to-transparent"></div>
        </motion.div>

        {/* Decorative around image */}
        <motion.div
          className="absolute -top-8 -left-8 w-24 h-24 bg-pink-400 rounded-full opacity-80"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-yellow-300 rounded-full opacity-70"></div>
        <div className="absolute top-1/2 -right-4 w-12 h-12 bg-blue-400 rounded-full opacity-60"></div>

        <motion.div
          className="absolute top-10 right-10"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#F472B6" />
          </svg>
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-10"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#60A5FA" />
          </svg>
        </motion.div>
      </div>
    </div>
  )
}

export default PassionateTeam
