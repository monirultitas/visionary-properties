import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Design } from "@/components/Design";
import { FloorPlan } from "@/components/FloorPlan";
import { Location } from "@/components/Location";
import { WhyInvest } from "@/components/WhyInvest";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Design />
        <FloorPlan />
        <Location />
        <WhyInvest />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
