import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Stack from "@/components/portfolio/Stack";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Contact from "@/components/portfolio/Contact";
import ParticlesBackground from "@/components/portfolio/ParticlesBackground";
import ScrollProgress from "@/components/portfolio/ScrollProgress";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <ParticlesBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
};

export default Index;
