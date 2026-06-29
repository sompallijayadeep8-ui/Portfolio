import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <a href="#" className="logo" onClick={closeMenu}>
        <span>SJ</span>
      </a>

      <div className={`nav-links ${open ? "active" : ""}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#resume" onClick={closeMenu}>Resume</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>

      <div className="nav-icons">
        <a href="https://github.com/sompallijayadeep8-ui" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/jayadeep-sompalli-b127923b2" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>

      <button className="menu-btn" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Navbar;