import React from "react";

class Formulario extends React.Component {
  render() {
    return (
      <div>
        <h1>Formulario de Reserva</h1>
        <form className="">
          <label> Fecha </label>
          <input type="date" name="fecha" />

          <label> Cantidad de personas </label>
          <input type="number" name="CantPers" />

          <button>Reservar</button>
        </form>
      </div>
    );
  }
}

export default Formulario;
