import './Projectpage.css';

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header'
// import Projectmenu from '../../Components/Projectmenu/Projectmenu'
import Timeline from '../../Components/Timeline/Timeline'
import {Button} from "react-bootstrap";
import {useHistory} from "react-router";

function Projectpage() {


    const history = useHistory();
    const goto_main = () => {
      history.push('/HCI-DesignProject')
    }
    return(
        <div className='Container'>
            <div className = 'headerContainer'>
                <Header />
                <div id="banner"><i><b>Double-click</b> schedule to add in 'Priorities'</i></div>
                <Button className = "btn" id = 'closeBtn' onClick = {_ => goto_main()}>Close</Button>
                {/* 메인 화면으로 돌아갈 수 있습니다 */}
            </div>
            <div className = 'mainContainer'>
                <Timeline />
            </div>

        </div>
    )
}

export default Projectpage;