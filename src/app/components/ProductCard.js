import Image from 'next/image';
import React from 'react';

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductCard = ({ img, title, desc, rating, price }) => {
    const generateRating = (rating) => {
        switch (rating) {
            case 1:
                return (
                    <div className="flex gap-1 text-[20px] text-blue-300">
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                );
            case 2:
                return (
                    <div className="flex gap-1 text-[20px] text-blue-300">
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                );
            case 3:
                return (
                    <div className="flex gap-1 text-[20px] text-blue-300">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                );
            case 4:
                return (
                    <div className="flex gap-1 text-[20px] text-blue-300">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                    </div>
                );
            case 5:
                return (
                    <div className="flex gap-1 text-[20px] text-blue-300">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="px-4 border border-gray-700 rounded-xl max-w-[400px]">
            <div>
                <Image className="w-full h-auto" src={img} width={200} height={300} alt={title} />
            </div>

            <div className="space-y-2 py-2 text-white">
                <h2 className="text-white font-medium uppercase">{title}</h2>
                <p className="text-gray-500 max-w-[150px]">{desc}</p>
                <div>{generateRating(rating)}</div>

                <div className="font-bold flex gap-4">
                    ${price}
                    <del className="text-gray-500 font-normal">
                        ${parseInt(price) + 50}.00
                    </del>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
