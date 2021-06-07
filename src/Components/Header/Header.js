import React from 'react';
import {useHistory} from "react-router";
import './Header.css';

function Header() {

    const history = useHistory();

    const move_to_homepage = () => {
        var pathname = window.location.pathname
        if (pathname.endsWith('/HCI-DesignProject')) {
            return
        }
        history.push({
          pathname: '/HCI-DesignProject',
          props: {
              mode: [true, false, false, false],
              task3: true
          }
        })
    }

    return (
        <div className = 'header-box'>
            <h1 className = 'header-title'>
                <span id = 'header-title-colic' onClick = {evt => {move_to_homepage()}}>Colics</span> 
                <span id = 'header-title-span'>Schedule manager for working moms and dads</span>
            </h1>
        </div>
      )
}

export default Header;