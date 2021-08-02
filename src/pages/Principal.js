import React from "react";
import "./styles/Principal.css";
import CardsRestaurante from "../components/CardsRestaurante";
import Navbar from "../components/Navbar";
import axios from "axios";
class Principal extends React.Component {
  state = {
    restaurante: [
      {
        nombre: "",
        horario: "",
        ubicacion: "",
        menu: "",
        parqueo: "",
        espacio: ""
      }
    ]
  };
  componentDidMount() {
    console.log("componentDidMount Principal");
    this.fetchApi();
  }

  fetchApi = () => {
    console.log("fetch antes");

    axios.get("http://localhost:5000/restaurantes/").then(res => {
      console.log("Fetch despues");

      const restaurantes = res;
      console.log(restaurantes);
      this.setState({
        restaurante: restaurantes
      });

      console.log(res.data);
    });
  };
  render() {
    return (
      <div>
        <Navbar />
        <div class="parallax"></div>

        <div className="box flex-row justify-content-around">
          <CardsRestaurante restaurante={this.state.restaurante[0]} />
          <CardsRestaurante />
          <CardsRestaurante />
        </div>
      </div>
    );
  }
}

export default Principal;
