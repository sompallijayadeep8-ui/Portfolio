import { motion } from "framer-motion";
import { FaDownload, FaFileAlt, FaCheckCircle } from "react-icons/fa";

function Resume() {
  const resumePath = "/resume/Jayadeep_Naidu_Resume.pdf";

  return (
    <section className="section" id="resume">
      <motion.div
        className="resume-card"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="resume-content">
          <p className="section-tag">Resume</p>
          <h2>Software Engineering Resume</h2>
          <p>
            ATS-friendly resume focused on MERN projects, DSA practice,
            deployment experience, and internship readiness.
          </p>

          <div className="resume-highlights">
            <span><FaCheckCircle /> MERN Stack</span>
            <span><FaCheckCircle /> DSA Practice</span>
            <span><FaCheckCircle /> Deployed Projects</span>
          </div>

          <div className="resume-actions">
            <a href={resumePath} target="_blank" rel="noreferrer" className="project-link">
              <FaFileAlt /> View Resume
            </a>

            <a href={resumePath} download className="project-link secondary-link">
              <FaDownload /> Download PDF
            </a>
          </div>
        </div>

        <a href={resumePath} target="_blank" rel="noreferrer" className="resume-preview">
          <div className="resume-preview-top"></div>
          <div className="resume-line large"></div>
          <div className="resume-line"></div>
          <div className="resume-line"></div>
          <div className="resume-divider"></div>
          <div className="resume-section-title"></div>
          <div className="resume-line small"></div>
          <div className="resume-line small"></div>
          <div className="resume-divider"></div>
          <div className="resume-section-title"></div>
          <div className="resume-line small"></div>
          <span>Preview Resume →</span>
        </a>
      </motion.div>
    </section>
  );
}

export default Resume;