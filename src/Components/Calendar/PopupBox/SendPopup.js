import React from 'react'
import './SendPopup.css'

function SendPopup(props){
    console.log('popupbox', props.idx)
    function isClose(){
        console.log('hellowadjflksjdfljsdfkjsd;ljs')
        // document.getElementById("popupBox" + props.idx).style.display = 'none'
        // document.getElementById("sendBoxContainer" + props.idx).style.display = 'none'

        if (props.idx === 0) {
            document.getElementById("popupBox0-" + props.idx).style.display = 'none'
            document.getElementById("sendBoxContainer" + props.idx).style.display = 'none'
            document.getElementById('task3-you').src = 'https://user-images.githubusercontent.com/74011145/119564133-64205b00-bde3-11eb-9376-ada575885788.png'
            
        } else if  (props.idx === 1) {
            document.getElementById('task3-sent').src = 'https://user-images.githubusercontent.com/74011145/119564133-64205b00-bde3-11eb-9376-ada575885788.png'
            document.getElementById('popupBox1-' + props.idx).style.display = 'none'
            document.getElementById("sendBoxContainer" + props.idx).style.display = 'none'
        }
    }

    return(

        <div className="sendBoxContainer" id = {'sendBoxContainer' + props.idx}>
            <div className="sendContent">
                <span id={"close" + props.idx} className="close" onClick={isClose}> &times;</span>
                <div id={"sendTextH" + props.idx} className="sendText"><b>Send Message</b></div>
                <div className="sendText">Message is sent to Minseok Yoo!</div>
            </div>
        </div>
        
    )
}

export default SendPopup;