import Image from "next/image";
import HeroFeature from "./HeroFeature";
import Link from "next/link";

// ✅ Cards data
const cardData = [
  {
    id: 1,
    title: "Customized Name Slips",
    label: "Trending!",
    labelColor: "#06D6A0",
    bgFrom: "#E0F7FA",
    price: "₹329",
    oldPrice: "₹579",
    offer: "Back to School Special",
    image: "/Products/name-slip-8.png",
    glow: "#06D6A0",
    textColor: "#073B4C",
  },
  {
    id: 4,
    title: "Personalized Water Bottles",
    label: "New!",
    labelColor: "#06D6A0",
    bgFrom: "#E0F7FA",
    price: "₹769",
    oldPrice: "₹1159",
    offer: "Back to School Special",
    image: "./Products/bottle-1.png",
    glow: "#06D6A0",
    textColor: "#06D6A0",
  },
  {
    id: 3,
    title: "Custom Name Tags",
    label: "Popular",
    labelColor: "#EF476F",
    bgFrom: "#FFE5F1",
    price: "₹369",
    oldPrice: "₹599",
    offer: "Limited Time Offer",
    image: "./Products/Bag-tag-4.png",
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
            src="/banner/hero1.png"
            alt="hero"
            width={534}
            height={520}
            className="absolute right-0 bottom-0 -z-10"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 xl:max-w-[1200px] mx-auto auto-rows-fr">
          {cardData.map((item, i) => (
            <Link
              key={i}
              href={`/product/${item.id}`}
              className="block group h-full"
            >
              <div
                className={`relative h-full flex flex-col justify-between rounded-2xl bg-gradient-to-br from-[${item.bgFrom}] to-white p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 group overflow-hidden`}
              >
                {/* Animated shapes */}
                <div
                  className="absolute top-3 right-3 w-8 h-8 rounded-full"
                  style={{
                    backgroundColor: `${item.glow}4D`,
                    animation: "pulse 2s infinite",
                  }}
                ></div>
                <div
                  className="absolute bottom-5 left-5 w-6 h-6 rounded-full"
                  style={{
                    backgroundColor: `${item.labelColor}33`,
                    animation: "bounce 2s infinite",
                  }}
                ></div>

                {/* Decorative BG */}
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-no-repeat bg-right-bottom opacity-5"></div>

                {/* Card Content */}
                <div className="flex flex-col justify-between flex-1 relative z-10">
                  {/* Top section */}
                  <div className="flex items-center justify-between gap-6">
                    {/* Text */}
                    <div>
                      <h2
                        className={`font-bold text-xl mb-16 sm:mb-20 text-[${item.textColor}] relative max-w-[160px]`}
                      >
                        <span
                          className={`hover:text-[${item.labelColor}] transition-colors duration-300`}
                        >
                          {item.title}
                          <span
                            className="absolute -top-3 -right-4 text-white text-xs px-2 py-1 rounded-full rotate-12 shadow-sm"
                            style={{ backgroundColor: item.labelColor }}
                          >
                            {item.label}
                          </span>
                        </span>
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
                        <img
                          src={item.image}
                          alt={item.title}
                          width={203}
                          height={161}
                          className="drop-shadow-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Button */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#06D6A0] to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center"
                  style={{
                    backgroundImage: `linear-gradient(to top, ${item.labelColor}, transparent)`,
                  }}
                >
                  <span className="text-white font-medium text-sm group-hover:underline">
                    View Details
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <HeroFeature />
      </div>
    </section>
  );
}
