import React from "react";
import CardsRestauranteRegistrado from "../components/CardsRestauranteRegistrado";
import "./styles/Principal.css";

class PrincipalNoUsuario extends React.Component {
  render() {
    console.log(localStorage.getItem("ID"));
    return (
      <div className="box flex-row justify-content-around">
        <CardsRestauranteRegistrado />
        <CardsRestauranteRegistrado />
        <CardsRestauranteRegistrado />
        <div class="parallax"></div>
      </div>
    );
  }
}

export default PrincipalNoUsuario;
