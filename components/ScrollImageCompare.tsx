"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ScrollImageCompare() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const clipPathInset = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-black">
      {/* SVG Filter for Pixelation */}
      <svg className="hidden">
        <defs>
          <filter id="pixelate-filter" x="0" y="0">
            <feFlood x="4" y="4" height="1" width="1" />
            <feComposite width="10" height="10" />
            <feTile result="a" />
            <feComposite in="SourceGraphic" in2="a" operator="in" />
            <feMorphology operator="dilate" radius="5" />
          </filter>
        </defs>
      </svg>

      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Comparison Container */}
        <div className="relative w-full h-full max-w-[1440px] mx-auto">
          {/* Base Image (Pixelated 'Before' Version) */}
          <div className="absolute inset-0 w-full h-full">
            <div
              className="w-full h-full relative"
              style={{ filter: "url(#pixelate-filter)" }}
            >
              <Image
                src="/cyberpunk-lab.png"
                alt="Cyberpunk Lab Pixel"
                fill
                className="object-cover opacity-80"
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
              <h2 className="text-neon-green text-6xl font-bold font-mono tracking-tighter opacity-100 drop-shadow-md bg-black/50 p-4">
                8-BIT LOADING...
              </h2>
            </div>
          </div>

          {/* Overlay Image (Normal 'After' Version) */}
          <motion.div
            style={{
              clipPath: useTransform(
                clipPathInset,
                (val: any) => `inset(0 ${val} 0 0)`
              ),
            }}
            className="absolute inset-0 w-full h-full z-10 bg-black"
          >
            <Image
              src="/cyberpunk-lab.png"
              alt="Cyberpunk Lab Real"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h2 className="text-white text-6xl font-bold font-mono tracking-tighter mix-blend-overlay opacity-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
                4K REALITY
              </h2>
            </div>
          </motion.div>

          {/* Slider Handle Line */}
          <motion.div
            style={{ right: clipPathInset }}
            className="absolute top-0 bottom-0 w-1 bg-neon-green z-20 shadow-[0_0_20px_2px_rgba(0,255,0,0.8)]"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black border-2 border-neon-green rounded-full flex items-center justify-center">
              <div className="w-8 h-1 bg-neon-green rounded-full" />
            </div>
          </motion.div>

          <div className="absolute bottom-10 left-10 z-30 bg-black/80 p-4 backdrop-blur-md border border-neon-green/30 rounded-lg">
            <p className="text-xs text-neon-green font-mono uppercase">
              System: Rendering Pixels...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
