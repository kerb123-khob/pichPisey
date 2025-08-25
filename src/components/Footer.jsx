import React from "react";
import jandt from "../assets/jandt-logo.png";
import bakong from "../assets/bakong-logo.svg";
const Footer = () => {
  return (
    <div>
      <div className="container-fluid p-0 mb-4">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="d-flex">
            <h5 className="mb-0 me-4">លេខទូរស័ព្ទ៖ 071-935-0335</h5>
            <a
              href="https://t.me/phkaofficial"
              target="_blank"
              className="telegram"
            >
              <i className="fa-brands fa-telegram"></i>Telegram(ចុចទីនេះ)
            </a>
          </div>
          <h5 className="mb-0">រក្សារសិទ្ធ© 2025, Pich Pisey Shop</h5>
          <div className="d-flex mt-2">
            <h5 className="mb-0 me-2">ពួកយើងទទួល៖</h5>
            <div className="footer-logo">
              <img src={jandt} alt="" />
            </div>
            <div className="footer-logo">
              <img src={bakong} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
