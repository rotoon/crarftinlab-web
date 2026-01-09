"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white relative w-full  flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
        className="relative flex flex-col items-center min-h-screen"
      >
        <Image
          src="/images/hero.png"
          alt="Hero"
          width={1440}
          height={1080}
          objectFit="contain"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
        className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center gap-10 py-24 px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-kanit text-4xl md:text-6xl  leading-tight text-black font-medium"
        >
          อัปเกรดธุรกิจของคุณด้วย
          <br />
          <span className="text-black">การเปลี่ยนแปลงทางดิจิทัล</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-kanit text-lg md:text-xl text-black/80 max-w-3xl leading-relaxed"
        >
          "เราช่วยพัฒนาธุรกิจและองค์กร ด้วยเทคโนโลยี"
          สร้างระบบการจัดการที่มีประสิทธิภาพตอบสนอง
          ต่อความต้องการของลูกค้าทุกรูปแบบ
          พร้อมทั้งออกแบบเครื่องมือแก้ปัญหาทางการตลาด ด้วยการสร้างสรรค์คอนเทนต์
          บนช่องทางที่หลากหลาย ตอบทุกโจทย์กลุ่มเป้าหมาย
          ขับเคลื่อนให้ธุรกิจและองค์กรของคุณ
          เติบโตบนโลกดิจิทัลได้อย่างไร้ขีดจำกัด
        </motion.p>
      </motion.div>
    </section>
  );
}
