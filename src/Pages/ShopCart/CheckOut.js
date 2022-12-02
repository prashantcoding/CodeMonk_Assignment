import React, { useEffect, useState } from "react";
import "./checkout.css";
import { ItemState } from "../../Context/ItemContext";
import { GoLocation } from "react-icons/go";
import { pincode } from "../../Asset/Data/data";
import { AiFillCheckCircle } from "react-icons/ai";
const CheckOut = () => {
  const [value, setvalue] = useState();
  const [sub, setsub] = useState();
  const [discount, setdiscount] = useState();
  const { cart, setcart } = ItemState();
  const [location, setlocation] = useState({
    id: "",
    deliveryPrice: 0,
    cashOnDelivery: false,
    estimatedDays: {
      min: "",
      max: "",
    },
  });
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
    return subt - dis + location.deliveryPrice;
  };

  let check = (item) => {
    let av = <></>;
    return av;
  };

  return (
    <div
      className="d-flex justify-content-between m-auto"
      style={{ width: "90%", backgroundColor: "white", heigth: "auto" }}
    >
      <div className="m-5">
        <h4>Delivery Availabilty</h4>
        <div className="m-1 d-flex">
          <GoLocation className="" />
          <input className="zipcode" value={value}></input>
          <div class="dropdown">
            <button
              class="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Change
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {pincode.map((item) => {
                return (
                  <>
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setvalue(item.id);
                        setlocation(item);
                      }}
                    >
                      {item.id}
                    </p>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="d-flex  " style={{ textAlign: "center" }}>
          <AiFillCheckCircle
            size={20}
            color="green"
            className="mt-2 mx-2"
          ></AiFillCheckCircle>
          <p className="mt-1">DeliveryPrice ${location.deliveryPrice}</p>
        </div>
        <div className="d-flex  " style={{ textAlign: "center" }}>
          <AiFillCheckCircle
            size={20}
            color="green"
            className="mt-2 mx-2"
          ></AiFillCheckCircle>
          <p className="mt-1">
            {location.cashOnDelivery ? "Available" : "Not Available"}
          </p>
        </div>
        <div className="d-flex  " style={{ textAlign: "center" }}>
          <AiFillCheckCircle
            size={20}
            color="green"
            className="mt-2 mx-2"
          ></AiFillCheckCircle>
          <p className="mt-1">
            Estimated Days min {location.estimatedDays.min} and max{" "}
            {location.estimatedDays.max}
          </p>
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
            <span> Standart Shipping </span>
            <span>{location.deliveryPrice}$</span>
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
