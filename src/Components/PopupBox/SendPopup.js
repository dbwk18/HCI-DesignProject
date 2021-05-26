import React from 'react'
import './SendPopup.css'

function SendPopup(props){

    const isSent = props.isSent
    
    function isClose(){
        document.getElementById("popupBox").style.display = 'none'
        alert('ddd')
    }
    // window.onload = function(){
    //     document.getElementById("close").addEventListener('click', isClose)
    // }

    return(
        <div>
            {isSent? (
                <div className="sendBoxContainer">
                    <div className="sendContent" onClick={isSent}>
                        <span id="close" className="close" onClick={isClose}> &times;</span>
                        <div id="sendTextH" className="sendText"><b>Send Message</b></div>
                        <div className="sendText">Message is sent to Minseok Yoo!</div>
                    </div>
                </div>
                
            ) : null}
            
            
        </div>
    )
}

export default SendPopup;