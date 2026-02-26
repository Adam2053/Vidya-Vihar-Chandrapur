import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Programs } from "@/components/programs";
import { VisionMission } from "@/components/vision-mission";
import { FacilitiesBento } from "@/components/facilities-bento";
import { CTABanner } from "@/components/cta-banner";
import { PaperPlane } from "@/components/paper-plane";
import { Gallery } from "@/components/gallery";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PaperPlane />
      <Stats />
      <Programs />
      <PaperPlane />
      <VisionMission />
      <Gallery />
      <FacilitiesBento />
      <CTABanner />
    </>
  );
}
