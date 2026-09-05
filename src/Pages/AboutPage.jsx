import Navbar from "../Components/Navbar";
import About from "../Components/About";
import Footer from "../Components/Footer";

function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="inner-page">
        <About />
      </main>

      <Footer />
    </>
  );
}

export default AboutPage;