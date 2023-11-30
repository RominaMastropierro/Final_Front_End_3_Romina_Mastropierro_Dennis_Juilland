import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from './utils/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Card = ({ name, username, id }) => {
  const { dispatch } = useContext(AppContext);

  const addFav = () => {
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    const newFav = { name, username, id };
    if (!favs.some(fav => fav.id === id)) {
      const updatedFavs = [...favs, newFav];
      localStorage.setItem('favs', JSON.stringify(updatedFavs));
      dispatch({ type: 'ADD_FAV', payload: newFav }); // Si tienes un action para actualizar favs en el contexto
    }
  };

  return (
    <div className="card">
      <img src="./images/doctor.jpg" alt="Imagen_Doctor" />
      <Link to={`/dentist/${id}`}>
        <p className='p_Name'>{name}</p>
        <p className='p_Username'>{username}</p>
      </Link>
      <button onClick={addFav} className="favButton">
        <FontAwesomeIcon icon={faStar} fade style={{ color: "#fff700", }} />
      </button>
    </div>
  );
};

export default Card;
