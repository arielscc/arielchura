import React from 'react';
import './Contact.css';

export const Contact = () => {
  return (
    <div className="contact">
      <h2 className="contact__title">Contactame</h2>
      <p>
        Aunque actualmente me encuentro buscando nuevas oportunidades,
        mi bandeja de entrada siempre está abierta. Ya sea que tenga
        una pregunta o simplemente quiera saludar, ¡haré todo lo
        posible para responderle!
      </p>
      <a href="mailto:ariel.chura.c@gmail.com">Contacto</a>
    </div>
  );
};
