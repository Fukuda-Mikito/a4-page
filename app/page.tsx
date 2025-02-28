import Header from "@/components/Header";
import NewsSection from "@/components/NewsSection";
import MissionSection from "@/components/MissionSection";
import DepartmentSection from "@/components/DepartmentSection";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <NewsSection />
      <MissionSection />
      <DepartmentSection />
      <ProductSection />
      <Footer />
    </main>
  );
}
