import './HiddenNotification.css'
import React from 'react'

function HiddenNotification(props)
{
    const handleTurnOff = ()=>{
        props.handleSet(false)
    }

    const handleCancleConfirm =()=>{
        
    }
    return (
        <div className='HiddenNoti_bg' onClick={handleTurnOff}>
            <div className='HiddenNoti_wrapper' onClick={(e)=>{e.stopPropagation()}}>
                <h3 className='HiddenNoti_title'>Bạn chắc chắn muốn hủy yêu cầu này?</h3>
                <div className='HiddenNoti_box'>
                    <button className='HiddenNoti_close HiddenNoti_btn' onClick={handleTurnOff}>Quay lại</button>
                    <button className='HiddenNoti_accept HiddenNoti_btn' onClick={{handleCancleConfirm}}>Đồng ý</button>
                </div>
            </div>
        </div>
    )
}
export default HiddenNotification