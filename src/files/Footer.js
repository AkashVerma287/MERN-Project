import React from "react"
import { Link } from "react-router-dom"
import {FaSquareXTwitter } from "react-icons/fa6";
import {
  FaFacebook,
  FaLinkedinIn,
  FaPinterestP,} from "react-icons/fa";
export default function Footer() {
return(

     <>
         <footer className="border-bottom position-relative">
        <div className="container">
          <div className="row m-0 mb-5">
            <div className="col-lg-4">
              <div className="mb-4">
                <img
                  src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/logo2-300x109.png"
                  width={250}
                  alt=""
                />
              </div>
              <p className="m-0 mb-3 text-white">
                128 6th Ave,New York, NY 10015 United States, Dcca-1212
              </p>
              <div className="d-flex footer-social-icons">
                <i className="text-white me-3">
                  <FaFacebook />
                </i>
                <i className="text-white me-3">
                  <FaSquareXTwitter />
                </i>
                <i className="text-white me-3">
                  <FaLinkedinIn />
                </i>
                <i className="text-white">
                  <FaPinterestP />
                </i>
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <h4 className="m-0 text-white mb-4">Hot Menu</h4>
              </div>
              <Link className="nav-link text-white mb-3">BBQ Pizza Tintin</Link>
              <Link className="nav-link text-white mb-3">Burger Kingo</Link>
              <Link className="nav-link text-white mb-3">Chessey Pizza</Link>
              <Link className="nav-link text-white mb-3">Chocolate Donuts</Link>
              <Link className="nav-link text-white mb-3">Chicken Sandwich</Link>
            </div>
            <div className="col-lg-4">
              <div>
                <h4 className="m-0 text-white mb-4">Opening Hours</h4>
              </div>

              <p className="text-white m-0 mb-3">Monday: 10.00am - 05.00pm</p>
              <p className="text-white m-0 mb-3">Tuesday: 10.20am - 05.30pm</p>
              <p className="text-white m-0 mb-3">
                Wednesday: 10.30am - 05.50pm
              </p>
              <p className="text-white m-0 mb-3">Thursday: 11.00am - 07.10pm</p>
              <p className="text-white m-0 mb-3">
                Friday: <span className="text-warning">Closed</span>
              </p>
            </div>
          </div>
          <div className="footer-shape">
            <img
              src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/themes/panpie/assets/element/footer_shape01.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="footer-shape-2">
            <img
              src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/themes/panpie/assets/element/footer_shape03.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="footer-shape-3">
            <img
              src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/themes/panpie/assets/element/footer_shape03.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div class="copyright_wrap">
            <span class="left-line"></span>
            <div class="copyright text-white">
              © 2024 Designed by Mr. Akash Verma{" "}
            </div>
            <span class="right-line"></span>
          </div>
        </div>
      </footer>
     
     </>
)
     
}