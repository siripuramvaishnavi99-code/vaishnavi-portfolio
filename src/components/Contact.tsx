import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-serif font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed">
            I'm currently open to internships and entry-level opportunities in AI/ML, 
            Data Analytics, and Software Engineering. Feel free to reach out — I'd love to connect!
          </p>
        </motion.div>

        <motion.a
          href="mailto:siripuramvaishnavi99@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground rounded-full text-lg font-semibold shadow-lg hover:bg-primary/90 transition-colors mb-14"
        >
          <Send size={20} />
          Send Me an Email
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-4 mb-12"
        >
          <ContactCard
            icon={<Mail size={22} />}
            title="Email"
            content="siripuramvaishnavi99@gmail.com"
            href="mailto:siripuramvaishnavi99@gmail.com"
          />
          <ContactCard
            icon={<Phone size={22} />}
            title="Phone"
            content="+91 7989697479"
            href="tel:+917989697479"
          />
          <ContactCard
            icon={<MapPin size={22} />}
            title="Location"
            content="Telangana, India"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4 pt-6 border-t border-border"
        >
          <SocialBtn icon={<FaGithub size={22} />} href="https://github.com/siripuramvaishnavi99-code" label="GitHub" />
          <SocialBtn icon={<FaLinkedin size={22} />} href="https://www.linkedin.com/in/siripuram-vaishnavi-123009413" label="LinkedIn" />
          <SocialBtn icon={<Mail size={22} />} href="mailto:siripuramvaishnavi99@gmail.com" label="Email" />
        </motion.div>
      </div>
    </section>
  );
}

function ContactCard({ icon, title, content, href }: { icon: React.ReactNode; title: string; content: string; href?: string }) {
  const inner = (
    <div className="flex flex-col items-center gap-3 p-5 glass-card rounded-2xl golden-border hover:border-primary/40 transition-all h-full">
      <div className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center">
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{title}</div>
        <div className="font-medium text-sm break-all">{content}</div>
      </div>
    </div>
  );

  if (href) return <a href={href} className="block">{inner}</a>;
  return <div>{inner}</div>;
}

function SocialBtn({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-5 py-2.5 glass-card rounded-full text-sm font-medium hover:text-primary hover:border-primary/40 transition-all"
    >
      {icon}
      {label}
    </a>
  );
}
