import React from "react";
import { Link } from "react-router-dom";
import { LuPhoneCall } from "react-icons/lu";
import { PiShoppingCartFill } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";

export default function Navbar() {
  return (
    <>
      <nav className="navbar  navbar-expand-lg border-bottom">
        <div className="container-fluid px-4 px-lg-5">
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#mycan">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" id="mycan">
            <div className="offcanvas-body">
            <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark">
                MENU
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark">
                PAGES
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark">
                BLOG
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark">
                SHOP
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Table" className="nav-link text-dark">
                BOOK A TABLE
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav mx-auto d-lg-block d-none">
            <li className="nav-item">
              <div className="navbar-brand">
                <div>
                  <img src="/images/logo.png" width={150} alt="" />
                </div>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav align-items-center d-lg-flex d-none">
            <li className="nav-item">
              <div className="d-flex align-items-center mx-3">
                <div className="me-3 call-icon">
                  <i>
                    <LuPhoneCall fontSize={25} />
                  </i>
                </div>
                <div>
                  <h5 className="m-0">HOT LINE:</h5>
                  <a
                    href="#"
                    className="text-dark fw-bold"
                    style={{ textDecoration: "none" }}
                  >
                    +91 90415-79626
                  </a>
                </div>
              </div>
            </li>
            <li className="nav-item mx-3">
              <i className="cart-icon">
                <PiShoppingCartFill fontSize={20} />
              </i>
            </li>
            <li className="nav-item">
              <IoSearch fontSize={25} />
            </li>
          </ul>

            </div>
          </div>
       
       

          
        </div>
      </nav>
    </>
  );
}
