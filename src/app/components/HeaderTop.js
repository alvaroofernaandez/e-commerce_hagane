import React from 'react'

import {BsInstagram, BsTwitterX, BsLinkedin} from "react-icons/bs"
import { VscColorMode } from "react-icons/vsc";

const HeaderTop = () => {
    return (
        <div className="hidden border-b border-gray-700 sm:block">
            <div className="container py-4">
                <div className="flex items-center justify-between">
                    {/* Este es la parte izquierda del Header, donde ubico los botones que redirigen a las RRSS */}
                    <div className="hidden gap-1 lg:flex">
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
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;