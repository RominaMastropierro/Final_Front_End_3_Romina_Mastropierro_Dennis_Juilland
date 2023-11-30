import React, { useEffect, useState } from 'react';
import Card from '../Components/Card'; // Ajusta la ruta según la estructura de tu proyecto

const Favs = () => {
  
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem('favs')) || [];
    setFavs(storedFavs);
  }, []);

  const clearFavs = () => {
    // Vacía la lista de favoritos
    setFavs([]);

    // Actualiza el almacenamiento local
    localStorage.setItem('favs', JSON.stringify([]));
  };

  return (
    <>
      <h1>Dentistas Favoritos</h1>
      <button className='clear_Favs' onClick={clearFavs}>Limpiar Favoritos</button> {/* Botón para limpiar favoritos */}
      <div className="card-grid">
        {favs.map(fav => (
          <Card key={fav.id} {...fav} />
        ))}
      </div>
    </>
  );
};

export default Favs;
