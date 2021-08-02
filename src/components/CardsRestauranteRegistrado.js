import React from "react";
import { Link } from "react-router-dom";

class CardRestauranteRegistrado extends React.Component {
  render() {
    return (
      <div>
        <div class="main">
          <div class="card">
            <div class="image">
              <img src="https://www.cursosgastronomia.com.mx/wp-content/uploads/2014/05/caracteristicas-de-restaurante-exitoso.JPG" />
            </div>
            <div class="title">
              <h2>Restaurante</h2>
              <br />
              <h2>San Jose</h2>
              <br />
              <h2>L-S de 8:00am - 10:00pm</h2>
              <Link to="/reservas">
                <button type="button" class="btn btn-primary">
                  Registrar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardRestauranteRegistrado;
