import React, {useState, useEffect} from 'react';
import {db, firebaseApp} from '../../firebase'
import * as calendar_info from '../Calendar/calendar_infomation'
import './Messenger.css'

import {Button} from "react-bootstrap";

function Message (props) {

    //props.data : 일정에 관한 데이터 전부
    // props.id: schedule0523과 같이 어느날짜에 속하는 메세지인지를 나타냄
    // props.row: 일정이 속한 행
    // props.col: 일정이 속한 열
    // props.type: 나에게 온 메세지인지, 내가 보내는 메세지인지

    const category_map = calendar_info.category_map
    const [owner, setOwner] = useState('');

    const change_owner = (evt) => {
        setOwner(evt.target.value)
    }

    const close_messagebox = () => {
        document.getElementById(props.id + '-message').style.display = 'none' 
    }

    const update_schedule = () => {
        var start= document.getElementById(props.id + '-start').value
        var end = document.getElementById(props.id + '-end').value
        var duration = end === '' ? 1 : parseInt(end.split('/')[2]) - parseInt(start.split('/')[2]) + 1
        var new_category = parseInt(document.getElementById(props.id + '-category').value)


        db.collection('schedules').doc(props.id).update({
            title : document.getElementById(props.id + '-title').value,
            category : new_category,
            start : document.getElementById(props.id + '-start').value,
            end : document.getElementById(props.id + '-end').value,
            desc : document.getElementById(props.id + '-desc').value,
            duration : duration,
            status : new_category === 2 ? 0 : -1
            
        })
        document.getElementById(props.id + '-message').style.display = 'none'
    }


    return(
        <div className = {'message message-row' + props.row + '-' + props.data.loc + ' message-col' + props.col} id = {props.id + '-message'}>
            <div className = 'message-header'>
                <div className = 'message-header-text'>Edit Schedule</div>
                <div className = 'message-header-close' onClick = {evt => close_messagebox()}>&times;</div>
            </div>
            <div className = 'message-body'>
                <div className = 'message-body-wrap' id = {props.id + '-message-body-title'}>
                    <div className = 'message-body-subject'>Title</div>
                    <input
                        className = 'message-body-input message-input'
                        id = {props.id + '-title'}
                        type = 'text'
                        defaultValue = {props.data.title}></input>
                </div>
                <div className = 'message-body-wrap'>
                    <label className = 'message-body-subject message-body-stretch'>When</label>
                    <div className = 'message-body-time-wrap'>
                        <div className = 'message-body-time-wrap-wrap'>
                            <span className = 'message-body-time-wrap-text'>(Start)</span>
                            <input 
                                className = 'message-body-input message-body-input-time message-input'
                                type = 'text'
                                id = {props.id + '-start'}
                                defaultValue = {props.data.start}></input>
                        </div>
                        <div className = 'message-body-time-wrap-wrap'>
                            <span className = 'message-body-time-wrap-text'>(End)</span>
                            <input
                                className = 'message-body-input message-body-input-time message-input'
                                id = {props.id + '-end'}
                                type = 'text'
                                defaultValue = {props.data.end}></input>
                        </div>
                    </div>
                    
                </div>

                <div className = 'message-body-wrap'> 
                    <label className = 'message-body-subject'>Category</label>
                    <select className = 'message-body-input message-input' id = {props.id + '-category'} defaultValue = {props.data.category}>
                        <option value = '1'>Work</option>
                        <option value = '2'>Family</option>
                        <option value = '3'>Private</option>
                        <option value = '4'>Other</option>
                    </select>
                </div>
                <div className = 'message-body-wrap-textarea'>
                    <label className = 'message-body-subject message-body-stretch'>Desc.</label>
                    <textarea
                        className = 'message-body-textarea message-input'
                        type = 'text'
                        id = {props.id + '-desc'}
                        defaultValue = {props.data.desc}></textarea>
                </div>
            </div>
            <div className = 'message-submit-wrap'>
                <Button className="btn btn-outline-warning message-submit" id = {props.id + '-message-submit'} onClick = {evt => update_schedule()}>Submit</Button>
                {/* <button className = 'message-submit' id = {props.id + '-message-submit'} onClick = {evt => update_schedule()}>Submit</button> */}
            </div>
        </div>
    )
}

export default Message;