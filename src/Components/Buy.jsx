import React from "react";
import BuySelectors from "./BuySelectors";
import BuyTime from "./BuyTime";
import PayServices from "./PayServices";

const Buy = () => {
    return (
        <div className="buy w-100 d-flex flex-column">
        <BuySelectors />
        <BuyTime />
        <PayServices />
    </div>
    )
};

export default Buy;