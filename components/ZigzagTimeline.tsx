'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  CalendarCheck,
  Palette,
  Camera,
  MessageCircle,
  Monitor,
  TrendingUp,
} from 'lucide-react'

interface TimelineItem {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string; color?: string }>
}

const timelineItems: TimelineItem[] = [
  {
    title: 'CONSULTING & PLANNING',
    description:
      'Strategic planning and expert consultation to guide your digital journey.',
    icon: CalendarCheck,
  },
  {
    title: 'BRANDING & DESIGN',
    description: "Visual identity creation that speaks your brand's language.",
    icon: Palette,
  },
  {
    title: 'VIDEO + PHOTO PRODUCTION',
    description:
      'High-end production services for impactful visual storytelling.',
    icon: Camera,
  },
  {
    title: 'SOCIAL MEDIA MANAGEMENT',
    description:
      'Comprehensive social media strategies to engage your audience.',
    icon: MessageCircle,
  },
  {
    title: 'ADVERTISING & REPORT',
    description: 'Data-driven advertising campaigns across multiple platforms.',
    icon: Monitor,
  },
  {
    title: 'FINAL REPORT',
    description: 'Detailed performance analysis and actionable insights.',
    icon: TrendingUp,
  },
]

export default function ZigzagTimeline() {
  return (
    <section className='bg-black min-h-screen py-20 font-mono'>
      <div className='max-w-[1200px] mx-auto px-4'>
        <div className='relative'>
          {timelineItems.map((item, index) => {
            const isLeft = index % 2 === 1 // Start from right (index 0 = right)
            const Icon = item.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className='relative flex items-center mb-20'
              >
                {/* Left side - content when isLeft */}
                <div className={`w-1/2 ${isLeft ? 'pr-8' : ''}`}>
                  {isLeft && (
                    <div className='flex items-center justify-end gap-4'>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className='w-14 h-14 bg-black border-[3px] border-[#00FF00] flex items-center justify-center cursor-pointer flex-shrink-0'
                      >
                        <Icon className='w-7 h-7 text-[#00FF00]' />
                      </motion.div>
                      {/* Content */}
                      <div className='text-left w-[280px]'>
                        <Image
                          src='/timeline-header.png'
                          alt={item.title}
                          width={250}
                          height={60}
                          className='w-24 h-24 object-contain mb-2'
                        />
                        <h3 className='text-white text-lg font-bold tracking-wider'>
                          {item.title}
                        </h3>
                        <p className='text-white/60 text-sm mt-1 max-w-[250px]'>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right side - content when !isLeft */}
                <div className={`w-1/2 ${!isLeft ? 'pl-8' : ''}`}>
                  {!isLeft && (
                    <div className='flex items-center justify-end gap-4'>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className='w-14 h-14 bg-black border-[3px] border-[#00FF00] flex items-center justify-center cursor-pointer flex-shrink-0'
                      >
                        <Icon className='w-7 h-7 text-[#00FF00]' />
                      </motion.div>
                      {/* Content */}
                      <div className='text-left w-[280px]'>
                        <Image
                          src='/timeline-header.png'
                          alt={item.title}
                          width={250}
                          height={60}
                          className='w-24 h-24 object-contain mb-2'
                        />
                        <h3 className='text-white text-lg font-bold tracking-wider'>
                          {item.title}
                        </h3>
                        <p className='text-white/60 text-sm mt-1 max-w-[250px]'>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
