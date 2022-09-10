import React from "react";
import "../hojas-de-estilo/Tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
/*className "tarea-icono lo estamos pasando como un props directamente para que se apliquen los cambios, viene en la documentacion de react icono*/ 

function Tarea ({id, texto, completada, completarTarea, eliminarTarea}) {
  /*el props "completada" va ser verdadero o falso y por eso vamos a usar un operador ternario, 
   si la tarea esta completada se muestra "tarea-contenedor completada y si no se muestra "tarea-contenedor*/ 
  return (
    <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
    <div className="tarea-texto"
      onClick={() => completarTarea(id)}>
      {texto}
    </div>
    <div className="tarea-contenedor-iconos"
      onClick={() => eliminarTarea(id)}>
      <AiOutlineCloseCircle className="tarea-icono"/>

    </div>
  </div>
  )
}

export default Tarea;