import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import CareSection from "./components/CareSection";
import InfoSection from "./components/InfoSection";
import ExperienceSection from "./components/ExperienceSection";
import CustomerReviews from "./components/CustomerReviews";
import QuoteSection from "./components/QuoteSection";
import Text from "@/app/components/Text";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-bg">
      <Header />
      <HeroSection />
      <CareSection />
      <ExperienceSection />
      <InfoSection />
      <CustomerReviews />
      <QuoteSection />
      <Text />
      <Footer />
    </main>
  );
}
