import React, { useEffect, useState } from "react";
import './HiddenRequest.css'
import HiddenRequestForm from "./HiddenRequestForm";
import { Context } from "../../App";

function HiddenRequest(props) {
    const userApi = 'http://localhost:3000/user'
    const dataApi = 'http://localhost:3000/data'
    const dataContext = React.useContext(Context)
    const [currentUser,setCurrentUser] = useState()
    const [dataInput,setDataInput] = useState({value: '',
    infobanking: "",
    comment: "",
    date: "",
    status: "",})
    useEffect(()=>{
        dataContext.userData.forEach(user=>{
           
            const CurrentUser = (user.online === true )?  user : undefined
            
            if(CurrentUser)
            {
                setCurrentUser(CurrentUser)
                return 
            }
            if(props.infor!= undefined)
            {   
                console.log(props.infor)
                setDataInput(props.infor)
            }
        })
        
    },[])

    const handleDataInput = (data,type)=>{
        setDataInput((prev)=>{
            return {
                ...prev,
                [type]:data
            }
        })
    }

    const handleOff = (e)=>{
        
        props.toggle(false)
    }
    const handleProganation = (e)=>{
        e.stopPropagation()
    }
    const handleCheck =(data)=>{
        var today = new Date()
        var time = today.getHours() + ":" + today.getMinutes() +" " +today.getDate()+"-"+today.getMonth()+"-"+today.getFullYear()
        console.log(time)
        const newData = {...data,date:time,status:"accept",value:parseFloat(data.value)}
        console.log("newData",newData)
    }
    const handleCreateRequest = (data)=>{
        var today = new Date()
        var time = today.getHours() + ":" + today.getMinutes() +" " +today.getDate()+"-"+(today.getMonth()+1)+"-"+today.getFullYear()
        const newData = {...data,date:time,status:"accept",value:parseFloat(data.value)}
        var option = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(newData)
        }
        fetch(dataApi,option)
            .then(response =>{
                return response.json()
            })
            .then(
                ()=>{
                    dataContext.getFetch("http://localhost:3000/data",dataContext.setData)
                }
            )
    }
    return (
        <div className=" HiddenRequest_bg" onClick={handleOff}>

            <div className="HiddenRequest_wrapper" onClick={handleProganation}>
                <div className="HiddenRequest_header">
                    <p className="HiddenRequest_header_title">Yêu cầu rút tiền</p>
                    <div onClick={handleOff} className="HiddenRequest_close">
                        <i className="uil uil-times HiddenRequestClose-icon"></i>
                    </div>
                </div>
                <div className="HiddenRequest_wrapper_content">
                    <HiddenRequestForm name="Số dư" type='text' select={false} info ={true} currentUser ={currentUser}/>
                    <HiddenRequestForm name="Loại tiền tệ" type='text' select={true} />
                    <HiddenRequestForm name="Giá trị cần rút" type='text' select={false} handleInput = {handleDataInput} typeInput = "value" dataInput={dataInput}/>
                    <HiddenRequestForm name="Thông tin ngân hàng" type='text' select={false} handleInput = {handleDataInput} typeInput = "infobanking" dataInput={dataInput}/>
                    <HiddenRequestForm name="Mô tả" type='text' select={false} handleInput = {handleDataInput} multiclass = "width_range" typeInput = "comment" dataInput={dataInput}/>
                </div>
                <div className="HiddenRequestBtn-Wrap">
                    <button className="HiddenRequestBtn-Close" onClick={handleOff}>Đóng</button>
                    <button className="HiddenRequestBtn-Submit" onClick={()=>handleCreateRequest(dataInput)}>Tạo yêu cầu</button>
                </div>
            </div>
        </div>
    )
}
export default HiddenRequest
