import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Projects } from '@/components/Projects';
import { GitHubStats } from '@/components/GitHubStats';
import { LeetCode } from '@/components/LeetCode';
import { Certificates } from '@/components/Certificates';
import { Achievements } from '@/components/Achievements';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30 text-foreground overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <GitHubStats />
      <LeetCode />
      <Certificates />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
