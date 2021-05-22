import React from 'react';
import './Categorybox.css'
import Calendar from '../../Components/Calendar/Calendar'


//정보를 firebase database에서 불러올것?

function Category(){
    return(
        <div class = 'category-box'>
            <div class = 'box' id = 'pin-board'>
                This is pin board
                <div id = 'icon'>
                    <img src = './icons/pin.png'></img>
                </div>
            </div>

            <div class = 'box' id = 'work-wrap'>
                This is work box
                <div id = 'icon'>
                    <img src = './icons/work.png'></img>
                </div>
            </div>
            <div class = 'box' id = 'family-wrap'>
                 This is family box
                <div id = 'icon'>
                    <img src = './icons/family.png'></img>
                </div>
            </div>
            <div class = 'box' id = 'private-wrap'>
                This is private box
                <div id = 'icon'>
                    <img src = './icons/private.png'></img>
                </div>
            </div>
        </div>
    )

}

export default Category;
