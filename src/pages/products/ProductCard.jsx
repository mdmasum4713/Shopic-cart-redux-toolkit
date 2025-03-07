import React from "react";

export const ProductCard = ({ product }) => {
  if (!product) return <p className="text-red-500">Invalid Product Data</p>;

  const { id, name, image, price, category, date } = product;

  console.log("Product Data:", product);
  console.log("Product Image:", image);

  return (
    <div className="card bg-white w-96 shadow-xl">
    <figure>
      <img
        src={image}
        alt="Shoes"
        className="w-full h-48 object-cover"
      />
    </figure>
    <div className="card-body text-gray-700">
      <h2 className="card-title">{name}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions items-center justify-end">
          <p className="text-xl font-semibold">${price}</p>
        <button  className="btn btn-primary bg-indigo-600 text-white">Add to Cart</button>
      </div>
    </div>
  </div>
  );
};
