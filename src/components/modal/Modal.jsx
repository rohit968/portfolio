import React from "react";
import { Link } from "react-router-dom";
import { IoCloseCircle } from "react-icons/io5";
import "./modal.css";

const Modal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <Link className="modal-links" to="/">
          Home
        </Link>
        <Link className="modal-links" to="/about">
          About
        </Link>
        <Link className="modal-links" to="/projcets">
          Projects
        </Link>
        <Link className="modal-links" to="/contact">
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
