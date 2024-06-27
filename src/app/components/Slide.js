import Image from "next/image";
import React from "react";

const Slide = ({img,title, mainTitle, price}) => {
    return (
        <div>
            <div>
                <h3>{title}</h3>
                <h2>{mainTitle}</h2>
                
                <h3>
                    starting at{""}
                    <strong>{price}</strong>.00
                </h3>
                <div>Shop Now</div>
            </div>
            <Image src={img} alt="banner" width={2000} height={2000} />
        </div>
    );
};

export default Slide