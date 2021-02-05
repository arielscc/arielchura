import { AboutMe } from '../About/AboutMe';
import { Contact } from '../Contact/Contact';
import { Experience } from '../Experience/Experience';
import { Footer } from '../ui/Footer';
import { Header } from '../Header/Header';
import { Projects } from '../Projects/Projects';
import { Navbar } from '../ui/Navbar';
import './Main.css';
export const Main = () => {
  return (
    <div className="main">
      <Navbar />
      <Header />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};
