import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="contact-card">
        <p className="section-tag">Contact</p>

        <h2>Let's connect and build something meaningful.</h2>

        <p>
          I am open to internship opportunities, project collaborations, and
          learning from developers, recruiters, and builders.
        </p>

        <div className="contact-links">
          <a href="mailto:sompallijayadeep8@gmail.com">
            <FaEnvelope /> Email
          </a>

          <a href="https://github.com/sompallijayadeep8-ui" target="_blank">
            <FaGithub /> GitHub
          </a>

          <a href="https://linkedin.com/in/jayadeep-sompalli-b127923b2" target="_blank">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;