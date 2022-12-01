import logo from "./logo.svg";
import "./App.css";
import ShopCart from "./Pages/ShopCart/ShopCart";
import NavBar from "./Component/Navbar/NavBar";
import ProgressBar from "./Component/progress Bar/ProgressBar";
import Offer from "./Pages/offer/Offer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ProgressBar />
      <Offer />
      <ShopCart />
    </div>
  );
}

export default App;
