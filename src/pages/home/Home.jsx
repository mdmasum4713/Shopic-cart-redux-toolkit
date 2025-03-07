import React from 'react';
import { useSelector } from 'react-redux';
import { ProductCard } from '../products/ProductCard'; // Make sure the import path is correct
import { AddProduct } from '../products/AddProduct';

export const Home = () => {
    const products = useSelector((state) => state.products) || [];
    const cart = useSelector((state) => state.carts) || []; // Get cart state from Redux

    console.log("Redux Cart State:", cart); // Log the cart state to check if products are being added

    return (
        <div className="py-8">
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-12">
                <div className="col-span-2">
                    <div className="grid lg:grid-cols-2 gap-4 gap-y-8">
                        {
                            products.length > 0 ? (
                                products.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))
                            ) : (
                                <p>No Product Found!</p>
                            )
                        }
                    </div>
                </div>
                <div className="lg:ml-20 ml-0">
                    <AddProduct />
                </div>
            </div>
        </div>
    );
};
