import React, { useEffect } from "react";
import "./ShopCart.css";
import ear from "../../Asset/Images/Earphone.png";
import NavBar from "../../Component/Navbar/NavBar";
import ProgressBar from "../../Component/progress Bar/ProgressBar";
import Offer from "../offer/Offer";
import { ItemState } from "../../Context/ItemContext";
import plus from "../../Asset/icon/plus.png";
import minus from "../../Asset/icon/minus.png";
import {
  AiFillPlusSquare,
  AiFillMinusSquare,
  AiFillDelete,
} from "react-icons/ai";
import GiftCart from "./GiftCart";
import CheckOut from "./CheckOut";
const ShopCart = () => {
  const { cart, setcart } = ItemState();
  const increment = (id) => {
    let myCart = cart.map((item) => {
      if (item.id === id) {
        if (item.qty < 5) {
          item.qty++;
        }
      }
      return item;
    });

    setcart(myCart);
    console.log("newCart", myCart);
  };
  const decrement = (id) => {
    let myCart = cart.map((item) => {
      if (item.id === id) {
        if (item.qty > 1) {
          item.qty--;
        }
      }
      return item;
    });
    setcart(myCart);
  };
  const remove = (id) => {
    setcart(cart.filter((c) => c.id != id));
  };

  const total = () => {};
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
                          <div className="d-flex ">
                            <div className="shop__item">
                              <img
                                src={item.imageUrl}
                                className="shop__item__img"
                              ></img>
                            </div>
                            <div className="d-flex flex-column">
                              <p1
                                className="mx-2 "
                                style={{ fontWeight: "bold" }}
                              >
                                {item.name}
                              </p1>
                              {item.tagline ? (
                                <>
                                  <p className="cart__tagline mx-2 ">
                                    {item.tagline}
                                  </p>
                                </>
                              ) : (
                                ""
                              )}
                              <p1 className="mx-2 shopcart__desc">
                                {item.desc}
                              </p1>
                            </div>
                          </div>
                        </td>
                        <td>${item.price}</td>
                        <td>
                          <div className="d-flex align-items-center ">
                            {
                              <AiFillMinusSquare
                                color="white"
                                style={{ backgroundColor: "black" }}
                                onClick={() => {
                                  decrement(item.id);
                                }}
                              />
                            }
                            <td style={{ fontWeight: "bold", margin: "2px" }}>
                              {item.qty}
                            </td>
                            <AiFillPlusSquare
                              color="white"
                              style={{ backgroundColor: "black" }}
                              onClick={() => {
                                increment(item.id);
                              }}
                            />
                          </div>
                        </td>
                        <td style={{ fontWeight: "500" }}>
                          ${item.qty * item.price}
                        </td>
                        <td>
                          <AiFillDelete
                            onClick={() => {
                              remove(item.id);
                            }}
                          />
                        </td>
                      </tr>
                      {item.gift ? (
                        <tr className="box ">
                          <GiftCart />
                        </tr>
                      ) : (
                        ""
                      )}
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <CheckOut />
      </div>
    </>
  );
};

export default ShopCart;
