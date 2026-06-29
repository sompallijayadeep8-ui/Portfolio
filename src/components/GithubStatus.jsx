import { FaGithub, FaCode, FaFolderOpen } from "react-icons/fa";

function GithubStats() {
  return (
    <section className="section" id="github">
      <div className="section-header">
        <p className="section-tag">Developer Activity</p>
        <h2>Building consistently through projects and DSA.</h2>
      </div>

      <div className="github-grid">
        <div className="github-card">
          <FaGithub />
          <h3>GitHub Profile</h3>
          <p>Public repositories for full-stack projects and DSA practice.</p>
          <a href="https://github.com/sompallijayadeep8-ui" target="_blank">
            View GitHub →
          </a>
        </div>

        <div className="github-card">
          <FaCode />
          <h3>DSA Repository</h3>
          <p>C++ solutions covering arrays, searching, sorting, recursion, hashing, and binary search.</p>
          <a href="https://github.com/sompallijayadeep8-ui/DSA-IN-CPP" target="_blank">
            View DSA Repo →
          </a>
        </div>

        <div className="github-card">
          <FaFolderOpen />
          <h3>Project Repositories</h3>
          <p>SpendWise, Placement Tracker, and upcoming full-stack projects.</p>
          <a href="https://github.com/sompallijayadeep8-ui?tab=repositories" target="_blank">
            View Repositories →
          </a>
        </div>
      </div>
    </section>
  );
}

export default GithubStats;