import React from "react";


function Banniere({ image, texte }) {
  return (
    <div>
      <img src={image} alt="Bannière" />
      <div></div>
      <span>{texte}</span>
    </div>
  );
}

export default Banniere;

