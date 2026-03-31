import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import ProjectsPreview from "../components/home/ProjectsPreview";
import Stats from "../components/home/HowWeWork";
import HowWeWork from "../components/home/Stats";

import StoriesPreview from "../components/home/StoriesPreview";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";

import CTA from "../components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />              {/* First impression */}
      
      <AboutSection />      {/* Who you are */}

      <Stats />             {/* Impact numbers (trust boost) */}

      <HowWeWork />         {/* Process / how NGO works */}

      <ProjectsPreview />   {/* What you actually do */}

      <StoriesPreview />    {/* Emotional storytelling */}

      <Testimonials />      {/* Social proof */}

      <FAQ />               {/* Clear doubts */}

      <CTA />               {/* Final conversion */}
    </>
  );
}