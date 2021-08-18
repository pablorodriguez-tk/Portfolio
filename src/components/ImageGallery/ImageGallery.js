import React from 'react';
import { Link } from 'react-router-dom';

const ImageGallery = ({ img, setImage }) => {
  return (
    <div className={img.styles} onClick={() => setImage(img.url)}>
      <Link to="#" data-bs-toggle="modal" data-bs-target="#modal-galeria">
        <img src={img.url} alt="" className="d-block w-100" />
      </Link>
    </div>
  );
};

export default ImageGallery;
