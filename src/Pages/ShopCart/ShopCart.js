import React from "react";
import "./ShopCart.css";
import ear from "../../Asset/Images/Earphone.png";
import NavBar from "../../Component/Navbar/NavBar";
import ProgressBar from "../../Component/progress Bar/ProgressBar";
import Offer from "../offer/Offer";
import { ItemState } from "../../Context/ItemContext";
import plus from "../../Asset/icon/plus.png";
import minus from "../../Asset/icon/minus.png";
const ShopCart = () => {
  const { cart, setcart } = ItemState();
  return (
    <>
      <NavBar />
      <ProgressBar />
      <Offer />
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
              {cart &&
                cart.map((item, index) => {
                  return (
                    <>
                      <tr key={index} style={{}}>
                        <td>
                          <div className="shop__item">
                            <img
                              src={item.imageUrl}
                              className="shop__item__img"
                            ></img>
                          </div>
                        </td>
                        <td>{item.name}</td>
                        <td>
                          <div className="d-flex">
                            <img src={plus}></img>
                            <td>{item.qty}</td>
                            <img src={minus}></img>
                          </div>
                        </td>
                        <td style={{ fontWeight: "500" }}>
                          ${item.qty * item.price}
                        </td>
                      </tr>
                      ;
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ShopCart;
