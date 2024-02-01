import React, { useState } from "react";
import FlechUp from "../../Asset/Images/Collapse/FlechUp.png";

const Collapse = ({ title, content }) => {
  //declaration du state en utilisant le Hook useState()
  const [isOpen, setIsOpen] = useState(false); // je definie le state du toggle (et false par défaut)

  return (
    // affiche le collapse replié par défaut et l'ouvre au clic puis le referme au clic en faisant disparaitre le texte et le style
    <div className="collapse__dropdown__container">
      <div className="collapse__dropdown__title">
        <h2>{title}</h2>
         <p className={`fleche-dropdown ${isOpen}`} href={`#dropdown-${title}`} onClick={() => setIsOpen(!isOpen)}>
                    <img src={FlechUp} alt="Ouvrir cette liste"/>
                </p>
      </div>
      {/* Si le collapse est à TRUE alors il affichera la description */}
      <div className="collapse__dropdown__content">
        {isOpen && <p>{content}</p>}
      </div>
    </div>
  );
};

export default Collapse;