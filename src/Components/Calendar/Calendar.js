import React, {useState, useEffect} from 'react';
import './Calendar.css'
import * as calendar_info from './calendar_infomation'
import Schedule from './Schedule/Schedule.js'
function Calendar(){

    const day_info = calendar_info.day_info

    const month_info = calendar_info.month_info

    const [month, setMonth] = useState(5);
    const [category, setCategory] = useState(0);
    const [popup, setPopup] = useState(false);
    const [schedules, setSchedules] = useState([
        {
            month: 5,
            date: 17,
            title: 'Pick my son from academy',
            category: 'family'
        }
    ]);

    const color_map = calendar_info.color_map

    useEffect(() => {
        console.log('current month: ', month)
    }, [month]);

    useEffect(() => {
        console.log('Selected_category: ', category)
        document.getElementById('popup-button-work').setAttribute('style', 'background-color: none');
        document.getElementById('popup-button-family').setAttribute('style', 'background-color: none');
        document.getElementById('popup-button-private').setAttribute('style', 'background-color: none');
        document.getElementById('popup-button-other').setAttribute('style', 'background-color: none');
        if (category === 1) {
            document.getElementById('popup-button-work').setAttribute('style', 'background-color: #fffdc6');
        } else if (category === 2) {
            document.getElementById('popup-button-family').setAttribute('style', 'background-color: #c8f7f4');
        } else if (category === 3) {
            document.getElementById('popup-button-private').setAttribute('style', 'background-color: #ffdcfb');
        } else if (category === 4) {
            document.getElementById('popup-button-other').setAttribute('style', 'background-color: lightgray')
        }
    }, [category]);

    useEffect(() => {
        console.log('Current popup state: ', popup)
        var popup_div = document.getElementById('calendar-add-popup')
        if (popup) {
            popup_div.setAttribute('style', 'display: block')
        } else {
            popup_div.setAttribute('style', 'display : none')
        }
    }, [popup])

    const add_schedule = (x, y) => {
        console.log(x, y)
        setPopup(popup => !popup)
    }

    const see_prev_month = (month) => {
        if (month === 1) {
            alert('Sorry, only 2021 year is implemented.')
            return
        }
        setMonth(month => month - 1)
    }

    const see_next_month = (month) => {
        if (month === 12) {
            alert('Sorry, only 2021 year is implemented.')
            return
        }
        setMonth(month => month + 1)
    }

    const select_category = (evt) => {
        console.log(evt.target.id)
        var targetId = evt.target.id
        if (targetId.endsWith('work')) {
            if (category === 1) {
                setCategory(0)
            } else {
                setCategory(1)
            }
        }
        else if (targetId.endsWith('family')) {
            if (category === 2) {
                setCategory(0)
            } else {
                setCategory(2)
            }
        }
        else if (targetId.endsWith('private')) {
            if (category === 3) {
                setCategory(0)
            } else {
                setCategory(3)
            }
        }
        else if (targetId.endsWith('other')) {
            if (category === 4) {
                setCategory(0)
            } else {
                setCategory(4)
            }
        }
    }

    const create_new_schedule = () => {
        var title_elem = document.getElementById('popup-title')
        var desc_elem = document.getElementById('popup-description')
        var time_start_elem = document.getElementById('popup-time-start')
        var time_end_elem = document.getElementById('popup-time-end')
        console.log(title_elem.id, desc_elem.id, time_start_elem.id, time_end_elem.id)
        console.log(title_elem.innerText, desc_elem.id, time_start_elem.id, time_end_elem.id)
    }

    

    console.log('current month: ', month)


    return(
        <div className = 'calendar-box'>
            <div id = 'header-wrap'>
                <button id = 'calendar-add' onClick = {evt => {add_schedule(evt.clientX, evt.clientY)}}>Add +</button>
                <div id = 'calendar-changemonth'>
                    <button id = 'calendar-prevmonth' onClick = {evt => {see_next_month(month)}}>&#62;</button>
                    <button id = 'calendar-nextmonth' onClick = {evt => {see_prev_month(month)}}>&#60;</button>
                </div>
                <div id = 'calendar-monthyear'>{month_info[month]}, 2021</div>
            </div>
        
            <div id="calendar">

            {/* <!-- Days from previous month --> */}

                <ul className="days">
                    <li className = {day_info[month][0] > 20 ? "day other-month" : "day"}>
                        <div className = 'weekdays'>Sun</div>
                        <div className="date">{day_info[month][0]}</div>              
                    </li>
                    <li className = {day_info[month][1] > 20 ? "day other-month" : "day"}>
                        <div className = 'weekdays'>Mon</div>
                        <div className="date">{day_info[month][1]}</div>          
                    </li>
                    <li className = {day_info[month][2] > 20 ? "day other-month" : "day"}>
                        <div className = 'weekdays'>Tue</div>
                        <div className="date">{day_info[month][2]}</div>              
                    </li>
                    <li className = {day_info[month][3] > 20 ? "day other-month" : "day"}>
                        <div className = 'weekdays'>Wed</div>
                        <div className="date">{day_info[month][3]}</div>              
                    </li>
                    <li className = {day_info[month][4] > 20 ? "day other-month" : "day"}>
                        <div className = 'weekdays'>Thu</div>
                        <div className="date">{day_info[month][4]}</div>              
                    </li>
                    <li className = {day_info[month][5] > 20 ? "day other-month" : "day"}>
                        <div className = 'weekdays'>Fri</div>
                        <div className="date">{day_info[month][5]}</div>             
                    </li>
                    <li className = {day_info[month][6] > 20 ? "day other-month" : "day"}>
                        <div className = 'weekdays'>Sat</div>
                        <div className="date">{day_info[month][6]}</div>           
                    </li>
                </ul>

                {/* <!-- Row #2 --> */}

                <ul className="days">
                    <li className="day">
                        <div className="date">{day_info[month][7]}</div>             
                    </li>
                    <li className="day">
                        <div className="date">{day_info[month][8]}</div>             
                    </li>
                    <li className="day">
                        <div className="date">{day_info[month][9]}</div>             
                    </li>
                    <li className="day">
                        <div className="date">{day_info[month][10]}</div>             
                    </li>
                    <li className="day">
                        <div className="date">{day_info[month][11]}</div>           
                    </li>
                    <li className="day">
                        <div className="date">{day_info[month][12]}</div>             
                    </li>
                    <li className="day">
                        <div className="date">{day_info[month][13]}</div>             
                    </li>
                </ul>

                {/* <!-- Row #3 --> */}

                <ul className="days">
                    <li className="day">
                        <div className="date">{day_info[month][14]}</div>              
                    </li>
                    <li className="day">
                        <div className="date">{day_info[month][15]}</div>              
                    </li>
                    <li className="day">
                        <div className="date">{day_info[month][16]}</div>              
                    </li>
                    <li className="day">
                        <div className="date">{day_info[month][17]}</div>              
                    </li>
                    <li className="day">
                        <div className="date">{day_info[month][18]}</div>
            
                    </li>
                    <li className="day">
                        <div className="date">{day_info[month][19]}</div>              
                    </li>
                    <li className="day">
                        <div className="date">{day_info[month][20]}</div>              
                    </li>
                </ul>

                {/* <!-- Row #4 --> */}

                <ul className="days">
                    <li className="day">
                        <div className="date">{day_info[month][21]}</div>              
                    </li>
                    <li className="day">
                        <div className="date">{day_info[month][22]}</div>              
                    </li>
                    <li className="day">
                        <div className="date">{day_info[month][23]}</div>              
                    </li>
                    <li className="day">
                        <div className="date">{day_info[month][24]}</div>              
                    </li>
                    <li className="day">
                        <div className="date">{day_info[month][25]}</div>              
                    </li>
                    <li className="day">
                        <div className="date">{day_info[month][26]}</div>
                
                    </li>
                    <li className="day">
                        <div className="date">{day_info[month][27]}</div>              
                    </li>
                </ul>

                    {/* <!-- Row #5 --> */}

                <ul className="days">
                    <li className = {day_info[month][28] < 10 ? "day other-month" : "day"}>
                        <div className="date">{day_info[month][28]}</div>              
                    </li>
                    <li className = {day_info[month][29] < 10 ? "day other-month" : "day"}>
                        <div className="date">{day_info[month][29]}</div>              
                    </li>
                    <li className = {day_info[month][30] < 10 ? "day other-month" : "day"}>
                        <div className="date">{day_info[month][30]}</div>
                    </li>
                    <li className = {day_info[month][31] < 10 ? "day other-month" : "day"}>
                        <div className="date">{day_info[month][31]}</div>             
                    </li>
                    <li className = {day_info[month][32] < 10 ? "day other-month" : "day"}>
                        <div className="date">{day_info[month][32]}</div>             
                    </li>
                    <li className = {day_info[month][33] < 10 ? "day other-month" : "day"}>
                        <div className="date">{day_info[month][33]}</div>             
                    </li>
                    <li className = {day_info[month][34] < 10 ? "day other-month" : "day"}>
                        <div className="date">{day_info[month][34]}</div>             
                    </li>
                </ul>

                {/* <!-- Row #6 --> */}

                {
                    day_info[month].length > 40
                    ?
                    <>
                    <ul className="days">
                        <li className = {day_info[month][35] < 10 ? "day other-month" : "day"}>
                            <div className="date">{day_info[month][35]}</div>              
                        </li>
                        <li className = {day_info[month][36] < 10 ? "day other-month" : "day"}>
                            <div className="date">{day_info[month][36]}</div>              
                        </li>
                        <li className = {day_info[month][37] < 10 ? "day other-month" : "day"}>
                            <div className="date">{day_info[month][37]}</div>
                        </li>
                        <li className = {day_info[month][38] < 10 ? "day other-month" : "day"}>
                            <div className="date">{day_info[month][38]}</div>             
                        </li>
                        <li className = {day_info[month][39] < 10 ? "day other-month" : "day"}>
                            <div className="date">{day_info[month][39]}</div>             
                        </li>
                        <li className = {day_info[month][40] < 10 ? "day other-month" : "day"}>
                            <div className="date">{day_info[month][40]}</div>             
                        </li>
                        <li className = {day_info[month][41] < 10 ? "day other-month" : "day"}>
                            <div className="date">{day_info[month][41]}</div>             
                        </li>
                    </ul>
                    </>
                    :
                    <>
                    </>
                }
                <div id = 'schedules-wrap'>
                    {
                        schedules.map(s => {
                            var calendar_location = day_info[s.month].indexOf(s.date)
                            var calendar_row = parseInt(calendar_location / 7)
                            var calendar_col = calendar_location % 7
                            console.log(calendar_location, calendar_col, calendar_row, s)
                            return (
                                <Schedule key = {s} month = {s.month} date = {s.date} title = {s.title} category = {s.category} />
                            )
                        })
                    }
                </div>
            </div>
        {/* <!-- /. calendar --> */}
            <div id = "calendar-add-popup">
                <div id = 'popup-component'>
                    <button className  = 'popup-button' id  = 'popup-button-close' onClick = {evt => add_schedule()}>x</button>
                    <input type = 'text' id = 'popup-title' placeholder = 'Title (Up to 40 characters)' wrap = 'hard'></input>
                    <div id = 'popup-button-wrap'>
                        <button className = 'popup-button' id = 'popup-button-work' onClick = {evt => select_category(evt)}>Work</button>
                        <button className = 'popup-button' id = 'popup-button-family' onClick = {evt => select_category(evt)}>Family</button> 
                        <button className = 'popup-button' id = 'popup-button-private' onClick = {evt => select_category(evt)}>Private</button>
                        <button className = 'popup-button' id = 'popup-button-other' onClick = {evt => select_category(evt)}>Other</button>
                    </div>
                    <div id = 'popup-time-wrap'>
                        <input type="time" className = 'popup-time' id="popup-time-start" min="00:00" max="24:00" required></input> ~ <input type="time" className = 'popup-time' id="popup-time-end" min="00:00" max="24:00" required></input>
                    </div>
                    <textarea id = 'popup-description' placeholder = 'Description'></textarea>

                    <button className = 'popup-button' id = 'popup-submit' onClick = {evt => create_new_schedule()}>Submit</button>
                </div>
            </div>
        </div>
    )
}
export default Calendar;