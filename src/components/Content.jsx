import React from "react";
import { content } from "../assets/asset";
const Content = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row p-2 content-box">
          {content.map((item, index) => {
            return (
              <div
                className="col-lg-4 col-md-6 col-sm-12 col-12  p-2"
                key={index}
              >
                <div className="img-content">
                  <img src={item} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Content;
