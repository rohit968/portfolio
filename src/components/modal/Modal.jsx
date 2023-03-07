import React from "react";
import { Link } from "react-router-dom";
import { IoCloseCircle } from "react-icons/io5";
import "./modal.css";

const Modal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <Link className="modal-links" to="/" onClick={onClose}>
          Home
        </Link>
        <Link className="modal-links" to="/about" onClick={onClose}>
          About
        </Link>
        <Link className="modal-links" to="/projcets" onClick={onClose}>
          Projects
        </Link>
        <Link className="modal-links" to="/contact" onClick={onClose}>
          Contact
        </Link>
        <div>
          <IoCloseCircle className="modal-close" onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
