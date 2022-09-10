import React from "react";
import "../App.css";



function Logo (Foto) {
  return (
    <div className="freecodecamp-logo-contenedor">
      <img
        className="freecodecamp-logo"
        src={require(`../imagenes/freecodecamp-${Foto.imagen}.png`)}
        alt="foto de logo"/>
    </div>


  )
}

export default Logo;