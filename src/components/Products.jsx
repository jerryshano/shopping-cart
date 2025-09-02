import React, { useEffect } from "react";
import ProductCard from "./ProductCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice.js";

const Products = () => {
  const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);
  return (
    <section className="min-h-screen p-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
