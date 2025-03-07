import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/features/products/productSlice";

export const AddProduct = () => {
    const {
        register,
        handleSubmit,
      } = useForm();

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(addProduct(data)); // ✅ ঠিক action call
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-black">
                Add New Product!
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* name */}
                <div>
                    <label className="text-sm font-medium block text-gray-600">
                        Product Name
                    </label>
                    <input
                        type="text"
                        {...register("name", { required: true })}
                        placeholder="Product 1"
                        className="w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500 "
                    />
                </div>
                
                {/* category */}
                <div>
                    <label className="text-sm font-medium block text-gray-600">
                        Category
                    </label>
                    <select
                        {...register("category", { required: true })}
                        className="w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500"
                    >
                        <option value="">Choose a category</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Gadgets">Gadgets</option>
                        <option value="Bags">Bags</option>
                        <option value="Electronics">Electronics</option>
                    </select>
                </div>

                {/* product image url */}
                <div>
                    <label className="text-sm font-medium block text-gray-600">
                        Image URL
                    </label>
                    <input
                        type="text"
                        {...register("image", { required: true })}
                        placeholder="https://"
                        className="w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500"
                    />
                </div>

                {/* price and date */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm font-medium block text-gray-600">
                            Price:
                        </label>
                        <input
                            type="number"
                            {...register("price", { required: true })} // ✅ Fixed register name
                            placeholder="100"
                            className="w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium block text-gray-600">
                            Upload Date:
                        </label>
                        <input
                            type="date"
                            {...register("date", { required: true })}
                            className="w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary w-full bg-indigo-500 text-white"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
};
