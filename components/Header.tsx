"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PartyPopper } from "lucide-react";

// Animation variants
const logoVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const menuItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
};

const mobileMenuVariants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      opacity: { duration: 0.2 },
    },
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.4,
      opacity: { duration: 0.3, delay: 0.1 },
    },
  },
};

// Menu data
const menuData = [
  { title: "Home", path: "/" },
  { title: "Shop", path: "/shop" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleStickyMenu);
  //   return () => {
  //     window.removeEventListener("scroll", handleStickyMenu);
  //   };
  // }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 w-full z-[999] bg-[#f9f3e6] transition-all ease-in-out duration-300 ${
          stickyMenu && "shadow-md shadow-pink-100"
        }`}
      >
        <div className="max-w-[1170px] mx-auto px-4 sm:px-6 xl:px-0">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              stickyMenu ? "py-2" : "py-3"
            }`}
          >
            {/* Logo */}
            <motion.div
              variants={logoVariants}
              initial="hidden"
              animate="visible"
              className="flex-shrink-0"
            >
              <Link href="/">
                <h2 className="text-3xl font-bold">
                  <img
                    src="/PebbyLogo.png"
                    alt="logo"
                    width={140}
                    height={44}
                  />
                </h2>
                <p className="text-xs text-gray-500 hidden sm:block">
                  A selection of curated goods, hand-picked by our team for you.
                </p>
              </Link>
            </motion.div>

            {/* Navigation - Desktop */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-1 lg:gap-2">
                {menuData.map((menuItem, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative"
                  >
                    <motion.div className="relative">
                      <Link
                        href={menuItem.path}
                        className="relative inline-block px-3 py-2 text-sm font-medium rounded-full overflow-hidden group"
                      >
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-pink-200 rounded-full group-hover:w-full group-hover:h-full -z-1"></span>
                        <span className="relative text-gray-700 group-hover:text-pink-600 transition-colors duration-300 ease-out">
                          {menuItem.title}
                        </span>
                      </Link>
                    </motion.div>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Search Bar */}
            <div className="hidden md:block max-w-[350px] w-full mx-4">
              <div className="relative">
                <input
                  onChange={(e) => setSearchQuery(e.target.value)}
                  value={searchQuery}
                  type="search"
                  placeholder="Search for candles..."
                  className="w-full rounded-full bg-white border-2 border-pink-100 py-2 pl-4 pr-10 outline-none focus:border-pink-200 transition-all text-sm"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-pink-400">
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="M17.2687 15.6656L12.6281 11.8969C14.5406 9.28123 14.3437 5.5406 11.9531 3.1781C10.6875 1.91248 8.99995 1.20935 7.19995 1.20935C5.39995 1.20935 3.71245 1.91248 2.44683 3.1781C-0.168799 5.79373 -0.168799 10.0687 2.44683 12.6844C3.71245 13.95 5.39995 14.6531 7.19995 14.6531C8.91558 14.6531 10.5187 14.0062 11.7843 12.8531L16.4812 16.65C16.5937 16.7344 16.7343 16.7906 16.875 16.7906C17.0718 16.7906 17.2406 16.7062 17.3531 16.5656C17.5781 16.2844 17.55 15.8906 17.2687 15.6656ZM7.19995 13.3875C5.73745 13.3875 4.38745 12.825 3.34683 11.7844C1.20933 9.64685 1.20933 6.18748 3.34683 4.0781C4.38745 3.03748 5.73745 2.47498 7.19995 2.47498C8.66245 2.47498 10.0125 3.03748 11.0531 4.0781C13.1906 6.2156 13.1906 9.67498 11.0531 11.7844C10.0406 12.825 8.66245 13.3875 7.19995 13.3875Z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Support + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="hidden lg:flex items-center gap-2"
              >
                <div className="bg-blue-200 rounded-full p-2">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-blue-600 fill-current"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.7177 3.09215C5.94388 1.80121 7.9721 2.04307 8.98569 3.47665L10.2467 5.26014C11.0574 6.4068 10.9889 8.00097 10.0214 9.01965L9.7765 9.27743C9.77582 9.27921 9.7751 9.28115 9.77436 9.28323C9.76142 9.31959 9.7287 9.43538 9.7609 9.65513C9.82765 10.1107 10.1793 11.0364 11.607 12.5394C13.0391 14.0472 13.9078 14.4025 14.3103 14.4679C14.484 14.4961 14.5748 14.4716 14.6038 14.4614L15.0124 14.0312C15.8862 13.1113 17.2485 12.9301 18.347 13.5623L20.2575 14.662C21.8904 15.6019 22.2705 17.9011 20.9655 19.275L19.545 20.7705C19.1016 21.2373 18.497 21.6358 17.75 21.7095C15.9261 21.8895 11.701 21.655 7.27161 16.9917C3.13844 12.6403 2.35326 8.85538 2.25401 7.00615L2.92011 6.9704L2.25401 7.00615C2.20497 6.09248 2.61224 5.30879 3.1481 4.74464L4.7177 3.09215Z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs text-gray-600 uppercase font-bold">
                    SUPPORT
                  </span>
                  <p className="font-medium text-sm text-pink-500">
                    +91 7510115894
                  </p>
                </div>
              </motion.div>

              {/* Mobile menu toggle button */}
              {/* Mobile menu toggle button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle Menu"
                className="lg:hidden flex items-center gap-2 p-2"
                onClick={() => setNavigationOpen(!navigationOpen)}
              >
                {/* Phone icon inside circle */}
                <div className="flex items-center gap-2 sm:gap-3 mr-8">
                  {/* Icon with smaller padding on mobile */}
                  <div className="bg-blue-200 rounded-full p-1 sm:p-2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-blue-600 fill-current"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.7177 3.09215C5.94388 1.80121 7.9721 2.04307 8.98569 3.47665L10.2467 5.26014C11.0574 6.4068 10.9889 8.00097 10.0214 9.01965L9.7765 9.27743C9.77582 9.27921 9.7751 9.28115 9.77436 9.28323C9.76142 9.31959 9.7287 9.43538 9.7609 9.65513C9.82765 10.1107 10.1793 11.0364 11.607 12.5394C13.0391 14.0472 13.9078 14.4025 14.3103 14.4679C14.484 14.4961 14.5748 14.4716 14.6038 14.4614L15.0124 14.0312C15.8862 13.1113 17.2485 12.9301 18.347 13.5623L20.2575 14.662C21.8904 15.6019 22.2705 17.9011 20.9655 19.275L19.545 20.7705C19.1016 21.2373 18.497 21.6358 17.75 21.7095C15.9261 21.8895 11.701 21.655 7.27161 16.9917C3.13844 12.6403 2.35326 8.85538 2.25401 7.00615L2.92011 6.9704L2.25401 7.00615C2.20497 6.09248 2.61224 5.30879 3.1481 4.74464L4.7177 3.09215Z"
                      />
                    </svg>
                  </div>

                  {/* Text beside the icon */}
                  <div>
                    <span className="block text-[10px] sm:text-xs text-gray-600 uppercase font-bold">
                      SUPPORT
                    </span>
                    <p className="text-[11px] sm:text-sm font-medium text-pink-500">
                      +91 7510115894
                    </p>
                  </div>
                </div>

                {/* Hamburger icon */}
                <div className="ml-auto flex flex-col justify-center items-center gap-1">
                  <span
                    className={`block h-0.5 w-6 bg-pink-400 transition-all duration-300 ease-out ${
                      navigationOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  ></span>
                  <span
                    className={`block h-0.5 w-6 bg-pink-400 transition-all duration-300 ease-out ${
                      navigationOpen ? "opacity-0" : "opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`block h-0.5 w-6 bg-pink-400 transition-all duration-300 ease-out ${
                      navigationOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  ></span>
                </div>
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {navigationOpen && (
              <motion.nav
                key="mobileMenu"
                initial="closed"
                animate="open"
                exit="closed"
                variants={mobileMenuVariants}
                className="lg:hidden overflow-hidden"
              >
                <ul className="flex flex-col gap-2 py-4">
                  {menuData.map((menuItem, index) => (
                    <li key={index}>
                      <Link
                        href={menuItem.path}
                        onClick={() => setNavigationOpen(false)}
                        className="block w-full px-4 py-2 text-center text-gray-800 hover:bg-pink-100 rounded-full transition"
                      >
                        {menuItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
        <div className="bg-purple-600 overflow-hidden py-1 relative">
          <div className="animate-marquee whitespace-nowrap flex items-center justify-center text-white">
            <span className="mx-4 flex items-center text-sm md:text-base">
              Use Code WELCOME10 & Get 10% Off on Orders Above ₹399!
              <PartyPopper className="h-4 w-4 ml-2" />
            </span>
            <span className="mx-4 flex items-center text-sm md:text-base">
              Use Code WELCOME10 & Get 10% Off on Orders Above ₹399!
              <PartyPopper className="h-4 w-4 ml-2" />
            </span>
            <span className="mx-4 flex items-center text-sm md:text-base">
              Use Code WELCOME10 & Get 10% Off on Orders Above ₹399!
              <PartyPopper className="h-4 w-4 ml-2" />
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
