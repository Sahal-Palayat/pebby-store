"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, EffectFade } from "swiper/modules"
import { useState } from "react"

// Import Swiper styles
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import "swiper/css"

import Image from "next/image"

const HeroCarousel = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        effect="fade"
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active",
          bulletClass: "swiper-pagination-bullet",
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="hero-carousel w-full rounded-[10px] overflow-hidden"
      >
        {/* Name Labels Slide */}
        <SwiperSlide>
          <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row bg-gradient-to-r from-[#FFE5F1] to-[#FFF6E5] relative w-full min-h-[500px] md:min-h-[550px]">
            {/* Decorative elements */}
            <div className="absolute top-5 right-10 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#FFD166] opacity-40 animate-bounce"></div>
            <div className="absolute bottom-10 left-10 sm:left-20 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#06D6A0] opacity-30 animate-pulse"></div>
            <div className="absolute top-1/4 left-1/3 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#118AB2] opacity-20 animate-ping"></div>

            <div className="w-full sm:w-1/2 max-w-[500px] py-6 sm:py-10 lg:py-16 px-6 sm:pl-8 lg:pl-16 z-10">
              <div
                className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6 lg:mb-8 transform transition-transform duration-300 hover:scale-105"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="block font-bold text-3xl sm:text-4xl lg:text-5xl text-[#EF476F]">30%</span>
                <span className="block text-[#073B4C] text-xs sm:text-sm lg:text-base font-medium">
                  Sale
                  <br />
                  Off
                </span>
              </div>

              <h1 className="font-bold text-[#073B4C] text-lg sm:text-xl lg:text-3xl mb-2 sm:mb-3 leading-tight">
                <a href="#" className="hover:text-[#118AB2] transition-colors duration-300">
                  Waterproof, Stick-on Name Labels for School Supplies
                </a>
              </h1>

              <p className="text-[#073B4C]/80 text-sm sm:text-base leading-relaxed">
                Colorful, durable name labels that stick to everything! Perfect for books, lunch boxes, water bottles,
                and all school essentials.
              </p>

              <a
                href="#"
                className="inline-flex font-medium text-white text-xs sm:text-sm rounded-full bg-[#EF476F] py-2.5 sm:py-3.5 px-6 sm:px-9 mt-6 sm:mt-8 lg:mt-10 shadow-lg transition-all duration-300 hover:bg-[#118AB2] hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
              >
                Shop Now
              </a>
            </div>

            <div className="w-full sm:w-1/2 flex justify-center sm:justify-end items-center">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-20 sm:w-40 h-20 sm:h-40 rounded-full bg-[#FFD166]/20 z-0"></div>
                <div className="relative z-10 transform transition-transform duration-500 hover:scale-105">
                  <Image
                    src="/images/banner/hero2.png"
                    alt="Colorful name labels for kids"
                    width={300}
                    height={300}
                    className="drop-shadow-xl w-[200px] sm:w-[250px] md:w-[300px] h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Water Bottles Slide */}
        <SwiperSlide>
          <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row bg-gradient-to-r from-[#E0F7FA] to-[#E8F5E9] relative w-full min-h-[500px] md:min-h-[550px]">
            {/* Decorative elements */}
            <div className="absolute top-5 right-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#06D6A0] opacity-40 animate-pulse"></div>
            <div className="absolute bottom-10 left-10 sm:left-20 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#118AB2] opacity-30 animate-bounce"></div>
            <div className="absolute top-1/3 right-1/4 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#FFD166] opacity-20 animate-ping"></div>

            <div className="w-full sm:w-1/2 max-w-[500px] py-6 sm:py-10 lg:py-16 px-6 sm:pl-8 lg:pl-16 z-10">
              <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6 lg:mb-8 transform transition-transform duration-300 hover:scale-105">
                <span className="block font-bold text-3xl sm:text-4xl lg:text-5xl text-[#06D6A0]">25%</span>
                <span className="block text-[#073B4C] text-xs sm:text-sm lg:text-base font-medium">
                  Sale
                  <br />
                  Off
                </span>
              </div>

              <h1 className="font-bold text-[#073B4C] text-lg sm:text-xl lg:text-3xl mb-2 sm:mb-3 leading-tight">
                <a href="#" className="hover:text-[#118AB2] transition-colors duration-300">
                  Personalized Water Bottles with Fun Designs
                </a>
              </h1>

              <p className="text-[#073B4C]/80 text-sm sm:text-base leading-relaxed">
                BPA-free, leak-proof bottles with your child's name. Choose from unicorns, dinosaurs, space themes, and
                more!
              </p>

              <a
                href="#"
                className="inline-flex font-medium text-white text-xs sm:text-sm rounded-full bg-[#06D6A0] py-2.5 sm:py-3.5 px-6 sm:px-9 mt-6 sm:mt-8 lg:mt-10 shadow-lg transition-all duration-300 hover:bg-[#118AB2] hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
              >
                Shop Now
              </a>
            </div>

            <div className="w-full sm:w-1/2 flex justify-center sm:justify-end items-center">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-20 sm:w-40 h-20 sm:h-40 rounded-full bg-[#118AB2]/20 z-0"></div>
                <div className="relative z-10 transform transition-transform duration-500 hover:scale-105">
                  <Image
                    src="/images/banner/hero2.png"
                    alt="Personalized water bottles for kids"
                    width={301}
                    height={300}
                    className="drop-shadow-xl w-[200px] sm:w-[250px] md:w-[300px] h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Starboard Calendar Slide */}
        <SwiperSlide>
          <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row bg-gradient-to-r from-[#E8EAF6] to-[#FFF8E1] relative w-full min-h-[500px] md:min-h-[550px]">
            {/* Decorative elements */}
            <div className="absolute top-5 right-10 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#118AB2] opacity-40 animate-pulse"></div>
            <div className="absolute bottom-10 left-10 sm:left-20 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#EF476F] opacity-30 animate-bounce"></div>
            <div className="absolute top-1/4 right-1/3 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#FFD166] opacity-20 animate-ping"></div>

            <div className="w-full sm:w-1/2 max-w-[500px] py-6 sm:py-10 lg:py-16 px-6 sm:pl-8 lg:pl-16 z-10">
              <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6 lg:mb-8 transform transition-transform duration-300 hover:scale-105">
                <span className="block font-bold text-3xl sm:text-4xl lg:text-5xl text-[#118AB2]">20%</span>
                <span className="block text-[#073B4C] text-xs sm:text-sm lg:text-base font-medium">
                  Sale
                  <br />
                  Off
                </span>
              </div>

              <h1 className="font-bold text-[#073B4C] text-lg sm:text-xl lg:text-3xl mb-2 sm:mb-3 leading-tight">
                <a href="#" className="hover:text-[#118AB2] transition-colors duration-300">
                  Starboard Calendars & New Joinee Gift Sets
                </a>
              </h1>

              <p className="text-[#073B4C]/80 text-sm sm:text-base leading-relaxed">
                Special welcome packs for Madrasa and School new students. Includes personalized calendars, name tags,
                and essential school supplies.
              </p>

              <a
                href="#"
                className="inline-flex font-medium text-white text-xs sm:text-sm rounded-full bg-[#118AB2] py-2.5 sm:py-3.5 px-6 sm:px-9 mt-6 sm:mt-8 lg:mt-10 shadow-lg transition-all duration-300 hover:bg-[#EF476F] hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
              >
                Shop Now
              </a>
            </div>

            <div className="w-full sm:w-1/2 flex justify-center sm:justify-end items-center">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-20 sm:w-40 h-20 sm:h-40 rounded-full bg-[#FFD166]/20 z-0"></div>
                <div className="relative z-10 transform transition-transform duration-500 hover:scale-105">
                  <Image
                    src="/images/banner/hero3.png"
                    alt="School welcome packs and calendars"
                    width={300}
                    height={300}
                    className="drop-shadow-xl w-[200px] sm:w-[250px] md:w-[300px] h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <style jsx global>{`
          .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background: #073B4C;
            opacity: 0.3;
            transition: all 0.3s ease;
          }
          
          .swiper-pagination-bullet-active {
            width: 16px;
            border-radius: 4px;
            background: #118AB2;
            opacity: 1;
          }
          
          .hero-carousel .swiper-pagination {
            bottom: 15px !important;
          }
          
          @media (min-width: 640px) {
            .swiper-pagination-bullet {
              width: 10px;
              height: 10px;
            }
            
            .swiper-pagination-bullet-active {
              width: 20px;
              border-radius: 5px;
            }
            
            .hero-carousel .swiper-pagination {
              bottom: 20px !important;
            }
          }
        `}</style>
      </Swiper>
    </div>
  )
}

export default HeroCarousel

