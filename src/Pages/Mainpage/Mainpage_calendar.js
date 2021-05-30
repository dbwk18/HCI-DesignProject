import './Mainpage.css';

import React from 'react';
import Header from '../../Components/Header/Header'
import Calendar from '../../Components/Calendar/Calendar'
import Menubar from '../../Components/Menubar/Menubar'

function Mainpage_calendar(props) {
    // props.mode : boolean으로 이루어진 길이가 4인 리스트. 메뉴바에서 all, work, family, private중 어느 것이 선택되었는지를 나타냄.
    // props.view_as : 0 또는 1. 메뉴바에서 Calenar로 볼 것인지, CategoryBox로 볼 것인지를 선택함.

    var p = undefined

    console.log('Get props in Mainpage', props.location.props)
    if (props.location.props === undefined) {
        p = {mode: [true, false, false, false]}   
    }
    else {
        p = props.location.props
    }

    console.log('Mainpage', p)
    return(
        <div className='Container'>
            <div className = 'headerContainer'>
                <Header mode = {p.mode}/>
            </div>
            <div className = 'mainContainer'>
                <div className='menubarContainer'>
                    <Menubar mode = {p.mode} view_as = {0}/>
                </div>
                <div className='calendarContainer'>
                    <Calendar mode = {p.mode}/>
                </div>
            </div>

        </div>
    )

}

export default Mainpage_calendar;