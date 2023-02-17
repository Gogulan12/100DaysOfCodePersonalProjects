import React from "react";
import "../Styles/Product.css";
// import pen from "./images/pens3.jpg";
import { useStateValue } from "../StateProvider";

function Product({ id, title, image, price, rating }) {
  // dispatch is alternative for action -
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {/* the two parameters are the item and the interger (_, i) */}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p> ⭐ </p>
            ))}
        </div>
      </div>

      <img src={image} alt="product-image" />
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
