import React, { useState} from "react";
import "../hojas-de-estilo/TareaFormulario.css";
import { v4 as uuidv4 } from "uuid";

function TareaFormulario(props) {

  const [input, setInput] = useState("");

  const manejarCambio = e => {
  /*  (e.target.value) nos va a permitir extraer el valor del campo de texto que ingreso el usuario*/
    setInput(e.target.value);
    console.log(e.target.value);
  }

/*la e equivale a envio */
/*usamos preventDefault para que no se cargue otra vez la aplicacion despues de enviar un envio*/ 
  const manejarEvio = e => {
    e.preventDefault();
    
/*para generar una id unica vamos a usar un paquete que se llama uuid*/ 
    const tareaNueva = {
    id: uuidv4(),
    texto: input,
    completada: false
    }
    props.onSubmit(tareaNueva);
  }
   /*usamos un event lis.. con el evento onSubmit para manejar el envio*/ 
  return (
    <form 
      className="tarea-formulario"
      onSubmit = {manejarEvio}>   
      
      <input
        className="tarea-input"
        type="text"
        /*con placeholder conseguimos que el texto que se muestra desaparecca al poco de que el usuario escriba algo*/
        placeholder="Escribe una Tarea"
        name="texto"
        /*usamos un event onChange*/
        onChange={manejarCambio}
      />
      <button className="tarea-boton">
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario;
