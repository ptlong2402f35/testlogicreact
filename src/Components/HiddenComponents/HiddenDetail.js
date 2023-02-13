import React from "react";
import './HiddenDetail.css'
import HiddenAccept from "./HiddenDetailType/HiddenAccept";

function HiddenDetail(props)
{   console.log(props.info)
    return(
        <div className="HiddenDetail_bg">
            <div className="HiddenDetail_wrapper">
                {<HiddenAccept handleToggle={props.handleToggle}  element = {props.info}/>}
            </div>
        </div>
    )
}
export default HiddenDetail