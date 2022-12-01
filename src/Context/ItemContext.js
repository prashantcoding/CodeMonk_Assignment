import React, { createContext, useContext, useState } from "react";
const ActiveItemContext = createContext();
const ItemProvider = ({ children }) => {
  const [active, setactive] = useState(1);
  const [cart, setcart] = useState([]);

  return (
    <ActiveItemContext.Provider value={{ active, setactive, cart, setcart }}>
      {children};
    </ActiveItemContext.Provider>
  );
};
export const ItemState = () => {
  return useContext(ActiveItemContext);
};
export default ItemProvider;
