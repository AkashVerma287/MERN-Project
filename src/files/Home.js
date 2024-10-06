import React, { useEffect, useState } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import Navbar from "./Navbar";
import axios from "axios";
import Testimonial from "./Testimonial";
import Brands from "./Brands";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  var url = "http://localhost:3400/";

  useEffect(() => {
    AOS.init();
    // AOS.refresh();
  }, []);

  const [product, setproduct] = useState([]);

  function fetchproducts() {
    axios.post(url + "Products").then((product_Find) => {
      console.log(product_Find.data);
      setproduct(product_Find.data);
    });
  }
  useEffect(() => {
    fetchproducts();
  }, []);

  const [product2, setproduct2] = useState([]);

  function fetchproducts2() {
    axios.post(url + "Products2").then((product2_Find) => {
      setproduct2(product2_Find.data);
    });
  }
  useEffect(() => {
    fetchproducts2();
  }, []);

  const [product3, setproduct3] = useState([]);

  function fetchproducts3() {
    axios.post(url + "Products3").then((product3_Find) => {
      setproduct3(product3_Find.data);
    });
  }
  useEffect(() => {
    fetchproducts3();
  }, []);

  const [product4, setproduct4] = useState([]);

  function fetchproducts4() {
    axios.post(url + "Products4").then((product4_Find) => {
      setproduct4(product4_Find.data);
    });
  }

  useEffect(() => {
    fetchproducts4();
  }, []);

  const [product5, setproduct5] = useState([]);

  function fetchproducts5() {
    axios.post(url + "Products5").then((product5_Find) => {
      setproduct5(product5_Find.data);
    });
  }

  useEffect(() => {
    fetchproducts5();
  }, []);

  const [product6, setproduct6] = useState([]);

  function fetchproducts6() {
    axios.post(url + "Products6").then((product6_Find) => {
      setproduct6(product6_Find.data);
    });
  }

  useEffect(() => {
    fetchproducts6();
  }, []);

  return (
    <>
      <Navbar />

      <section>
        <div>
          <img src="images/main-banner.jpg" className="w-100" alt="" />
        </div>
      </section>

      <section
        className="three-products"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container px-lg-5 px-4">
          <div className="row m-0">
            {product.map((product_fetch) => (
              <div className="col-lg-4 mb-lg-0 mb-5">
                <div className="card">
                  <div className="card-body  p-0">
                    <div className="red-shape">
                      <div className="text-center">
                        <h2 className="m-0 text-white fw-bold mb-3">
                          {product_fetch.Description}
                        </h2>
                        <div
                          className="btn-see-menu position-relative overflow-hidden"
                          style={{ zIndex: "1" }}
                        >
                          {/* <RiArrowRightLine className="text-white"  /> */}
                          <button
                            type="button"
                            className="btn px-3  text-white"
                          >
                            <FaArrowRight className="me-2" />
                            SEE MENU
                          </button>
                        </div>
                      </div>
                      {/* <div className="white-shape">
                        <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/themes/panpie/assets/element/shape18.png" alt="" />
                      </div> */}
                    </div>
                    <div className="text-center">
                      <img src={product_fetch.Image} className="img-fluid" alt="" />
                    </div>
                    <div className="pro-1"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="products-section py-5 position-relative"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container-fluid px-4 px-lg-5">
          <div className="text-center mb-3">
            <h6 className="text-danger m-0 mb-2">FRESH FROM PANPIE</h6>
            <h1 className="fw-bold m-0">
              We Offer People Best Way <br />
              To Eat Best Food
            </h1>
          </div>
          <div>
            <ul className="nav nav-tabs justify-content-center">
              <li className="nav-item mx-2 mb-lg-0 mb-3">
                <a
                  href="#all"
                  className="nav-link active text-dark fw-bold"
                  data-bs-toggle="tab"
                >
                  ALL
                </a>
              </li>
              <li className="nav-item mx-2 mb-lg-0 mb-3">
                <a
                  href="#donuts"
                  className="nav-link text-dark fw-bold"
                  data-bs-toggle="tab"
                >
                  DONUTS
                </a>
              </li>
              <li className="nav-item mx-2 mb-lg-0 mb-3">
                <a
                  href="#pizza"
                  className="nav-link text-dark fw-bold"
                  data-bs-toggle="tab"
                >
                  PIZZA
                </a>
              </li>
              <li className="nav-item mx-2 mb-lg-0 mb-3">
                <a
                  href="#drinks"
                  className="nav-link text-dark fw-bold"
                  data-bs-toggle="tab"
                >
                  DRINKS
                </a>
              </li>
              <li className="nav-item mx-2 mb-lg-0 mb-3">
                <a
                  href="#sandwich"
                  className="nav-link text-dark fw-bold"
                  data-bs-toggle="tab"
                >
                  SANDWICH
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div className="tab-pane active" id="all">
                <div className="container-fluid px-4 px-lg-5 py-5">
                  <div className="row m-0">
                    {product2.map((product2_fetch) => (
                      <div className="col-lg-3 mb-5">
                        <div className="card">
                          <div className="card-body">
                            <div>
                              <img
                                className="img-fluid"
                                src={product2_fetch.Image}
                                alt=""
                              />
                            </div>
                            <div>
                              <h4>{product2_fetch.Title}</h4>
                              <p>{product2_fetch.Description}</p>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="me-3">
                                  <select
                                    name=""
                                    className="form-control"
                                    id=""
                                  >
                                    <option value="">Large</option>
                                    <option value="">Medium</option>
                                    <option value="">Small</option>
                                  </select>
                                </div>
                                <div>
                                  <h5 className="text-danger fw-bold">
                                    {product2_fetch.Price}
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="donuts"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div className="container-fluid px-4 px-lg-5 py-5">
                  <div className="row m-0">
                    {product3.map((product3_fetch) => (
                      <div className="col-lg-3 mb-lg-0 mb-5">
                        <div className="card">
                          <div className="card-body">
                            <div>
                              <img
                                className="img-fluid"
                                src={product3_fetch.Image}
                                alt=""
                              />
                            </div>
                            <div>
                              <h4>{product3_fetch.Title}</h4>
                              <p>{product3_fetch.Description}</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="me-3">
                                <select name="" className="form-control" id="">
                                  <option value="">Large</option>
                                  <option value="">Medium</option>
                                  <option value="">Small</option>
                                </select>
                              </div>
                              <div>
                                <h5 className="text-danger fw-bold">
                                  {product3_fetch.Price}
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="pizza"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div className="container-fluid px-4 px-lg-5 py-5">
                  <div className="row m-0">
                    {product4.map((product4_fetch) => (
                      <div className="col-lg-3 mb-lg-0 mb-5">
                        <div className="card">
                          <div className="card-body">
                            <div>
                              <img
                                src={product4_fetch.Image}
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div>
                              <h4>{product4_fetch.Title}</h4>
                              <p>{product4_fetch.Description}</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="me-3">
                                <select name="" className="form-control" id="">
                                  <option value="">Large</option>
                                  <option value="">Medium</option>
                                  <option value="">Small</option>
                                </select>
                              </div>
                              <div>
                                <h5 className="text-danger fw-bold">
                                  {product4_fetch.Price}
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="drinks"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div className="container-fluid px-4 px-lg-5 py-5">
                  <div className="row m-0">
                    {product5.map((product5_fetch) => (
                      <div className="col-lg-3 mb-lg-0 mb-5">
                        <div className="card">
                          <div className="card-body">
                            <div>
                              <img
                                src={product5_fetch.Image}
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div>
                              <h4>{product5_fetch.Title}</h4>
                              <p>{product5_fetch.Description}</p>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="me-3">
                                  <select
                                    name=""
                                    className="form-control"
                                    id=""
                                  >
                                    <option value="">Large</option>
                                    <option value="">Medium</option>
                                    <option value="">Small</option>
                                  </select>
                                </div>
                                <div>
                                  <h5 className="text-danger fw-bold">
                                    {product5_fetch.Price}
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="sandwich"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div className="container-fluid px-4 px-lg-5 py-5">
                  <div className="row m-0">
                    {product6.map((product6_fetch) => (
                      <div className="col-lg-3 mb-lg-0 mb-5">
                        <div className="card">
                          <div className="card-body">
                            <div>
                              <img
                                src={product6_fetch.Image}
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div>
                              <h4>{product6_fetch.Title}</h4>
                              <p>{product6_fetch.Description}</p>
                              <h5>{product6_fetch.Price}</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pizza-produts">
          <img
            src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/01/shape27.png"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="pizza-products-2">
          <img
            src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/01/shape28.png"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="pizza-products-3">
          <img
            src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/01/shape34.png"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="pizza-products-4">
          <img
            src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/01/shape36.png"
            alt=""
            className="img-fluid"
          />
        </div>
      </section>

      <section className="discount-section">
        <div className="container px-4 px-lg-5">
          <div className="row m-0 align-items-center py-5">
            <div className="col-lg-7">
              <div>
                <h1 className="m-0 mb-4">
                  We Have <span className="text-warning">Excellent</span> <br />{" "}
                  Of
                  <span className="text-warning"> Quality</span> Pizza
                </h1>
                <div className="see-all-menu">
                  <button
                    className="btn text-white btn-menu py-3 px-4 position-relative overflow-hidden"
                    style={{ zIndex: 1 }}
                  >
                    SEE ALL MENU
                    <RiArrowRightLine className="fs-4" />
                  </button>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="">
                <div className="pizza-imgg position-relative">
                  <img
                    src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/40off.png"
                className="img-fluid"
                    alt=""
                  />
                  <div className="discount-shape">
                    <img src="images/discount-pic.png" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="position-relative py-5"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container px-4 px-lg-5">
          <div className="row m-0 align-items-center">
            <div className="col-lg-6 p-0 mb-lg-0 mb-5">
              <div className="position-relative">
                <img
                  src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/01/about-pizzaw.png"
                  className="img-fluid"
                  alt=""
                />
                <div className="yellow-cup">
                  <img
                    src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/01/shape33.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-5 p-0">
              <div>
                <h1 className="m-0 fw-bold m-0 mb-3">
                  Panpie, Burgers, And Best Pizzas in Town
                </h1>
                <h6 className="text-warning m-0 mb-3">
                  We put 100% of love and dedication into our dishes
                </h6>
                <p className="m-0 mb-4">
                  Piorem ipsum dolor sit amet consectetur adipiscing
                  eliturabitur venenatis, nisl in bib endum commodo, sapien
                  justo cursus are urna, quis porta mauris elit finibus nulla.
                </p>

                <div className="see-all-menu">
                  <button className="btn text-white py-3 px-4 border-0 rounded-0">
                    KNOW MORE
                    <RiArrowRightLine className="fs-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="panpie-pizza-right">
          <img
            src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/01/shape23.png"
            className="img-fluid"
            alt=""
          />
        </div>
      </section>

      <section
        className="chicken-burger"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container px-4 px-lg-5 p-5">
          <div className="row m-0 align-items-center">
            <div className="col-lg-5">
              <div>
                <h1 className="m-0 fw-bold mb-3">
                  Chicken
                  <br />
                  King Burger
                </h1>
                <p className="m-0 mb-3">
                  Piorem ipsum dolor sit amet consecte eliturabitur venenatis,
                  nisl in bib endum commodo, sapien eusto cursus are urnainibus.
                </p>
              </div>
              <button className="btn btn-warning text-white">ORDER NOW</button>
            </div>
            <div className="col-lg-7">
              <div>
                <img
                  src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/limit-price-pizzaw.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section
        className="testimonials-section py-5"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container px-4 px-lg-5">
          <div className="row m-0 align-items-center">
            <div className="col-lg-5">
              <div>
                <img
                  src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/testimonial-client.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-7">
              <Testimonial />
            </div>
          </div>
        </div>
      </section>
      <section
        className="drinks-section py-5 position-relative"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container-fluid px-4 px-lg-5">
          <div className="row m-0">
            <div className="col-lg-4 mb-lg-0 mb-5">
              <div>
                <img
                  src="images/drnk.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-4 mb-lg-0 mb-5">
              <div>
                <img
                  src="images/drnk-2.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-4 mb-lg-0 mb-5">
              <div>
                <img
                  src="images/drnk-3.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="drinks-img">
          <img
            src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/01/shape31.png"
            className="img-fluid"
            alt=""
          />
        </div>
      </section>
      <section
        className="news-blogs-section position-relative"
        data-aos="fade-up"
        data-aos-duration="3000"
        style={{ zIndex: 1 }}
      >
        <div className="container px-4 px-lg-5 p-5">
          <div className="text-center">
            <h6 className="m-0 mb-2 text-danger">NEWS & BLOGS</h6>
            <h2 className="m-0 mb-4">
              What’s Happening Your
              <br />
              Near City & Town
            </h2>
          </div>
          <div className="row m-0">
            <div className="col-lg-4 mb-lg-0 mb-5">
              <div className="card border-0">
                <img
                  src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/08/blog_1-390x340.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="card-body">
                  <div className="d-flex mb-4">
                    <div className="me-5">
                      <div className="d-flex">
                        <div>
                          <h6 className="m-0">
                            <span className="m-0 me-2 text-warning">
                              <FaRegCalendarAlt />
                            </span>
                            September 21, 2024
                          </h6>
                        </div>
                        <div></div>
                      </div>
                    </div>
                    <div>
                      <h6 className="m-0">Burger</h6>
                    </div>
                  </div>
                  <h4 className="m-0">
                    Do You Think About Cheese Pizza Recipes?
                  </h4>
                  <p className="m-0 mb-4">
                    Pizzhen an unknown printer took a galley of type and
                    scrambled it to make a type specimen bookIt hasey survived
                  </p>
                  <p className="m-0">
                    Read More <FaArrowRight />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-lg-0 mb-5">
              <div className="card border-0">
                <img
                  src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/08/blog_2-1-390x340.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="card-body">
                  <div className="d-flex mb-4">
                    <div className="me-4">
                      <h6 className="m-0">
                        <span className="m-0 me-2 text-warning">
                          <FaRegCalendarAlt />
                        </span>
                        September 21, 2024
                      </h6>
                    </div>
                    <div>
                      <h6 className="m-0">Burger</h6>
                    </div>
                  </div>
                  <h4 className="m-0">
                    Do You Think About Cheese Pizza Recipes?
                  </h4>
                  <p className="m-0 mb-4">
                    Pizzhen an unknown printer took a galley of type and
                    scrambled it to make a type specimen bookIt hasey survived
                  </p>
                  <p className="m-0">
                    Read More <FaArrowRight />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-lg-0 mb-5">
              <div className="card border-0">
                <img
                  src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/08/blog_4-1-390x340.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="card-body">
                  <div className="d-flex mb-4">
                    <div className="me-4">
                      <h6 className="m-0">
                        <span className="m-0 me-2 text-warning">
                          <FaRegCalendarAlt />
                        </span>
                        September 21, 2024
                      </h6>
                    </div>
                    <div>
                      <h6 className="m-0">Burger</h6>
                    </div>
                  </div>

                  <h4 className="m-0">
                    Do You Think About Cheese Pizza Recipes?
                  </h4>
                  <p className="m-0 mb-4">
                    Pizzhen an unknown printer took a galley of type and
                    scrambled it to make a type specimen bookIt hasey survived
                  </p>
                  <p className="m-0">
                    Read More <FaArrowRight />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="news-img-1">
          <img
            src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/themes/panpie/assets/element/shape12.png"
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="news-img-2">
          <img
            src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/themes/panpie/assets/element/shape11.png"
            className="img-fluid"
            alt=""
          />
        </div>
      </section>

      <section
        className="brands-section py-5"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <Brands />
        </div>
      </section>

      <Footer />
    </>
  );
}
