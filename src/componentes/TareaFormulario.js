import React, { useState} from "react";
import "../hojas-de-estilo/TareaFormulario.css";

function TareaFormulario(props) {

  const [input, setInput] = useState("");

  const manejarCambio = e => {
  /*  (e.target.value) nos va a permitir extraer el valor del campo de texto que ingreso el usuario*/
    setInput(e.target.value);
    console.log(e.target.value);
  }

/*la e equivale a envio */
  const manejarEvio = e => {
    const tareaNueva = {
    id:"34545",
    texto:"hola"
    }
  }

  return (
    <form 
      className="tarea-formulario">
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
