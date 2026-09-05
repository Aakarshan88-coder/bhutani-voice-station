import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">

        {/* BRAND */}
        <div className="footer-brand">
          <p className="footer-eyebrow">BHUTANI VOICE STATION</p>

          <h2>
            Give Every
            <br />
            <span>Word a Voice.</span>
          </h2>

          <p className="footer-description">
            Voice over, narration and storytelling crafted
            with clarity, emotion and personality.
          </p>
        </div>

        <div className="footer-links">

          {/* NAVIGATION */}
          <div className="footer-column">
            <span className="footer-title">NAVIGATION</span>

            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/voice">Voice</a>
            <a href="/services">Services</a>
            <a href="/work">Work</a>
            <a href="/contact">Contact</a>
          </div>

          {/* SERVICES */}
          <div className="footer-column">
            <span className="footer-title">SERVICES</span>

            <span>Commercial Voice</span>
            <span>Narration</span>
            <span>Dubbing</span>
            <span>Character Voice</span>
            <span>Storytelling</span>
          </div>

          {/* CONNECT */}
          <div className="footer-column">
            <span className="footer-title">CONNECT</span>

            <a href="mailto:bhutanivoicestation@gmail.com">
              Email
            </a>

            <a
              href="https://wa.me/918950492537"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <span>
          © 2026 Bhutani Voice Station. All Rights Reserved.
        </span>

        <a
          href="https://bhutani-creative-solutions.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-credit"
        >
          Built by Bhutani Creative Solutions
        </a>
      </div>
    </footer>
  );
}

export default Footer;