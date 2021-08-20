import React from 'react';

const ContactForm = () => {
  return (
    <div className="row contacto justify-content-center py-5 mb-5">
      <div className="col-12 col-lg-8">
        <h2 className="titulo">Contacto</h2>
        <form className="formulario" action="">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  nombre="nombre"
                  id="nombre"
                  className="form-control"
                  placeholder="Nombre"
                />
                <label htmlFor="nombre">Nombre</label>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  nombre="correo"
                  id="correo"
                  className="form-control"
                  placeholder="correo@correo.com"
                />
                <label htmlFor="correo">Correo</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating mb-3">
                <textarea
                  type="text"
                  nombre="mensaje"
                  id="mensaje"
                  className="form-control"
                  placeholder="Mensaje"
                />
                <label htmlFor="mensaje">Mensaje</label>
              </div>
              <div className="d-flex justify-content-center">
                <button className="boton btn btn-primary" type="submit">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
