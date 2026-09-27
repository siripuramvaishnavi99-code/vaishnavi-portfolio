import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Trophy, Star, Presentation, Code2 } from 'lucide-react';

const achievementsList = [
  {
    icon: <Trophy size={24} />,
    title: "Academic Excellence",
    desc: "Maintained a consistent CGPA of 8.0/10 throughout the engineering curriculum."
  },
  {
    icon: <Star size={24} />,
    title: "Open Source Contributor",
    desc: "Active contributor to GitHub repositories and community projects."
  },
  {
    icon: <Presentation size={24} />,
    title: "Project Presentations",
    desc: "Successfully presented complex ML models and AI solutions at college symposiums."
  },
  {
    icon: <Code2 size={24} />,
    title: "Hackathon Participant",
    desc: "Participated in multiple coding competitions and hackathons to solve real-world problems."
  }
];

export function Achievements() {
  return (
    <section className="py-24 relative z-10 bg-primary/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievementsList.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl golden-border hover:-translate-y-2 transition-transform text-center flex flex-col items-center gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
                {ach.icon}
              </div>
              <h3 className="font-bold text-lg">{ach.title}</h3>
              <p className="text-sm text-muted-foreground">{ach.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Counter Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Counter value={6} suffix="+" label="Projects Built" delay={0} />
          <Counter value={4} suffix="+" label="Certifications" delay={0.1} />
          <Counter value={2} suffix="" label="Internships" delay={0.2} />
          <Counter value={100} suffix="+" label="LeetCode Problems" delay={0.3} />
        </div>
      </div>
    </section>
  );
}

function Counter({ value, suffix, label, delay }: { value: number, suffix: string, label: string, delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="text-center"
    >
      <div className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}
