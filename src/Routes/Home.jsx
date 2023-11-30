import React, { useEffect, useContext } from 'react';
import AppContext from '../Components/utils/AppContext';
import Card from '../Components/Card';

const Home = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => dispatch({ type: 'SET_DATA', payload: data }));
  }, [dispatch]);

  return (
    <main>
      <h1>Home</h1>
      <div className='card-grid'>
        {state.data.map(user => (
          <Card key={user.id} {...user} />
        ))}
      </div>
    </main>
  );
};

export default Home;