import "./WhyWorkWithMe.css";

function WhyWorkWithMe() {
  const reasons = [
    {
      number: "01",
      title: "Natural & Expressive",
      description:
        "A voice that feels natural, expressive and connected to the emotion behind every script.",
    },
    {
      number: "02",
      title: "Multiple Languages",
      description:
        "Voice work available in Hindi, Punjabi and Indian English for different audiences and projects.",
    },
    {
      number: "03",
      title: "Project-Focused Delivery",
      description:
        "Every voice is shaped around your project's tone, audience, message and creative direction.",
    },
    {
      number: "04",
      title: "Professional Approach",
      description:
        "Clear communication, attention to detail and a commitment to delivering voice work that fits your vision.",
    },
  ];

  return (
    <section className="why-section" id="why-work-with-me">
      <div className="why-top">
        <span className="why-label">WHY WORK WITH ME</span>
        <span className="why-number">04</span>
      </div>

      <div className="why-header">
        <div>
          <p className="why-eyebrow">THE DIFFERENCE</p>

          <h2>
            More Than
            <br />
            <span>Just a Voice.</span>
          </h2>
        </div>

        <p className="why-intro">
          A great voiceover is not just about reading words.
          It's about understanding the message, finding the
          right emotion and making every word connect.
        </p>
      </div>

      <div className="why-grid">
        {reasons.map((reason) => (
          <article className="why-card" key={reason.number}>
            <span className="why-card-number">{reason.number}</span>

            <div className="why-card-content">
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>

            <span className="why-card-line"></span>
          </article>
        ))}
      </div>

      <div className="why-bottom">
        <p>
          HAVE A PROJECT IN MIND?
        </p>

        <a href="#contact">
          LET'S CREATE
          <span>→</span>
        </a>
      </div>
    </section>
  );
}

export default WhyWorkWithMe;