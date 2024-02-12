import React from "react";

const Header = () => (
    <>
    <div className="offer d-flex justify-content-center">
            <h1 className="">Flash Sale in 'Country': Free 2-3 Day express delivery!</h1>
        </div>
        <header className="d-flex justify-content-between align-items-center">
            <img className="logo align-self-end" src="./img/Logo.png" alt="" />
            <nav>
                <ul className="d-flex justify-content-end align-items-end">
                    <li>
                        About Product
                    </li>
                    <li>
                        Reviews
                    </li>
                    <li>
                        Contact Us
                    </li>
                </ul>
            </nav>
        </header>
    </>
);

export default Header;