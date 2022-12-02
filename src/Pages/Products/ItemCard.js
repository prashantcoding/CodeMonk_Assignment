import React, { useState } from "react";
import "./product.css";
import { ItemState } from "../../Context/ItemContext";
const ItemCard = ({ item }) => {
  const [status, setstatus] = useState(true);
  const remove = (id) => {
    setcart(cart.filter((q) => q.id != id));
  };
  const { cart, setcart } = ItemState();
  return (
    <div style={{ margin: ".4rem" }}>
      <div class="card m-2" style={{ width: "20rem" }}>
        <div className="d-flex justify-content-between">
          {item.tagline ? (
            <div href="#" class="btn btn-info mt-2 w-45 m-auto">
              {item.tagline}
            </div>
          ) : (
            <>
              <div
                href="#"
                class=" mt-2 w-45 m-auto "
                style={{ height: "40px" }}
              ></div>
            </>
          )}
          {item.gift ? (
            <div href="#" class="btn btn-info mt-2 w-45 m-auto">
              {item.gift.name}
            </div>
          ) : (
            <div href="#" class="btn btn-light mt-2 w-45 m-auto"></div>
          )}
        </div>
        <img
          class="card-img-top item_img px-4 m-4"
          src={item.imageUrl}
          alt="Card image cap"
          style={{ width: "140px", height: "140px" }}
        />
        <div class="card-body">
          <h5 class="card-title">{item.name}</h5>
          <p class="card-text">{item.desc}</p>
          <div className="d-flex justify-content-between">
            {status ? (
              <button
                href="#"
                class="btn btn-primary"
                onClick={() => {
                  setcart([...cart, item]);
                  setstatus(false);
                }}
              >
                Add to Cart
              </button>
            ) : (
              <button
                href="#"
                class="btn btn-primary"
                onClick={() => {
                  remove(item.id);
                  setstatus(true);
                }}
              >
                Remove
              </button>
            )}
          </div>
          <p class="card-text mx-1 mt-2">${item.price} </p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
