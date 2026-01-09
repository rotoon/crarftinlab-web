"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 pointer-events-none ${
        isScrolled
          ? "h-[60px] bg-black/90 backdrop-blur-sm"
          : "h-[100px] bg-transparent"
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto h-full px-6 flex items-center justify-between">
        {/* --- LEFT: Logo / Home --- */}
        <div className="pointer-events-auto flex items-center w-[200px]">
          {isScrolled ? (
            <a
              href="#"
              className="hover:scale-120 transition-transform cursor-pointer text-[#00FF00]"
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
            />
          )}
        </div>

        {/* --- CENTER: Nav / Action Icons --- */}
        <div className="flex-1 flex justify-center">
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
                >
                  <i className="hn hn-info-circle text-2xl text-white hover:text-[#00FF00] transition-colors" />
                </a>
                <a
                  href="#portfolio"
                  className="hover:scale-120 transition-transform cursor-pointer"
                  title="ผลงาน"
                >
                  <i className="hn hn-folder-open text-2xl text-white hover:text-[#00FF00] transition-colors" />
                </a>
                <a
                  href="#contact"
                  className="hover:scale-120 transition-transform cursor-pointer"
                  title="ติดต่อ"
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
                >
                  เกี่ยวกับ
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00FF00] transition-all group-hover:w-full"></span>
                </a>
                <a
                  href="#portfolio"
                  className="hover:text-[#00FF00] transition-colors relative group"
                >
                  ผลงาน
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00FF00] transition-all group-hover:w-full"></span>
                </a>
                <a
                  href="#contact"
                  className="hover:text-[#00FF00] transition-colors relative group"
                >
                  ติดต่อ
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00FF00] transition-all group-hover:w-full"></span>
                </a>
              </>
            )}
          </nav>
        </div>

        {/* --- RIGHT: Language / Chat --- */}
        <div className="pointer-events-auto flex items-center justify-end w-[200px]">
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
      </div>
    </header>
  );
}
