import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ella Udotong | Backend Developer - Python & Django Expert</title>
        <meta
          name="description"
          content="Ella Udotong is a Python enthusiast and Django backend developer based in Lagos, Nigeria. Building scalable backend systems and APIs."
        />
        <meta
          name="keywords"
          content="Backend Developer, Python, Django, FastAPI, Lagos, Nigeria, Software Engineer"
        />
        <meta property="og:title" content="Ella Udotong | Backend Developer" />
        <meta
          property="og:description"
          content="Python enthusiast & Django developer building scalable backend systems."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ellaudotong.dev" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
