import Image from "next/image";
import HeroFeature from "./HeroFeature";

// ✅ Cards data
const cardData = [
  {
    title: "Customized Name Slips",
    label: "New!",
    labelColor: "#06D6A0",
    bgFrom: "#E0F7FA",
    price: "$15.99",
    oldPrice: "$24.99",
    offer: "Back to School Special",
    image: "/images/banner/hero2.png",
    glow: "#06D6A0",
    textColor: "#073B4C",
  },
  {
    title: "Personalized Water Bottles",
    label: "New!",
    labelColor: "#06D6A0",
    bgFrom: "#E0F7FA",
    price: "$15.99",
    oldPrice: "$24.99",
    offer: "Back to School Special",
    image: "/images/banner/hero3.png",
    glow: "#06D6A0",
    textColor: "#06D6A0",
  },
  {
    title: "Custom Name Tags",
    label: "Popular",
    labelColor: "#EF476F",
    bgFrom: "#FFE5F1",
    price: "$12.99",
    oldPrice: "$19.99",
    offer: "Limited Time Offer",
    image: "/images/banner/hero3.png",
    glow: "#EF476F",
    textColor: "#073B4C",
  },
];

export default function HeroSection() {
  return (
    <section className="overflow-hidden pb-10 lg:pb-12 xl:pb-16 pt-20 sm:pt-24 lg:pt-28 bg-yellow-50">
      <div className="container mx-auto px-4 sm:px-6 xl:px-0">
        <div className="mb-10 relative rounded-xl bg-white overflow-hidden">
          <Image
            src="/images/banner/hero1.png"
            alt="hero"
            width={534}
            height={520}
            className="absolute right-0 bottom-0 -z-10"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 xl:max-w-[1200px] mx-auto">
          {cardData.map((item, i) => (
            <div
              key={i}
              className={`relative rounded-2xl bg-gradient-to-br from-[${item.bgFrom}] to-white p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 group overflow-hidden`}
            >
              {/* Animated shapes */}
              <div
                className={`absolute top-3 right-3 w-8 h-8 rounded-full`}
                style={{
                  backgroundColor: `${item.glow}4D`,
                  animation: "pulse 2s infinite",
                }}
              ></div>
              <div
                className={`absolute bottom-5 left-5 w-6 h-6 rounded-full`}
                style={{
                  backgroundColor: `${item.labelColor}33`,
                  animation: "bounce 2s infinite",
                }}
              ></div>

              {/* Decorative BG */}
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-no-repeat bg-right-bottom opacity-5"></div>

              <div className="flex items-center justify-between gap-6 relative z-10">
                {/* Text */}
                <div>
                  <h2
                    className={`font-bold text-xl mb-16 sm:mb-20 text-[${item.textColor}] relative max-w-[160px]`}
                  >
                    <a
                      href="#"
                      className={`hover:text-[${item.labelColor}] transition-colors duration-300`}
                    >
                      {item.title}
                      <span
                        className={`absolute -top-3 -right-4 text-white text-xs px-2 py-1 rounded-full rotate-12 shadow-sm`}
                        style={{ backgroundColor: item.labelColor }}
                      >
                        {item.label}
                      </span>
                    </a>
                  </h2>

                  <div className="transition-transform group-hover:-translate-y-1 duration-300">
                    <p className="font-medium text-[#118AB2] text-sm mb-2 uppercase tracking-wide">
                      {item.offer}
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-xl text-[#EF476F]">
                        {item.price}
                      </span>
                      <span className="text-lg text-gray-400 line-through">
                        {item.oldPrice}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-full blur-xl scale-90 group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundColor: `${item.glow}33` }}
                  ></div>
                  <div className="transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={123}
                      height={161}
                      className="drop-shadow-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Hover Button */}
              <div
                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#06D6A0] to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center"
                style={{ backgroundImage: `linear-gradient(to top, ${item.labelColor}, transparent)` }}
              >
                <a href="#" className="text-white font-medium text-sm hover:underline">
                  Add to Cart
                </a>
              </div>
            </div>
          ))}
        </div>

        <HeroFeature />
      </div>
    </section>
  );
}
