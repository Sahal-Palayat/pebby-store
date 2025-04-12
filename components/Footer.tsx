import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function KidsFooter() {
  return (
    <footer className="relative mx-2 mb-2 rounded-2xl pt-16 pb-4 bg-purple-600 text-white overflow-hidden">
      {/* Cloud border top - optimized with fewer elements */}
      <div className="absolute top-0 left-0 right-0 transform -translate-y-[95%] h-12 w-full overflow-hidden">
        <div className="absolute w-full flex justify-between">
          {Array.from({ length: 17 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-purple-600 rounded-full"
              style={{ marginLeft: i === 0 ? "0" : "-12px" }}
            ></div>
          ))}
        </div>
      </div>

      {/* Small clouds - positioned with percentages for better responsiveness */}
      <div className="absolute top-0 left-[10%] transform -translate-y-[140%]">
        <div className="w-12 h-12 bg-teal-100 rounded-full"></div>
      </div>
      <div className="absolute top-0 right-[30%] transform -translate-y-[180%]">
        <div className="w-16 h-16 bg-teal-100 rounded-full"></div>
      </div>
      <div className="absolute top-0 right-[60%] transform -translate-y-[160%]">
        <div className="w-10 h-10 bg-teal-100 rounded-full"></div>
      </div>

      {/* Sun decoration */}
      <div className="absolute top-8 left-[30%] w-12 h-12">
        <div className="w-full h-full bg-yellow-300 rounded-full relative">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-4 bg-yellow-300"
              style={{
                left: "50%",
                top: "50%",
                transformOrigin: "50% 0",
                transform: `translateX(-50%) rotate(${i * 45}deg) translateY(-10px)`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Star decoration */}
      <div className="absolute top-16 right-[20%] text-yellow-300 text-4xl">★</div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="col-span-1 flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <img src="/PebbyLogo.png" alt="" width={150} />
            </div>
            <p className="text-sm mb-2 text-center md:text-left">1234 North Rainbow Street</p>
            <p className="text-sm mb-2 text-center md:text-left">Toyville, Funland</p>
            <p className="text-sm mb-4 text-center md:text-left">+1 (123) 456-7890</p>
            <p className="text-sm text-center md:text-left">info@kidoo.play</p>

            <div className="mt-6">
              <Link
                href="#"
                className="inline-block bg-white text-purple-600 font-bold py-3 px-6 rounded-full transform transition-transform hover:scale-105 hover:rotate-2"
              >
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Visit site
                </span>
              </Link>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-span-1 flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link href="#" className="hover:text-yellow-300 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-300 transition-colors">
                  Terms & Policies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-300 transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-300 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Services */}
          <div className="col-span-1 flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4">Customer Services</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link href="#" className="hover:text-yellow-300 transition-colors">
                  Orders
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-300 transition-colors">
                  Downloads
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-300 transition-colors">
                  Account Details
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-300 transition-colors">
                  Lost Password
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-300 transition-colors">
                  Address
                </Link>
              </li>
            </ul>
          </div>

          {/* Need Help */}
          <div className="col-span-1 flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4">Need Help</h3>
            <div className="mb-4 text-center md:text-left">
              <p className="font-bold">+123 - 456 - 7890</p>
              <p className="font-bold">+123 - 456 - 7890</p>
            </div>

            <div className="mb-6 text-center md:text-left">
              <p className="text-sm">Monday - Friday</p>
              <p className="text-sm">9:00 - 18:00</p>
              <p className="text-sm">Saturday</p>
              <p className="text-sm">9:00 - 14:00</p>
              <p className="text-sm">Sunday - Closed</p>
            </div>

            {/* Character illustration - hidden on mobile, visible on desktop */}
            <div className="hidden md:block relative w-full">
              <div className="absolute bottom-0 right-0 transform translate-y-8">
                <div className="w-24 h-24 relative">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full absolute bottom-0 right-0"></div>
                  <div className="w-8 h-8 bg-yellow-500 rounded-full absolute bottom-12 right-4"></div>
                  <div className="w-2 h-2 bg-black rounded-full absolute bottom-14 right-6"></div>
                  <div className="w-2 h-2 bg-black rounded-full absolute bottom-14 right-2"></div>
                  <div className="w-4 h-1 bg-black rounded-full absolute bottom-12 right-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-8 border-t border-purple-500 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h4 className="text-sm font-bold mb-2">Social Media</h4>
              <div className="flex space-x-3 justify-center md:justify-start">
                <Link
                  href="#"
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-purple-600 hover:bg-yellow-300 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={16} />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-purple-600 hover:bg-yellow-300 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={16} />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-purple-600 hover:bg-yellow-300 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-purple-600 hover:bg-yellow-300 transition-colors"
                  aria-label="Youtube"
                >
                  <Youtube size={16} />
                </Link>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex space-x-2 justify-center">
              {["visa", "mastercard", "paypal", "apple-pay"].map((method) => (
                <div key={method} className="w-10 h-6 bg-white rounded flex items-center justify-center">
                  <span className="text-xs text-gray-500">{method.charAt(0).toUpperCase()}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 text-center text-xs">
            <p>© 2023 Kidoo. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
