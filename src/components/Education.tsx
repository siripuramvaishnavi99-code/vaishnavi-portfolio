import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BadgeCheck } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-24 relative z-10 bg-primary/5">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground">My academic background and qualifications.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-10 rounded-2xl golden-border relative overflow-hidden group"
        >
          {/* Decorative icon */}
          <div className="absolute -right-6 -top-6 text-primary/5 group-hover:text-primary/10 transition-colors rotate-12">
            <GraduationCap size={140} />
          </div>

          <div className="relative z-10">
            {/* Header row */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
              <div>
                <h3 className="text-2xl font-bold font-serif leading-tight">
                  B.Tech in Computer Science &amp; Engineering
                </h3>
                <p className="text-primary font-medium text-lg mt-1">
                  Malla Reddy Engineering College
                </p>
              </div>

              <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary/10 text-primary font-bold rounded-full border border-primary/20 text-sm">
                  <BadgeCheck size={14} />
                  CGPA: 8.0 / 10
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 font-medium rounded-full border border-green-500/20 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Currently Pursuing
                </span>
              </div>
            </div>

            {/* Meta info */}
            <div className="flex flex-wrap gap-5 text-sm text-muted-foreground mb-5">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} />
                <span>2022 – 2026</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin size={14} />
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Specialising in Artificial Intelligence, Machine Learning, Data Analytics, and Software 
              Development. Gaining strong expertise in Python, Java, SQL, and modern web technologies 
              through coursework, projects, and industry internships.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
