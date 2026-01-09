"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function RacingTrack({
  directtion = "down",
}: {
  directtion: "up" | "down";
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const offsetDistance = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const animationPath =
    directtion === "up"
      ? "path('M 150 750 C 150 160 300 150 700 170')"
      : "path('M 700 160 C 60 150 160 450 150 750')"; // Top Right to Bottom Left

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-[100px] h-screen overflow-hidden relative">
        {/* Racing Track Background Image */}
        <div className="relative w-full max-w-4xl aspect-square">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/racing-track-lane.png"
            alt="Racing Track"
            className="w-full h-full object-contain"
            style={{ imageRendering: "pixelated" }}
          />

          {/* Animated Racing Car */}
          <motion.div
            className="absolute top-10 left-25 w-32 h-32"
            style={{
              offsetDistance,
              // 🛠️ จุดแก้ไขตำแหน่ง Animation (SVG Path) 🛠️
              // "M x y" = จุดเริ่มต้น (Move to)
              // "C cp1x cp1y, cp2x cp2y, endX endY" = เส้นโค้ง Cubic Bezier (Control Points -> จุดปลาย)
              // ลองปรับตัวเลขในนี้เพื่อขยับเส้นทางรถ:
              offsetPath: animationPath,

              // ปรับมุมหันของรถ (ถ้าหัวรถไม่ไปตามทาง ให้แก้ 90deg เป็นมุมอื่น เช่น 0deg, 180deg)
              offsetRotate: "auto 270deg",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/f1-car.png"
              alt="Racing Car"
              className="w-full h-full scale-200 object-contain"
              style={{ imageRendering: "pixelated" }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
