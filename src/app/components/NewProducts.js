import React from 'react';
const productsData = [
    {
        img:"/tshirt.png",
        title:"Oversize T-shirt",
        desc:"MEN Oversize T-shirt",
        rating: 4,
        price: "19.99",
    },
    {
        img:"/baggy-jeans.png",
        title:"Baggy Jeans",
        desc:"MEN Baggy and Comfort Jeans",
        rating: 5,
        price: "30.99",
    },
    {
        img:"/shoes-1.png",
        title:"Sneakers",
        desc:"MEN 'OSIRIS' Sneakers",
        rating: 5,
        price: "129.99",
    },
]

const NewProducts = () => {
    return (
        <div>
            <div>
                <h2>New Products</h2>

                <div>
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