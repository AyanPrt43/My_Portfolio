import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AISection from '@/components/AISection';
import ProjectGallery from '@/components/ProjectGallery';
import About from '@/components/About';
import Notes from '@/components/Notes';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="container">
      <Navbar />
      <Hero />
      <AISection />
      <ProjectGallery />
      <About />
      <Notes />
      <Contact />
    </main>
  );
}
