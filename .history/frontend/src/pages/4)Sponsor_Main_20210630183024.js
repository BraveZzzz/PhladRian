/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import Axios from "axios";
import $ from "jquery";
import JSAlert from "js-alert";
window.$ = $;
import {
  BrowserRouter as Router,
  Route,
  Switch,
  link,
  useHistory,
  withRouter,
  useParams,
} from "react-router-dom";

history.pushState(null, document.title, location.href);
history.back();
history.forward();
window.onpopstate = function () {
  history.go(1);
};

function S_Main() {
  const wall = window.location.origin + "/resources/imgs/wallpaper.jpg";
  const but1 = window.location.origin + "/resources/imgs/home.png";
  const but2 = window.location.origin + "/resources/imgs/delivery.png";
  const but3 = window.location.origin + "/resources/imgs/reward.png";
  const but4 = window.location.origin + "/resources/imgs/account.png";
  const but5 = window.location.origin + "/resources/imgs/report.png";
  const but6 = window.location.origin + "/resources/imgs/logout.png";
  const blank = window.location.origin + "/resources/imgs/shop/white.jpg";
  const ship = window.location.origin + "/resources/imgs/home/shipping.jpg";
  const pro1 = window.location.origin + "/resources/imgs/shop/product12.jpg";
  const pro2 = window.location.origin + "/resources/imgs/shop/product11.jpg";
  const pro3 = window.location.origin + "/resources/imgs/shop/product10.jpg";
  const pro4 = window.location.origin + "/resources/imgs/shop/product9.jpg";
  const pro5 = window.location.origin + "/resources/imgs/shop/product8.jpg";
  const pro6 = window.location.origin + "/resources/imgs/shop/product7.jpg";
  const pro7 = window.location.origin + "/resources/imgs/shop/product6.jpg";
  const adder = window.location.origin + "/resources/imgs/shop/add.png";
  const re1 = window.location.origin + "/resources/imgs/shop/reward1.jpg";
  const re2 = window.location.origin + "/resources/imgs/shop/reward2.jpg";
  const re3 = window.location.origin + "/resources/imgs/shop/reward3.jpg";
  const re4 = window.location.origin + "/resources/imgs/shop/reward4.jpg";
  const re5 = window.location.origin + "/resources/imgs/shop/reward5.jpg";
  const re6 = window.location.origin + "/resources/imgs/shop/reward6.jpg";
  const del1 = window.location.origin + "/resources/imgs/shop/grab.png";
  const eng = window.location.origin + "/resources/imgs/authen/eng.png";
  const tha = window.location.origin + "/resources/imgs/authen/tha.png";

  let history = useHistory();

  return (
    <div className="App">
      <div>
        <Helmet>
          <script
            async="true"
            src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"
          />
          <script async="true" src="resources/js/vendor/jquery-1.11.2.min.js" />
          <script async="true" src="resources/js/vendor/bootstrap.min.js" />
          <script async="true" src="resources/js/plugins.js" />
          <script async="true" src="resources/js/main.js" />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <title>Phlad Rian</title>
          <meta name="description" content />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="resources/imgs/book-icon.png" sizes="16x16" />
          <link rel="stylesheet" href="resources/css/bootstrap.min.css" />
          <link rel="stylesheet" href="resources/css/bootstrap-theme.min.css" />
          <link rel="stylesheet" href="resources/css/fontAwesome.css" />
          <link rel="stylesheet" href="resources/css/templatemo-style.css" />
          <link rel="stylesheet" href="resources/css/Page_Main.css" />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900"
            rel="stylesheet"
          />
          <link href="resources/css/bootstrap.min (2).css" rel="stylesheet" />
          <link href="resources/css/font-awesome.min.css" rel="stylesheet" />
          <link href="resources/css/prettyPhoto.css" rel="stylesheet" />
          <link href="resources/css/price-range.css" rel="stylesheet" />
          <link href="resources/css/animate.css" rel="stylesheet" />
          <link href="resources/css/main.css" rel="stylesheet" />
          <link href="resources/css/responsive.css" rel="stylesheet" />
          <link
            href="resources/css/bootstrap-responsive.min.css"
            rel="stylesheet"
          />
        </Helmet>

        <style>{`
        .searchform input 
        {
          width: 169px;
          height: 33px;
        }
        .swappor {
          color: white;
          background: #f39c12;
          border: 1px solid #f39c12;
        }
        .swappor:hover {
          color: green;
          background: #ebedef;
          border: 1px solid green;
        }
        `}</style>

        <div className="overlay" />
        <section className="top-part">
          <img src={wall} />
        </section>
        <section className="cd-hero">
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
          <div className="cd-slider-nav">
            <nav>
              <span className="cd-marker item-1" />
              <ul>
                <li className="selected">
                  <a>
                    <div className="image-icon">
                      <img src={but1} width={40} height={35} />
                    </div>
                    <h6>Home</h6>
                  </a>
                </li>
                <li>
                  <a>
                    <div className="image-icon">
                      <img src={but2} width={45} height={33} />
                    </div>
                    <h6>Delivery</h6>
                  </a>
                </li>
                <li>
                  <a>
                    <div className="image-icon">
                      <img src={but4} width={40} height={38} />
                    </div>
                    <h6>Account</h6>
                  </a>
                </li>
                <li>
                  <a>
                    <div className="image-icon">
                      <img src={but5} width={38} height={33} />
                    </div>
                    <h6>Contact</h6>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      history.push("/");
                      window.location.reload();
                    }}
                  >
                    <div className="image-icon">
                      <img src={but6} width={39} height={35} />
                    </div>
                    <h6>Logout</h6>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/*Home Page*/}
          <ul className="cd-hero-slider">
            <li className="selected">
              <div className="heading"></div>
              <div className="cd-full-width first-slide">
                <div className="container">
                  <div className="row">
                    <div className="col-md-13">
                      <div className="content first-content">
                        <div className="container">
                          <div className="row">
                            <div className="col-sm-3">
                              <div className="brands_products">
                                <h2>Categories</h2>
                                <div className="brands-name">
                                  <ul className="nav nav-pills nav-stacked">
                                    <select
                                      className="fitBox inputField"
                                      onClick={CategBox}
                                    >
                                      <option value="" selected="selected">
                                        All Categories
                                      </option>
                                      {Categ_List.map((val, key) => (
                                        <option
                                          key={val.Type_ID}
                                          value={val.Type_ID}
                                        >
                                          {val.Category}
                                        </option>
                                      ))}
                                    </select>
                                  </ul>
                                </div>
                              </div>
                              <br />
                              <br />
                              <br />
                              <div className="brands_products">
                                <h2>Schools</h2>
                                <div className="brands-name">
                                  <ul className="nav nav-pills nav-stacked">
                                    <select
                                      className="fitBox inputField"
                                      onClick={SchoolBox}
                                    >
                                      <option
                                        value=""
                                        disabled
                                        selected="selected"
                                      >
                                        All Schools
                                      </option>
                                      {School_List.map((val, key) => (
                                        <option
                                          key={val.School_ID}
                                          value={val.School_ID}
                                        >
                                          {val.Name}
                                        </option>
                                      ))}
                                    </select>
                                  </ul>
                                </div>
                              </div>
                              <br />
                              <br />
                              <br />
                              <div className="brands_products">
                                <h2>Search</h2>
                                <div className="brands-name">
                                  <form className="searchform">
                                    <input
                                      type="text"
                                      className="inputField"
                                      placeholder="Item Name"
                                      style={{
                                        color: "black",
                                        fontSize: "15px",
                                      }}
                                      required="required"
                                    />
                                    <button
                                      type="submit"
                                      className="btn btn-default"
                                      style={{ height: "33px" }}
                                    >
                                      <i className="fa fa-arrow-circle-o-right" />
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-9 padding-right">
                              <div className="features_items">
                                <div className="brands_products">
                                  <h2 className="title text-center">
                                    Recent Items&nbsp;&nbsp;&nbsp;
                                    <button
                                      class="swappor"
                                      onClick={() => {
                                        history.push(
                                          `/d_main/${Donor_ID}/d_add`
                                        );
                                        window.location.reload();
                                      }}
                                    >
                                      Add item
                                    </button>
                                  </h2>
                                </div>
                                <div className="col-sm-12 picList">
                                  {ItemSlice.map((val, key) => {
                                    return (
                                      <div className="product-image-wrapper">
                                        <div className="single-products">
                                          <div className="productinfo text-center">
                                            <img
                                              src={val.Pic1}
                                              alt=""
                                              style={{
                                                height: "320px",
                                                width: "230px",
                                              }}
                                            />
                                            <h2 style={{ fontSize: "15px" }}>
                                              {val.Obj}
                                            </h2>
                                            <br />
                                            <a
                                              className="btn btn-default add-to-cart"
                                              onClick={() => {
                                                history.push(
                                                  `/d_main/${Donor_ID}/d_item/${val.Item_ID}`
                                                );
                                                window.location.reload();
                                              }}
                                            >
                                              <i className="fa fa-eye" />
                                              View
                                            </a>
                                          </div>
                                        </div>
                                        <div className="choose">
                                          <ul className="nav nav-pills nav-justified">
                                            <li>
                                              <a href>
                                                <i className="fa fa-trash-o" />
                                                Delete item
                                              </a>
                                            </li>
                                            <li>
                                              <a href>
                                                <i className="fa fa-trash-o" />
                                                Delete item
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                              <div className="col-sm-11">
                                <br />
                                <Pagination
                                  Page_AllPost={Page_AllPost1}
                                  TotalPost={Item_List.length}
                                  Current_Page={Current_Page1}
                                  paginate={paginate1}
                                  PostCount={ItemCount}
                                />
                              </div>
                              <br />
                              <br />
                              <br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="heading"></div>
              <div className="cd-full-width third-slide">
                <div className="container">
                  <div className="row">
                    <div className="col-md-13">
                      <div className="content third-content">
                        <div className="row">
                          <section id="cart_items">
                            <div className="container">
                              <br />
                              <div className="table-responsive cart_info">
                                <table className="table table-condensed">
                                  <thead>
                                    <tr className="cart_menu">
                                      <td
                                        className="image"
                                        style={{ textAlign: "left" }}
                                      >
                                        Request Items (11/100)
                                      </td>
                                      <td className="description" />
                                      <td />
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td
                                        className="cart_product"
                                        style={{ float: "left" }}
                                      >
                                        <a href>
                                          <img
                                            src={pro7}
                                            alt=""
                                            width={127}
                                            height={158}
                                          />
                                        </a>
                                      </td>
                                      <td
                                        className="cart_description"
                                        style={{ float: "left" }}
                                      >
                                        <br />
                                        <h2
                                          className="cart_total_price"
                                          style={{
                                            textAlign: "left",
                                            fontSize: "18px",
                                          }}
                                        >
                                          ??????????????????O-NET Examination Book
                                        </h2>
                                        <p style={{ textAlign: "justify" }}>
                                          ???????????????????????????O-NET book with a summary of
                                          the content example of doing the
                                          problem Both a basic form and a
                                          shortcut way with
                                          <br />
                                          ???????????????????????????exercises and solutions by
                                          explaining in simple language,
                                          according to the latest curriculum by
                                          explaining to be
                                          <br />
                                          ???????????????????????????easy to understand, not
                                          boring, to create a good attitude...
                                        </p>
                                      </td>
                                      <td
                                        className="cart_delete"
                                        style={{ float: "right" }}
                                      >
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <a
                                          className="btn btn-default add-to-cart"
                                          onClick={() => {
                                            history.push("/s_qr");
                                            window.location.reload();
                                          }}
                                        >
                                          <i className="fa fa-qrcode" />
                                          Info
                                        </a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        className="cart_product"
                                        style={{ float: "left" }}
                                      >
                                        <a href>
                                          <img
                                            src={re1}
                                            alt=""
                                            width={127}
                                            height={158}
                                          />
                                        </a>
                                      </td>
                                      <td
                                        className="cart_description"
                                        style={{ float: "left" }}
                                      >
                                        <br />
                                        <h2
                                          className="cart_total_price"
                                          style={{
                                            textAlign: "left",
                                            fontSize: "18px",
                                          }}
                                        >
                                          ??????????????????Nike Air Shoes2
                                        </h2>
                                        <p style={{ textAlign: "justify" }}>
                                          ???????????????????????????Good-quality and valuable
                                          shoes. It is very useful and
                                          versatile. A worth reward to be traded
                                          with your point.
                                          <br />
                                          ???????????????????????????We normally sell this item at
                                          high price since it is considered as
                                          limited edition item which is rarely
                                          made.
                                          <br />
                                          ???????????????????????????Get this thing under your
                                          possession and enjoy....
                                        </p>
                                      </td>
                                      <td
                                        className="cart_delete"
                                        style={{ float: "right" }}
                                      >
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <h2 style={{ fontSize: "18px" }}>
                                          <i className="fa fa-clock-o" />
                                          Pending...
                                        </h2>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        className="cart_product"
                                        style={{ float: "left" }}
                                      >
                                        <a href>
                                          <img
                                            src={pro3}
                                            alt=""
                                            width={127}
                                            height={158}
                                          />
                                        </a>
                                      </td>
                                      <td
                                        className="cart_description"
                                        style={{ float: "left" }}
                                      >
                                        <br />
                                        <h2
                                          className="cart_total_price"
                                          style={{
                                            textAlign: "left",
                                            fontSize: "18px",
                                          }}
                                        >
                                          ??????????????????English Activity Book 3
                                        </h2>
                                        <p style={{ textAlign: "justify" }}>
                                          ???????????????????????????English book with a summary
                                          of the content example of doing the
                                          problem Both a basic form and a
                                          shortcut way with
                                          <br />
                                          ???????????????????????????exercises and solutions by
                                          explaining in simple language,
                                          according to the latest curriculum by
                                          explaining to be
                                          <br />
                                          ???????????????????????????easy to understand, not
                                          boring, to create a good attitude...
                                        </p>
                                      </td>
                                      <td
                                        className="cart_delete"
                                        style={{ float: "right" }}
                                      >
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <h2
                                          style={{
                                            fontSize: "18px",
                                            color: "#90EE90",
                                          }}
                                        >
                                          <i className="fa fa-check" />
                                          Success
                                        </h2>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="col-sm-11">
                                <br />
                                <ul className="pagination"></ul>
                              </div>
                              <br />
                              <br />
                              <br />
                              <br />
                            </div>
                          </section>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="heading"></div>
              <div className="cd-full-width fivth-slide">
                <div className="container">
                  <div className="row">
                    <div className="col-md-13">
                      <div className="content fivth-content">
                        <div className="row">
                          <form id="contact">
                            <div className="col-md-4">
                              <fieldset>
                                <div
                                  className="col-sm-4"
                                  style={{ float: "left" }}
                                >
                                  <div className>
                                    <ul className="nav nav-pills nav-stacked">
                                      <a href>
                                        <span className="pull-center" />
                                      </a>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="col-sm-5"
                                  style={{ float: "left" }}
                                >
                                  <h2
                                    style={{
                                      fontSize: "18px",
                                      color: "#F39C12",
                                      textAlign: "center",
                                    }}
                                  >
                                    FAQ
                                  </h2>
                                  <div className="brands-name">
                                    <ul className="nav nav-pills nav-stacked">
                                      <a href>
                                        <span className="pull-center">
                                          ???-Read Policy-
                                        </span>
                                      </a>
                                    </ul>
                                  </div>
                                </div>
                              </fieldset>
                            </div>
                            <div className="col-md-4">
                              <fieldset></fieldset>
                            </div>
                            <div className="col-md-4">
                              <fieldset>
                                <img
                                  style={{ width: "350px", height: "1px" }}
                                  src={blank}
                                  alt=""
                                />
                                <a
                                  className="btn swappor"
                                  style={{ float: "left" }}
                                >
                                  <i className="fa fa-user" />
                                  ???Edit Profile
                                </a>
                                <p style={{ float: "left" }}>??????????????????</p>
                                <a
                                  className="btn swappor"
                                  style={{ float: "left" }}
                                >
                                  <i className="fa fa-lock" />
                                  ???Change Pass
                                </a>
                              </fieldset>
                            </div>
                            <div className="col-md-12">
                              <fieldset>
                                <br />
                                <hr className="soft" />
                              </fieldset>
                            </div>
                            <div className="col-md-4">
                              <fieldset>
                                <label htmlFor="Aname">Name:</label>
                                <input
                                  type="text"
                                  id="Aname"
                                  placeholder="Mr.Putthiwat Chalermvongsavej"
                                  required="required"
                                  style={{
                                    width: "100%",
                                    color: "black",
                                    fontSize: "15px",
                                  }}
                                />
                              </fieldset>
                            </div>
                            <div className="col-md-4">
                              <fieldset>
                                <label htmlFor="Amail">Email:</label>
                                <input
                                  type="text"
                                  id="Amail"
                                  placeholder="puth.deboi@ymail.com"
                                  required="required"
                                  style={{
                                    width: "100%",
                                    color: "black",
                                    fontSize: "15px",
                                  }}
                                />
                              </fieldset>
                            </div>
                            <div className="col-md-4">
                              <fieldset>
                                <label htmlFor="Aphone">Tel:</label>
                                <input
                                  type="text"
                                  id="Aphone"
                                  placeholder="083-190-5406"
                                  required="required"
                                  style={{
                                    width: "100%",
                                    color: "black",
                                    fontSize: "15px",
                                  }}
                                />
                              </fieldset>
                            </div>
                            <br />
                            <div className="col-md-12">
                              <fieldset>
                                <label htmlFor="Alocate">Location:</label>
                                <textarea
                                  rows={6}
                                  id="Alocate"
                                  placeholder="666, Ladprao 01 Alley,
Ladprao Road, Wang Thonglang District,
Bangkok, 10240"
                                  required="required"
                                  style={{
                                    width: "100%",
                                    color: "black",
                                    fontSize: "15px",
                                  }}
                                  defaultValue={""}
                                />
                              </fieldset>
                            </div>
                            <div className="col-md-12">
                              <fieldset>
                                <br />
                                <hr className="soft" />
                              </fieldset>
                            </div>
                            <div className="col-md-4">
                              <fieldset></fieldset>
                            </div>
                            <div className="col-md-8">
                              <fieldset>
                                <span
                                  className="cart-total-price text-center"
                                  style={{
                                    fontSize: "18px",
                                    color: "#F39C12",
                                  }}
                                >
                                  ?????????Agency from:
                                </span>
                                <span
                                  className="cart-total-price text-center"
                                  style={{ fontSize: "16px" }}
                                >
                                  <img
                                    style={{ width: "50px", height: "50px" }}
                                    src={del1}
                                    alt=""
                                  />{" "}
                                </span>
                              </fieldset>
                            </div>
                            <div className="col-md-12">
                              <fieldset>
                                <br />
                              </fieldset>
                            </div>
                            <div className="col-md-4">
                              <fieldset></fieldset>
                            </div>
                            <div className="col-md-8">
                              <fieldset>
                                <span
                                  className="cart-total-price text-center"
                                  style={{
                                    fontSize: "18px",
                                    color: "#F39C12",
                                  }}
                                >
                                  ?????????Total reward added:
                                </span>
                                <span
                                  className="cart-total-price text-center"
                                  style={{ fontSize: "16px" }}
                                >
                                  12
                                </span>
                              </fieldset>
                            </div>
                            <div className="col-md-12">
                              <fieldset>
                                <br />
                              </fieldset>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="heading"></div>
              <div className="cd-full-width fivth-slide">
                <div className="container">
                  <div className="row">
                    <div className="col-md-13">
                      <div className="content fivth-content">
                        <div className="row">
                          <br />
                          <div className="col-md-4">
                            <div className="left-info">
                              <p align="justify">
                                ???This section can be used to report about the
                                critical situations that happen within this
                                website only. Please DO NOT send the nonsensical
                                message that is considered deceived or unrelated
                                to this website. Spamming action is also not
                                allowed. Any violence toward these rules will
                                not be tolerated and must receive the
                                punishment.
                                <br />
                                <br />
                              </p>
                              <em>
                                You can follow our work through these directions
                              </em>
                              <br />
                              <br />
                              <ul>
                                <i>
                                  <a>
                                    <i className="fa fa-facebook" />
                                  </a>
                                </i>
                                <i>
                                  <a>
                                    <i className="fa fa-youtube" />
                                  </a>
                                </i>
                                <i>
                                  <a>
                                    <i className="fa fa-github" />
                                  </a>
                                </i>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="row">
                              <form id="contact">
                                <div className="col-md-6">
                                  <fieldset>
                                    <input
                                      type="text"
                                      id="name"
                                      placeholder="Topic"
                                      required="required"
                                      style={{
                                        width: "100%",
                                        color: "black",
                                        fontSize: "15px",
                                      }}
                                    />
                                  </fieldset>
                                </div>
                                <div className="col-md-6">
                                  <fieldset>
                                    <input
                                      type="email"
                                      id="email"
                                      placeholder="Your Email"
                                      required="required"
                                      style={{
                                        width: "100%",
                                        color: "black",
                                        fontSize: "15px",
                                      }}
                                    />
                                  </fieldset>
                                </div>
                                <div className="col-md-12">
                                  <fieldset>
                                    <textarea
                                      rows={6}
                                      id="message"
                                      placeholder="Message"
                                      required="required"
                                      style={{
                                        width: "100%",
                                        color: "black",
                                        fontSize: "15px",
                                      }}
                                      defaultValue={""}
                                    />
                                  </fieldset>
                                </div>
                                <div className="col-md-12">
                                  <fieldset>
                                    <br />
                                    <a
                                      className="btn swappor"
                                      style={{ float: "right" }}
                                    >
                                      Send Report
                                    </a>
                                  </fieldset>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <footer>
          <p>
            Copyright ?? 2020 | Phlad Rian, The School Equipment Donation Website
          </p>
        </footer>
      </div>
    </div>
  );
}

export default withRouter(S_Main);
