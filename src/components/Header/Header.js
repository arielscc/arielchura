import { useEffect } from 'react';
import './Header.css';

export const Header = () => {
  return (
    <main className="main__container">
      <div>
        <p className="main__greeting">Hola, mi nombre es</p>
        <h1 className="main__name">Ariel Chura.</h1>
        <p className="main__title">Construyo cosas para la web.</p>
        <p className="main__description">
          Soy un ingeniero de sistemas de La Paz, Bolivia y me especializo en el
          desarrollo Front-end, también soy un apacionado por el diseño y la
          ilustración.
        </p>
        <button className="main__contact">Ponte en contacto</button>
      </div>
    </main>
  );
};
