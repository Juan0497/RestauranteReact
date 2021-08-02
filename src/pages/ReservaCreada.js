import React from "react";
import Navbar from "../components/NavbarRegistrado";
import "bootstrap/dist/css/bootstrap.min.css";

class ReservaCreada extends React.Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <h1>Agenda de Reservas</h1>
        <form className="d-flex justify-content-center">
          <ul className="list-group col-8  ">
            <label className="list-group-item bg-primary text-light">
              Restaurante
            </label>
            <li className="list-group-item ">Selina</li>

            <label className="list-group-item bg-primary text-light">
              Hora y fecha de la Reserva
            </label>
            <li className="list-group-item ">9:00pm 25/9/2019</li>
            <label className="list-group-item bg-primary text-light">
              Tamaño de la reserva
            </label>
            <li className="list-group-item ">10 personas</li>
          </ul>
        </form>
      </div>
    );
  }
}

export default ReservaCreada;
