import React from 'react';
import Tilt from 'react-tilt';
import laurel from './laurel.png';
import './logo.css';
const Logo = ()=>{
  return(
    <div className="ma4 mt4">
      <Tilt className="Tilt br2 shadow-2" options={{ max : 100 }} style={{ height: 100, width: 100 }} >
       <div className="Tilt-inner"> <img alt="laurel" src={laurel} /> </div>
      </Tilt>
    </div>

  )
}

export default Logo;
