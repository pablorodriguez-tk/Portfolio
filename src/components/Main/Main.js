import React, { useState } from 'react';
import { images } from '../../utils/ImageArray';
import ImageGallery from '../ImageGallery/ImageGallery';
import Modal from '../Modal/Modal';

const Main = () => {
  const [image, setImage] = useState('');

  return (
    <main>
      <div className="container">
        {/* Portfolio */}
        <div className="row portafolio g-0 px-4 mb-5">
          <div className="col">
            {/* Titulo */}
            <h2 className="titulo text-center py-5">Portafolio</h2>
            {/* Galeria de imagenes */}
            <div className="row galeria">
              {images.map((img) => (
                <ImageGallery img={img} setImage={setImage} />
              ))}
            </div>
            <Modal image={image} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
