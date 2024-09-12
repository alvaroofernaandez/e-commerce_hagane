import Image from 'next/image';
import React from 'react';

const Testimonial = () => {
    return (
        <div>
            <div className="container grid-cols-2 py-16 ">
                <h2 className="pb-4 text-2xl font-medium text-blue-300">Testimonials</h2>
                <div className="grid lg:grid-cols-[300px,1fr] gap-4">
                    <div className="grid p-6 border border-gray-300 rounded-2xl place-items-center lg:p-0">
                        <div className="flex flex-col items-center gap-1 text-center">
                            <Image className="inline-block rounded-full" src="/user.png" width={150} height={150} alt="profile"/>
                            <h2 className="text-blue-500 font-black text-[20px]">Álvaro Fernández</h2>
                            <p className="text-white">CEO & Founder Invision</p>
                            <Image className="inline-block py-2 text-blue-300" src="/quotes.svg" width={30} height={30} alt="quotes"/>
                            <p className="max-w-[200px] text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>

                    <div className="bg-blue-600 bg-[url(/bg.png)] bg-cover h-[500px] rounded-2xl grid place-items-center">
                        <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
                            <button className="p-2 text-white bg-black rounded-md">25% DISCOUNT</button>
                            <h2 className="font-extrabold text-2xl text-[#272727] ">Summer Collection</h2>
                            <p className="text-gray-500 text-[20px]">Starting @ $19.99 <a href="#" className='transition duration-500 ease-in-out hover:text-cyan-500 hover:underline'><strong>Shop now</strong></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial