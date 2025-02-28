import Header from "@/components/Header";
import NewsSection from "@/components/NewsSection";
import MissionSection from "@/components/MissionSection";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <NewsSection />
      <MissionSection />
      <ProductSection />
      <Link
        href="https://kobe-uni-hub.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="bg-gray-200 text-center py-3 text-xl">SHINDAI HUB</div>
      </Link>
      <Footer />
    </main>
  );
}
