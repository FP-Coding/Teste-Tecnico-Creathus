import React, { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { House, UserPlus } from '@phosphor-icons/react';
import Logo from '../assets/C.svg';
import '../css/Header.css';

function Header({ location: { pathname } }: RouteComponentProps) {
  
  const selectedHome = pathname === '/' ? 'selected-page' :  '';
  const selectedAdd = pathname === '/novo-filme' ? 'selected-page' :  '';

  return (
    <nav className="container-nav">
      <img src={Logo} alt="Logo" className="logo-header" />
      <Link to="/" className={`link-nav ${selectedHome}`}>
        <House size={40} alt="simbolo que representa uma casa" />
        <span>
          Início
        </span>
      </Link>
      <Link to="/novo-filme" className={`link-nav ${selectedAdd}`}>
        <UserPlus size={40} alt="simbolo que representa um usuário adicionando algo" />
        <span>
          Adicionar
        </span>
      </Link>
    </nav>
  );
}

export default Header;
