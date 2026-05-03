import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <Services />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
