import React, { useState } from "react";
import "./NavBar.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

function NavBar({ showCartIcon, cart }) {
  const [isOpen, setIsOpen] = useState(false);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">CarSpare</div>
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        {showCartIcon && (
          <li>
            <Link to={"/cart"}>
              {" "}
              <div className="cart-icon-wrapper">
                <ShoppingCartOutlinedIcon className="cartIcon" />
                {totalQuantity > 0 && (
                  <span className="cart-badge">{totalQuantity}</span>
                )}
              </div>
            </Link>
          </li>
        )}
        <li>
          <Link to={"/home"}>Home</Link>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <Link to={"/manage"}>Manage</Link>
        </li>
        <li>
          <Link to={"/services"}>Services</Link>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default NavBar;
