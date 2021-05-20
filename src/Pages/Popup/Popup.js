import './Popup.css';

import React from 'react';

function Popup(){
    return (
        <div id = 'popup-component'>
            <input type = 'text' id = 'popup-title' placeholder = 'Title (Up to 40 characters)' wrap = 'hard'></input>
            <div id = 'popup-button-wrap'>
                <button className = 'popup-button' id = 'popup-button-work'>Work</button>
                <button className = 'popup-button' id = 'popup-button-family'>Family</button>
                <button className = 'popup-button' id = 'popup-button-other'>Other</button>
            </div>
            <div id = 'popup-time'>
                <input type="time" class = 'popup-time' id="popup-time-start" min="00:00" max="24:00" required></input> ~ <input type="time" class = 'popup-time' id="popup-time-end" min="00:00" max="24:00" required></input>
            </div>
            <textarea id = 'popup-description' placeholder = 'Description'></textarea>

            <button class = 'popup-button' id = 'popup-submit'>Submit</button>
        </div>
    )
}
export default Popup