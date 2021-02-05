import React, { useState } from 'react';
import './Navbar.css';

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleMenu = () => {
    setShow(!show);
  };

  return (
    <>
      <header className="header">
        <div className="header__menu">
          <a href="/" className="header__logo">
            <svg viewBox="0 0 27.43 27.41" width="40" height="40">
              <g fill="none" stroke="#f05454">
                <path d="M17.89 17.02l.53 1.22c-8.37-3.02-14.24 2.6-17.81 8.84L11.52 1.7z" />
                <path d="M24.41 27.08L13.92 1.7 3.06 27.08c4.38-9.83 17.04-10.13 21.35 0z" />
                <path d="M26.82 27.08L16.37 1.7 5.45 27.08c3.08-6.9 13.73-6.86 16.59 0" />
              </g>
            </svg>
          </a>
          <button
            onClick={handleMenu}
            className="header__menu--button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#f05454"
              width="40px"
              height="40px"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <nav>
          {show && (
            <div onClick={handleMenu} className="header__blur"></div>
          )}
          <ol className={`header__nav ${show && 'header__nav-show'}`}>
            <li>
              <a href="">Acerca</a>
            </li>
            <li>
              <a href="">Experiencia</a>
            </li>
            <li>
              <a href="">Proyectos</a>
            </li>
            <li>
              <a href="">Contacto</a>
            </li>
          </ol>
        </nav>
      </header>
    </>
  );
};
