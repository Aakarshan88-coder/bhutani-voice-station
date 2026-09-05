import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-top">
        <span className="contact-label">CONTACT</span>
        <span className="contact-number">05</span>
      </div>

      <div className="contact-content">
        <div className="contact-heading">
          <p>LET'S CONNECT</p>

          <h2>
            Let's
            <br />
            <span>Talk.</span>
          </h2>
        </div>

        <div className="contact-info">
          <p className="contact-intro">
            Have a project that needs a voice?
            <br />
            Let's bring your words to life.
          </p>

          <div className="contact-options">
            <a
              href="mailto:bhutanivoicestation@gmail.com"
              className="contact-option"
            >
              <div>
                <span className="contact-option-label">EMAIL</span>
                <h3>bhutanivoicestation@gmail.com</h3>
              </div>

              <span className="contact-arrow">↗</span>
            </a>

            <a
              href="https://wa.me/918950492537"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-option"
            >
              <div>
                <span className="contact-option-label">WHATSAPP</span>
                <h3>Chat/Connect on WhatsApp</h3>
              </div>

              <span className="contact-arrow">↗</span>
            </a>
          </div>
        </div>
      </div>

      <div className="contact-bottom">
        <span>AVAILABLE FOR</span>

        <p>
          COMMERCIALS • NARRATION • DUBBING • CHARACTER VOICES • STORYTELLING
        </p>
      </div>
    </section>
  );
}

export default Contact;