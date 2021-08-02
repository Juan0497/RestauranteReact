import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

class Login extends React.Component {
  handleClick = e => {
    e.preventDefault();

    localStorage.setItem("ID", "123");
  };
  render() {
    return (
      <div>
        <Navbar />
        <br />
        <br />
        <br />
        <br />

        <form className="col-12">
          <MDBContainer className="d-flex justify-content-center ">
            <MDBRow>
              <MDBCol md="12">
                <form>
                  <p className="h5 text-center mb-8">
                    <h1>Sign in</h1>
                  </p>
                  <div className="grey-text">
                    <MDBInput
                      label="Type your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Type your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                  </div>
                  <div className="text-center">
                    <Link to="/inicio">
                      {" "}
                      <button
                        type="button"
                        class="btn btn-primary"
                        onClick={this.handleClick}
                      >
                        Singin
                      </button>
                    </Link>
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </form>
      </div>
    );
  }
}

export default Login;
