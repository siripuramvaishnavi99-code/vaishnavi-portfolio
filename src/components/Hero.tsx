import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail, Phone, Download } from 'lucide-react';
import { useTypingEffect } from '@/hooks/useTypingEffect';

export function Hero() {
  const roles = [
    "AI/ML Engineer",
    "Data Analytics Enthusiast",
    "Python Developer",
    "Java Developer",
    "Open Source Contributor"
  ];
  
  const typedText = useTypingEffect(roles, 100, 2000);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="bg-blob-1" />
      <div className="bg-blob-2" />
      
      <div className="max-w-5xl w-full mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12 z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-sm md:text-base tracking-widest uppercase text-muted-foreground mb-4">
            Welcome to my portfolio
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 leading-tight">
            Hi, I'm <span className="text-primary">Vaishnavi</span>
          </h1>
          <div className="h-[40px] md:h-[50px] mb-6">
            <h3 className="text-xl md:text-3xl font-medium text-foreground/80">
              {typedText}
              <span className="animate-pulse text-primary">|</span>
            </h3>
          </div>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Computer Science Engineering undergraduate with a passion for building 
            Machine Learning models, Data Analytics, and robust software applications.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start mb-10">
            <a 
              href="mailto:siripuramvaishnavi99@gmail.com" 
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all shadow-warm hover:-translate-y-1"
            >
              Hire Me
            </a>
            <a 
              href="#projects" 
              className="px-8 py-3 glass-card golden-border rounded-full font-medium transition-all hover:-translate-y-1"
            >
              View Projects
            </a>
            <a 
              href="/resume.pdf" 
              className="px-8 py-3 flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Download size={18} />
              <span>Resume</span>
            </a>
          </div>

          <div className="flex items-center gap-6 justify-center md:justify-start">
            <SocialLink href="https://github.com/siripuramvaishnavi99-code" icon={<FaGithub size={22} />} />
            <SocialLink href="https://www.linkedin.com/in/siripuram-vaishnavi-123009413" icon={<FaLinkedin size={22} />} />
            <SocialLink href="mailto:siripuramvaishnavi99@gmail.com" icon={<Mail size={22} />} />
            <SocialLink href="tel:+917989697479" icon={<Phone size={22} />} />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
            {/* Decorative rings */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-primary/40 animate-[spin_15s_linear_infinite_reverse]" />
            
            <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-background shadow-warm z-10">
              <img 
                src="/profile.jpg" 
                alt="Siripuram Vaishnavi" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://ui-avatars.com/api/?name=Siripuram+Vaishnavi&background=C8963E&color=fff&size=500";
                }}
              />
            </div>
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute top-12 -left-6 z-20 glass-card px-4 py-2 rounded-full text-sm font-medium golden-border"
            >
              ✨ CGPA 8.0
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 -right-4 z-20 glass-card px-4 py-2 rounded-full text-sm font-medium golden-border flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Open to Work
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-muted-foreground">
        <span className="text-xs mb-2 tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-foreground/70 hover:text-primary hover:-translate-y-1 transition-all"
    >
      {icon}
    </a>
  );
}
