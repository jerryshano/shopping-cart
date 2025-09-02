import { Link, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice.js";

const ProductDetail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.items.find((item) => item.id === parseInt(id))
  );
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div className="max-w-6xl mx-auto min-h-screen p-5">
      <div className="flex flex-col md:flex-row gap-6 bg-gray-900 p-6 rounded-lg border border-gray-800">
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-96 object-cover rounded"
          />
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mt-4">
            <img
              src={product.image}
              alt="thumb1"
              className="w-full h-24 object-cover rounded cursor-pointer hover:ring-2 hover:ring-blue-950 ease-in-out duration-100"
            />
            <img
              src={product.image}
              alt="thumb2"
              className="w-full h-24 object-cover rounded cursor-pointer hover:ring-2 hover:ring-blue-950 ease-in-out duration-100"
            />
            <img
              src={product.image}
              alt="thumb3"
              className="w-full h-24 object-cover rounded cursor-pointer hover:ring-2 hover:ring-blue-950 ease-in-out duration-100"
            />
            <img
              src={product.image}
              alt="thumb3"
              className="w-full h-24 object-cover rounded cursor-pointer hover:ring-2 hover:ring-blue-950 ease-in-out duration 100"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-between md:pl-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
            <p className="text-gray-400 mb-4">{product.description}</p>
            <p className="text-xl font-semibold text-yellow-500 mb-4">
              ${product.price}
            </p>
            <p className="text-sm text-gray-500">
              Category: {product.category}
            </p>
          </div>
          <div className="flex gap-6">
            <Link
              to="/cart"
              className="mt-4 px-4 py-2 bg-yellow-500 hover:shadow-lg hover:scale-105 transition-transform duration-150 active:ring-2  active:ring-blue-700 active:scale-95  active:bg-blue-800 hover:ring-blue-700 hover:text-gray-800 hover:bg-blue-400 text-black rounded-2xl self-start"
            >
              Go to Cart
            </Link>
            <button
              className="mt-4 px-4 py-2 bg-yellow-500 hover:shadow-lg hover:scale-105 transition-transform duration-150 hover:ring-blue-700 hover:text-gray-800 hover:bg-blue-400 active:ring-2 active:ring-blue-700 active:scale-95  active:bg-blue-800 text-black rounded-2xl"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
