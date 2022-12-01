import React from "react";
import NavBar from "../../Component/Navbar/NavBar";
import ProgressBar from "../../Component/progress Bar/ProgressBar";
import Offer from "../offer/Offer";
import ItemCard from "./ItemCard";
import "./product.css";
import { products } from "../../Asset/Data/data";
import { ItemState } from "../../Context/ItemContext";
const Products = () => {
  const { cart, setcart } = ItemState();
  console.log(cart);
  return (
    <div>
      <NavBar />
      <ProgressBar />
      <Offer />

      <div className="product__container">
        {products &&
          products.map((item, index) => (
            <>
              <ItemCard item={item} key={index} />
            </>
          ))}
      </div>
    </div>
  );
};

export default Products;
