import React from 'react';
import { Link } from 'react-router-dom';
import carousel1 from '../../img/slide1.jpg';
import carousel2 from '../../img/slide2.jpg';
import carousel3 from '../../img/slide3.jpg';

const Header = () => {
  return (
    <header className="container my-5">
      <div className="nav row justify-content-between rounded-top g-0">
        {/* Logotipo */}
        <div className="logo col-auto d-flex align-items-center ps-4">
          <h2 className="fw-bold text-uppercase mb-0">Pablo Rodriguez</h2>
          <div className="icono ">
            <i className="bi bi-dot" />
          </div>
          <p className="mb-0">Desarrollador Web</p>
        </div>

        {/* Enlaces */}
        <nav className="menu col-auto d-flex align-items-stretch">
          <Link
            to="#"
            className="c1 px-4 d-flex text-white text-decoration-none align-items-center text-center"
          >
            <div className="w-100">
              <span>Portafolio</span>
              <div className="icono">
                <i className="bi bi-briefcase-fill" />
              </div>
            </div>
          </Link>
          <Link
            to="#"
            className="c2 px-4 d-flex text-white text-decoration-none align-items-center text-center"
          >
            <div className="w-100">
              <span>Acerca de</span>
              <div className="icono">
                <i className="bi bi-person-fill" />
              </div>
            </div>
          </Link>
          <Link
            to="#"
            className="c3 px-4 d-flex text-white text-decoration-none align-items-center text-center"
          >
            <div className="w-100">
              <span>Contacto</span>
              <div className="icono">
                <i className="bi bi-envelope-fill" />
              </div>
            </div>
          </Link>
        </nav>
      </div>
      {/* Slider */}
      <div className="row slider">
        <div className="col">
          <div className="carousel slide" data-bs-ride="carousel" id="slider">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={carousel1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={carousel2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={carousel3} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#slider"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#slider"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Siguiente</span>
            </button>
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#slider"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#slider"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#slider"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
