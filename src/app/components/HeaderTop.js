import React from 'react'

import {BsInstagram, BsTwitterX, BsLinkedin, Bs} from "react-icons/bs"
import { VscColorMode } from "react-icons/vsc";

const HeaderTop = () => {
    return (
        <div className="border-b border-gray-200 hidden sm:block">
            <div className="container py-4">
                <div className="flex justify-between items-center">
                    {/* Este es la parte izquierda del Header, donde ubico los botones que redirigen a las RRSS */}
                    <div className="hidden lg:flex gap-1">
                        <div className="header_top_icon_wrapper">
                            <BsInstagram />
                        </div>
                        <div className="header_top_icon_wrapper">
                            <BsTwitterX />
                        </div>
                        <div className="header_top_icon_wrapper">
                            <BsLinkedin />
                        </div>
                    </div>
                    {/* Este es la parte central del Header, donde simplemente añadire una frase*/}
                    <div className="text-gray-500 text-md[14px]">
                        <strong>THIS E-COMERCE WEBSITE IS A TEMPLATE DESIGNED BY @alvaroofernandez</strong>
                    </div>
                    {/* Este es la parte derecha del Header, donde pondré un botón para poner el modo oscuro */}
                    <div className="header_top_icon_wrapper2">
                        <div>
                            <VscColorMode />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;