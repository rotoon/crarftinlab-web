"use client";

export default function Services() {
  return (
    <section id="services" className="w-full bg-[#0E0E10] py-24 relative">
      {/* Pixel Art Bar - Now uses relative positioning for flow */}
      <div className="w-full h-32 bg-[#00FF00]/80 flex items-center px-12 overflow-hidden mb-12">
        {/* Any text or scrolling effect here */}
      </div>

      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: F1 Visual */}
        <div className="bg-white/5 border border-white/10 aspect-video md:aspect-square flex items-center justify-center font-pixel text-[#00FF00]">
          F1 CAR VISUAL
        </div>

        {/* Right: Content */}
        <div className="flex flex-col gap-6">
          <h3 className="font-pixel text-xl text-[#00FF00] tracking-widest uppercase">
            CONSULTING & PLANING
          </h3>
          <p className="font-kanit text-lg text-white/80 leading-relaxed">
            ประชุมและให้คำปรึกษาทางด้านเทคโนโลยี การจัดการระบบ
            และการวางแผนดิจิทัล เพื่อตอบโจทย์ธุรกิจของคุณให้เติบโตอย่างมั่นคง
          </p>

          {/* Add more service items as needed */}
        </div>
      </div>
    </section>
  );
}
