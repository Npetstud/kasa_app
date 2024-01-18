import React from 'react';


function Card({image, title}) {
    return (
      <div>
        <img src={image} alt={title} />
        <div></div>

        <h2>{title}</h2>
      </div>
    );
}

export default Card;