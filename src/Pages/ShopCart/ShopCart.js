import React from "react";
import "./ShopCart.css";
import ear from "../../Asset/Images/Earphone.png";
const ShopCart = () => {
  return (
    <div className="shop__container">
      <p className="shop__heading">Shopping cart</p>
      <div className="shop__mainbox">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="shop__item">
                  <img src={ear} className="shop__item__img"></img>
                </div>
              </td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShopCart;
