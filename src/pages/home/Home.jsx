import React from 'react';
import { useSelector } from 'react-redux';
import { ProductCard } from '../products/ProductCard';
import { AddProduct } from '../products/AddProduct';

export const Home = () => {
    const Products = useSelector((state) => state.products) || [];

    console.log("Redux Products State:", Products);

    return (
        <div className='py-8'>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-12'>
                <div className='col-span-2'>
                    <div className='grid lg:grid-cols-2 gap-4 gap-y-8'>
                        {
                            Products.length > 0 ? (
                                Products.map((product) => (
                                    <ProductCard key={product.id} product={product} /> 
                                ))
                            ) : (
                                <p>No Product Found!</p>
                            )
                        }
                    </div>
                </div>
                <div className='lg:ml-20 ml-0'>
                    <AddProduct></AddProduct>
                </div>
            </div>
        </div>
    );
};
