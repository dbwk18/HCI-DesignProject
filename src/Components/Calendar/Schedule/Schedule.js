import React, {useState, useEffect} from 'react';
import * as calendar_info from '../calendar_infomation.js'
import './Schedule.css'
import Feedback from '../Feedback/Feedback.js'
import Message from '../../Message/Message'

function Schedule(props) {
    // props.data: 일정의 모든 정보를 담은 오브젝트
    // props.id(string) : schedule0523과 같이 어느날짜에 속하는 스케쥴인지를 나타냄

    // props.title(string) : 일정의 제목
    // props.start(string) : 일정의 시작 시기
    // props.end(string) : 일정이 끝나는 시기
    // props.category(string) : work, family, private중 어느 일정인지를 나타냄. 
    // console.log(props)
    const day_info = calendar_info.day_info
    const category_map = calendar_info.category_map
    const start_month = parseInt(props.data.start.split('/')[1])
    const start_date = parseInt(props.data.start.split('/')[2])
    const end_month = (props.data.end.split('/').length === 1 ? start_month : parseInt(props.data.end.split('/')[1]))
    const end_date = (props.data.end.split('/').length === 1 ? start_date : parseInt(props.data.end.split('/')[2]))


    const add_feedback = (evt) => {
        document.getElementById(props.id + '-feedback').setAttribute('style', 'display: block')
    }
    

    const show_button = (evt) => {
        console.log('show_button: ', evt.target.id)
        document.getElementById(props.id + '-button').style.display = 'inline'

    }

    const hide_button = (evt) => {
        console.log('hide_button: ', evt.target.id)
        document.getElementById(props.id + '-button').style.display = 'none'
        
    }

    const show_message = (evt) => {
        document.getElementById(props.id + '-message').style.display = 'block'
    }


    // const show_selection_box = () => {

    // }

    console.log(props.id,start_date, end_date)
    var calendar_location_start = day_info[start_month].slice(start_date).indexOf(start_date) + start_date
    var calendar_location_end = day_info[end_month].slice(end_date).indexOf(end_date) + end_date
    var schedule_days = []
    if (end_date !== start_date) {
        for(let i = 0; i <= end_date - start_date; i++) {
            schedule_days.push(i)
        }    
    }
    else {
        schedule_days.push(0)
    }
    
    var calendar_row = parseInt(calendar_location_start / 7)
    var calendar_col = calendar_location_start % 7
    var title_len_limit = 15 + 20 * (schedule_days.length - 1)
    console.log(props.id, schedule_days)
    return(
        <>
        <div
            key = {props.id + '-schedules'} 
            id = {props.id}
            className = {'schedule-wrap'}
            onMouseEnter = {evt => show_button(evt)}
            onMouseLeave = {evt => hide_button(evt)}>

            {
                schedule_days.map(i => {
                    var calendar_row = parseInt((calendar_location_start + i) / 7)
                    var calendar_col = (calendar_location_start + i) % 7
                    var isFirst = (i === 0)
                    var isLast = (schedule_days.indexOf(i) === schedule_days.length - 1)
                    var isFirstLast = isFirst && isLast
                    console.log(props.id + '-' + i)
                    return(
                        <>
                        <div
                            key = {props.id + '-' + i}
                            id = {props.id + '-'+ i}
                            className = {'schedule row' + calendar_row + ' col' + calendar_col + ' ' + category_map[props.data.category] + (isFirstLast ? ' schedule-firstlast' : (isLast ? ' schedule-last' : ' schedule-normal'))}
                            onDoubleClick = {evt => add_feedback(evt)}
                            >
                            {
                                isFirst
                                ?
                                <div key = {props.id + '-' + i + '-schedule-text'} className = 'schedule-text'>
                                    {
                                        props.data.title.length > title_len_limit ? props.data.title.slice(0, title_len_limit) + '...' : props.data.title
                                    }
                                </div>
                                :
                                <></>
                            }
                            {
                                isLast ? <div key = {props.id + '-button'} className = 'schedule-button' id = {props.id + '-button'} onClick = {evt => show_message()}>+</div> : <></>
                            }
                        </div>
                        
                        </>
                    )
                })
            }
        </div>
        
        <Feedback key = {props.id + '-feedback'} id = {props.id} row = {calendar_row} col = {calendar_col}/>
        <Message key = {props.id + '-messageadd'} id = {props.id} row = {parseInt(calendar_location_end / 7)} col = {(calendar_location_end) % 7} data = {props.data}/>

        </>
    )
    {/* <div
            id = {props.id}
            className = {'schedule ' + 'row' + calendar_row + " col" + calendar_col + ' ' + props.category + ' ' + props.class}
            onDoubleClick = {evt => add_feedback(evt)}
            onMouseEnter = {evt => show_button(evt)}
            onMouseLeave = {evt => hide_button(evt)}>
            <div className = 'schedule-text'>
                {
                    props.title.length > title_len_limit ? props.title.slice(0, title_len_limit) + '...' : props.title
                }
            </div>
            <div className = 'schedule-button' id = {props.id + '-button'} onClick = {evt => show_message()}>+</div>
        </div> */}
}

export default Schedule