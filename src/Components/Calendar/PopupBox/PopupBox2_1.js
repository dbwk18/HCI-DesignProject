import React, {useState} from 'react';
import './PopupBox2.css'
import SendPopup from './SendPopup'

function PopupBox2_1(props){

    function openSentPopup(){
        document.getElementById("sendBoxContainer" + props.idx).style.display = 'block' 
    }
    return(
        <>
            <div className="passContainer1" id = {'passContainer' + props.idx}>
                <div className="passWindow">
                    <div className="passContents">
                        <div className="popupText"><b>Message</b> </div>
                        <p className="inputBox1">
                        Haha! You lost the bet yesterday. So you have to clean up not only your part, but also my
                        </p>
                    </div>
                </div>
            </div>
            <button id={"passBtn2-accept-" + props.idx} className="passBtn2" onClick={openSentPopup}>Send</button>
            <button id={"passBtn2-deny-" + props.idx} className="passBtn2" onClick={openSentPopup}>Send</button>
    
        </>
    )
}

export default PopupBox2_1;