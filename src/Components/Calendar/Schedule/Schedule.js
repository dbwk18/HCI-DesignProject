import React, {useState, useEffect} from 'react';
import * as calendar_info from '../calendar_infomation.js'
import './Schedule.css'
import Feedback from '../Feedback/Feedback.js'
function Schedule(props) {
    // console.log(props)
    const day_info = calendar_info.day_info
    const month = parseInt(props.month)
    const date = parseInt(props.date)

    const add_feedback = (evt) => {
        document.getElementById(props.id + '-feedback').setAttribute('style', 'display: block')
    }
    var calendar_location = day_info[month].indexOf(date)
    var calendar_row = parseInt(calendar_location / 7)
    var calendar_col = calendar_location % 7
    var title_len_limit = 15 + 20 * ( parseInt(props.class.substr(props.class.length -1, 1)) - 1)
    // console.log(props.id, title_len_limit)
    return(
        <>
        <div id = {props.id}
        className = {'schedule ' + 'row' + calendar_row + " col" + calendar_col + ' ' + props.category + ' ' + props.class} onDoubleClick = {evt => add_feedback(evt)}>
            <p className = 'schedule-text'>
                {
                    props.title.length > title_len_limit ? props.title.slice(0, title_len_limit) + '...' : props.title
                }
            </p>
        </div>
        <Feedback id = {props.id} row = {calendar_row} col = {calendar_col}/>
        </>
    )
}

export default Schedule