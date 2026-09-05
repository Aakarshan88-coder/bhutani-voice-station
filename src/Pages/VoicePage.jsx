import Navbar from "../Components/Navbar";
import Voice from "../Components/Voice";
import Footer from "../Components/Footer";

function VoicePage() {
  return (
    <>
      <Navbar />

      <main className="inner-page">
        <Voice />
      </main>

      <Footer />
    </>
  );
}

export default VoicePage;