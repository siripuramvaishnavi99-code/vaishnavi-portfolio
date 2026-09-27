import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "AI Multi-Domain Disease Prediction",
    description: "Multi-label ML model predicting 15+ diseases from symptoms. Provides a comprehensive diagnostic analysis using a unified interface.",
    image: "/projects/project1.jpg",
    tags: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
    github: "https://github.com/siripuramvaishnavi99-code",
    demo: "#"
  },
  {
    id: 2,
    title: "Resume Screening System",
    description: "NLP-based automated resume classifier utilizing TF-IDF and cosine similarity to match candidates with job descriptions efficiently.",
    image: "/projects/project2.jpg",
    tags: ["Python", "NLP", "Scikit-learn", "Flask"],
    github: "https://github.com/siripuramvaishnavi99-code",
    demo: "#"
  },
  {
    id: 3,
    title: "Face Recognition Attendance",
    description: "Real-time facial recognition system for automated, contactless attendance marking in educational and corporate environments.",
    image: "/projects/project3.jpg",
    tags: ["Python", "OpenCV", "DeepFace", "SQLite"],
    github: "https://github.com/siripuramvaishnavi99-code",
    demo: "#"
  },
  {
    id: 4,
    title: "Loan Approval AI with SHAP",
    description: "XGBoost model predicting loan decisions with SHAP explainability, providing transparent reasoning for financial approvals.",
    image: "/projects/project4.jpg",
    tags: ["Python", "XGBoost", "SHAP", "Streamlit"],
    github: "https://github.com/siripuramvaishnavi99-code",
    demo: "#"
  },
  {
    id: 5,
    title: "Student Result Management",
    description: "Full-stack CRUD application for managing student academic records, generating reports, and maintaining secure data storage.",
    image: "/projects/project5.jpg",
    tags: ["Java", "MySQL", "JDBC", "HTML/CSS"],
    github: "https://github.com/siripuramvaishnavi99-code",
    demo: "#"
  },
  {
    id: 6,
    title: "Real-time Chat Application",
    description: "Interactive chat application supporting multiple users simultaneously with real-time message delivery and user authentication.",
    image: "/projects/project6.jpg",
    tags: ["Node.js", "Socket.IO", "Express", "JS"],
    github: "https://github.com/siripuramvaishnavi99-code",
    demo: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work in Artificial Intelligence, Machine Learning, and Software Development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full golden-border"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 transition-opacity group-hover:opacity-0" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${project.title}&background=C8963E&color=fff&size=500`;
                  }}
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-serif mb-2 line-clamp-1" title={project.title}>
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-6 flex-grow line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <FaGithub size={16} />
                    Code
                  </a>
                  {project.demo !== '#' && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors ml-auto"
                    >
                      <FaExternalLinkAlt size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://github.com/siripuramvaishnavi99-code" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full golden-border hover:-translate-y-1 transition-transform"
          >
            <FaGithub size={20} />
            <span className="font-medium">View more on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
