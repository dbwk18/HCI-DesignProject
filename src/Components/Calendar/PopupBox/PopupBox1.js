import React, {useState} from 'react';
import './PopupBox.css'
import PopupBox2 from './PopupBox2'
import PopupBox2_1 from './PopupBox2_1'
import PopupBox2_2 from './PopupBox2_2'
import SendPopup from './SendPopup'

function PopupBox1(props){
    console.log('-------popupbox1---------', props)
    const [pass, setPass] = useState(false)



    function openPopup(evt){
        var elem_id = evt.target.id
        document.getElementById("passBtn-" + props.idx).style.display='none';
        document.getElementById("passContainer-" + props.idx).style.display='block';
        document.getElementById('passBtn2-' + props.idx).style.display='block';
        setPass(true)
    }

    const accept_schedule = () => {
        document.getElementById('task3-sent').src = 'https://user-images.githubusercontent.com/74011145/119564133-64205b00-bde3-11eb-9376-ada575885788.png'
        document.getElementById('popupbox1-wrap').style.display = 'none'
    }

    const deny_schedule = () => {
        document.getElementById("passBtn-accept-" + props.idx).style.display='none';
        document.getElementById("passBtn-deny-" + props.idx).style.display='none';
        document.getElementById("passContainer-" + props.idx).style.display='block';
        document.getElementById('passBtn2-' + props.idx).style.display='block';
        setPass(true)
    }

    return(
        <>
        <div id={"popupBox1-" + props.idx} className="popupBox1">
            <div className="popupHeader"><b>Schedule Info</b></div>
            <div className="popupText"><b>Title:</b> Bring son from academy</div>
            <div className="popupText"><b>When:</b> 10:00 A.M.</div>
            <div className="popupText popupText-where"><b>Where:</b> Genious Academy</div>
            {/* <div className="popupText"><b>Who:</b> Sammul Jung</div> */}
            <PopupBox2_1 idx = {props.idx} />
            <button id={"passBtn-accept-" + props.idx} className="passBtn2-accept" onClick={evt => accept_schedule(evt)}>Accept</button>
            <button id={"passBtn-deny-" + props.idx} className="passBtn2-deny" onClick={evt => deny_schedule(evt)}>Deny</button>
            <PopupBox2_2 idx = {props.idx} />
        </div>
        
        <SendPopup idx = {props.idx}/>
        </>
    )
}

export default PopupBox1;