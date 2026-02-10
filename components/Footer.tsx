"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full mt-20 relative bg-black">
      {/* Text overlay on top of image */}
      {/* BACK TO TOP - Center */}

      <div
        className="flex relative justify-center items-center cursor-pointer"
        onClick={scrollToTop}
      >
        <div className="text-[#F30076] text-4xl z-1 font-the-jewish-bitmap">
          BACK TO TOP
        </div>
        <Image
          src="/icons/Asset 2.png"
          alt="Green Pixel Background"
          width={1000}
          height={100}
          className="absolute -bottom-1 opacity-100"
        />
      </div>

      <section
        className="bg-black  flex flex-col justify-start  "
        id="contact"
      ></section>

      <div className="flex items-center justify-between px-20 py-10 bg-[#00FF00]">
        <div className="flex justify-start space-x-4 h-full w-full">
          <Image
            src="/images/image-LOGO.png"
            alt="Green Pixel Background"
            width={100}
            height={100}
          />
          <div className="text-left text-black">
            <p className="text-lg font-semibold ">CRAFTINGLAB Co.,Ltd.</p>
            <address className="not-italic text-sm leading-relaxed  ">
              210 Moo 2, Ton Pao Sub-district, San Kamphaeng District,
              <br />
              Chiang Mai Thailand 50130
            </address>
            <p className="text-sm">Mobile: 08-4169-6906</p>
            <p className="text-sm">Email: craftinglab.co@gmail.com</p>
          </div>
        </div>

        <div className="flex flex-col space-y-4 h-30 w-full justify-end">
          <div className="flex space-x-4 text-black w-full justify-end">
            <Link href={"https://www.instagram.com/craftinglab.cnx/"}>
              <Image
                src="/icons/Asset 2@3x.png"
                alt="Green Pixel Background"
                width={50}
                height={50}
              />
            </Link>
            <Link href={"https://www.facebook.com/CraftingLab.cnx"}>
              <Image
                src="/icons/Asset 3@3x.png"
                alt="Green Pixel Background"
                width={50}
                height={50}
              />
            </Link>
          </div>
          <div className="text-end text-black">
            ©2022 Crafting Lab - All Rights Reseved
          </div>
        </div>
      </div>

      {/* Social media icons */}
    </footer>
  );
}
