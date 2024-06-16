import React from 'react'

const NavBar = () => {
    return (
        <div className="hidden lg:block">
            <div className="container">
                <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-white">
                    <div className="navbar__link relative cursor-pointer">HOME</div>
                    <div className="navbar__link relative cursor-pointer">CATEGORIAS</div>
                    <div className="navbar__link relative cursor-pointer">{'MEN'}</div>
                    <div className="navbar__link relative cursor-pointer">CAMISETAS</div>
                    <div className="navbar__link relative cursor-pointer">SUDADERAS</div>
                    <div className="navbar__link relative cursor-pointer">BLOG</div>
                    <div className="navbar__link relative cursor-pointer">OUTLET</div>
                </div>
            </div>
        </div>
    )
}

export default NavBar