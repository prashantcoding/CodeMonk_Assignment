import React, { useEffect, useState } from "react";
import "./checkout.css";
import { ItemState } from "../../Context/ItemContext";
import { GoLocation } from "react-icons/go";
import { pincode } from "../../Asset/Data/data";
const CheckOut = () => {
  const [sub, setsub] = useState();
  const [discount, setdiscount] = useState();
  const { cart, setcart } = ItemState();
  let code = pincode;
  let subtotal = () => {
    var subprice = 0;
    for (var i = 0; i < cart.length; i++) {
      subprice = subprice + cart[i].price * cart[i].qty;
      subprice = Math.round(subprice);
    }

    return subprice;
  };
  let getdiscount = () => {
    let price = subtotal();
    console.log(price);
    let dis = 0;
    if (price >= 5000) {
      dis = 5000 * 0.1;
    } else {
      dis = 0;
    }
    return dis;
  };
  let total = () => {
    let subt = subtotal();
    let dis = getdiscount();
    return subt - dis;
  };

  let check = (code) => {};

  return (
    <div
      className="d-flex justify-content-between m-auto"
      style={{ width: "90%", backgroundColor: "white", heigth: "auto" }}
    >
      <div className="m-5">
        <h4>Delivery Availabilty</h4>
        <div className="m-1 d-flex">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              pincode
            </button>
            {code && (
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {code.map((item) => {
                  return (
                    <>
                      <li>
                        <p class="dropdown-item" href="#">
                          {item.id}
                        </p>
                      </li>
                    </>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="cbox__main mx-5">
        <div>
          <h5 className="mx-1" style={{ fontWeight: "bold" }}>
            {" "}
            Order Summary ({cart.length} item)
          </h5>
          <div
            className="d-flex justify-content-between "
            style={{ padding: ".4rem" }}
          >
            <span> Subtotal </span>
            <span>{subtotal()}$</span>
          </div>
          <div
            className="d-flex justify-content-between "
            style={{ padding: ".4rem" }}
          >
            <span> Total Discount </span>
            <span style={{ fontWeight: "bold" }}>{getdiscount()}$</span>
          </div>
          <div
            className="d-flex justify-content-between "
            style={{ padding: ".4rem" }}
          >
            <span> Standard Shipping </span>
            <span>Free</span>
          </div>
          <div
            className="d-flex justify-content-between "
            style={{ padding: "1.25rem" }}
          >
            <span style={{ fontWeight: "bold" }}> Order Total </span>
            <h3 style={{ fontWeight: "bold" }}>{total()}$</h3>
          </div>
          <div
            className="d-flex justify-content-between "
            style={{ padding: "1.25rem" }}
          >
            <span
              className="text-uppercase mt-2 "
              style={{ color: "blue", fontWeight: "bold" }}
            >
              {" "}
              continue shopping
            </span>
            <button
              className="btn "
              style={{
                border: "2px-solid-transparent",
                borderRadius: "30px",
                backgroundColor: "#131f97",
                color: "white",

                width: "150px",
              }}
            >
              checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
