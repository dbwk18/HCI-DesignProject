import './Mainpage.css';

import React from 'react';
import Header from '../../Components/Header/Header'
import Calendar from '../../Components/Calendar/Calendar'
import Menubar from '../../Components/Menubar/Menubar'
import PopupBox from '../../Components/PopupBox/PopupBox'

function Mainpage_task3(props) {

    var p = undefined

    console.log('Get props in Mainpage_task3', props.location.props)
    if (props.location.props === undefined) {
        p = {mode: [true, false, false, false]}   
    }
    else {
        p = props.location.props
    }

    p.task3 = true
    console.log('resulting p', p)

    return(
        <div className='Container'>
            <div className = 'headerContainer'>
                <Header />
            {/* <div>
                <PopupBox />
            </div> */}
            </div>
            <div className = 'mainContainer'>
                <div className='menubarContainer'>
                    <Menubar mode = {p.mode} task3 = {true}/>
                </div>
                <div className='calendarContainer'>
                    <Calendar mode = {p.mode} task3 = {true}/>
                </div>
            </div>
            
        </div>
    )

}

export default Mainpage_task3;