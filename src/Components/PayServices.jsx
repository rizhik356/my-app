import React, { useContext } from "react";
import AppContext from '../init'

const PayServices = () => {
    const { payLogo } = useContext(AppContext)
    return (
        <div className="d-flex justify-content-between">
            {payLogo.logo.map((path) => 
            <div key={path} className="pay_service_item" >
                <div className="pay_service_img " style={{backgroundImage:`url(${path})`}}></div>
            </div>)}
        </div>
    )
};

export default PayServices;