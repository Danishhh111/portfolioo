import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Suspense, lazy } from "react";
const BackgroundScene = lazy(() => import("@/components/BackgroundScene"));
const AmbientLightFX = lazy(() => import("@/components/AmbientLightFX"));
const ParallaxLayers = lazy(() => import("@/components/ParallaxLayers"));

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Suspense fallback={null}>
        <BackgroundScene />
        <ParallaxLayers />
        <AmbientLightFX />
      </Suspense>
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.22),transparent_55%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.18),transparent_60%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.12] mix-blend-screen bg-[linear-gradient(120deg,#3b82f620,#10b98120)]" />
      <div className="grid-overlay fixed inset-0 -z-10" />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
