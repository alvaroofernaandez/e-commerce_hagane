import React from 'react'

import {BsInstagram, BsTwitterX, BsLinkedin} from "react-icons/bs"
import { VscColorMode } from "react-icons/vsc";

const HeaderTop = () => {
    return (
        <div className="border-b border-gray-700 hidden sm:block">
            <div className="container py-4">
                <div className="flex justify-between items-center">
                    {/* Este es la parte izquierda del Header, donde ubico los botones que redirigen a las RRSS */}
                    <div className="hidden lg:flex gap-1">
                        <div className="header_top_icon_wrapper">
                            <a href="https://www.instagram.com/alvaroofernaandez_/"><BsInstagram/></a>
                        </div>
                        <div className="header_top_icon_wrapper">
                            <a href="https://x.com/alvaroofdzam"><BsTwitterX /></a>
                        </div>
                        <div className="header_top_icon_wrapper">
                            <a href="https://www.linkedin.com/in/álvaro-fernández-amaro-6527b929b/"><BsLinkedin /></a>
                        </div>
                    </div>
                    {/* Este es la parte central del Header, donde simplemente añadire una frase*/}
                    <div className="text-white text-md[14px]">
                        <strong>THIS E-COMERCE WEBSITE is a template designed by @alvaroofernandez</strong>
                    </div>
                    {/* Este es la parte derecha del Header, donde pondré un botón para poner el modo oscuro */}
                    <div className="header_top_icon_wrapper">
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