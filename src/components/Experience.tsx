import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Machine Learning Intern",
    company: "CSI Hyderabad (Computer Society of India)",
    location: "Hyderabad, Telangana, India",
    period: "June 2025 – July 2025",
    type: "Virtual Internship",
    description:
      "Completed a virtual internship focused on core Machine Learning concepts and hands-on project work. Built and evaluated classification and regression models, worked with real-world datasets for data cleaning and feature engineering, and implemented ML pipelines using Python and Scikit-learn.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Machine Learning"],
  },
  {
    id: 2,
    role: "Web Development Intern",
    company: "Apex Planet",
    location: "Remote",
    period: "June 2025 – July 2025",
    type: "Virtual Internship",
    description:
      "Gained hands-on experience in full-stack web development during a virtual internship. Developed responsive web interfaces using HTML, CSS, and JavaScript, and explored modern frontend frameworks and best practices for building user-friendly applications.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "Web Development"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground">My professional journey and internships.</p>
        </motion.div>

        <div className="relative border-l border-border ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-3 md:-left-3.5 top-1 w-6 h-6 rounded-full bg-background border-4 border-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>

              <div className="glass-card p-6 md:p-8 rounded-2xl golden-border hover:-translate-y-1 transition-transform">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold font-serif">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-primary font-medium mt-1">
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </div>
                    <span className="inline-block mt-2 text-xs px-3 py-0.5 bg-primary/10 text-primary rounded-full border border-primary/20 font-medium">
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 text-sm text-muted-foreground shrink-0">
                    <div className="flex items-center gap-2 md:justify-end">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 md:justify-end">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
