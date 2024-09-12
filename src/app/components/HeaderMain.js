import React from 'react'

import {BsSearch} from "react-icons/bs";
import {BiUser} from "react-icons/bi";
import {FiHeart} from "react-icons/fi";
import {HiOutlineShoppingBag } from "react-icons/hi";

const HeaderMain = () => {
    return (
        <div className="py-6 border-b border-gray-700">
            <div className="container items-center justify-between sm:flex">
                <div className="pb-4 text-4xl font-bold text-center text-white sm:pb-0">
                鋼 
                </div>

                <div className="w-full sm:w-[300px] md:w-[70%] relative">
                    <input className="w-full p-2 px-4 border border-gray-200 rounded-lg" type="text" placeholder="Introduce el nombre del producto..."/>
                    <BsSearch className="absolute top-0 right-0 mt-3 mr-3 text-gray-400" size={20} />
                </div>

                <div className="hidden lg:flex text-white text-[30px] gap-4 ">
                    <BiUser className='transition duration-500 ease-in-out cursor-pointer hover:scale-105'/>

                    <div className='relative transition duration-500 ease-in-out cursor-pointer hover:scale-105'>
                        <FiHeart/>
                        <div className='bg-cyan-500 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>0</div>
                    </div>

                    <div className='relative transition duration-500 ease-in-out cursor-pointer hover:scale-105'>
                        <HiOutlineShoppingBag/>
                        <div className='bg-cyan-500 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>0</div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default HeaderMain