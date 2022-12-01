import logo from "./logo.svg";
import "./App.css";
import ShopCart from "./Pages/ShopCart/ShopCart";
import NavBar from "./Component/Navbar/NavBar";
import ProgressBar from "./Component/progress Bar/ProgressBar";
import Offer from "./Pages/offer/Offer";
import { Routes, Route } from "react-router-dom";
import Products from "./Pages/Products/Products";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/cart" element={<ShopCart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
