import React, {useState} from 'react';
import './PopupBox.css'
import PopupBox2 from './PopupBox2'
import SendPopup from './SendPopup'

function PopupBox0(props){
    const [pass, setPass] = useState(false)



    function openPopup(){
        document.getElementById("passBtn-" + props.idx).style.display='none';
        document.getElementById("passContainer" + props.idx).style.display='block';
        document.getElementById('passBtn2-' + props.idx).style.display='block';
        setPass(true)
    }

    return(
        <>
        <div id={"popupBox0-" + props.idx} className="popupBox0">
            <div className="popupHeader"><b>Schedule Info</b></div>
            <div className="popupText"><b>Title:</b> Bring son from academy</div>
            <div className="popupText"><b>When:</b> 10:00 A.M.</div>
            <div className="popupText popupText-where"><b>Where:</b> Genious Academy</div>
            <button id={"passBtn-" + props.idx} className="passBtn" onClick={openPopup}>pass to other</button>
            {/* <div className="popupText"><b>Who:</b> Sammul Jung</div> */}
            
            <PopupBox2 idx = {props.idx}></PopupBox2>
        </div>
        
        <SendPopup idx = {props.idx}/>
        </>
    )
}

export default PopupBox0;