import Hero from "../components/Hero";
import Automation from "../components/Automation";
import Projects from "../components/Projects";
import ContactCTA from "../components/ContactCTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Automation />
      <Projects />
      <ContactCTA />
    </div>
  );
}