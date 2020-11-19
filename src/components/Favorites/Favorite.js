import React from 'react';

import Card from '../UI/Card';
import './Favorite.css';

const Favorite = props => {
  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="favorite-item">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </Card>
  );
};

export default Favorite;
