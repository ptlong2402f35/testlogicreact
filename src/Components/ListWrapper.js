import React from "react";
import ContentList from "./ContentList";
import Header from "./Header";
import './ListWrapper.css'

const ListWrapper = ()=>{

    return (
    <div className="List_Wrapper">
        <Header/>
        <ContentList/>
    </div>
    )
}
export default ListWrapper