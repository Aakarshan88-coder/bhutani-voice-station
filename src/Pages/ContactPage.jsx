import Navbar from "../Components/Navbar";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="inner-page">
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default ContactPage;