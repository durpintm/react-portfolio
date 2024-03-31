// components
import Nav from "../components/Nav/nav";
import Hero from "../components/Hero/hero";
import About from "../components/About/about";
import Portfolio from "../components/Portfolio/portfolio";
import Education from "../components/Education/education";
import Contact from "../components/Contact/contact";
import Footer from "../components/Footer/footer";
import Skills from "../components/Skills/skills";

const IndexPage = () => {
  return (
    <div className="page-container">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default IndexPage;
