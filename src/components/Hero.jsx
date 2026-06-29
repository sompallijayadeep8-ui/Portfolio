import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="hero-tag">MERN Stack Developer • DSA Enthusiast</p>

        <h1>
          Hi, I'm <span>Sompalli Jayadeep</span>
        </h1>

        <p className="hero-description">
          I build full-stack web applications using React, Node.js, Express,
          and MongoDB while strengthening my problem-solving skills through
          Data Structures and Algorithms.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View Projects
          </a>

          <a href="resume/Jayadeep_Naidu_Resume.pdf" className="btn secondary-btn" download>
            Download Resume
          </a>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/sompallijayadeep8-ui" target="_blank">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/jayadeep-sompalli-b127923b2" target="_blank">
            <FaLinkedin />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-card"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="profile-circle">
          <span>SJ</span>
        </div>

        <h3>Full Stack Developer</h3>
        <p>React • Node.js • MongoDB • DSA</p>
      </motion.div>
    </section>
  );
}

export default Hero;