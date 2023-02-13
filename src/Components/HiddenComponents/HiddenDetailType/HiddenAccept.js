import React, { useEffect, useState } from "react";
import './HiddenAccept.css'

function HiddenAccept(props) {
    useEffect(()=>{
        
    },[])
    function handleClose(data){
        props.handleToggle(data,null)
    }
    const  element  = props.element
    const [desElement, setDesElement] = useState({})
    const textDes = {
        accept: {
            des: `Yêu cầu rút tiền của bạn đã được chấp nhận. Vui lòng truy vấn tài khoản ngân hàng của bạn để kiểm tra giao dịch chuyển tiền từ chúng tôi đã thành công.
        Xin trân trọng cảm ơn!`, title: `RÚT TIỀN THÀNH CÔNG`
        },
        denied: {
            des: `Yêu cầu rút tiền của bạn đã bị từ chối. Vui lòng liên hệ với quản trị viên để có thêm thông tin chi tiết.
        Xin trân trọng cảm ơn!`, title: `YÊU CẦU ĐÃ BỊ TỪ CHỐI`
        },
        cancle: {
            des: `Yêu cầu rút tiền của bạn đã bị hủy. Bạn có thể tạo yêu cầu mới khi cảm thấy mong muốn.
        Xin trân trọng cảm ơn!`, title: `YÊU CẦU ĐÃ BỊ HỦY BỎ`
        }
    }
    useEffect(() => {
        setDesElement(textDes[element.status])
    }, [])
    console.log(desElement)
    return (
        <>
            <div className={`HiddenDetail_header Hidden-${element.status}`}>
                <div className="HiddenDetail_header-box">
                    <img alt="" src='https://frontenddev.oddlogistics.com/img/v2/method-4.png' className="HiddenDetail_header-img"></img>
                </div>
                <h2 className="HiddenDetail_header-title">{desElement.title}</h2>
            </div>
            <div className="HiddenDetail_Des-box">
                
                <p className="HiddenDetail_header_Des-p">{desElement.des}</p>
            </div>
            <div className="HiddenDetail_content">
                <div className="HiddenDetail_content_detail">
                    <div className="HiddenDetail_content_detail-item HiddenDetail_item-CreateDate">
                        <span className="HiddenDetail_content_detail-i-title">Ngày tạo yêu cầu</span>
                        <span className="HiddenDetail_content_detail-i-value">{element.date}</span>
                    </div>
                    <div className="HiddenDetail_content_detail-item HiddenDetail_item-ConfirmDate">
                        <span className="HiddenDetail_content_detail-i-title">Ngày duyệt yêu cầu</span>
                        <span className="HiddenDetail_content_detail-i-value">--</span>
                    </div>
                    <div className="HiddenDetail_content_detail-item HiddenDetail_item-ValueCount">
                        <span className="HiddenDetail_content_detail-i-title">Số tiền giao dịch</span>
                        <span className="HiddenDetail_content_detail-i-value">{element.value}</span>
                    </div>
                    {
                        element.status === "accept" &&
                        (
                            <div className="HiddenDetail_content_detail-item HiddenDetail_item-CurrentValue">
                                <span className="HiddenDetail_content_detail-i-title">Số dư sau khi rút</span>
                                <span className="HiddenDetail_content_detail-i-value">--</span>
                            </div>
                        )
                    }
                    <div className="HiddenDetail_content_detail-item">
                        <span className="HiddenDetail_content_detail-i-title"></span>
                        <span className="HiddenDetail_content_detail-i-value"></span>
                    </div>
                </div>
                <div className="HiddenDetail_content_wrap ">
                    <div className="HidednDetail_content_wrap-des">
                        <div className="HiddenDetail_content_des-title">Mô tả yêu cầu rút tiền</div>
                        <div className="HiddenDetail_content_des-value">{element.comment}</div>
                    </div>
                    {element.status === "denied" && (
                        <div className="HidednDetail_content_wrap-reason">
                            <div className="HiddenDetail_content_des-title">Lý do từ chối</div>
                            <div className="HiddenDetail_content_des-value">--</div>
                        </div>
                    )}


                </div>
                <div className="HiddenDetail_content_boxbtn">
                    <button onClick={()=>handleClose(false)} className="HiddenDetail_content_btn">Đóng</button>
                </div>
            </div>
        </>
    )
}
export default HiddenAccept