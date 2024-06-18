import { Faq, Footer, Hero, Navbars, Service, Sewa, Testimonial, WhyUs } from "../components";

export default function Home() {
  return (
    <>
      <header style={{ backgroundColor: "rgba(241, 243, 255, 1)" }}>
        <Navbars />
        <Hero isLandingPage />
      </header>
      <main style={{ backgroundColor: "#ffff" }}>
        <Service />
        <WhyUs />
        <Testimonial />
        <Sewa />
        <Faq />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
