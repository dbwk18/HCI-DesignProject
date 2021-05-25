import React, {useState} from 'react';
import './PopupBox2.css'
import SendPopup from './SendPopup'

function PopupBox2(props){
    console.log('-------popupbox2---------', props)

    function openSentPopup(){
        console.log('openSentPopup -------------- what the fuckkkkkkkkkkkk')
        document.getElementById("sendBoxContainer" + props.idx).style.display = 'block' 
    }
    console.log('----last---popupbox2---------', props)
    return(
        <>
            <div className="passContainer" id = {'passContainer' + props.idx}>
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