"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TimelineItem {
  title: string;
  description: string;
  icon: string;
}

const timelineItems: TimelineItem[] = [
  {
    title: "CONSULTING & PLANNING",
    description:
      "ประชุมและให้คำปรึกษาทางด้านธุรกิจเกี่ยว กับความต้องการของลูกค้า และร่วมวางแผนเพื่อดำเนินงานตามระยะเวลาที่กำหนดไว้",
    icon: "/icons/consult.png",
  },
  {
    title: "CREATIVE CONTENT",
    description:
      "สร้างเอกลักษณ์ของแบรนด์ให้เป็นที่จดจำในตลาด ด้วยดีไซน์ที่บ่งบอกตัวตนของธุรกิจ เราดูแลให้ได้ตั้งแต่การออกแบบไปจนถึงการ Build หน้าร้านจริง",
    icon: "/icons/creative.png",
  },
  {
    title: "VIDEO + PHOTO PRODUCTION",
    description:
      "ค้นหาและออกแบบ Product ตามหลักการ UX (User Experaince) และสร้าง UI (User Interface) ให้เหมาะ กับผู้ใช้งานในแต่ละกลุ่มธุรกิจ",
    icon: "/icons/video.png",
  },
  {
    title: "SOCIAL MEDIA MANAGEMENT",
    description:
      "สร้างสรรค์งานดีไซน์สุดครีเอทีฟ ด้วยสื่อ ที่เหมาะสมกับธุรกิจ ทั้งในรูปแบบ Online และ Offline",
    icon: "/icons/social.png",
  },
  {
    title: "GRAPHIC & DESIGN",
    description:
      "สร้างเอกลักษณ์ของแบรนด์ให้เป็นที่จดจำในตลาด ด้วยดีไซน์ที่บ่งบอกตัวตนของธุรกิจ เราดูแลให้ได้ตั้งแต่การออกแบบไปจนถึงการ Build หน้าร้านจริง",
    icon: "/icons/graphic.png",
  },
  {
    title: "ADVERTISING & REPORT",
    description:
      "สรุปและรายงานผลการดำเนินงานประจำเดือน เพื่อวิเคราะห์และวางแผนการทำงานในขั้นตอนต่อไป",
    icon: "/icons/report.png",
  },
];

export default function ZigzagTimeline() {
  return (
    <section
      className="bg-black min-h-screen py-20 font-mono -mt-100 -mb-100"
      id="about"
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="relative">
          {timelineItems.map((item, index) => {
            const isLeft = index % 2 === 1; // Start from right (index 0 = right)

            return (
              <div key={index} className="relative flex items-center mb-20">
                {/* Left side - content when isLeft */}
                <div className={`w-1/2 ${isLeft ? "pr-8" : "pl-8"}`}>
                  {isLeft && (
                    <div className="flex items-center justify-end gap-4">
                      {/* Content */}
                      <div className="text-left w-[450px]">
                        <div className="flex items-center justify-center">
                          <Image
                            src="/timeline-header.png"
                            alt={item.title}
                            width={250}
                            height={60}
                            className="w-30 h-30 object-contain mb-2"
                          />
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-20 h-20 bg-black flex items-center justify-center cursor-pointer flex-shrink-0"
                          >
                            <Image
                              src={item.icon}
                              alt={item.title}
                              width={250}
                              height={250}
                              className="w-20 h-20 object-contain mb-2"
                            />
                          </motion.div>
                          <div>
                            <h3 className="text-white text-lg font-bold tracking-wider">
                              {item.title}
                            </h3>
                            <motion.p
                              initial={{ opacity: 0, y: -50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1, duration: 0.5 }}
                              className="text-white text-sm mt-1"
                            >
                              {item.description}
                            </motion.p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right side - content when !isLeft */}
                <div className={`w-1/2 ${!isLeft ? "pl-8" : ""}`}>
                  {!isLeft && (
                    <div className="flex items-center justify-end gap-4">
                      {/* Content */}
                      <div className="text-left w-[450px]">
                        <div className="flex items-center justify-center">
                          <Image
                            src="/timeline-header.png"
                            alt={item.title}
                            width={250}
                            height={60}
                            className="w-30 h-30 object-contain mb-2"
                          />
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-20 h-20 bg-black flex items-center justify-center cursor-pointer flex-shrink-0"
                          >
                            <Image
                              src={item.icon}
                              alt={item.title}
                              width={250}
                              height={250}
                              className="w-20 h-20 object-contain mb-2"
                            />
                          </motion.div>
                          <div>
                            <h3 className="text-white text-lg font-bold tracking-wider">
                              {item.title}
                            </h3>
                            <motion.p
                              initial={{ opacity: 0, y: -50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1, duration: 0.5 }}
                              className="text-white text-sm mt-1"
                            >
                              {item.description}
                            </motion.p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
