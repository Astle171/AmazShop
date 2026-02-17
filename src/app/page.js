import Starfield from "@/components/Starfield";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";
import SectionDotNav from "@/components/SectionDotNav";

export default function Home() {
  return (
    <div className="min-h-screen text-[var(--text-primary)] font-sans relative transition-colors duration-300">
      <Starfield />
      <CustomCursor />
      <Navbar />
      <SocialSidebar />
      <SectionDotNav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
