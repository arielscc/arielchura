import { Header } from '../Header/Header';
import { Navbar } from '../ui/Navbar';
import './Main.css';
export const Main = () => {
  return (
    <div className="main">
      <Navbar />
      <Header />
      <p style={{ height: '5000px' }}></p>
    </div>
  );
};
