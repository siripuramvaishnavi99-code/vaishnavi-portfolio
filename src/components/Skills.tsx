import { motion } from 'framer-motion';
import { 
  SiPython, SiJavascript, SiTypescript, SiMysql, SiSqlite, 
  SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, SiOpencv, 
  SiReact, SiNodedotjs, SiExpress, SiHtml5, SiCss, SiBootstrap, SiStreamlit,
  SiGit, SiGithub, SiPostman
} from 'react-icons/si';
import { FaJava, FaCode } from 'react-icons/fa';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", percent: 88, icon: <SiPython /> },
      { name: "Java", percent: 85, icon: <FaJava /> },
      { name: "SQL", percent: 82, icon: <SiMysql /> },
      { name: "JavaScript", percent: 75, icon: <SiJavascript /> },
      { name: "TypeScript", percent: 70, icon: <SiTypescript /> },
    ]
  },
  {
    title: "AI / ML & Data",
    skills: [
      { name: "Pandas", percent: 90, icon: <SiPandas /> },
      { name: "NumPy", percent: 88, icon: <SiNumpy /> },
      { name: "Scikit-learn", percent: 85, icon: <SiScikitlearn /> },
      { name: "TensorFlow", percent: 80, icon: <SiTensorflow /> },
      { name: "NLP", percent: 78, icon: <span className="font-serif font-bold">NLP</span> },
      { name: "OpenCV", percent: 75, icon: <SiOpencv /> },
    ]
  },
  {
    title: "Web / Frameworks",
    skills: [
      { name: "Streamlit", percent: 82, icon: <SiStreamlit /> },
      { name: "HTML/CSS", percent: 80, icon: <div className="flex"><SiHtml5 /><SiCss /></div> },
      { name: "Bootstrap", percent: 75, icon: <SiBootstrap /> },
      { name: "React", percent: 72, icon: <SiReact /> },
      { name: "Node.js", percent: 68, icon: <SiNodedotjs /> },
      { name: "Express", percent: 65, icon: <SiExpress /> },
    ]
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "VS Code", percent: 90, icon: <FaCode /> },
      { name: "Git", percent: 85, icon: <SiGit /> },
      { name: "GitHub", percent: 85, icon: <SiGithub /> },
      { name: "MySQL", percent: 82, icon: <SiMysql /> },
      { name: "SQLite", percent: 75, icon: <SiSqlite /> },
      { name: "Postman", percent: 70, icon: <SiPostman /> },
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 bg-primary/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl golden-border"
            >
              <h3 className="font-serif text-2xl mb-6 text-foreground">{category.title}</h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-foreground/80">
                        <span className="text-primary text-xl">{skill.icon}</span>
                        <span className="font-medium text-sm">{skill.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{skill.percent}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                        className="h-full bg-primary rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-white/20 animate-[pulse_2s_ease-in-out_infinite]" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
