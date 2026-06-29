import { FaRocket, FaLaptopCode, FaBrain } from "react-icons/fa";

function CurrentlyWorking() {
  return (
    <section className="section">
      <div className="working-card">
        <div>
          <p className="section-tag">Currently Working On</p>
          <h2>Improving every day through DSA and full-stack projects.</h2>

          <p>
            I am currently focused on strengthening React, backend development,
            system design basics, and problem-solving with C++.
          </p>
        </div>

        <div className="working-list">
          <div>
            <FaLaptopCode />
            <span>Portfolio Website</span>
          </div>

          <div>
            <FaBrain />
            <span>Daily DSA Practice</span>
          </div>

          <div>
            <FaRocket />
            <span>Next Flagship Project</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CurrentlyWorking;