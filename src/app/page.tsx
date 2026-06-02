import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Research } from '@/components/sections/Research';
import { Achievements } from '@/components/sections/Achievements';
import { Education } from '@/components/sections/Education';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { AssistantWidget } from '@/components/chatbot/AssistantWidget';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Research />
        <Achievements />
        <Education />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <AssistantWidget />
    </>
  );
}
