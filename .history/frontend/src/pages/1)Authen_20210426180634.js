/* eslint-disable */
import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import book from "./resources/web_logo_bg.png";
import ScriptTag from "react-script-tag";
import props from "prop-types";
import eng from "./resources/imgs/authen/eng.png";
import tha from "./resources/imgs/authen/tha.png";
import Axios from "axios";
import $ from "jquery";
window.$ = $;
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  withRouter,
} from "react-router-dom";

function App() {
  {
    /* Values */
  }
  var regEx1 = /(^(?!\s))+([A-Z]{1}[a-z]{1,256})+([A-Z]{1}[a-z]{1,256})+($)/;
  var regEx2 = /(^(?!\s))+([a-z0-9.]{1,256})+([@]{1}[a-z0-9]{1,256})+([.]{1}[a-z.]{2,3})+($)/;
  function checkStringR() {
    var user = document.getElementById("Username");
    var mail = document.getElementById("Email");
    var pass1 = document.getElementById("Password");
    var pass2 = document.getElementById("C_password");
    if (
      user.value == "" ||
      user.value.length < 6 ||
      regEx1.test(user.value) == false
    ) {
      alert("Please enter username using your real name...\nEx: AlanWalker");
      pass2.value = "";
      throw "exit";
    }
    if (mail.value == "" || regEx2.test(mail.value) == false) {
      alert("Please enter valid email...\nEx: alan@gmail.com");
      pass2.value = "";
      throw "exit";
    }
    if (pass1.value == "" || pass1.value.length < 8) {
      alert("Please enter password with at least 8 characters...");
      pass2.value = "";
      throw "exit";
    }
    if (pass2.value == "") {
      alert("Please enter confirm password correctly...");
      pass2.value = "";
      throw "exit";
    }
    if (pass1.value != pass2.value) {
      alert("Passwords did not match, please try again...");
      pass2.value = "";
      throw "exit";
    }
  }
  {
    /* File */
  }
  function checkFile() {
    var fileElement = document.getElementById("Image");
    var pass2 = document.getElementById("C_password");
    var fileExtension = "";
    checkStringR();
    if (fileElement.value.lastIndexOf(".") > 0) {
      fileExtension = fileElement.value.substring(
        fileElement.value.lastIndexOf(".") + 1,
        fileElement.value.length
      );
    }
    if (fileExtension.toLowerCase() != "png") {
      alert("Please select <.png> image file for upload...");
      pass2.value = "";
      throw "exit";
    }
  }
  {
    /* Link */
  }
  const handleClickS = () => {
    (event) => (window.location.href = "/d_main");
  };
  {
    /* Receiver */
  }
  const [R_nameReg, setR_nameReg] = useState("");
  const [R_emailReg, setR_emailReg] = useState("");
  const [R_imageReg, setR_imageReg] = useState("");
  const [R_passReg, setR_passReg] = useState("");
  const R_regis = () => {
    checkFile();
    Axios.post("http://localhost:5000/R_regis", {
      Username: R_nameReg,
      Email: R_emailReg,
      Image: R_imageReg,
      Password: R_passReg,
    }).then((response) => {
      console.log(response);
    });
    location.reload();
  };
  {
    /* Donor */
  }
  const [D_nameReg, setD_nameReg] = useState("");
  const [D_emailReg, setD_emailReg] = useState("");
  const [D_passReg, setD_passReg] = useState("");

  return (
    <div className="App">
      <div>
        <Helmet>
          <script
            async="true"
            src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"
          />
          <script
            async="true"
            src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"
          />
          <script async="true" src="./resources/js/jquery (0).js" />
          <script async="true" src="./resources/js/bootstrap.min (0).js" />
          <script async="true" src="./resources/js/vegas.min.js" />
          <script async="true" src="./resources/js/wow.min.js" />
          <script async="true" src="./resources/js/custom.js" />
          <script async="true" src="./resources/js/smoothscroll.js" />
          <script async="true" src="javascript/smoothscroll.js" />
          <title>Phlad Rian</title>
          <meta charSet="utf-8" />
          <link rel="icon" href="resources/imgs/book-icon.png" sizes="16x16" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Website created using create-react-app"
          />
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          <link rel="stylesheet" href="resources/css/bootstrap.min (0).css" />
          <link rel="stylesheet" href="resources/css/animate.min.css" />
          <link rel="stylesheet" href="resources/css/et-line-font.css" />
          <link
            rel="stylesheet"
            href="resources/css/font-awesome.min (0).css"
          />
          <link rel="stylesheet" href="resources/css/vegas.min.css" />
          <link rel="stylesheet" href="resources/css/style.css" />
          <link
            href="https://fonts.googleapis.com/css?family=Rajdhani:400,500,700"
            rel="stylesheet"
            type="text/css"
          />
        </Helmet>

        <style>{`
  				.reddit 
      		{
          	border: 2px solid red;
      		}
    			.reddot:hover 
      		{
          	border: 2px solid red;
      		}
  				`}</style>

        <section
          id="home"
          style={{
            backgroundImage: `url("resources/imgs/authen/slide-1.jpg")`,
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row">
              <br />
              <img
                src={eng}
                width={25}
                height={25}
                className="reddit"
                style={{ position: "absolute", top: 25, right: 30 }}
              />
              <img
                src={tha}
                width={25}
                height={25}
                className="reddot"
                style={{ position: "absolute", top: 25, right: 70 }}
              />
              <div className="col-md-offset-2 col-md-8 col-sm-12">
                <div className="home-thumb">
                  <br />
                  <br />
                  <br />
                  <img src={book} width={125} height={125} />
                  <br />
                  <br />
                  <br />
                  <h1
                    className="wow fadeInUp"
                    data-wow-delay="0.4s"
                    style={{ color: "#F39C12" }}
                  >
                    Welcome to
                    <br />
                    Phlad Rian Community
                  </h1>
                  <a
                    href=""
                    data-toggle="modal"
                    data-target="#modal1"
                    className="btn btn-lg btn-default smoothScroll wow fadeInUp hidden-xs"
                    data-wow-delay="0.6s"
                  >
                    Sign In
                  </a>
                  <a
                    data-toggle="modal"
                    data-target="#modal2"
                    className="btn btn-lg btn-success smoothScroll wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    Receiver Sign Up
                  </a>
                  <a
                    data-toggle="modal"
                    data-target="#modal3"
                    className="btn btn-lg btn-success smoothScroll wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    Donor Sign Up
                  </a>
                  <br />
                  <br />
                  <br />
                  <br />
                  <h3 className="wow fadeInUp" data-wow-delay="1.0s">
                    <p>
                      <strong>
                        "Let's share our learning tools together!"
                      </strong>
                    </p>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*- DIV SIGN IN POP -*/}
        <div
          className="modal fade"
          id="modal1"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content modal-popup">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
                <br />
                <h2 className="modal-title">Account Access</h2>
              </div>
              <form class="submit">
                <br />
                <br />
                <br />
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                />
                <br />
                <br />
                <br />
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <input
                  type="submit"
                  className="form-control"
                  id="LogIn"
                  onclick={handleClickS}
                />
              </form>
              <p>Welcome back to our community!</p>
              <br />
            </div>
          </div>
        </div>

        {/*- DIV SIGN UP POP -*/}
        <div
          className="modal fade"
          id="modal2"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content modal-popup">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
                <br />

                {/* Receiver */}
                <h2 className="modal-title">Receiver Registration</h2>
              </div>
              <form>
                <input
                  type="text"
                  className="form-control"
                  id="Username"
                  placeholder="Username"
                  pattern="[a-zA-Z]{6,}"
                  oninvalid={R_regis.exit}
                  required
                  onChange={(x) => setR_nameReg(x.target.value)}
                />
                <input
                  type="text"
                  className="form-control"
                  id="Email"
                  placeholder="Email Address"
                  pattern="[a-z0-9._%+-]+@[a-z0-9]+\.[a-z.]{2,5}$"
                  oninvalid={R_regis.exit}
                  required
                  onChange={(x) => setR_emailReg(x.target.value)}
                />
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  placeholder="Password"
                  minlength="8"
                  oninvalid={R_regis.exit}
                  required
                  onChange={(x) => setR_passReg(x.target.value)}
                />
                <input
                  type="password"
                  className="form-control"
                  id="C_password"
                  placeholder="Confirm Password"
                  minlength="8"
                  oninvalid={R_regis.exit}
                  required
                />
                <label
                  for="Student ID"
                  style={{ color: "red", fontSize: "15px" }}
                >
                  Student ID (.png only)
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="Image"
                  accept=".png"
                  oninvalid={R_regis.exit}
                  required
                  onChange={(x) => setR_imageReg(x.target.value)}
                />
                <input
                  type="submit"
                  className="form-control"
                  id="RSignUp"
                  onClick={R_regis}
                />
              </form>
              <p>Thank you for your visiting!</p>
              <br />
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="modal3"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content modal-popup">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
                <br />

                {/* Donor */}
                <h2 className="modal-title">Donor Registration</h2>
              </div>
              <form class="submit">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                />
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Email Address"
                />
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
                <input
                  type="text"
                  className="form-control"
                  id="c_password"
                  placeholder="Confirm Password"
                />
                <br />
                <br />
                <br />
                <br />
                <input
                  type="submit"
                  className="form-control"
                  id="DSignUp"
                  onclick={(event) => (window.location.href = "/d_main")}
                />
              </form>
              <p>Thank you for your visiting!</p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(App);
ReactDOM.render(<App />, document.getElementById("root"));