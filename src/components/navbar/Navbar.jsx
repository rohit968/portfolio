import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Modal from "../modal/Modal";
import logo from "../../assets/logo-dark.png";
import moon from "../../assets/icon-moon.svg";
import { IoReorderThreeOutline } from "react-icons/io5";
import "./navbar.css";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    const body = document.querySelector("body");
  };

  return (
    <div>
      <nav className="navbar-main">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/">
              <img src={logo} alt="Logo" className="logo" />
            </Link>
          </div>
          <div className="nav-links">
            <ul>
              <NavLink
                to="/"
                className="link"
                style={({ isActive }) => ({
                  display: isActive && "none",
                })}
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className="link"
                style={({ isActive }) => ({
                  display: isActive && "none",
                })}
              >
                About
              </NavLink>

              <NavLink
                to="/projects"
                className="link"
                style={({ isActive }) => ({
                  display: isActive && "none",
                })}
              >
                Projects
              </NavLink>

              <NavLink
                to="/contact"
                className="link"
                style={({ isActive }) => ({
                  display: isActive && "none",
                })}
              >
                Contact
              </NavLink>
            </ul>
          </div>
          <IoReorderThreeOutline
            className="navigation-icon"
            onClick={toggleModal}
          />
          {showModal && <Modal onClose={toggleModal} />}
          <div className="dark-toggler">
            <img src={moon} alt="moon" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
