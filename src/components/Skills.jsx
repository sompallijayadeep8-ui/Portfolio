import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiPostman,
  SiVercel,
  SiRender,
} from "react-icons/si";

function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "REST APIs", icon: <SiPostman /> },
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Render", icon: <SiRender /> },
      ],
    },
  ];

  return (
    <section className="section" id="skills">
      <div className="section-header">
        <p className="section-tag">Skills</p>
        <h2>Technologies I use to build full-stack applications.</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <motion.div
            className="skill-card"
            key={group.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
          >
            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <div className="skill-pill" key={skill.name}>
                  <span>{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;