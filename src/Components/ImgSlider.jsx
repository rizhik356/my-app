import React, { useContext, useState } from "react";
import AppContext from '../init'

const ImgSlider = () => {
    const { imgStore, defaultColor } = useContext(AppContext);
    const currentImg = imgStore[defaultColor];
    const [activeImg, setActiveImage] = useState(0);

    const handleNextSlide = () => {
        activeImg !== currentImg.length - 1 
        ? setActiveImage(activeImg + 1) 
        : setActiveImage(0);
    }

    const handlePrevSlide = () => {
        activeImg !== 0 
        ? setActiveImage(activeImg - 1) 
        : setActiveImage(currentImg.length);
    }

    const handleChangeSlide = (id) => {
        setActiveImage(id)
    }

    return (
        <div className="img_slider d-flex flex-column">
        <div 
            className="main_img_slider d-flex align-items-center justify-content-between" 
            style={{backgroundImage:`url(${currentImg[activeImg]})`}}
        >
                <button className="left_slider slider" onClick={handlePrevSlide}></button>
                <button className="right_slider slider" onClick={handleNextSlide}></button>
        </div>
        <div className="selectors d-flex justify-content-between">
            {currentImg.map((path ,index) => {
                
                return (
                    <div 
                    className=
                    {
                        index === activeImg 
                        ? "selector selector_active" 
                        : "selector"
                    } 
                    style={{backgroundImage:`url(${path})`}}
                    onClick={() => handleChangeSlide(index)}
                    key={index}
                    >
                    </div> )}
                )
            }
        </div>
    </div>
    )
};

export default ImgSlider;