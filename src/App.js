import React from "react";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { Route, Routes } from "react-router-dom";
import { Link } from "@mui/material";
import Pay from "./pages/Pay";
import Success from "./pages/Success";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/log" element={<Login />} />
        <Route path="/pay" element={<Pay/>} />
        <Route path="/success" element={<Success/>} />
      </Routes>
    </>
  );
}

export default App;
