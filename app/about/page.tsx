"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {  Heart, Users, Shield, Award } from 'lucide-react'
import Header from "@/components/Header"
import KidsFooter from "@/components/Footer"

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="relative pt-20">
        <div className="absolute inset-0 bg-[#f9f3e6]  h-[500px] z-0"></div>
        <div className="container mx-auto px-4 pt-12 pb-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">
                  Welcome to <span className="text-pink-600">Pebby Store</span>
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                  Where imagination meets play and learning becomes an adventure!
                </p>
                
                
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[300px] md:h-[400px]"
            >
              <div className="absolute top-0 right-0 w-full h-full bg-white rounded-2xl overflow-hidden shadow-xl transform rotate-3">
                <Image 
                  src="/images/banner/hero1.jpg" 
                  alt="Happy children playing with toys" 
                  width={600} 
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-6 left-6 w-full h-full bg-white rounded-2xl overflow-hidden shadow-xl transform -rotate-3">
                <Image 
                  src="/images/kidsplay.jpg" 
                  alt="Colorful toys arrangement" 
                  width={600} 
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto mb-6"></div>
         
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden shadow-lg"
          >
            <Image 
              src="/images/kidsplay2.jpg" 
              alt="Pebby Store founder with children" 
              width={600} 
              height={500}
              className="w-full h-auto"
            />
          
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">From Dream to Reality</h3>
            <p className="text-gray-600 mb-4">
             {'This venture started from a simple dream—a passion for business and a desire to offer only the best quality products to families like ours.'}
            </p>
            <p className="text-gray-600 mb-4">
              {"From the very beginning, we’ve been committed to curating products that we personally love and trust. We believe every child deserves the best, and every parent deserves a hassle-free, joyful shopping experience."}
            </p>
            <p className="text-gray-600 mb-6">
            {'We started online to make your shopping journey easy, accessible, and convenient from anywhere. But we’re not stopping there—our first physical store is coming soon to Kochi, Panampilly Nagar! 🛍'}
            </p>
            
            
              
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gradient-to-b from-blue-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              At Pebby Store, we believe in creating magical experiences for children while upholding these core values.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <Shield className="h-10 w-10 text-green-500" />, 
                title: "Safety First", 
                description: "All our products undergo rigorous safety testing to ensure they meet the highest standards." 
              },
              { 
                icon: <Award className="h-10 w-10 text-blue-500" />, 
                title: "Quality Matters", 
                description: "We handpick durable, well-designed products that will last through years of play." 
              },
              { 
                icon: <Users className="h-10 w-10 text-purple-500" />, 
                title: "Community Focus", 
                description: "We support local schools and participate in community events for children." 
              },
              { 
                icon: <Heart className="h-10 w-10 text-pink-500" />, 
                title: "Passion for Play", 
                description: "We believe in the power of play to develop crucial skills and create joy." 
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      
      <KidsFooter/>
    </div>
  )
}
