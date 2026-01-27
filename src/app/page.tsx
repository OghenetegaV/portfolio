import Hero from "../components/Hero";
import Automation from "../components/Automation";
import Projects from "../components/Projects";
import ContactCTA from "../components/ContactCTA";

export default function Home() {
  return (
    // h-screen and overflow-y-auto are required for CSS snapping to work on the body
    <main className="h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth">
      <section className="snap-start h-screen w-full">
        <Hero />
      </section>
      
      <section className="snap-start min-h-screen w-full flex items-center justify-center bg-[#050508]">
        <Automation />
      </section>
      
      <section id="selected-works" className="snap-start min-h-screen w-full flex items-center justify-center">
        <Projects />
      </section>
      
      <section className="snap-start h-screen w-full flex items-center justify-center">
        <ContactCTA />
      </section>
    </main>
  );
}