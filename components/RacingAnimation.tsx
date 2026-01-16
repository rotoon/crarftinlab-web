'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function RacingTrack1() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const offsetDistance = useTransform(scrollYProgress, [0, 1], ['0%', '150%'])
  const animationPath = "path('M 360 130 C 360 400 400 450 0 650')" // Top Center to Bottom Left

  return (
    <div
      ref={containerRef}
      className='relative h-[300vh]'
    >
      <div className='sticky top-[100px] h-screen overflow-hidden relative'>
        {/* Racing Track Background Image */}
        <div className='relative w-full max-w-4xl aspect-square'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={'/images/road-lane-1.png'}
            alt='Racing Track'
            className='w-full h-full object-cover'
            style={{ imageRendering: 'pixelated' }}
          />

          {/* Animated Racing Car */}
          <motion.div
            className='absolute top-10 left-20 w-32 h-32'
            style={{
              offsetDistance,
              // 🛠️ จุดแก้ไขตำแหน่ง Animation (SVG Path) 🛠️
              // "M x y" = จุดเริ่มต้น (Move to)
              // "C cp1x cp1y, cp2x cp2y, endX endY" = เส้นโค้ง Cubic Bezier (Control Points -> จุดปลาย)
              // ลองปรับตัวเลขในนี้เพื่อขยับเส้นทางรถ:
              offsetPath: animationPath,
              // ปรับมุมหันของรถ (ถ้าหัวรถไม่ไปตามทาง ให้แก้ 90deg เป็นมุมอื่น เช่น 0deg, 180deg)
              offsetRotate: 'auto 90deg',
            }}
          >
            <img
              src='/images/f1-car.png'
              alt='Racing Car'
              className='w-full h-full scale-800 object-contain'
              style={{ imageRendering: 'pixelated' }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export function RacingTrack2() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const offsetDistance = useTransform(scrollYProgress, [0, 1], ['0%', '150%'])
  const animationPath = "path('M 500 800 C 500 700 450 400 850 380')"

  return (
    <div
      ref={containerRef}
      className='relative h-[300vh] justify-end flex'
    >
      <div className='sticky top-[20px] h-screen overflow-hidden relative'>
        {/* Racing Track Background Image - ใช้ road-lane-2.png */}
        <div className='relative w-full max-w-4xl aspect-square'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={'/images/road-lane-2.png'}
            alt='Racing Track'
            className='w-full h-full object-contain'
            style={{ imageRendering: 'pixelated' }}
          />

          {/* Animated Racing Car - วิ่งจากล่างขึ้นบน */}
          <motion.div
            className='absolute top-0 left-0 w-24 h-24'
            style={{
              offsetDistance,
              // 🛠️ เส้นทาง Animation ที่ตามเลนจากล่างขึ้นบน 🛠️
              offsetPath: animationPath,
              // -90deg เพื่อให้หัวรถหันไปทางที่วิ่ง (จากล่างขึ้นบน)
              offsetRotate: 'auto 90deg',
            }}
          >
            <img
              src='/images/f1-car.png'
              alt='Racing Car'
              className='w-full h-full scale-800 object-contain'
              style={{ imageRendering: 'pixelated' }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
