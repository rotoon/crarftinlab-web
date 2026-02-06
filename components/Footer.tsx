"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full mt-20  relative h-[254px] ">
      <Image
        src="/image-1769745498734.png"
        alt="Green Pixel Background"
        width={1920}
        height={254}
        className="object-cover w-full h-full p-0"
      />

      {/* Text overlay on top of image */}

      <div className="absolute inset-0 flex items-center justify-normal ">
        <Image
          src="/images/image-LOGO.png"
          alt="Green Pixel Background"
          width={1920}
          height={254}
          className="object-cover w-50 h-full scale-50 justify-start"
        />
        <div className="text-left text-white ">
          <p className="text-lg font-semibold ">CRAFTINGLAB Co.,Ltd.</p>
          <address className="not-italic text-sm leading-relaxed  ">
            210 Moo 2, Ton Pao Sub-district,
            <br />
            San Kamphaeng District, Chiang Mai 50130
            <br />
            Thailand
          </address>
          <p className="text-sm">Mobile: 08-4169-6906</p>
          <p className="text-sm">Email: craftinglab.co@gmail.com</p>
          <div className="text-start mt-4">
            ©2022 Crafting Lab - All Rights Reseved
          </div>
        </div>
        <div className="text-center text-white absolute bottom-4 w-full">
          ©2022 Crafting Lab - All Rights Reseved
        </div>
      </div>
    </footer>
  );
}
