import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">

      {/* LOGO */}
      <a href="/" className="nav-logo" onClick={closeMenu}>
        <span>B</span>.V.S.
      </a>

      {/* NAV LINKS */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="/about" onClick={closeMenu}>
          About
        </a>

        <a href="/voice" onClick={closeMenu}>
          Voice
        </a>

        <a href="/services" onClick={closeMenu}>
          Services
        </a>

        <a href="/work" onClick={closeMenu}>
          Work
        </a>

        <a href="/contact" onClick={closeMenu}>
          Contact
        </a>
      </div>

      {/* CTA */}
      <a href="/contact" className="nav-cta">
        Let's Talk
        <span>→</span>
      </a>

      {/* MOBILE MENU */}
      <button
        className={`nav-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
      </button>

    </nav>
  );
}

export default Navbar;