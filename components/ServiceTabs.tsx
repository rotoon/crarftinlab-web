'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

interface TabItem {
  title: string
  color: string
  indent: number // Percentage
  content: string
  images: string[]
}

const items: TabItem[] = [
  {
    title: 'CONSULTING & PLANING',
    color: '#00FF00',
    indent: 5,
    content:
      'Strategic planning and expert consultation to guide your digital journey. We analyze your market position and chart the most effective course for growth.',
    images: [
      'https://picsum.photos/id/1/400/300',
      'https://picsum.photos/id/2/400/300',
      'https://picsum.photos/id/3/400/300',
      'https://picsum.photos/id/4/400/300',
    ],
  },
  {
    title: 'BRANDING & DESIGN',
    color: '#00FF00',
    indent: 20,
    content:
      "Visual identity creation that speaks your brand's language. From logo design to full brand guidelines, we ensure your image is memorable and consistent.",
    images: [
      'https://picsum.photos/id/10/400/300',
      'https://picsum.photos/id/11/400/300',
      'https://picsum.photos/id/12/400/300',
      'https://picsum.photos/id/13/400/300',
    ],
  },
  {
    title: 'VIDEO + PHOTO PRODUCTION',
    color: '#00FF00',
    indent: 35,
    content:
      'High-end production services for impactful visual storytelling. Our team handles everything from pre-production planning to post-processing editing.',
    images: [
      'https://picsum.photos/id/20/400/300',
      'https://picsum.photos/id/21/400/300',
      'https://picsum.photos/id/22/400/300',
      'https://picsum.photos/id/23/400/300',
    ],
  },
  {
    title: 'SOCIAL MEDIA MANAGEMENT',
    color: '#00FF00',
    indent: 50,
    content:
      'Comprehensive social media strategies to engage your audience. We manage content creation, community interaction, and performance analytics.',
    images: [
      'https://picsum.photos/id/30/400/300',
      'https://picsum.photos/id/31/400/300',
      'https://picsum.photos/id/32/400/300',
      'https://picsum.photos/id/33/400/300',
    ],
  },
  {
    title: 'FINAL REPORT',
    color: '#00FF00',
    indent: 25,
    content:
      'Detailed performance analysis and actionable insights. We provide transparent reporting on all campaigns to track ROI and optimize future strategies.',
    images: [
      'https://picsum.photos/id/40/400/300',
      'https://picsum.photos/id/41/400/300',
      'https://picsum.photos/id/42/400/300',
      'https://picsum.photos/id/43/400/300',
    ],
  },
  {
    title: 'ADVERTISING & REPORT',
    color: '#00FF00',
    indent: 30,
    content:
      'Data-driven advertising campaigns across multiple platforms. We maximize your ad spend efficiency through continuous monitoring and optimization.',
    images: [
      'https://picsum.photos/id/50/400/300',
      'https://picsum.photos/id/51/400/300',
      'https://picsum.photos/id/52/400/300',
      'https://picsum.photos/id/53/400/300',
    ],
  },
]

