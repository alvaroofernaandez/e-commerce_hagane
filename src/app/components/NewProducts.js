import React from 'react';
import ProductCard from './ProductCard';

const productsData = [
    {
        img:"/tshirt.png",
        title:"Oversize T-shirt",
        desc:"MEN Oversize T-shirt",
        rating: 3,
        price: "19.99",
    },
    {
        img:"/baggy-jeans.png",
        title:"Baggy Jeans",
        desc:"MEN Baggy and Comfort Jeans",
        rating: 4,
        price: "30.99",
    },
    {
        img:"/shoes_1.png",
        title:"Sneakers",
        desc:"MEN 'OSIRIS' Sneakers",
        rating: 5,
        price: "129.99",
    },
]

const NewProducts = () => {
    return (
        <div>
            <div className="container pt-16">
                <h2 className="font-medium text-2xl pb-4 text-blue-300">New Products</h2>

                <div className="grid gridl-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
                    {
                        productsData.map((item, index) => {
                            return (
                                <ProductCard
                                key={index}
                                img={item.img}
                                title={item.title}
                                desc={item.desc}
                                rating={item.rating}
                                price={item.price}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default NewProducts;