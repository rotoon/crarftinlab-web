"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Header() {
  return (
    <div className="bg-white">
      <div>
        {/* ไม่ต้อง import แต่ระบุ path โดยเริ่มจาก / (root) ได้เลย */}
        <video autoPlay muted className="w-full h-auto object-cover ">
          <source src="/videos/Comp 3.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        className="h-[800px]"
        style={{
          backgroundImage: 'url("/images/background.png")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <Image
          src="/images/background.png"
          alt="Crafting Lab Header"
          width={1920}
          height={128}
          className="w-full h-auto absolute top-0 left-0 z-0"
        /> */}

        <motion.h1
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[56px] text-center mb-8 pt-20 text-white font-medium"
        >
          อัปเกรดธุรกิจของคุณด้วย
          <br />
          การเปลี่ยนแปลงทางดิจิทัล
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className=" text-[24px] text-center text-white font-normal"
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
      </div>
      <div className="relative">
        <Image
          src="/images/รถ55.png"
          alt="Crafting Lab Header"
          width={1920}
          height={128}
          className="w-full h-auto object-cover  -mt-80 z-10 "
        />
      </div>
    </div>
  );
}

export default Header;
