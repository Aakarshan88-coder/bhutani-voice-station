import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-top">
        <span className="about-label">ABOUT THE VOICE</span>
        <span className="about-number">01</span>
      </div>

      <div className="about-content">

        <div className="about-heading">
          <p>THE VOICE</p>

          <h2>
            Behind
            <br />
            Every Story.
          </h2>
        </div>

        <div className="about-text">

          <p className="about-intro">
            A voice can inform.
            <br />
            A voice can inspire.
            <br />
            A voice can make people feel.
          </p>

          <p className="about-description">
            I'm Dhruv Bhutani, a voice actor focused on bringing
            clarity, emotion and personality to every word.
            From commercials and narration to dubbing
            and creative storytelling, I give every project
            a voice that connects.
          </p>

          <a href="#contact" className="about-link">
            LET'S CREATE SOMETHING
            <span>→</span>
          </a>

        </div>

      </div>

      {/* ================= STATS ================= */}
      <div className="about-stats">

        <div className="stat">
          <strong>05+</strong>
          <span>YEARS OF EXPERIENCE</span>
        </div>

        <div className="stat">
          <strong>500+</strong>
          <span>CLIENTS</span>
        </div>

        <div className="stat">
          <strong>03</strong>
          <span>LANGUAGES</span>
        </div>

        <div className="stat">
          <strong>200K+</strong>
          <span>WORDS RECORDED</span>
        </div>

        <div className="stat">
          <strong>5000+</strong>
          <span>HOURS OF VOICE</span>
        </div>

        <div className="stat">
          <strong>100%</strong>
          <span>CLIENT DEDICATION</span>
        </div>

      </div>

    </section>
  );
}

export default About;