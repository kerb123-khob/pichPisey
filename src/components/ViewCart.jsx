import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import romdul from "../assets/romdul.jpeg";
import { ShopContext } from "../context/ShopContext";

const ViewCart = ({ addClass }) => {
  const { phkas, cartItems, updateQty, getTotal } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        tempData.push({
          id: itemId,
          quantity: cartItems[itemId],
        });
      }
    }
    setCartData(tempData);
  }, [cartItems]);
  const increment = (id) => {
    const newQty = cartItems[id] + 1;
    updateQty(id, newQty);
  };
  const decrement = (id) => {
    const newQty = cartItems[id] - 1;
    updateQty(id, newQty);
  };
  const deletePro = (id) => {
    const del = 0;
    updateQty(id, del);
  };
  return (
    <div>
      <div className={`cart ${addClass ? "showCart" : ""}`}>
        <div className="cart-title d-flex justify-content-center align-items-center">
          <span>Your Cart</span>
        </div>
        <div className="container-fluid p-0">
          {cartData.map((el, index) => {
            const productData = phkas.find((product) => product.id == el.id);
            return (
              <div
                className="d-flex align-items-center product-cart"
                key={el.id}
              >
                <div className="left d-flex mt-2 align-items-center">
                  <div className="img me-3">
                    <img src={productData.img} alt="" />
                  </div>
                  <span className="me-3">{productData?.name}</span>
                </div>
                <div className="right d-flex align-items-center">
                  <button
                    className="btn btn-light d-flex justify-content-center align-items-center qty-btn me-3"
                    onClick={() => decrement(el.id)}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <div className="qty me-3">{el.quantity}</div>
                  <button
                    className="btn btn-light d-flex justify-content-center align-items-center qty-btn me-3"
                    onClick={() => increment(el.id)}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                  <button
                    className="btn btn-danger d-flex justify-content-center align-items-center qty-btn me-3"
                    onClick={() => deletePro(el.id)}
                  >
                    <i
                      style={{ fontSize: "15px" }}
                      className="fa-solid fa-trash"
                    ></i>
                  </button>
                  <div className="sub-price">
                    ${productData?.price * el.quantity}
                  </div>
                </div>
              </div>
            );
          })}
          <div className="d-flex justify-content-end mt-3 p-2">
            <span>Total: ${getTotal()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCart;
