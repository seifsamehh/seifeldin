import AboutContent from "@/components/AboutContent";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="landing-page">
      <Hero />
      <AboutContent />
      <Projects />
      <Contact />
    </main>
  );
}
