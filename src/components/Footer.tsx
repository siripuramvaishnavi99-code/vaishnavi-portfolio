import { ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-border bg-background pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-serif font-bold text-primary mb-2">Vaishnavi.</h2>
            <p className="text-muted-foreground text-sm max-w-xs">
              Computer Science Engineering undergraduate crafting intelligent solutions with data and code.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <SocialLink href="https://github.com/siripuramvaishnavi99-code" icon={<FaGithub size={20} />} />
            <SocialLink href="https://www.linkedin.com/in/siripuram-vaishnavi-123009413" icon={<FaLinkedin size={20} />} />
            <SocialLink href="mailto:siripuramvaishnavi99@gmail.com" icon={<Mail size={20} />} />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50 text-sm text-muted-foreground gap-4">
          <p>© {new Date().getFullYear()} Siripuram Vaishnavi. All rights reserved.</p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <span>Back to top</span>
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all shadow-sm"
    >
      {icon}
    </a>
  );
}
