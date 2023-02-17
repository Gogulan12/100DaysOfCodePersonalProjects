import React from "react";
import "../Styles/Checkout.css";
import banner from "../images/banner1.jpg";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "../StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img src={banner} alt="advertisment" />
        <div>
          <h2 className="checkout_title">Your Shopping Cart</h2>
        </div>
        {/* <CheckoutProduct /> */}
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
