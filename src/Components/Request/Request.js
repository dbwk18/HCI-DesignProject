import React, {useState, useEffect} from 'react';
import {db, firebaseApp} from '../../firebase.js'
import './Request.css'
import img_notification from '../../Icons/notification.png'

import {Button} from "react-bootstrap";

function Request (props) {

    // props.data : 일정에 관한 데이터 전부
    // props.id: schedule0523과 같이 어느날짜에 속하는 메세지인지를 나타냄
    // props.row: 일정이 속한 행
    // props.col: 일정이 속한 열
    const [view, setView] = useState(true)
    const [deny, setDeny] = useState(false)



    const change_view = () => {
        
        if (view === true) {
            document.getElementById(props.id + '-request-message-wrap').style.display = 'flex'
        } else {
            document.getElementById(props.id + '-request-message-wrap').style.display = 'none'
        }
        setView(view => !view)
    }

    const click_send = () => {
        db.collection('schedules').doc(props.id).update({
            message: document.getElementById(props.id + '-requestContext').value,
            status: 1
        })
    }

    const click_deny = () => {
        setDeny(deny => !deny)
    }
    
    const click_accept = () => {
        db.collection('schedules').doc(props.id).update({
            message: '',
            status: 4
        })
    }   

    const enter_close = () => {
        document.getElementById(props.id + '-request-message-close').style.boxShadow = '5px 5px 2px lightgray'
    }
    const leave_close = () => {
        document.getElementById(props.id + '-request-message-close').style.boxShadow = ''
    }

    return(
        <div className = 'request-wrap' id = {props.id + '-request'}>
            <div className = 'request'>
                <img src = {img_notification} width = "30" /> <div className = 'request-arrived'>Request arrived</div>
                <div className = 'request-content'>
                    About {'(' + props.data.start + ') ' + props.data.title}
                </div>
                <Button className = "btn btn-secondary request-view" id = {props.id + '-request-view'} onClick = {evt => change_view()}>View</Button>
                {/* <button className = 'request-view' id = {props.id + '-request-view'} onClick = {evt => change_view()}>View</button> */}
            </div>
            <div className = 'request-message-wrap' id = {props.id + '-request-message-wrap'} style = {{display: 'none'}}>
                <div className = 'request-message-default' id = {props.id  + '-request-message-default'}>
                    <div className = 'request-body-header-wrap'>
                        <div className = 'request-message-header'>Request Info</div>
                        <button className = 'request-message-close' id = {props.id + '-request-message-close'}onClick = {_ => change_view()} onMouseEnter = {_ => enter_close()} onMouseLeave = {_ => leave_close()}>&times;</button>
                    </div>
                    <div className = 'request-body-wrap'>
                        <div className = 'request-body-subject'>Title : </div>
                        <div className = 'request-body-text'>{props.data.title}</div>
                    </div>
                    <div className = 'request-body-wrap'>
                        <div className = 'request-body-subject'>When : </div>
                        <div className = 'request-body-text'>{props.data.start + (props.data.duration === 1 ? '': ' ~ ' + props.data.end)}</div>
                    </div>
                    <div className = 'request-body-message-wrap'>
                        <div className = 'request-body-subject-message'>Message: </div>
                        <div className = 'request-body-message'>{props.data.message}</div>
                    </div>
                    <div className = 'request-body-button-wrap'>
                        <Button className="btn btn-success request-message-button-accept " onClick = {evt => click_accept()}>Accept</Button>
                        <Button className="btn btn-danger request-message-button-deny" onClick = {evt => click_deny()}>Deny</Button>
                        {/* <button className = 'request-message-button-accept' onClick = {evt => click_accept()}>Accept</button>
                        <button className = 'request-message-button-deny' onClick = {evt => click_deny()}>Deny</button> */}
                    </div>
                </div>
                {
                    deny
                    ?
                    <div className = 'request-message-deny'>
                        <div className = 'request-body-message-wrap'>
                            <div className = 'request-body-subject-message'>Message to send: </div>
                            <textarea 
                                className = 'request-body-textarea'
                                type = 'text'
                                id = {props.id + '-requestContext'}
                                placeholder = 'Type here'></textarea>
                        </div>
                        <div className = 'request-body-button-wrap'>
                            <Button className="btn btn-primary request-message-button-send " onClick = {evt => click_send()}>Send</Button>
                            {/* <button className = 'request-message-button-send' onClick = {evt => click_send()}>Send</button> */}
                        </div>
                    </div>
                    :
                    <></>
                }
            </div>
        </div>
    )
}

export default Request;