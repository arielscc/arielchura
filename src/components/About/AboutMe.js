import { Getsvg } from '../../svg/Getsvg';
import './AboutMe.css';
const skills = {
  design: ['Inkscape', 'Photoshop', 'Figma'],
  frontend: [
    'Html',
    'Css',
    'JavaScript',
    'TailwindCss',
    'ReactJs',
    'VueJs',
    'Jest',
  ],
  backend: ['Php', 'Laravel'],
  databases: ['Mysql', 'PostgreSql'],
  tools: ['VSCode', 'Terminal', 'Git', 'Emacs'],
};
const skillNames = Object.keys(skills);

export const AboutMe = () => {
  return (
    <section className="about">
      <h2 className="about__title">Sobre mí</h2>
      <div className="about__content">
        <figure className="about__image">
          <img src="./assets/images/profile.jpg" alt="" />
        </figure>
        <div className="about__description">
          <p>
            ¡Hola! Soy Ariel Chura, Soy ingeniero de sistemas y soy La Paz,
            Bolivia. Disfruto creando cosas que estén en Internet, ya sean
            sitios web, o cualquier otra cosa. Mi objetivo es siempre crear
            productos que proporcionen experiencias de rendimiento y
            accesibilidad.
          </p>
          <p>
            Mientras cursaba los ultimos años de mi carrera. Me uní al equipo de
            Tic-facultativo de la{' '}
            <a
              href="http://www.fcpn.edu.bo/"
              target="_blank"
              className="about__description--link"
            >
              Facultad de ciencias puras y naturales
            </a>{' '}
            donde pude aprender bastante sobre trabajo en equipo.
            <br />
          </p>
        </div>
        <div className="skills about__description">
          <h3>Habilidades</h3>
          <p>
            Estas son las herramientas con las que me permití explorar y crear
            algunas cosas:
          </p>
          <div className="skills__container">
            {skillNames.map((skill) => {
              return (
                <div key={skill} className="skill__container">
                  <h4 className="skill__type">{skill}</h4>
                  <div className="grid">
                    {skills[skill].map((item) => {
                      return (
                        <div key={item} className="grid__item">
                          <div className="skill__image">{Getsvg(item)}</div>
                          <p>{item}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
