import React from "react";

const Preview = () => (
    <div className="preview">
    <div className="preview_background">
        <div className="beats_studio_pro_container d-flex flex-column justify-content-between">
            <div className="text">
            <h2>Beats Studio Buds + </h2>
            <h3>Powerful Sound. Perfect Fit</h3>
            </div>
            <div className="price_container d-flex justify-content-center align-items-center">
            <div className="price d-flex justify-content-center align-items-center">
                <span className="old_class">£150</span>      
                <span className="new_class">£5</span>       
            </div>
            </div>
        </div>
    </div>
    <div className="frame d-flex justify-content-between">
        <div className="frame_border d-flex justify-content-center align-items-center">
            <div className="frame_child d-flex flex-column justify-content-between align-items-center">
                <div className="icon icon-1"></div>
                <p>Up to 1.6x MoreActive Noise Cancelling</p>
            </div>
        </div>
        <div className="frame_border d-flex justify-content-center align-items-center">
            <div className="frame_child d-flex flex-column justify-content-between align-items-center">
                <div className="icon icon-2"></div>
                <p>Up to 36 Hours of Listening Time with Charging Case</p>
            </div>
        </div>
        <div className="frame_border d-flex justify-content-center align-items-center">
            <div className="frame_child d-flex flex-column justify-content-between align-items-center">
                <div className="icon icon-3"></div>
                <p>3x Larger Mics for Crisp, Clear Calls</p>
            </div>
        </div>
    </div>
</div>
);

export default Preview;