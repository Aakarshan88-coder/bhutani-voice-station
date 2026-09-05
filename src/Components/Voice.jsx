import "./Voice.css";

function Voice() {
  const voiceSamples = [
    {
      number: "01",
      title: "Hindi Commercial",
      type: "Commercial",
      description: "Energetic • Promotional • Advertising",
      audio: "/audio/hindi commercial.wav",
    },
    {
      number: "02",
      title: "Punjabi Voice Work",
      type: "Punjabi",
      description: "Regional • Natural • Expressive",
      audio: "/audio/punjabi work.wav",
    },
    {
      number: "03",
      title: "Indian English",
      type: "English",
      description: "Professional • Clear • Natural",
      audio: "/audio/Indian English sample.wav",
    },
    {
      number: "04",
      title: "Hindi Natural Voice",
      type: "Natural",
      description: "Conversational • Authentic • Warm",
      audio: "/audio/Hindi natural voice.wav",
    },
    {
      number: "05",
      title: "Moral Story Narration",
      type: "Narration",
      description: "Emotional • Storytelling • Narration",
      audio: "/audio/moral story narration.wav",
    },
    {
      number: "06",
      title: "Horror Story",
      type: "Horror",
      description: "Dark • Dramatic • Atmospheric",
      audio: "/audio/horror story sample.wav",
    },
  ];

  return (
    <section className="voice-section" id="voice">

      {/* TOP */}
      <div className="voice-top">
        <span className="voice-label">VOICE PORTFOLIO</span>
        <span className="voice-number">02</span>
      </div>

      {/* HEADER */}
      <div className="voice-header">
        <div>
          <p className="voice-eyebrow">SELECTED SAMPLES</p>

          <h2>
            Hear the
            <br />
            <span>Voice.</span>
          </h2>
        </div>

        <p className="voice-intro">
          A collection of voice samples crafted for
          commercials, storytelling, characters and
          everything in between.
        </p>
      </div>

      {/* VOICE SAMPLES */}
      <div className="voice-list">

        {voiceSamples.map((sample) => (
          <div className="voice-card" key={sample.number}>

            <div className="voice-card-top">
              <span className="voice-card-number">
                {sample.number}
              </span>

              <span className="voice-card-type">
                {sample.type}
              </span>
            </div>

            <div className="voice-card-content">

              <div>
                <h3>{sample.title}</h3>

                <p>{sample.description}</p>
              </div>

              <div className="voice-player">
                <audio controls preload="metadata">
                  <source
                    src={sample.audio}
                    type="audio/wav"
                  />

                  Your browser does not support audio playback.
                </audio>
              </div>

            </div>

          </div>
        ))}

      </div>

      {/* SELECTED WORK CTA */}
      <div className="voice-work-cta">

        <div>
          <span>SELECTED WORK</span>

          <p>
            Explore some of my published voice projects and
            performances.
          </p>
        </div>

        <a href="/work">
          VIEW MY WORK
          <span>→</span>
        </a>

      </div>

    </section>
  );
}

export default Voice;