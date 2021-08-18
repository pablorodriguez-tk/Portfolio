import React from 'react';
import foto from '../../img/foto.jpg';

const About = () => {
  return (
    <div className="row acerca-de align-items-center px-4 mb-5">
      <div className="col-12 foto col-lg-4 text-center">
        <img src={foto} className="rounded-circle mb-3" alt="" />
        <p className="nombre">Pablo Rodriguez</p>
      </div>
      <div className="col-12 col-lg-8 info">
        <h2 className="titulo acerca-de text-center text-lg-start">
          Acerca de
        </h2>
        <p className="resumen">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="resumen">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="label">HTML</p>
        <div className="progress mb-3">
          <div
            className="progress-bar text-start"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow="95"
            style={{ width: '95%' }}
          >
            95%
          </div>
        </div>
        <p className="label">CSS</p>
        <div className="progress mb-3">
          <div
            className="progress-bar text-start"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow="100"
            style={{ width: '100%' }}
          >
            100%
          </div>
        </div>
        <p className="label">JS</p>
        <div className="progress mb-3">
          <div
            className="progress-bar text-start"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow="85"
            style={{ width: '85%' }}
          >
            85%
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
