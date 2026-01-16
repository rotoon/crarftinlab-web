import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { RacingTrack1, RacingTrack2 } from '@/components/RacingAnimation'
import ServiceTabs from '@/components/ServiceTabs'
// import ScrollTabs from "@/components/ScrollTabs";

export default function Home() {
  return (
    <div className='bg-black min-h-screen selection:bg-[#00FF00] selection:text-black'>
      <main className='relative w-full max-w-[1440px] mx-auto min-h-screen'>
        <Header />
        <Hero />
        <RacingTrack1 />
        <ServiceTabs />
        <RacingTrack2 />

        <Footer />
      </main>
    </div>
  )
}
