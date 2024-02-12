import React from "react";
import ShippingContainer from "./ShippingContainer";
import { useContext } from "react";
import AppContext from '../init'

const Shipping = () => {
    const { shipping } = useContext(AppContext)
    return (
        <div className="shipping d-flex flex-column">
            {shipping.map((item) => <ShippingContainer key={item.h} data={item}/>)}
        </div>
    )
};

export default Shipping;