import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );
  console.log(items);
  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty 🛒</h2>
        <p className="text-gray-400">Add some products to get started!</p>
      </div>
    );
  }
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b border-gray-700 pb-4"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-20 h-20 object-contain mr-4"
            />
            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-400">
                ${item.price} × {item.quantity}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <p className="font-bold">${item.totalPrice.toFixed(2)}</p>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6 border-t border-gray-700 pt-4">
        <p className="text-xl font-semibold">
          Total ({totalQuantity} items): ${totalPrice.toFixed(2)}
        </p>
        <div className="space-x-3">
          <button
            onClick={() => dispatch(clearCart())}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
          >
            Clear Cart
          </button>
          <button className="px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
