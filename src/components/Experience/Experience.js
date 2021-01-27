import './Experience.css'
export const Experience = () => {

  return (
    <section className="experience">
      <div className="experience__container">
        <h2 className="experience__title">Mi experiencia</h2>
        <div className="exp__card">

          <input type="radio" name="select" id="tap-1" defaultChecked />
          <input type="radio" name="select" id="tap-2" />
          <input type="radio" name="select" id="tap-3" />

          <div className="exp__content content-1">
            <span className="exp_title">Facultad de ciencias puras y naturales</span>
            <span className="exp_rol">hol</span>
            <p className="exp_desc">Nisi consectetur aliquip Lorem officia dolore aute mollit qui adipisicing cupidatat aute.</p>
            <p className="exp_desc">Aliqua anim consequat duis aliqua. Officia id do mollit dolor laborum. Veniam fugiat ullamco exercitation sint. Pariatur sunt exercitation aliqua deserunt aute.</p>
          </div>

          <div className="exp__content content-2">
            <span className="exp_title">Juanito puras y naturales</span>
            <span className="exp_rol">hol</span>
            <p className="exp_desc">Nisi consectetur aliquip Lorem officia dolore aute mollit qui adipisicing cupidatat aute.</p>
            <p className="exp_desc">Aliqua anim consequat duis aliqua. Officia id do mollit dolor laborum. Veniam fugiat ullamco exercitation sint. Pariatur sunt exercitation aliqua deserunt aute.</p>
          </div>

          <div className="exp__content content-3">
            <span className="exp_title">Facultad de ciencias puras y naturales</span>
            <span className="exp_rol">hol</span>
            <p className="exp_desc">Nisi consectetur aliquip Lorem officia dolore aute mollit qui adipisicing cupidatat aute.</p>
            <p className="exp_desc">Aliqua  laborum. Veniam fugiat ullamco exercitation sint. Pariatur sunt exercitation aliqua deserunt aute.</p>
          </div>
          
          <div className="sliders">
            <label className="slider tap-1" htmlFor="tap-1">Hola</label>
            <label className="slider tap-2" htmlFor="tap-2">Holas</label>
            <label className="slider tap-3" htmlFor="tap-3">Holae</label>
          </div>
        </div>


      </div>
    </section>
  )
}