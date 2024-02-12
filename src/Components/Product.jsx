import React from "react";
import TrustPilot from "./TrustPilot";
import ImgSlider from "./ImgSlider";
import About from "./About";
import Buy from "./Buy";
import Shipping from "./Shipping";

 const Product = () => {
return (
    <div className="product d-flex flex-column align-items-center">
        <TrustPilot />
        <ImgSlider />
        <Buy />
        <About />
        <Shipping />
    </div>
)
 };

 export default Product;