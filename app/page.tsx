import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollTabs from "@/components/ScrollTabs";

export default function Home() {
  return (
    <div className="bg-black min-h-screen selection:bg-[#00FF00] selection:text-black">
      <main className="relative w-full max-w-[1440px] mx-auto min-h-screen">
        <Header />
        {/* <Hero /> */}
        {/* <ScrollImageCompare /> */}
        {/* <Services /> */}
        <ScrollTabs />
        {/* <Portfolio /> */}
        <Footer />
      </main>
    </div>
  );
}
