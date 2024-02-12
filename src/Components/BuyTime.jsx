import React from "react";

const BuyTime = () => {
    return (
        <div className="buy_time d-flex flex-column">
        <div className="d-flex justify-content-center">
            <button className="buy-time_button d-flex align-items-center w-100 justify-content-center">BUY NOW</button>
        </div>
            <div className="time d-flex justify-content-between">
                <div className="text_time d-flex align-items-center">
              <div className="text_time_icon"></div>   
              <div className="text_time_desc">Hurry up! Sale Ends in</div>   
                </div>
                <div className="text_timer d-flex align-items-center">
                    <div className="for_what">
                            <span className="timer_">03 h</span>
                        </div>
                        <span>:</span>
                        <div className="for_what">
                            <span className="timer_">59 m</span>
                        </div>
                        <span>:</span>
                        <div className="for_what">
                            <span className="timer_">37.7 s</span>
                        </div>
                </div>
            </div>
    </div>
    )
};

export default BuyTime;