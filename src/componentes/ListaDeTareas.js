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
/*con el metodo trim, al quitarle los espacios estamos comprobando que la cadena texto no esta vacia*/
/*con la segunda linea le estamos quitando los espacios inecesarios*/ 
  const agregarTarea = tarea => {
    
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
/*hacemos un array y ponemos tarea al principio para que sea la primera que se ve y luego le pasamos el 
resto de tareas usando el operador extend ... para pasarlas de manera individual */ 
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas)
    }
  }
/*para poder eliminar tenemos primero que filtrar las tareas y para eso usamos el metodo filter y luego le ponemos una condicion
el que cumpla esta condicion lo vamos a incluir en el array pero si la id es igual no lo vamos a incluir*/ 
  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    /*con set estamos actualizando el estado del componente*/
    setTareas(tareasActualizadas);
  }

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      /*usaremos un condicional para saber si tarea es completada y si ya estaba completada se desmarca*/ 
      if (tarea.id === id) {
        /*las tareas son objetos que tienen una propiedad completada, con ! la hacemos falsa, invertimos su estado*/ 
        tarea.completada = !tarea.completada;
      }
      return tarea
    });
    setTareas(tareasActualizadas);
  }


  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
        <div className="tareas-lista-contenedor">
          {
            /*El método map , lo utilizamos cuando queremos transformar un arreglo , pero persistiendo el arreglo original ,
             dicho en otras palabras ejecuta una función dada en cada elemento del arreglo actual 
             y crea un nuevo arreglo con el resultado de la función dada.*/ 
            tareas.map((tarea) =>
              <Tarea
              /*para que react sepa el orden y no loscambie tenemos que pasar
             un atributo muy importante key{} para poder identificar ese elemento unico 
             y tenemos que pasarlo doble porque key no podemos pasarlo como un props*/
             key={tarea.id}
             id={tarea.id} 
             texto={tarea.texto}
             completada={tarea.completada}
             completarTarea={completarTarea}
             eliminarTarea={eliminarTarea} />
            )
          }

        </div>
    </>
    )
}

export default ListaDeTareas