"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useRef, useState } from "react";

// Tab data สำหรับ demo - เปลี่ยนได้ตามต้องการ
const tabsData = [
  {
    id: 1,
    title: (
      <>
        Reinventing Digital with{" "}
        <span className="text-[#00FF00]">Award Winning</span> Design
      </>
    ),
    description:
      "เราออกแบบและพัฒนาเว็บไซต์ที่สวยงาม ใช้งานง่าย และตอบโจทย์ธุรกิจของคุณอย่างแท้จริง",
    video:
      "https://assets-global.website-files.com/65ae37af356fab4845432048/65be0fdac914d702e08f70ed_Yoda-Helmet_1-transcode.mp4",
  },
  {
    id: 2,
    title: (
      <>
        Best in Class Technology for{" "}
        <span className="text-[#00FF00]">Optimal Performance</span>
      </>
    ),
    description:
      "🚀 Next.js, React, และ AI Integration - เทคโนโลยีที่ดีที่สุดสำหรับธุรกิจยุคใหม่",
    video:
      "https://assets-global.website-files.com/65ae37af356fab4845432048/65ae37af356fab48454320ae_BatteryRemoval_Pingpong_001-transcode.mp4",
  },
  {
    id: 3,
    title: (
      <>
        Durable and Effortless,{" "}
        <span className="text-[#00FF00]">All the Way</span>
      </>
    ),
    description:
      "เราดูแลทุกขั้นตอน ตั้งแต่วางแผน ออกแบบ พัฒนา จนถึง deploy และ maintenance",
    video:
      "https://assets-global.website-files.com/65ae37af356fab4845432048/65be104f9aba74d774b7f4a3_Yoda-Exploded-50-transcode.mp4",
  },
];

export default function ScrollTabs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // แบ่ง scroll progress เป็น sections
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const section = Math.min(
      Math.floor(latest * tabsData.length),
      tabsData.length - 1
    );
    if (section !== activeIndex) {
      setActiveIndex(section);
    }
  });

  const activeTab = tabsData[activeIndex];

  return (
    <section ref={containerRef} className="relative min-h-[400vh]">
      {/* Sticky Tabs Container */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="w-full max-w-[1440px]">
          <div className="relative overflow-hidden h-[80vh]">
            <AnimatePresence mode="sync">
              <motion.div
                key={activeTab.id}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "linear" }}
              >
                <video
                  key={activeTab.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={activeTab.video} type="video/mp4" />
                </video>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Button with hover animation
function CTAButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className="relative overflow-hidden w-full py-3 px-6 border border-[#00FF00] rounded-xl 
                 flex items-center justify-center gap-2 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Background circle animation */}
      <motion.div
        className="absolute inset-0 bg-[#00FF00] origin-center"
        initial={{ scale: 0, borderRadius: "100%" }}
        animate={{
          scale: isHovered ? 2 : 0,
          borderRadius: isHovered ? "0%" : "100%",
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Button text */}
      <span
        className={`relative z-10 font-medium tracking-wider uppercase text-sm transition-colors duration-300 ${
          isHovered ? "text-[#141414]" : "text-white"
        }`}
      >
        ติดต่อเรา
      </span>

      {/* Arrow icon */}
      <motion.span
        className={`relative z-10 transition-colors duration-300 ${
          isHovered ? "text-[#141414]" : "text-white"
        }`}
        animate={{ x: isHovered ? 4 : 0, y: isHovered ? -4 : 0 }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.66699 11.3332L11.3337 4.6665"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.66699 4.6665H11.3337V11.3332"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.span>
    </motion.button>
  );
}
