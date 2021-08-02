import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavbarUsuario from "./components/NavbarRegistrado";
import Principal from "./pages/Principal";
import Login from "./components/Login";
import Reservas from "./pages/Reservas";
import ReservaCreada from "./pages/ReservaCreada";
import PrincipalRegistrado from "./pages/PrincipalRegistrado";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <BrowserRouter>
    <NavbarUsuario />

    <Switch>
      <Route exact path="/" component={Principal} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/reservas" component={Reservas} />
      <Route exact path="/reservacreada" component={ReservaCreada} />
      <Route exact path="/inicio" component={PrincipalRegistrado} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
