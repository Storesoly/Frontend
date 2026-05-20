import Image from "next/image";
import HeroSection from "./_components/ui/HeroUI";
import TrustedBy from "./_components/ui/TrustedUi";
import PricingSection from "./_components/ui/PricingUI";
import FaqUI from "./_components/ui/FaqUI";
import FooterUI from "./_components/ui/FooterUi";
import Navbar from "./_components/nav-bar";
import FeaturesSection from "./_components/ui/FeaturesUI";
import HowItWorksSection from "./_components/ui/HowitWOrksUI";
import WhyStoreSollySection from "./_components/ui/WhyUI";
import ProductUI from "./_components/ui/ProductUI";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full bg-[#EDE8DF]">
      <Navbar />
      <HeroSection />

      <FeaturesSection />



      <WhyStoreSollySection />

      <FooterUI />
    </div>
  );
}
