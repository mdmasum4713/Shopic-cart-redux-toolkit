import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/carts/cartsSlice";

const ProductCard = ({ product }) => {
  const {  name, image, price } = product || {};

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="card bg-white w-96 shadow-xl">
      <figure>
        <img src={image} alt={name} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body text-gray-700">
        <h2 className="card-title">{name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions items-center justify-end">
          <p className="text-xl font-semibold">${price}</p>
          <button
            onClick={handleAddToCart}
            className="btn btn-primary bg-indigo-600 text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
