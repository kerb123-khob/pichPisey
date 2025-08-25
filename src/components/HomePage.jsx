import React, { useContext, useState } from "react";
import "../assets/asset";
import "./HomePage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { assets } from "../assets/asset";
import Products from "./Products";
import ViewCart from "./ViewCart";
import Content from "./Content";
import Footer from "./Footer";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ShopContext } from "../context/ShopContext";
const HomePage = () => {
  const { getTotalCartBadge } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const toggleCart = () => {
    setVisible((prev) => !prev); // This flips the value: true ⇄ false
  };
  const closeCart = () => {
    setVisible(false);
  };
  return (
    <div>
      <div className="page-container">
        <div className="row">
          <div className="col-lg-3">
            <div className="box-heart"></div>
          </div>
          <div className="col-lg-6 p-0">
            <div className="header">
              <div className="d-flex justify-content-between align-items-center h-100">
                <i className="fa-solid fa-bars"></i>
                <h3 className="shop-name mb-0">Pich Pisey Shop</h3>
                <i
                  className="fa-solid fa-bag-shopping"
                  onClick={() => toggleCart()}
                ></i>
                <div className="totalcart">{getTotalCartBadge()}</div>
              </div>
            </div>
            <Swiper
              className="mt-5 slide"
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              spaceBetween={50}
              slidesPerView={1}
            >
              <SwiperSlide>
                <img
                  src={assets.slide1}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={assets.slide2}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={assets.slide3}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={assets.slide4}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </SwiperSlide>
            </Swiper>
            <div className="products mt-3">
              <h3 className="d-flex justify-content-center">ផ្កា Blushes</h3>
              <Products />
              <h3 className="d-flex justify-content-center mt-3">មាតិកា</h3>
              <Content />
            </div>{" "}
            <br />
            <Footer />
          </div>
          <div className="col-lg-3">
            <div className="box-heart"></div>
          </div>
        </div>
      </div>
      <ViewCart addClass={visible} />
    </div>
  );
};

export default HomePage;
