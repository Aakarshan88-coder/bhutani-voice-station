import Navbar from "../Components/Navbar";
import About from "../Components/About";
import Voice from "../Components/Voice";
import Services from "../Components/Services";
import WhyWorkWithMe from "../Components/WhyWorkWithMe";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="hero" id="home">
          <div className="hero-glow"></div>

          <div className="hero-image">
            <img
              src="/artist.png"
              alt="Bhutani Voice Station Artist"
            />
          </div>

          <div className="hero-content">
            <p className="eyebrow">THE ART OF VOICE</p>

            <div className="brand-title">
              <div className="brand-line brand-bhutani">
                <span className="highlight-letter">B</span>
                <span>HUTANI</span>
              </div>

              <div className="brand-line brand-voice">
                <span className="highlight-letter">V</span>
                <span>OICE</span>
              </div>

              <div className="brand-line brand-station">
                <span className="highlight-letter">S</span>
                <span>TATION</span>
              </div>
            </div>

            <p className="role">Voice Over Artist</p>

            <p className="description">
              Giving every word a voice,
              <br />
              and every voice a personality.
            </p>

            <div className="hero-buttons">
              <a href="/voice">LISTEN TO MY VOICE <span>→</span></a>
              <a href="/contact" className="secondary">
                WORK WITH ME
              </a>
            </div>
          </div>

          <div className="hero-line"></div>
          <div className="scroll-text">SCROLL TO EXPLORE</div>
        </section>

        <About />
        <Voice />
        <Services />
        <WhyWorkWithMe />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default Home;