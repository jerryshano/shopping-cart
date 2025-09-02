import React from "react";
import { Link, NavLink } from "react-router";

const Navigation = () => {
  return (
    <nav className="flex justify-between p-5 bg-gray-700 text-emerald-50 text-2xl ">
      <Link to="/products">
        <h4 className="">Shopping 🛒</h4>
      </Link>
      <div className="flex gap-4">
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "text-blue-950" : "text-emerald-50"
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "text-blue-950" : "text-emerald-50"
          }
        >
          Cart
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
