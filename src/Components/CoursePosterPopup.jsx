import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./CoursePosterPopup.css";

function CoursePosterPopup() {
  const [isOpen, setIsOpen] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!isOpen || pathname !== "/") return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    const timer = window.setTimeout(() => setIsOpen(false), 7000);

    document.addEventListener("keydown", closeOnEscape);
    document.body.classList.add("course-popup-open");

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("course-popup-open");
    };
  }, [isOpen, pathname]);

  if (!isOpen || pathname !== "/") return null;

  return (
    <div
      className="course-popup-backdrop"
      onClick={() => setIsOpen(false)}
      role="presentation"
    >
      <section
        className="course-popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="course-popup-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="course-popup-close"
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close course announcement"
        >
          ×
        </button>

        <img
          className="course-popup-poster"
          src="/voiceover-course-poster.png"
          alt="Bhutani Voice Station voice-over course poster"
        />

        <div className="course-popup-copy">
          <p className="course-popup-eyebrow">VOICE-OVER COURSE</p>
          <h2 id="course-popup-title">
            Batch Full Soon.
            <br />
            <span>Hurry Up!</span>
          </h2>
          <p className="course-popup-byline">
            By Dhruv Bhutani
            <span>Voice-Over Artist</span>
          </p>
        </div>
      </section>
    </div>
  );
}

export default CoursePosterPopup;
