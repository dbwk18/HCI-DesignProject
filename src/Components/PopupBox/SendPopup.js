import React from 'react'
import './SendPopup.css'

function SendPopup(props){

    const isSent = props.isSent

    return(
        <>
            {isSent? (
                <div className="sendBoxContainer">
                    <div className="sendContent" onClick={isSent}>
                        <div className="sendText"><b>Send Message</b></div>
                        <div className="sendText">Message is sent to Minseok Yoo!</div>
                    
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default SendPopup;