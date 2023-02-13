import React, { useState } from "react";
import './Header.css'
import HiddenRequest from "./HiddenComponents/HiddenRequest";
const Header = ()=>{
    const [isOpenHidden,setIsOpenHidden] = useState(false)

    const toggleHidden = (data)=>{
        setIsOpenHidden(data)
    }

    return(
        <>
        <div className="RequestHeader">
            <div className="Request_title">
                <span className="Request_titleText">Danh sách yêu cầu rút tiền</span>
            </div>
            <button className="Request_button" onClick={()=>toggleHidden(true)}>Yêu cầu rút tiền</button>
        </div>
        {isOpenHidden && <HiddenRequest toggle = {toggleHidden} />}
        </>
    )
}
export default Header