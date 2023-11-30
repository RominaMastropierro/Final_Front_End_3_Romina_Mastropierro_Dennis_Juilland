import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from './utils/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faMeteor } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleThemeChange = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav className="navbar">
    <div className="logo-container">
      <h3>DH Odonto</h3>
      <FontAwesomeIcon icon={faCoffee} /> {/* Icono de Coffee */}
    </div>
    <Link to="/home">Home</Link>
    <Link to="/contacto">Contacto</Link>
    <Link to="/favs">Favoritos</Link>
    <button className="toggle-theme-button" onClick={handleThemeChange}>
      <FontAwesomeIcon icon={faMeteor} /> {/* Icono de Meteor en el botón */}
    </button>
  </nav>
  );
};

export default Navbar;
