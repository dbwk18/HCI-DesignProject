import './Mainpage.css';

import React from 'react';
import Header from '../../Components/Header/Header'
import Calendar from '../../Components/Calendar/Calendar'
import Menubar from '../../Components/Menubar/Menubar'
import {Button} from "react-bootstrap";
import img_help from '../../Icons/img_help.png'

function Mainpage_calendar(props) {
    // props.mode : boolean으로 이루어진 길이가 4인 리스트. 메뉴바에서 all, work, family, private중 어느 것이 선택되었는지를 나타냄.
    // props.view_as : 0 또는 1. 메뉴바에서 Calenar로 볼 것인지, CategoryBox로 볼 것인지를 선택함.

    var p = undefined

    if (props.location.props === undefined) { 
        p = {mode: [true, false, false, false]}   
    }
    else {
        p = props.location.props
    }

    const show_help = () => {
        console.log('hi')
        document.getElementById('help-calendar-message').style.display = 'block'
    }
    const hide_help = () => {
        console.log('hello')
        document.getElementById('help-calendar-message').style.display = 'none'
    }

    return(
        <div className='Container'>
            <div className = 'headerContainer'>
                <Header mode = {p.mode}/>
                {/* <div id="banner"><i><b>Mouseover</b> each schedule to see detail, <b>DoubleClick</b> each schedule to add feedback </i></div> */}
            </div>
            <div className = 'mainContainer'>
                <div className='menubarContainer'>
                    <Menubar mode = {p.mode} view_as = {0}/>
                </div>
                <div className='calendarContainer'>
                    <Calendar mode = {p.mode}/>
                </div>
            </div>
            <div id = 'help-calendar' className = 'calendar-help' onMouseEnter = {_ => show_help()} onMouseLeave = {_ => hide_help()}>
                Help
            </div>
            <div id = 'help-calendar-message' className = 'calendar-help-message' style = {{display: 'none'}}>
                <b>Mouseover</b> each schedule to see detail
                <br/>
                <b>DoubleClick</b> each schedule to add feedback
            </div>
            {/* <Button className = 'btn btn-primary calendar-help' id = 'calendar-help' size = 'lg' onMouseEnter = {_ => show_help()} onMouseLeave = {_ => hide_help()}>Help</Button> */}
        </div>
    )

}

export default Mainpage_calendar;