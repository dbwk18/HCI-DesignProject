import React, {useState} from 'react';
import './PopupBox2.css'
import SendPopup from './SendPopup'

function PopupBox2(props){

    function openSentPopup(){
        document.getElementById("sendBoxContainer" + props.idx).style.display = 'block' 
    }
    return(
        <>
            <div className="passContainer0" id = {'passContainer' + props.idx}>
                <div className="passWindow">
                    <div className="passContents">
                        <div className="popupText"><b>Message</b> </div>
                        <input className="inputBox" type="text" placeholder="Write Message"/>
                    </div>
                </div>
            </div>
            <button id={"passBtn2-" + props.idx} className="passBtn2" onClick={openSentPopup}>Send</button>
    
        </>
    )
}

export default PopupBox2;