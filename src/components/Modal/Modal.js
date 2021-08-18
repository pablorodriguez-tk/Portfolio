const Modal = ({ image }) => {
  return (
    <div
      className="modal fade"
      id="modal-galeria"
      tabindex="-1"
      aria-labelledby="modal-galeria"
      area-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <img src={image} alt="" id="imagen-modal" className="" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
