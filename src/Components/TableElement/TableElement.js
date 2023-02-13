import React, { useEffect, useState } from "react";
import HiddenNotification from "../HiddenComponents/HiddenNotification";
import './TableElement.css'
import HiddenDetail from "../HiddenComponents/HiddenDetail";
import HiddenRequest from "../HiddenComponents/HiddenRequest";
function TableElement(props) {
    const [isWarn, setIsWarn] = useState(false)
    const [isDetail, setIsDetail] = useState(false)
    const [info, setInfo] = useState({})
    const [isFormed,setIsFormed] = useState(false)
    const [newArr,setNewArr] = useState([])
    const handleNotifi = (data) => {
        
        setIsWarn(data)
    }
    const handleToggleDetail = (data, e) => {
        
        setIsDetail(data)
        e && setInfo(e)
        
    }
    
    function handleApplyForm(data)
    {
       
        setIsFormed(true)
        setInfo(data)
    }
    useEffect(()=>{
        var newArr = props.infors.map((infor)=>infor)
        setNewArr(newArr.reverse())
    },[props.infors])
    return (
        <>
            <table className="TableElement">
                <thead>
                    <tr className="Table_header-row">
                        <td className="Table_header">
                            <div className="Table_header_title">Ngày</div>
                        </td>
                        <td className="Table_header">
                            <div className="Table_header_title">Giá trị</div>
                        </td>
                        <td className="Table_header">
                            <div className="Table_header_title">Trạng thái</div>
                        </td>
                        <td className="Table_header">
                            <div className="Table_header_title">Ngân hàng</div>
                        </td>
                        <td className="Table_header">
                            <div className="Table_header_title">Thao tác</div>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {(props.infors) && newArr.reverse().map((info, i) => {

                        return (

                            <tr className="Table_body_row" key={i}>
                                <td className="Table_body">
                                    <div className="Table_body_value">{info.date}</div>
                                </td>
                                <td className="Table_body">
                                    <div className="Table_body_value">{info.value}</div>
                                </td>
                                <td className="Table_body">
                                    <div className="Table_body_value">{info.status}</div>
                                </td>
                                <td className="Table_body">
                                    <div className="Table_body_value">{info.infobanking}</div>
                                </td>
                                <td className="Table_body Table_btn">
                                    <div className="Table_body_value Table_body_actions">
                                        <button className="table_btn Form_btn" onClick={()=>handleApplyForm(info)}>Dùng mẫu</button>
                                        <button className="table_btn Cancle_btn" onClick={() => handleNotifi(true)}>Hủy yêu cầu</button>
                                        <button className="table_btn Detail_btn" onClick={() => handleToggleDetail(true, info)}>Xem chi tiết</button>
                                    </div>
                                </td>
                            </tr>

                        )
                    })}
                </tbody>
            </table>
            {isFormed && <HiddenRequest toggle = {setIsFormed} infor = {info}/>}
            {isDetail && <HiddenDetail info={info} handleToggle = {handleToggleDetail} />}
            {isWarn && <HiddenNotification handleSet={handleNotifi} />}
        </>
    )
}
export default TableElement