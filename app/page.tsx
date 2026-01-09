import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RacingAnimation from "@/components/RacingAnimation";
import ServiceTabs from "@/components/ServiceTabs";
// import ScrollTabs from "@/components/ScrollTabs";

export default function Home() {
  return (
    <div className="bg-black min-h-screen selection:bg-[#00FF00] selection:text-black">
      <main className="relative w-full max-w-[1440px] mx-auto min-h-screen">
        <Header />
        <Hero />
        <RacingAnimation directtion="down" />
        <ServiceTabs />
        <RacingAnimation directtion="up" />

        <Footer />
      </main>
    </div>
  );
}
