"use client";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen pt-32 pb-24 px-6 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-full opacity-10 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[30%] aspect-square bg-white rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[40%] aspect-square bg-[#00FF00] rounded-full blur-[150px] opacity-20" />
      </div>

      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center gap-12">
        <h1 className="font-kanit text-4xl md:text-6xl lg:text-[72px] leading-tight text-white font-medium">
          อัปเกรดธุรกิจของคุณด้วย
          <br />
          <span className="text-[#00FF00]">การเปลี่ยนแปลงทางดิจิทัล</span>
        </h1>

        <p className="font-kanit text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">
          "เราช่วยพัฒนาธุรกิจและองค์กร ด้วยเทคโนโลยี"
          สร้างระบบการจัดการที่มีประสิทธิภาพตอบสนอง
          ต่อความต้องการของลูกค้าทุกรูปแบบ
          พร้อมทั้งออกแบบเครื่องมือแก้ปัญหาทางการตลาด ด้วยการสร้างสรรค์คอนเทนต์
          บนช่องทางที่หลากหลาย ตอบทุกโจทย์กลุ่มเป้าหมาย
          ขับเคลื่อนให้ธุรกิจและองค์กรของคุณ
          เติบโตบนโลกดิจิทัลได้อย่างไร้ขีดจำกัด
        </p>

        <div className="flex gap-4 mt-8">
          <button className="bg-[#00FF00] text-black px-8 py-4 font-pixel text-sm hover:translate-y-[-4px] transition-transform">
            EXPLORE MORE
          </button>
          <button className="border border-white/20 text-white px-8 py-4 font-pixel text-sm hover:bg-white/5 transition-colors">
            CONTACT US
          </button>
        </div>
      </div>

      {/* Grid Pattern Bottom Decor */}
      <div className="absolute bottom-0 left-0 w-full h-[128px] bg-gradient-to-t from-[#00FF00]/10 to-transparent border-t border-[#00FF00]/20" />
    </section>
  );
}
