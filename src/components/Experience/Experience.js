import './Experience.css';
// const content = [
//   {
//     id: 1,
//     institution: 'Facultad de ciencias puras y naturales',
//     date: '2018 - 2019',
//     sigla: 'TIC - FCPN',
//     work: {
//       intro:
//         'En esta unidad, justo a un equipo nos encargabamos de desarrollar y dar soporte a sistemas de la facultad.',
//       lab:
//         'Mi labor era dar soporte a sistemas administrativos, esto con el fin de corregir errores en sistemas, bugs y demas. Tambien me encargaba de mantener la red y la infraestructura de la facultad, administrando base de datos y verficando su perfecto estado',
//       fac:
//         'Comunicacion constante con el personal administrativo y el equipo TIC, para ver sus necesidades y corregirlas.',
//     },
//   },
//   {
//     id: 2,
//     institution: 'Facultad de ciencias puras y naturales',
//     date: '2018 - 2019',
//     sigla: 'TIC - FCPN',
//     work: {
//       intro:
//         'En esta unidad, justo a un equipo nos encargabamos de desarrollar y dar soporte a sistemas de la facultad.',
//       lab:
//         'Mi labor era dar soporte a sistemas administrativos, esto con el fin de corregir errores en sistemas, bugs y demas. Tambien me encargaba de mantener la red y la infraestructura de la facultad, administrando base de datos y verficando su perfecto estado',
//       fac:
//         'Comunicacion constante con el personal administrativo y el equipo TIC, para ver sus necesidades y corregirlas.',
//     },
//   },
// ];
export const Experience = () => {
  return (
    <section className="experience">
      <h2 className="experience__title">Mi experiencias</h2>
      <div className="exp__card">
        <input type="radio" name="select" id="tap-1" defaultChecked />
        <input type="radio" name="select" id="tap-2" />
        <input type="radio" name="select" id="tap-3" />

        <div className="exp__content content-1">
          <span className="exp_title">
            Facultad de ciencias puras y naturales
          </span>
          <span className="exp_rol">hol</span>
          <p className="exp_desc">
            Nisi consectetur aliquip Lorem officia dolore aute mollit
            qui adipisicing cupidatat aute.
          </p>
          <p className="exp_desc">
            Aliqua anim consequat duis aliqua. Officia id do mollit
            dolor laborum. Veniam fugiat ullamco exercitation sint.
            Pariatur sunt exercitation aliqua deserunt aute.
          </p>
        </div>

        <div className="exp__content content-2">
          <span className="exp_title">Juanito puras y naturales</span>
          <span className="exp_rol">hol</span>
          <p className="exp_desc">
            Nisi consectetur aliquip Lorem officia dolore aute mollit
            qui adipisicing cupidatat aute.
          </p>
          <p className="exp_desc">
            Aliqua anim consequat duis aliqua. Officia id do mollit
            dolor laborum. Veniam fugiat ullamco exercitation sint.
            Pariatur sunt exercitation aliqua deserunt aute.
          </p>
        </div>

        <div className="exp__content content-3">
          <span className="exp_title">
            Facultad de ciencias puras y naturales
          </span>
          <span className="exp_rol">hol</span>
          <p className="exp_desc">
            Nisi consectetur aliquip Lorem officia dolore aute mollit
            qui adipisicing cupidatat aute.
          </p>
          <p className="exp_desc">
            Aliqua laborum. Veniam fugiat ullamco exercitation sint.
            Pariatur sunt exercitation aliqua deserunt aute.
          </p>
        </div>

        <div className="sliders">
          <label className="slider tap-1" htmlFor="tap-1">
            Hola
          </label>
          <label className="slider tap-2" htmlFor="tap-2">
            Holas
          </label>
          <label className="slider tap-3" htmlFor="tap-3">
            Holae
          </label>
        </div>
      </div>
    </section>
  );
};
