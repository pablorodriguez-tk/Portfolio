import React, { useState } from 'react';
import { images } from '../../utils/ImageArray';
import About from '../About/About';
import ImageGallery from '../ImageGallery/ImageGallery';
import Modal from '../Modal/Modal';

const Main = () => {
  const [image, setImage] = useState('');

  return (
    <main>
      <div className="container">
        <div className="row portafolio g-0 px-4 mb-5">
          <div className="col">
            <h2 className="titulo text-center py-5">Portafolio</h2>
            <div className="row galeria">
              {images.map((img) => (
                <ImageGallery img={img} setImage={setImage} key={img.url} />
              ))}
            </div>
            <Modal image={image} />
          </div>
        </div>
        <About />
      </div>
    </main>
  );
};

export default Main;
