"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Header() {
  return (
    <div className="bg-white">
      <Image
        src="/branding web.png"
        alt="Crafting Lab Header"
        width={1920}
        height={600}
        className="w-full h-auto object-cover "
      />

      <div>
        {/* ไม่ต้อง import แต่ระบุ path โดยเริ่มจาก / (root) ได้เลย */}
        <video width="600" controls>
          <source src="/videos/my-movie.mp4" type="video/mp4" />
        </video>
      </div>

      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-[56px] text-center mt-30 mb-8 text-black font-medium"
      >
        อัปเกรดธุรกิจของคุณด้วย
        <br />
        การเปลี่ยนแปลงทางดิจิทัล
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className=" text-[24px] text-center text-black font-normal"
      >
        `เราช่วยพัฒนาธุรกิจและองค์กร ด้วยเทคโนโลยี`
        <br />
        สร้างระบบการจัดการที่มีประสิทธิภาพตอบสนอง
        ต่อความต้องการของลูกค้าทุกรูปแบบ
        <br /> พร้อมทั้งออกแบบเครื่องมือแก้ปัญหาทางการตลาด
        ด้วยการสร้างสรรค์คอนเทนต์
        <br />
        บนช่องทางที่หลากหลาย ตอบทุกโจทย์กลุ่มเป้าหมาย
        ขับเคลื่อนให้ธุรกิจและองค์กรของคุณ <br />
        เติบโตบนโลกดิจิทัลได้อย่างไร้ขีดจำกัด
      </motion.p>
      <Image
        src="/Untitled-1.png"
        alt="Crafting Lab Header"
        width={1440}
        height={128}
        className="w-full h-auto object-cover mt-30 "
      />
    </div>
  );
}

export default Header;
