import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: "Java Fundamentals",
    issuer: "Oracle Certified",
    date: "2023",
    category: "Programming",
    image: "https://ui-avatars.com/api/?name=Java+Fundamentals&background=C8963E&color=fff&size=400&font-size=0.1"
  },
  {
    id: 2,
    title: "Python (5-star)",
    issuer: "HackerRank",
    date: "2023",
    category: "Programming",
    image: "https://ui-avatars.com/api/?name=Python+5+Star&background=0F172A&color=F59E0B&size=400&font-size=0.1"
  },
  {
    id: 3,
    title: "Data Analytics with Python",
    issuer: "NPTEL",
    date: "2023",
    category: "ML/AI",
    image: "https://ui-avatars.com/api/?name=Data+Analytics&background=C8963E&color=fff&size=400&font-size=0.1"
  },
  {
    id: 4,
    title: "AI/ML Virtual Internship",
    issuer: "AICTE",
    date: "2022",
    category: "Internships",
    image: "https://ui-avatars.com/api/?name=AICTE+Internship&background=0F172A&color=F59E0B&size=400&font-size=0.1"
  },
  {
    id: 5,
    title: "SQL Fundamentals",
    issuer: "SoloLearn",
    date: "2022",
    category: "Databases",
    image: "https://ui-avatars.com/api/?name=SQL+Fundamentals&background=C8963E&color=fff&size=400&font-size=0.1"
  }
];

const categories = ["All", "Programming", "ML/AI", "Databases", "Internships"];

export function Certificates() {
  const [filter, setFilter] = useState("All");

  const filteredCerts = certificates.filter(
    cert => filter === "All" || cert.category === filter
  );

  return (
    <section id="certificates" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-serif font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat 
                  ? "bg-primary text-primary-foreground shadow-warm" 
                  : "glass-card hover:border-primary/50 text-foreground/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCerts.map((cert) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={cert.id}
                className="glass-card rounded-2xl overflow-hidden golden-border group"
              >
                <div className="relative h-40 bg-muted overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
                  <Award size={48} className="text-primary/40 absolute" />
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="p-5">
                  <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">
                    {cert.category}
                  </div>
                  <h3 className="font-bold text-lg mb-1 leading-tight">{cert.title}</h3>
                  <div className="flex justify-between items-center text-sm text-muted-foreground mt-4">
                    <span className="font-serif italic">{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
