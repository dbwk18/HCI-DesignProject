import React, {useState} from 'react';
import './PopupBox.css'
import PopupBox2 from './PopupBox2.js'



function PopupBox(){
    const [isPopup, setisPopup]= useState(false);

    function openPopup(){
        document.getElementById("passBtn").style.display='none';
        setisPopup(true);   
    }

    // function closePopup(){
    //     setisPopup(false);
    // }

    return(
        <div className="popupBox">
            <div className="popupHeader"><b>Schedule Info</b></div>
            <div className="popupText"><b>Title:</b> Bring son from academy</div>
            <div className="popupText"><b>When:</b> 10:00 A.M.</div>
            <div className="popupText"><b>Where:</b> Genious Academy</div>
            {/* <div className="popupText"><b>Who:</b> Sammul Jung</div> */}
            <button id="passBtn" className="passBtn" onClick={openPopup}>pass to other</button>
            <PopupBox2 isOpen={isPopup}></PopupBox2>
            
            

        </div>
    )
}

export default PopupBox;