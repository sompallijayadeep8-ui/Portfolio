import { motion } from "framer-motion";

function About() {
  return (
    <section className="section" id="about">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-tag">About Me</p>
        <h2>Building my foundation in full-stack engineering.</h2>
      </motion.div>

      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p>
          I am a B.Tech Computer Science and Business Systems student focused on
          becoming a strong software engineer through daily DSA practice and
          real-world full-stack projects.
        </p>

        <p>
          I recently built and deployed SpendWise, a MERN personal finance
          tracker with authentication, transaction management, analytics,
          budgeting, and cloud deployment using Vercel, Render, and MongoDB
          Atlas.
        </p>

        <p>
          My current focus is improving React, backend architecture, REST APIs,
          databases, deployment, and problem-solving with C++.
        </p>
      </motion.div>
    </section>
  );
}

export default About;