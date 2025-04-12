import PassionateTeam from "@/components/About";
import KidsFooter from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import KidsProductGrid from "@/components/ProductCards";
import ProductCategories from "@/components/ProductPage";
import TrendingCollections from "@/components/TrendingCollections";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="bg-[#f9f3e6]">
      <Header/>
      <Hero/>
      <PassionateTeam/>
      <TrendingCollections/>
      {/* <ProductCategories/> */}
      <KidsProductGrid/>
      <KidsFooter/>
      <WhatsAppButton />

    </div>
  );
}
