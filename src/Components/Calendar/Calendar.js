import React from 'react';
import './Calendar.css'

function Calendar(){
    return(
        <div class = 'calendar-box'>
            <div id = 'header-wrap'>
                <button id = 'calendar-add'>Add <span id = 'calendar-add-plus'>+</span></button>
                <div id = 'calendar-changemonth'>
                    <button id = 'calendar-prevmonth'>&#62;</button>
                    <button id = 'calendar-nextmonth'>&#60;</button>
                </div>
                <div id = 'calendar-monthyear'>May, 2021</div>
            </div>
        
            <div id="calendar">

            {/* <!-- Days from previous month --> */}

                <ul class="days">
                <li class="day other-month">
                    <div class = 'weekdays'>Sun</div>
                    <div class="date">25</div>              
                </li>
                <li class="day other-month">
                <div class = 'weekdays'>Mon</div>
                    <div class="date">26</div>
                    <div class="event">
                    <div class="event-desc">
                        HTML 5 lecture with Brad Traversy from Eduonix
                    </div>
                    <div class="event-time">
                        1:00pm to 3:00pm
                    </div>
                    </div>              
                </li>
                <li class="day other-month">
                    <div class = 'weekdays'>Tue</div>
                    <div class="date">27</div>              
                </li>
                <li class="day other-month">
                    <div class = 'weekdays'>Wed</div>
                    <div class="date">28</div>              
                </li>
                <li class="day other-month">
                    <div class = 'weekdays'>Thu</div>
                    <div class="date">29</div>              
                </li>
                <li class="day other-month">
                    <div class = 'weekdays'>Fri</div>
                    <div class="date">30</div>             
                </li>
                {/* <!-- Days in current month --> */}
                
                <li class="day">
                    <div class = 'weekdays'>Sat</div>
                    <div class="date">1</div>
                    <div class="event">
                    <div class="event-desc">
                        Career development @ Community College room #402
                    </div>
                    <div class="event-time">
                        2:00pm to 5:00pm
                    </div>
                    </div>              
                </li>
                </ul>

                {/* <!-- Row #2 --> */}

                <ul class="days">
                <li class="day">
                    <div class="date">2</div>             
                </li>
                <li class="day">
                    <div class="date">3</div>             
                </li>
                <li class="day">
                    <div class="date">4</div>             
                </li>
                <li class="day">
                    <div class="date">5</div>             
                </li>
                <li class="day">
                    <div class="date">6</div>
                    <div class="event">
                    <div class="event-desc">
                        Group Project meetup
                    </div>
                    <div class="event-time">
                        6:00pm to 8:30pm
                    </div>
                    </div>              
                </li>
                <li class="day">
                    <div class="date">7</div>             
                </li>
                <li class="day">
                    <div class="date">8</div>             
                </li>
                </ul>

                {/* <!-- Row #3 --> */}

                <ul class="days">
                <li class="day">
                    <div class="date">9</div>              
                </li>
                <li class="day">
                    <div class="date">10</div>              
                </li>
                <li class="day">
                    <div class="date">11</div>              
                </li>
                <li class="day">
                    <div class="date">12</div>              
                </li>
                <li class="day">
                    <div class="date">13</div><div class="event">
                    <div class="event-desc">
                        Board Meeting
                    </div>
                    <div class="event-time">
                        1:00pm to 3:00pm
                    </div>
                    </div>              
                </li>
                <li class="day">
                    <div class="date">14</div>              
                </li>
                <li class="day">
                    <div class="date">15</div>              
                </li>
                </ul>

                {/* <!-- Row #4 --> */}

                <ul class="days">
                <li class="day">
                    <div class="date">16</div>              
                </li>
                <li class="day">
                    <div class="date">17</div>              
                </li>
                <li class="day">
                    <div class="date">18</div>              
                </li>
                <li class="day">
                    <div class="date">19</div>              
                </li>
                <li class="day">
                    <div class="date">20</div>              
                </li>
                <li class="day">
                    <div class="date">21</div>
                    <div class="event">
                    <div class="event-desc">
                        Conference call
                    </div>
                    <div class="event-time">
                        9:00am to 12:00pm
                    </div>
                    </div>              
                </li>
                <li class="day">
                    <div class="date">22</div>              
                </li>
                </ul>

                    {/* <!-- Row #5 --> */}

                <ul class="days">
                <li class="day">
                    <div class="date">23</div>              
                </li>
                <li class="day">
                    <div class="date">24</div>
                    <div class="event">
                    <div class="event-desc">
                        Conference Call
                    </div>
                    <div class="event-time">
                        1:00pm to 3:00pm
                    </div>
                    </div>              
                </li>
                <li class="day">
                    <div class="date">25</div>              
                </li>
                <li class="day">
                    <div class="date">26</div>              
                </li>
                <li class="day">
                    <div class="date">27</div>              
                </li>
                <li class="day">
                    <div class="date">28</div>              
                </li>
                <li class="day">
                    <div class="date">29</div>              
                </li>
                <li class="day">
                    <div class="date">30</div>              
                </li>
                <li class="day">
                    <div class="date">31</div>              
                </li>
                </ul>

                {/* <!-- Row #6 --> */}

                <ul class="days">
                <li class="day other-month">
                    <div class="date">1</div>
                    {/* <!-- Next Month -->              */}
                </li>
                <li class="day other-month">
                    <div class="date">2</div>             
                </li>
                <li class="day other-month">
                    <div class="date">3</div>             
                </li>
                <li class="day other-month">
                    <div class="date">4</div>             
                </li>
                <li class="day other-month">
                    <div class="date">5</div>             
                </li>
                </ul>

            </div>
        {/* <!-- /. calendar --> */}

        </div>
    )
}
export default Calendar;