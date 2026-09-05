import "./Services.css";

function Services() {
  const services = [
    {
      number: "01",
      title: "Commercial Voice",
      description:
        "Engaging voiceovers for advertisements, campaigns, YouTube and digital media.",
      tags: "ADS • BRANDS • CAMPAIGNS",
    },
    {
      number: "02",
      title: "Narration",
      description:
        "Clear and expressive narration for stories, documentaries, educational and informational content.",
      tags: "STORIES • DOCUMENTARY • EDUCATION",
    },
    {
      number: "03",
      title: "Character Voice",
      description:
        "Distinctive character voices with personality, expression and emotion for creative projects.",
      tags: "ANIMATION • CHARACTERS • CREATIVE",
    },
    {
      number: "04",
      title: "Dubbing",
      description:
        "Natural and expressive dubbing for Hindi, Punjabi and Indian English content.",
      tags: "HINDI • PUNJABI • ENGLISH",
    },
    {
      number: "05",
      title: "Corporate Voice",
      description:
        "Professional voiceovers for explainers, presentations, training videos and brand communication.",
      tags: "CORPORATE • EXPLAINERS • TRAINING",
    },
    {
      number: "06",
      title: "Storytelling",
      description:
        "Emotion-driven storytelling that brings characters, moments and narratives to life.",
      tags: "EMOTION • STORY • NARRATION",
    },
  ];

  return (
    <section className="services-section" id="services">

      {/* TOP BAR */}
      <div className="services-top">
        <span className="services-label">SERVICES</span>
        <span className="services-number">03</span>
      </div>

      {/* HEADER */}
      <div className="services-header">

        <div>
          <p className="services-eyebrow">WHAT I DO</p>

          <h2>
            Voice for
            <br />
            <span>Every Story.</span>
          </h2>
        </div>

        <p className="services-intro">
          From advertising and narration to characters and
          storytelling, every project gets a voice shaped
          around its purpose, personality and audience.
        </p>

      </div>

      {/* SERVICES LIST */}
      <div className="services-list">

        {services.map((service) => (
          <article className="service-item" key={service.number}>

            <div className="service-number">
              {service.number}
            </div>

            <div className="service-main">

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <span className="service-tags">
                {service.tags}
              </span>

            </div>

            <div className="service-arrow">
              →
            </div>

          </article>
        ))}

      </div>

      {/* BOTTOM NOTE */}
      <div className="services-bottom">
        <span>NEED A VOICE FOR YOUR PROJECT?</span>

        <a href="#contact">
          LET'S TALK
          <span>→</span>
        </a>
      </div>

    </section>
  );
}

export default Services;