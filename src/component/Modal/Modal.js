import React from 'react';
import './Modal.css';

const Modal = ({ show, handleClose}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  console.log(showHideClassName);


  return (
    <div id="Modal" className={showHideClassName}>
      <section className="modal-main">
        <h1 className="modal-title">Modal Title</h1>
        <img src="https://via.placeholder.com/300" alt="Modal" className="modal-image" />
        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        
        <button onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};

export default Modal;
