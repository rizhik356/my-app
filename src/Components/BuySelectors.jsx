import React, { useContext } from "react";
import AppContext from '../init';

const  BuySelectors = () => {
    const { colors, defaultColor, setColor } = useContext(AppContext);

    const handleClick = (color) => setColor(color);

return (
    <>
                <div className="buy_description">
                    <h1>Beats Studio Buds + </h1>
                    <span className="buy_description_span">True Wireless Noise Cancelling Earbuds</span>
                </div>
                <div className="price_off">
                    <div className="price_text d-flex align-items-center">
                        <span className="old_price">£150</span>
                        <span className="new_price">£3</span>
                        <div className="off">
                            90% OFF
                        </div>
                    </div>
                </div>
                <div className="colors_selector_container d-flex flex-column">
                    <h3>Color:</h3>
                    <div className="color_selectors d-flex align-items-center">
                        {colors.map((color) => {
                            const defCol = (
                            <div className='colors' key={color} style={{cursor:'pointer'}}>
                                <div className={`${color}`}/>
                            </div>
                        );
                            return color === defaultColor 
                            ? defCol 
                            : 
                            <div className='colors' key={color} style={{cursor:'pointer', borderColor:'transparent'}}>
                                <div onClick={() => handleClick(color)} key={color} style={{cursor:'pointer'}} className={`${color}`}/>
                             </div>                           
                        })}
                    </div>
                </div>
                
    </>
)
};

export default BuySelectors;