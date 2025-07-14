import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter, Route, Routes } from "react-router";

import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import React from "react";
import Checkout from "./pages/Checkout/Checkout";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
