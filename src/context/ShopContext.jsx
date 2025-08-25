import React, { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import { phkas } from "../assets/asset";
export const ShopContext = createContext();
const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const addToCart = (item) => {
    let cartData = structuredClone(cartItems);
    if (item.id) {
      if (cartData[item.id]) {
        cartData[item.id] += 1;
      } else {
        cartData[item.id] = 1;
      }
    }
    setCartItems(cartData);
  };
  const updateQty = (id, qty) => {
    let cartData = structuredClone(cartItems);
    cartData[id] = qty;
    setCartItems(cartData);
  };
  const getTotal = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let pro = phkas.find((el) => item == el.id);
        total += pro.price * cartItems[item];
      }
    }
    return total;
  };
  const getTotalCartBadge = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      if (cartItems[items] > 0) {
        totalCount += cartItems[items];
      }
    }
    return totalCount;
  };
  const value = {
    phkas,
    addToCart,
    cartItems,
    updateQty,
    getTotal,
    getTotalCartBadge,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
