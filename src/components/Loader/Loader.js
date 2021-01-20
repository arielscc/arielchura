import { useEffect } from 'react';
import './Loader.css';
export const Loader = () => {
  const resizeVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  useEffect(() => {
    window.addEventListener('resize', resizeVh);
    return () => {
      window.removeEventListener('resize', resizeVh);
    };
  }, []);

  return (
    <div className="container">
      <svg className="logo" viewBox="0 0 27.43 27.41">
        <g className="logo__group" fill="none">
          <path
            className="first__triangle"
            d="M17.89 17.02l.53 1.22c-8.37-3.02-14.24 2.6-17.81 8.84L11.52 1.7z"
          />
          <path
            className="second__triangle"
            d="M24.41 27.08L13.92 1.7 3.06 27.08c4.38-9.83 17.04-10.13 21.35 0z"
          />
          <path
            className="third__triangle"
            d="M26.82 27.08L16.37 1.7 5.45 27.08c3.08-6.9 13.73-6.86 16.59 0"
          />
        </g>
      </svg>
    </div>
  );
};
