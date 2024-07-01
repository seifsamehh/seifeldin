import AboutMe from "./AboutMe";
import AboutTitle from "./AboutTitle";
import Certifications from "./Certifications";
import Companies from "./Companies";
import Skills from "./Skills";

export default function AboutContent() {
  return (
    <section className="about-content">
      <AboutTitle />
      <div className="container mx-auto bg-foreground text-background p-4 md:p-16 rounded-2xl">
        <AboutMe />
        <Companies />
        <Certifications />
        <Skills />
      </div>
    </section>
  );
}
