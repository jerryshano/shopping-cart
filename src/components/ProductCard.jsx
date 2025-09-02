import React from "react";
import { Link } from "react-router";

const ProductCard = ({ id, image, title, price }) => {
  return (
    <div
      key={id}
      className="flex flex-col space-y-3 border p-4 bg-gray-900 rounded-lg border-gray-800 hover:border-gray-400 hover:translate-y-1 hover:shadow-cyan-800 overflow-hidden transform hover:scale-105 transition-all duration-300"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-contain mb-4"
      />
      <h4 className="font-bold mb-2">
        {title.length > 18 ? `${title.slice(0, 20)}...` : title}
      </h4>
      <p className="text-gray-500">${price}</p>
      <Link
        to={`/products/${id}`}
        className="text-l px-3 py-2 mt-auto bg-yellow-500 text-black rounded-2xl self-start"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
