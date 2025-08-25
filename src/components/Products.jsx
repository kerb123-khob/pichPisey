import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
const Products = () => {
  const [productData, setProductData] = useState([]);
  const { phkas, addToCart } = useContext(ShopContext);
  const fetchProduct = () => {
    setProductData(phkas);
  };
  useEffect(() => {
    fetchProduct();
  }, [phkas]);
  return (
    <div>
      <div className="container-fluid p-0">
        <div className="row">
          {productData.map((item, index) => (
            <div
              className="col-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4"
              key={index}
            >
              <div className="box-products">
                <div className="img">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="product-info d-flex justify-content-between px-3">
                  <h3 className="mb-0">{item.name}</h3>
                  <h3 className="mb-0 price">${item.price}</h3>
                </div>
                <div className="button mt-2">
                  <button
                    className="btn add-btn"
                    onClick={() => addToCart(item)}
                  >
                    <i className="fa-solid fa-bag-shopping"></i> ដាក់ចូលកន្ត្រក់
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
