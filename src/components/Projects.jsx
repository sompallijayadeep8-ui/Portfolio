import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-header">
        <p className="section-tag">Featured Work</p>
        <h2>Projects built with real-world full-stack workflows.</h2>
      </div>

      <div className="project-showcase">
        <motion.div
          className="project-content"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="featured-badge-inline">Featured Project</span>

          <h3>SpendWise</h3>
          <p className="project-subtitle">MERN Personal Finance Tracker</p>

          <p className="project-description">
            A deployed finance tracker with secure authentication, transaction
            management, budgeting, analytics, CSV export, and cloud deployment.
          </p>

          <ul className="project-points">
            <li>JWT authentication with protected routes</li>
            <li>Transaction CRUD with search and filters</li>
            <li>Budget tracking and expense analytics</li>
            <li>Deployed using Vercel, Render, and MongoDB Atlas</li>
          </ul>

          <div className="project-tech">
            {["React", "Node.js", "Express", "MongoDB", "JWT", "Vercel", "Render"].map(
              (tech) => (
                <span key={tech}>{tech}</span>
              )
            )}
          </div>

          <div className="project-actions">
            <a
              href="https://spendwise-olive-rho.vercel.app"
              target="_blank"
              className="project-link"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>

            <a
              href="https://github.com/sompallijayadeep8-ui/spendwise"
              target="_blank"
              className="project-link secondary-link"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          className="project-preview"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="preview-topbar">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="preview-summary">
            <div>
              <p>Income</p>
              <h4>₹61,000</h4>
            </div>
            <div>
              <p>Expense</p>
              <h4 className="red">₹31,615</h4>
            </div>
            <div>
              <p>Balance</p>
              <h4 className="blue">₹29,385</h4>
            </div>
          </div>

          <div className="preview-chart">
            <div className="donut"></div>
            <div>
              <p>Expense Distribution</p>
              <strong>Rent • Food • Travel</strong>
            </div>
          </div>

          <div className="preview-list">
            <div>
              <span>Rent</span>
              <strong>₹12,000</strong>
            </div>
            <div>
              <span>Groceries</span>
              <strong>₹2,850</strong>
            </div>
            <div>
              <span>Freelance</span>
              <strong className="green">₹8,500</strong>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="other-projects">
        <h3>Other Projects</h3>

        <div className="project-compact">
          <div>
            <h4>Placement Tracker</h4>
            <p>
              A JavaScript application manager for tracking internship and
              placement applications with CRUD, filters, sorting, charts, and
              LocalStorage.
            </p>

            <div className="project-tech">
              {["JavaScript", "HTML", "CSS", "Chart.js", "LocalStorage"].map(
                (tech) => (
                  <span key={tech}>{tech}</span>
                )
              )}
            </div>
          </div>

          <div className="project-actions">
            <a
              href="https://lnkd.in/gtcy3Gk9"
              target="_blank"
              className="project-link"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>

            <a
              href="https://github.com/sompallijayadeep8-ui/placement-tracker"
              target="_blank"
              className="project-link secondary-link"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;