import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Pizza from "./redux/Pizza";
import Burger from "./pages/Burger";
import Steak from "./pages/Steak";
import Sandwich from "./pages/Sandwich";
import Chicken from "./pages/Chicken";
import Cake from "./pages/Cake";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/pizza" element={<Pizza />} />
            <Route path="/burger" element={<Burger />} />
            <Route path="/steak" element={<Steak />} />
            <Route path="/sandwich" element={<Sandwich />} />
            <Route path="/chicken" element={<Chicken />} />
            <Route path="/cake" element={<Cake />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
