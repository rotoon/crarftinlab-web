"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  // Motion Variants
  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        delay: 0.1,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { y: 20, opacity: 0 },
    open: { y: 0, opacity: 1 },
  };

  // Smooth scroll handler
  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 pointer-events-none ${
        isScrolled
          ? "h-[60px] bg-black/90 backdrop-blur-sm"
          : "h-[100px] bg-black"
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto h-full px-6 flex items-center justify-between relative">
        {/* --- LEFT: Logo / Home --- */}
        <div className="pointer-events-auto flex items-center md:w-[200px] z-[102]">
          {isScrolled ? (
            <a
              href="#"
              className="hover:scale-120 transition-transform cursor-pointer text-white"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsMobileMenuOpen(false);
              }}
            >
              <i className="hn hn-home text-2xl" />
            </a>
          ) : (
            <Image
              src="/logo.svg"
              alt="Crafting Lab Logo"
              width={95}
              height={10}
              className="scale-250 origin-left"
              priority
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsMobileMenuOpen(false);
              }}
            />
          )}
        </div>

        {/* --- CENTER: Desktop Nav --- */}
        <div className="hidden md:flex flex-1 justify-center">
          <nav
            className={`pointer-events-auto font-kanit font-normal text-white transition-all duration-300 flex items-center ${
              isScrolled ? "gap-6" : "gap-12"
            }`}
          >
            {isScrolled ? (
              // Scrolled Mode: Center Icons
              <>
                <a
                  href="#about"
                  className="hover:scale-120 transition-transform cursor-pointer"
                  title="เกี่ยวกับ"
                  onClick={(e) => handleScrollTo(e, "about")}
                >
                  <i className="hn hn-info-circle text-2xl text-white hover:text-[#00FF00] transition-colors" />
                </a>
                <a
                  href="#portfolio"
                  className="hover:scale-120 transition-transform cursor-pointer"
                  title="ผลงาน"
                  onClick={(e) => handleScrollTo(e, "portfolio")}
                >
                  <i className="hn hn-folder-open text-2xl text-white hover:text-[#00FF00] transition-colors" />
                </a>
                <a
                  href="#contact"
                  className="hover:scale-120 transition-transform cursor-pointer"
                  title="ติดต่อ"
                  onClick={(e) => handleScrollTo(e, "contact")}
                >
                  <i className="hn hn-envelope text-2xl text-white hover:text-[#00FF00] transition-colors" />
                </a>
              </>
            ) : (
              // Default Mode: Text Links
              <>
                <a
                  href="#about"
                  className="hover:text-[#00FF00] transition-colors relative group"
                  onClick={(e) => handleScrollTo(e, "about")}
                >
                  เกี่ยวกับ
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00FF00] transition-all group-hover:w-full"></span>
                </a>
                <a
                  href="#portfolio"
                  className="hover:text-[#00FF00] transition-colors relative group"
                  onClick={(e) => handleScrollTo(e, "portfolio")}
                >
                  ผลงาน
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00FF00] transition-all group-hover:w-full"></span>
                </a>
                <a
                  href="#contact"
                  className="hover:text-[#00FF00] transition-colors relative group"
                  onClick={(e) => handleScrollTo(e, "contact")}
                >
                  ติดต่อ
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00FF00] transition-all group-hover:w-full"></span>
                </a>
              </>
            )}
          </nav>
        </div>

        {/* --- RIGHT: Language / Chat --- */}
        <div className="hidden md:flex pointer-events-auto items-center justify-end w-[200px]">
          {isScrolled ? (
            <button
              className="hover:scale-120 transition-transform cursor-pointer"
              title="เปลี่ยนภาษา"
            >
              <i className="hn hn-message-dots text-2xl text-white hover:text-[#00FF00] transition-colors" />
            </button>
          ) : (
            <div className="font-press-start text-xs flex gap-4 text-white">
              <span className="text-[#00FF00]">TH</span>
              <span>/</span>
              <span className="text-gray-500 hover:text-white cursor-pointer transition-colors">
                EN
              </span>
            </div>
          )}
        </div>

        {/* --- MOBILE: Hamburger Menu Button --- */}
        <div className="md:hidden pointer-events-auto z-[102] flex items-center justify-end flex-1">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none relative w-8 h-8 flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.i
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="hn hn-times-solid text-3xl"
                />
              ) : (
                <motion.i
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                  className="hn hn-bars text-3xl"
                />
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* --- MOBILE OVERLAY MENU --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-black/95 z-[101] flex flex-col items-center justify-center pointer-events-auto md:hidden"
          >
            <nav className="flex flex-col items-center gap-8 font-kanit text-2xl text-white">
              <motion.a
                href="#about"
                variants={itemVariants}
                onClick={(e) =>
                  handleScrollTo(
                    e as unknown as React.MouseEvent<HTMLAnchorElement>,
                    "about"
                  )
                }
                className="hover:text-[#00FF00] transition-colors"
              >
                เกี่ยวกับ
              </motion.a>
              <motion.a
                href="#portfolio"
                variants={itemVariants}
                onClick={(e) =>
                  handleScrollTo(
                    e as unknown as React.MouseEvent<HTMLAnchorElement>,
                    "portfolio"
                  )
                }
                className="hover:text-[#00FF00] transition-colors"
              >
                ผลงาน
              </motion.a>
              <motion.a
                href="#contact"
                variants={itemVariants}
                onClick={(e) =>
                  handleScrollTo(
                    e as unknown as React.MouseEvent<HTMLAnchorElement>,
                    "contact"
                  )
                }
                className="hover:text-[#00FF00] transition-colors"
              >
                ติดต่อ
              </motion.a>

              {/* Mobile Language Switcher */}
              <motion.div
                variants={itemVariants}
                className="font-press-start text-sm flex gap-6 mt-8"
              >
                <span className="text-[#00FF00]">TH</span>
                <span>/</span>
                <span className="text-gray-500">EN</span>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
