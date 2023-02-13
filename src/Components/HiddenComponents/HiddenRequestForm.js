import React, { useState } from "react";
import './HiddenRequestForm.css'

function HiddenRequestForm(props) {
    function setInput(data)
    {
        props.handleInput(data,props.typeInput)
    }

    return (
        <>

            {props.info && (
                <div className="HiddenFormWrap HiddenFormWrap-info">
                    <div className="HiddenFormName">{props.name}</div>
                    <div className="HiddenFormCurrentValue">
                        {props.currentUser&&props.currentUser.currentValue}
                    </div>
                </div>
            )}
            {!props.info && (<div className="HiddenFormWrap">
                <div className="HiddenFormName">{props.name}</div>
                {!props.select && <input type={props.type} onChange={(e)=>{setInput(e.target.value)}} value = {props.dataInput[props.typeInput]} className={`HiddenFormInput ${props.multiclass}`}></input>}
                {props.select && (
                    <select className="HiddenFormSelect" >
                        <option>CNY</option>
                        <option>JPY</option>
                        <option>VND</option>
                    </select>
                )}

            </div>)}
        </>
    )
}
export default HiddenRequestForm