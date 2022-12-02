import React from "react";
import "./off.css";
import { discount } from "../../Asset/Data/data";
const Offer = () => {
  let disc = discount;

  return (
    <div>
      {
        <div className="offer__container">
          <p>
            shop for ${disc.minTotal} or more and get{" "}
            {discount.discountPercentage}% discount on your order
          </p>
        </div>
      }
    </div>
  );
};

export default Offer;
