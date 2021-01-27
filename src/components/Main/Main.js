import { AboutMe } from '../About/AboutMe';
import { Experience } from '../Experience/Experience';
import { Header } from '../Header/Header';
import { Navbar } from '../ui/Navbar';
import './Main.css';
export const Main = () => {
  return (
    <div className="main">
      <Navbar />
      <Header />
      <AboutMe />
      <Experience />
      <p style={{ height: '5000px' }}></p>
    </div>
  );
};
