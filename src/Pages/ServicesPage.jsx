import Navbar from "../Components/Navbar";
import Services from "../Components/Services";
import WhyWorkWithMe from "../Components/WhyWorkWithMe";
import Footer from "../Components/Footer";

function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="inner-page">
        <Services />
        <WhyWorkWithMe />
      </main>

      <Footer />
    </>
  );
}

export default ServicesPage;