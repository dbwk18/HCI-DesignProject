import React, {useState, useEffect} from 'react';
import './Calendar.css'

function Calendar(){

    const [month, setMonth] = useState(5);

    useEffect(() => {
        console.log('current month: ', month)
    }, [month]);

    const add_schedule = (x, y) => {
        console.log(x, y)
        window.open('add_schedule', 'popup01', 'left = '+ x +' , top = '+ y +' , width=400, height = 500, scrollbars= 0, toolbar=0, menubar=no');
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

    const day_info = {
        "1" : [27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 81, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6],
        "2" : [31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 1, 2, 3, 4, 5, 6],
        "3" : [28, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3],
        "4" : [28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1],
        "5" : [25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5],
        "6" : [30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3],
        "7" : [27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        "8" : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4],
        "9" : [29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2],
        "10" : [26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6],
        "11" : [31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4],
        "12" : [28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1]
    }

    const month_info = {
        "1" : "January",
        "2" : "February",
        "3" : "March",
        "4" : "April",
        "5" : "May",
        "6" : "June",
        "7" : "July",
        "8" : "August",
        "9" : "September",
        "10" : "October",
        "11" : "November",
        "12" : "December"
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


            </div>
        {/* <!-- /. calendar --> */}

        </div>
    )
}
export default Calendar;