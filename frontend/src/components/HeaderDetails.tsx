import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/CShow.svg';
import '../css/HeaderDetails.css';

function HeaderDetails() {
  return (
    <header className="container-header-details">
      <div className="container-nav-details">
        <img src={Logo} alt="Logo" className="logo-header" />
        <Link to="/" className="link-header-details">Home</Link>
      </div>
    </header>
  );
}

export default HeaderDetails;
