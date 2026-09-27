import { motion } from 'framer-motion';
import { BookOpen, Target, Code, Brain } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden glass-card p-4 golden-border">
              <img
                src="/profile.jpg"
                alt="Vaishnavi Profile"
                className="w-full h-full object-cover rounded-xl"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://ui-avatars.com/api/?name=Siripuram+Vaishnavi&background=C8963E&color=fff&size=500';
                }}
              />
            </div>

            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl golden-border max-w-xs shadow-warm hidden md:block">
              <p className="font-serif italic text-lg leading-snug">
                "Driven by data, building with logic, and designing for impact."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I am a Computer Science Engineering undergraduate from <strong className="text-foreground">Telangana, India</strong>, 
              currently pursuing my B.Tech at Malla Reddy Engineering College with a CGPA of 8.0/10. 
              My journey in tech is driven by a deep fascination with how data can be transformed into actionable intelligence. 
              I specialise in <strong className="text-foreground">Python, Java, SQL, and Data Analytics</strong>, 
              with hands-on experience building Machine Learning and web applications.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Currently seeking an internship or entry-level role in AI/ML, Data Analytics, or Software Engineering where 
              I can apply my academic knowledge to real-world challenges while continuing to learn from industry experts.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
              <StatCard value="8.0" label="CGPA" icon={<BookOpen size={20} />} />
              <StatCard value="6+" label="Projects" icon={<Code size={20} />} />
              <StatCard value="2" label="Internships" icon={<Target size={20} />} />
              <StatCard value="100+" label="LeetCode" icon={<Brain size={20} />} />
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <h3 className="font-serif text-xl mb-4">My Journey</h3>
              <div className="space-y-4">
                <TimelineItem
                  year="2022 – Present"
                  title="B.Tech CSE — Malla Reddy Engineering College"
                  desc="Diving deep into algorithms, AI/ML, Data Analytics, and full-stack software development. Currently pursuing with CGPA 8.0/10."
                />
                <TimelineItem
                  year="June–July 2025"
                  title="Virtual Internships"
                  desc="Completed ML internship at CSI Hyderabad and Web Development internship at Apex Planet simultaneously."
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label, icon }: { value: string; label: string; icon: React.ReactNode }) {
  return (
    <div className="glass-card p-4 text-center rounded-xl flex flex-col items-center justify-center gap-2 hover:-translate-y-1 transition-transform">
      <div className="text-primary">{icon}</div>
      <div className="font-serif text-2xl font-bold">{value}</div>
      <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
  );
}

function TimelineItem({ year, title, desc }: { year: string; title: string; desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-primary mt-1.5" />
        <div className="w-[1px] h-full bg-border mt-2" />
      </div>
      <div className="pb-4">
        <div className="text-sm text-primary font-medium mb-1">{year}</div>
        <div className="font-medium text-foreground mb-1">{title}</div>
        <div className="text-sm text-muted-foreground">{desc}</div>
      </div>
    </div>
  );
}