export default function ServiceTabs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  return (
    <section
      className='bg-black min-h-screen flex flex-col justify-start py-10'
      id='portfolio'
    >
      <div className='bg-white overflow-hidden'>
        <Image
          src='/image-1768542627143.png'
          alt='Crafting Lab Header'
          width={1920}
          height={600}
          className='w-full h-73 object-cover -mt-4'
        />
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-[#FF00AA] text-[56px] ml-[100] font-medium py-10'
        >
          PORTFOLIO
        </motion.div>
        <Image
          src='/Untitled.png'
          alt='Crafting Lab Header'
          width={1920}
          height={100}
          className='w-full h-20 object-cover'
        />
      </div>
      {/* Relative container สำหรับ sticky */}
      <div className='relative min-h-screen max-w-[1440px] mx-auto w-full px-4 flex flex-col font-mono gap-0'>
        {items.map((item, index) => (
          <div
            key={index}
            className='flex flex-col'
          >
            {/* Sticky Header - ติดด้านบนเมื่อ scroll */}
            <div
              className={`sticky top-11 z-50 bg-black pt-4 pb-2 md:mt-10 mt-5`}
            >
              <PixelTabRow
                item={item}
                index={index}
                isActive={true}
                onClick={() =>
                  setActiveIndex(index === activeIndex ? null : index)
                }
              />
            </div>

            {/* Content */}
            <AnimatePresence>
              {true && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className='overflow-hidden'
                >
                  <div className='py-8 text-white/80 w-full ml-auto mr-auto px-12 border-l-2 border-r-2 border-white/10 my-2'>
                    <p className='text-xl leading-relaxed mb-8'>
                      {item.content}
                    </p>
                    <div className='grid grid-cols-2 gap-4'>
                      {item.images.map((img, i) => (
                        <motion.div
                          key={i}
                          initial={{
                            opacity: 0,
                            scale: 0.9,
                            filter: 'blur(10px)',
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            filter: 'blur(0px)',
                          }}
                          transition={{
                            duration: 0.5,
                            delay: i * 0.1,
                            ease: 'circOut',
                          }}
                          className='relative aspect-video bg-gray-800 overflow-hidden border-2 border-white/20 hover:border-white/50 transition-colors cursor-pointer group'
                        >
                          <img
                            src={img}
                            alt={`Work ${i + 1}`}
                            className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300'
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}

function PixelTabRow({
  item,
  index,
  isActive,
  onClick,
}: {
  item: TabItem
  index: number
  isActive: boolean
  onClick: () => void
}) {
  const pixelSize = 3 // Size of each "pixel" step. MUST divide slopeHeight evenly!
  const slopeHeight = 50
  const slopeWidth = 50 // Must be divisible by pixelSize for clean steps
  const steps = slopeHeight / pixelSize
  const stepWidth = slopeWidth / steps

  // Generate box-shadow string for the slope down (Right side)
  // Draws a stepped line from top-left to bottom-right
  const generateSlopeDownShadow = (color: string) => {
    let shadows = []
    for (let i = 0; i < steps; i++) {
      const x = i * stepWidth - pixelSize // Start 0
      const y = i * pixelSize // Move down
      shadows.push(`${x}px ${y}px 0 ${color}`)
    }
    return shadows.join(', ')
  }

  return (
    <motion.div
      className='relative w-full flex items-end group'
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ x: 10 }}
    >
      {/* 1. Left Horizontal Line */}
      <div
        className='mt-auto relative w-[5%] md:w-[var(--tab-indent)]'
        style={{
          // @ts-ignore
          '--tab-indent': `${item.indent}%`,
          height: pixelSize,
          backgroundColor: item.color,
        }}
      />

      {/* 2. Vertical Line (Formerly Slope Up) */}
      <div
        className='flex items-end cursor-pointer'
        onClick={onClick}
      >
        <div
          className='relative cursor-pointer'
          style={{ width: pixelSize, height: slopeHeight }}
        >
          <div
            className='absolute left-0'
            style={{
              width: pixelSize,
              top: pixelSize, // Round Top Corner (Step down)
              bottom: pixelSize, // Round Bottom Corner (Step up)
              backgroundColor: item.color,
            }}
          />
        </div>

        {/* 3. Tab Top Body */}
        <div
          className={`relative h-[${slopeHeight}px]  flex items-center justify-center z-10 cursor-pointer`}
          style={{
            borderTop: `${pixelSize}px solid ${item.color}`,
            transition: 'background-color 0.2s',
          }}
        >
          <span
            className={`font-bold text-lg tracking-wider whitespace-nowrap mx-2 my-2.5 px-2 hover:text-[#FF00AA] ${
              isActive ? 'text-[#FF00AA]' : 'text-white bg-black'
            }`}
          >
            {item.title}
          </span>
        </div>

        {/* 4. Slope Down */}
        <div
          className='relative cursor-pointer'
          style={{ width: slopeWidth, height: slopeHeight }}
        >
          {/* Start from top (0) to bottom (height) */}
          <div
            className='absolute top-0 left-0'
            style={{
              width: stepWidth,
              height: pixelSize,
              backgroundColor: 'transparent',
              boxShadow: generateSlopeDownShadow(item.color),
            }}
          />
        </div>
      </div>

      {/* 5. Right Horizontal Line */}
      <div
        className='flex-1 mt-auto'
        style={{
          height: pixelSize,
          backgroundColor: item.color,
          marginLeft: -pixelSize, // Pull left to ensure overlap/connection
        }}
      />
    </motion.div>
  )
}
