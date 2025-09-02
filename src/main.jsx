import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Products from "./components/Products.jsx";
import Navigation from "./components/Navigation.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import Cart from "./components/Cart.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
