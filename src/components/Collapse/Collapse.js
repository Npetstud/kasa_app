import React, { useState } from "react";

const Collapse = ({ title, content }) => {
  //declaration du state en utilisant le Hook useState()
  const [isOpen, setIsOpen] = useState(true); // je definie le state du toggle (True pour tester sinon False)

  //fonction pour gérer l'afichage du contenu des collapses
  const display = () => {
    setIsOpen(!isOpen);
  };

  return (
    // affiche le collapse replié par défaut et l'ouvre au clic puis le referme au clic en faisant disparaitre le texte et le style
    <div>
      <div>
        <h2>{title}</h2>
        <p onClick={display}>
          {isOpen ? (
            <i class="fa-solid fa-chevron-up"></i>
          ) : (
            <i class="fa-solid fa-chevron-down"></i>
          )}
        </p>
      </div>
      {/* Si le collapse est à TRUE alors il affichera la description */}
      <div>
        {isOpen && <p>{content}</p>}
      </div>
    </div>
  );
};

export default Collapse;