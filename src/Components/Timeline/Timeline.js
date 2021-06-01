import React, {useState} from 'react';
import ReactDOM from 'react';
import './Timeline.css'
import './Projectmenu/Projectmenu.css'
import Boxes from './Projectmenu/Boxes';
import Card from './Projectmenu/Card/Card';
import Board from './Projectmenu/Board/Board';
import { Projectmenu, flexbox } from './Projectmenu/Projectmenu';
import { Link } from 'react-router-dom';



function Timeline(){

    const [prname, setprname] = useState('');

    function addPriority(event) {
        console.log(event.target.innerText);
        setprname(event.target.innerText);

        var inputbox = document.createElement("Board");
        inputbox.innerText= event.target.innerText;
        var position = document.getElementById('priorityMenu');
        position.appendChild(inputbox);
        document.getElementsByClassName({flexbox}).appendChild(inputbox);
        var priorityClass = event.target.getAttribute('class');
        inputbox.style.fontSize = 24+"px"
        inputbox.style.textAlign = "center"
        inputbox.style.height = 90+"px"
        inputbox.style.lineHeight = 90+"px"
        inputbox.style.borderRadius = 10+"px"
        inputbox.style.margin= 5+"px"
        
        if (priorityClass === 'workschedule') inputbox.style.backgroundColor = "#fffdc6"
        else if (priorityClass === 'familyschedule') inputbox.style.backgroundColor = "#c8f7f4"
        else inputbox.style.backgroundColor = "#ffdcfb"
    }


    return(
        <div>
            <div className = 'projectmenuContainer'>
                <Projectmenu />
                <Board className = 'board'>
                    <div className='priorityMenu' id='priorityMenu'>
                        
                    </div>
                </Board>
            </div>
            <div className="timelineContainer">
                <ul class="days">
                    <li class="day">
                        <div class="dayweek">Sun</div>
                        <div class="date">5/2</div>   
                    </li>
                    <li class="day">
                        <div class="dayweek">Mon</div>
                        <div class="date">5/3</div>
                    </li>
                    <li class="day">
                        <div class="dayweek">Tue</div>
                        <div class="date" >5/4</div>
                        <div class="today"></div>    
                    </li>
                    <li class="day">
                        <div class="dayweek">Wed</div>
                        <div class="date">5/5</div>             
                    </li>
                    <li class="day">
                        <div class="dayweek">Thur</div>
                        <div class="date">5/6</div>            
                    </li>
                    <li class="day">
                        <div class="dayweek">Fri</div>
                        <div class="date">5/7</div> 
                    </li>
                    <li class="day">
                        <div class="dayweek">Sat</div>
                        <div class="date">5/8</div>  
                    </li>
                    <li class="day">
                        <div class="dayweek">Sun</div>
                        <div class="date">5/9</div>  
                    </li>
                    <li class="day">
                        <div class="dayweek">Mon</div>
                        <div class="date">5/10</div>         
                    </li>
                    <li class="day">
                        <div class="dayweek">Tue</div>
                        <div class="date">5/11</div>             
                    </li>
                    <li class="day">
                        <div class="dayweek">Wed</div>
                        <div class="date">5/12</div>  
                    </li>
                    <li class="day">
                        <div class="dayweek">Thur</div>
                        <div class="date">5/13</div>             
                    </li>
                    <li class="day">
                        <div class="dayweek">Fri</div>
                        <div class="date">5/14</div>  
                    </li>
                    <li class="day">
                        <div class="dayweek">Sat</div>
                        <div class="date">5/15</div>             
                    </li>
                </ul>

                <div class="privateschedule" id="sch1" onDoubleClick={evt => addPriority(evt)}>Dinner with friend</div> 
                <div class="workschedule" id="sch2" onDoubleClick={evt => addPriority(evt)}>Meeting A</div>  
                <div class="workschedule" id="sch3" onDoubleClick={evt => addPriority(evt)}>Weekly Meeting</div>
                <div class="privateschedule" id="sch4" onDoubleClick={evt => addPriority(evt)}>Fitness</div> 
                <div class="familyschedule" id="sch5" onDoubleClick={evt => addPriority(evt)}>Going out for dinner</div> 
                <div class="familyschedule" id="sch6" onDoubleClick={evt => addPriority(evt)}>Going to museum</div>  
                <div class="privateschedule" id="sch7" onDoubleClick={evt => addPriority(evt)}>Golf</div> 
                <div class="workschedule" id="sch8" onDoubleClick={evt => addPriority(evt)}>Weekly Meeting</div>
                <div class="workschedule" id="sch9" onDoubleClick={evt => addPriority(evt)}>Client Meeting</div>
                <div class="familyschedule" id="sch10" onDoubleClick={evt => addPriority(evt)}>Bring son academy</div> 
                <div class="workschedule" id="sch11" onDoubleClick={evt => addPriority(evt)}>Presentation</div>  
                <div class="familyschedule" id="sch12" onDoubleClick={evt => addPriority(evt)}>School Sports Day</div>  
                <div class="privateschedule" id="sch13" onDoubleClick={evt => addPriority(evt)}>Appointment w/ YJ</div>
                <div class="familyschedule" id="sch14" onDoubleClick={evt => addPriority(evt)}>Spring-Clean</div> 
                <div class="workschedule" id="sch15" onDoubleClick={evt => addPriority(evt)}>Meeting B</div>  
                <div class="familyschedule" id="sch16" onDoubleClick={evt => addPriority(evt)}>Parent Participating Class</div>
                <div class="workschedule" id="sch17" onDoubleClick={evt => addPriority(evt)}>User-Testing</div>  
                <div class="workschedule" id="sch18" onDoubleClick={evt => addPriority(evt)}>Presen. Rehearsal</div>
                <div class="workschedule" id="sch19" onDoubleClick={evt => addPriority(evt)}>Client Meeting</div>


            </div>
        </div>
    )
}

export default Timeline;