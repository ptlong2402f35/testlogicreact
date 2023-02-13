import React, { useContext } from "react";
import './ContentList.css'
import TableElement from "./TableElement/TableElement";
import { Context } from "../App";
const ContentList = ()=>{
    const database = useContext(Context)
   
    return (
        <div className="Content_wrapper">
            <TableElement infors = {database.data}/>
        </div>
    )
}
export default ContentList