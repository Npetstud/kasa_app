import React from 'react';

function Host(props) {
    return (
      <>
        <span>{props.name}</span>
        <img
          
          src={props.picture}
          alt="Propriétaire"
        />
      </>
    );
}

export default Host;