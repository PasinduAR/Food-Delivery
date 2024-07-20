import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaysOrder/PlaceOrder";

const App = () => {
  return (
    <div className="app dark:bg-slate-900 dark:text-white">
      <div className=" w-[80%] m-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
