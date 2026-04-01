import Hero from "../components/home/Hero";
import QuickImpactStrip from "../components/home/QuickImpactStrip";
import AboutSection from "../components/home/AboutSection";
import HowWeWork from "../components/home/HowWeWork";
import ImpactStory from "../components/home/ImpactStory";
import HomeDonate from "../components/home/HomeDonate";
import Founders from "../components/home/Founders";
import TrustCredibility from "../components/home/TrustCredibility";
import CTA from "../components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickImpactStrip />
      <AboutSection />
      <HowWeWork />
      <ImpactStory />
      <HomeDonate />
      <Founders />
      <TrustCredibility />
      <CTA />
    </>
  );
}
