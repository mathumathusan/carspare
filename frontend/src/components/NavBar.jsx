import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">CarSpare</div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><Link to={'/home'}>Home</Link></li>
        <li><a href="#about">About</a></li>
        <li><Link to={'/manage'}>Manage</Link></li>
        <li><Link to={'/services'}>Services</Link></li>
        <li><a href="#contact">Contact</a></li>
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
