import React, {useState} from 'react';
import './PopupBox2.css'
import SendPopup from './SendPopup'

function PopupBox2(props){
    const isOpen = props.isOpen

    const [isSentPopup, setisSentPopup] = useState(false);
    function openSentPopup(){
        setisSentPopup(true);   
    }

    return(
        <>
            {isOpen? (
                <div className="passContainer">
                    <div className="passWindow">
                        <div className="passContents" onClick={isOpen}>
                            {/* <div className="popupText"><b>Pass to</b>  Minseok Yoo</div> */}
                            <div className="popupText"><b>Message</b> </div>
                            <input className="inputBox" type="text"/>
                            <button className="passBtn2" onClick={openSentPopup}>Send</button>
                            <SendPopup isSent={isSentPopup}></SendPopup>
                        </div>
                    </div>
                </div>
            ) : null}
        
    
        </>
    )
}

export default PopupBox2;