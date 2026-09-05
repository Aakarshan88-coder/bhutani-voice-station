
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./WorkPage.css";

function WorkPage() {
  const projects = [
    {
      number: "01",
      category: "HORROR",
      title: "Horror Story",
      description:
        "Dark and atmospheric storytelling with an expressive voice performance.",
      videoId: "GPzMHTbJWaM",
    },
    {
      number: "02",
      category: "MORAL STORY",
      title: "Moral Story",
      description:
        "Narration-driven storytelling focused on emotion, clarity and character.",
      videoId: "xG7pSAQm0es",
    },
    {
      number: "03",
      category: "MORAL STORY",
      title: "Moral Story",
      description:
        "Expressive narration crafted to bring the story and its message to life.",
      videoId: "aIO70McqiPg",
    },
    {
      number: "04",
      category: "MORAL STORY",
      title: "Moral Story",
      description:
        "Natural storytelling with a warm and engaging vocal delivery.",
      videoId: "NYqey2izZfg",
    },
    {
      number: "05",
      category: "HORROR",
      title: "Horror Story",
      description:
        "A darker vocal performance designed for suspenseful storytelling.",
      videoId: "0Vcj37c7Eik",
    },
    {
      number: "06",
      category: "DOCUMENTARY",
      title: "Documentary Narration",
      description:
        "Clear, professional narration designed for documentary-style content.",
      videoId: "xhV85XW2sK8",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="work-page">
        <section className="work-hero">
          <div className="work-top">
            <span>SELECTED WORK</span>
            <span>06 PROJECTS</span>
          </div>

          <div className="work-heading">
            <p>VOICE IN ACTION</p>

            <h1>
              Work That
              <br />
              <span>Speaks.</span>
            </h1>

            <p className="work-intro">
              A selection of published voice work across
              horror, storytelling and documentary narration.
            </p>
          </div>
        </section>

        <section className="work-grid-section">
          <div className="work-grid">
            {projects.map((project) => (
              <article className="work-card" key={project.number}>
                <a
                  href={`https://www.youtube.com/watch?v=${project.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-video"
                >
                  <img
                    src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`}
                    alt={project.title}
                  />

                  <div className="work-overlay">
                    <span className="play-button">▶</span>
                  </div>

                  <span className="work-number">
                    {project.number}
                  </span>

                  <span className="work-open">
                    WATCH ↗
                  </span>
                </a>

                <div className="work-card-info">
                  <div className="work-card-meta">
                    <span>{project.category}</span>
                    <span>{project.number}</span>
                  </div>

                  <h2>{project.title}</h2>

                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="work-bottom">
          <p>HAVE A PROJECT THAT NEEDS A VOICE?</p>

          <a href="/contact">
            LET'S WORK TOGETHER
            <span>→</span>
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default WorkPage;

