import { Hero } from "@/components/Hero";
import { StorySection } from "@/components/StorySection";
import { RegionsStrip } from "@/components/RegionsStrip";
import { VarietiesShowcase } from "@/components/VarietiesShowcase";
import { ArticlesGrid } from "@/components/ArticlesGrid";
import { WhySection } from "@/components/WhySection";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StorySection />
      <RegionsStrip />
      <VarietiesShowcase />
      <ArticlesGrid />
      <WhySection />
      <ContactSection />
    </>
  );
}
