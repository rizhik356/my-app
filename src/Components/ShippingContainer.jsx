import React, { useState } from "react";

const ShippingContainer = ({ data }) => {
    const { h, p, isOpen } = data;

    const [isOpened, setOpen] = useState(isOpen);

    const handleClick = () => {
        setOpen(!isOpened);
    }; 

    const openButton = (
        <button onClick={handleClick} className="d-flex justify-content-center align-items-center">
        <div className="bn">
        <div className="button_inner_open"></div>
        </div>
    </button>
    );
    const closeButton = (
        <button onClick={handleClick} className="d-flex justify-content-center align-items-center">
        <div className="bn">
        <div className="button_inner"></div>
        </div>
    </button>

    );
    
    return (
        <div className="shipping_container d-flex flex-column justify-content-between">
        <div className="shipping_frame d-flex justify-content-between"> 
            <div className="shipping_title d-flex align-items-center">
                <div className="shipping_icon"></div>
                <h3>{h}</h3>
            </div>
            {isOpened ? closeButton : openButton}
        </div>
        {isOpened ? <p>{p}</p> : null}
    </div>
    )
};

export default ShippingContainer;