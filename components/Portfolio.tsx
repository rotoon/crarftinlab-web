"use client";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="w-full bg-[#0E0E10] py-24 border-t border-white/5"
    >
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="font-pixel text-2xl md:text-3xl text-white">
            SELECTED
            <br />
            PORTFOLIO
          </h2>
          <div className="w-full md:w-1/2 h-1 bg-[#00FF00]" />
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="group relative bg-[#1A1A1E] border border-white/10 aspect-video overflow-hidden cursor-pointer hover:border-[#00FF00] transition-colors"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-6 left-6 z-20">
                <p className="font-pixel text-xs text-[#00FF00] mb-2">
                  PROJECT {item}
                </p>
                <h4 className="font-kanit text-xl text-white">
                  ชื่อผลงานและการทำงานสำหรับลูกค้า
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Area */}
        <div className="mt-32 w-full h-[291px] bg-[#00FF00]/90 flex items-center justify-center overflow-hidden">
          <p className="font-pixel text-4xl md:text-6xl text-white/20 whitespace-nowrap">
            CRAFTING LAB CRAFTING LAB CRAFTING LAB
          </p>
        </div>
      </div>
    </section>
  );
}
