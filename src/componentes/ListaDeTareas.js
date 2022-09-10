import React, {useState} from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import "../hojas-de-estilo/ListaDeTareas.css";
/*si no quieres introducir un div nuevo en tu componente ya que no se puede tener dos elementos en un componente 
vamos a usar fragmentos, que son etiquetas vacias que nos permite no tener que usar <div>*/

function ListaDeTareas() {
/*map es un metodo que va a tomar cada una de esas tareas las va a pasar una por una como el 
argumento para otra funcion y va a realizar lo que nosotros especifiquemos.
CADA TAREA SE VA A REPRESENTAR COMO UN OBJETO EN EL ARREGLO (ARRAY)*/ 
  const [tareas, setTareas] = useState([]);

  const agragarTarea = tarea => {
    console.log("Tarea agrada");
    console.log(tarea);
  }
  return (
    <>
      <TareaFormulario/>
        <div className="tareas-lista-contenedor">
          {
            tareas.map((tarea) =>
              <Tarea
                texto={tarea.texto}
                completata={tarea.completada} />
            )
          }

        </div>
    </>
    )
}

export default ListaDeTareas