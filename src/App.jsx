import Portofolio from "./components/Home/Portofolio"
import Nav from "./components/Nav/Nav"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import Certificates from "./components/Certificates/Certificates"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

function App() {


  return (
    <>
      <Nav/>
      <Portofolio/>
      <About/>
      <Skills/>
      <Projects/>
      <Certificates/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
