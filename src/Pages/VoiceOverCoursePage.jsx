import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./VoiceOverCoursePage.css";

function VoiceOverCoursePage() {
  const [posterUnavailable, setPosterUnavailable] = useState(false);

  return (
    <>
      <Navbar />

      <main className="inner-page voice-course-page">
        <section className="voice-course" aria-labelledby="voice-course-title">
          <div className="voice-course-copy">
            <p className="voice-course-eyebrow">BHUTANI VOICE STATION · TRAINING</p>
            <h1 id="voice-course-title">
              Voice-Over
              <br />
              <span>Course</span>
            </h1>
            <p className="voice-course-description">
              Explore voice-over training and find the course details in the poster.
            </p>
          </div>

          <figure className="voice-course-poster">
            {!posterUnavailable ? (
              <img
                src="/voiceover-course-poster.png"
                alt="Voice-over course poster"
                onError={() => setPosterUnavailable(true)}
              />
            ) : (
              <div className="voice-course-poster-placeholder">
                <span className="voice-course-poster-mark">B.V.S.</span>
                <span className="voice-course-poster-title">Course poster</span>
                <span className="voice-course-poster-hint">
                  Add your poster as public/voiceover-course-poster.png
                </span>
              </div>
            )}
          </figure>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default VoiceOverCoursePage;
