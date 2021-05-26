import React, {useState} from 'react';
import './PopupBox2.css'
import SendPopup from './SendPopup'

function PopupBox2(props){
    const isOpen = props.isOpen

    // document.getElementById("passBtn2").style.display='none';

    const [isSentPopup, setisSentPopup] = useState(false);
    function openSentPopup(){
        setisSentPopup(true);  
        document.getElementById("popupBox").style.display = 'none' 
    }

    return(
        <>
            {isOpen? (
                <div className="passContainer">
                    <div className="passWindow">
                        <div className="passContents" onClick={isOpen}>
                            {/* <div className="popupText"><b>Pass to</b>  Minseok Yoo</div> */}
                            <div className="popupText"><b>Message</b> </div>
                            <input className="inputBox" type="text" placeholder="Write Message"/>
                            <SendPopup isSent={isSentPopup}></SendPopup>
                        </div>
                    </div>
                </div>
            ) : null}
            <button id="passBtn2" className="passBtn2" onClick={openSentPopup}>Send</button>
            
    
        </>
    )
}

export default PopupBox2;