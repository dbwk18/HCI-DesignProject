import React from 'react';
import './Categorybox.css';

import Board from './Board/Board'
import Card from './Card/Card'

import img_work from '../../Icons/work.png';
import img_family from '../../Icons/family.png';
import img_private from '../../Icons/private.png';
import img_pin from '../../Icons/pin.png';

function Categorybox () {
    return (
        <div className = 'categorybox'>
            <div className = 'flexbox'>
                <div className = 'a'>
                    <Board id = 'pinB' className = 'board'>
                        <img className = 'icon' id = 'img-pin' src = {img_pin} alt = 'Pin-board' style = {{alignSelf: 'center'}}/>
                        <div id = 'pin-wrap'></div>
                    </Board>
                    <Board id = 'familyB' className = 'board'>
                        <img className = 'icon' id = 'img-family' src = {img_family} alt = 'Family-board' style = {{alignSelf: 'center'}} />
                        <div id = 'family-wrap'>
                            <Card id = 'card-1' category = 'family' className = 'card-1' draggable = 'true'>
                                <p>Go to park</p>
                            </Card>
                            <Card id = 'card-2' category = 'family' className = 'card-1' draggable = 'true'>
                                <p>Pick up kid from academy</p>
                            </Card>
                            <Card id = 'card-5' category = 'family' className = 'card-1' draggable = 'true'>
                                <p>Pick up kid from soccer field</p>
                            </Card>
                            <Card id = 'card-9' category = 'family' className = 'card-1' draggable = 'true'>
                                <p>Visit grandmother</p>
                            </Card>
                        </div>
                    </Board>
                </div>
                <div className = 'b'>
                    <Board id = 'privateB' className = 'board'>
                        <img className = 'icon' id = 'img-private' src = {img_private} alt = 'private-board' style = {{alignSelf: 'center'}} />
                        <div id = 'private-wrap'>
                            <Card id = 'card-3' category = 'private' className = 'card-2' draggable = 'true'>
                                <p>Go to yoga class</p>
                            </Card>
                            <Card id = 'card-8' category = 'private' className = 'card-2' draggable = 'true'>
                                <p>Go to yoga class</p>
                            </Card>
                        </div>
                    </Board>
                    <Board id = 'workB' className = 'board'>
                        <img className = 'icon' id = 'img-work' src = {img_work} alt = 'work-board' style = {{alignSelf: 'center'}}/>
                        <div id = 'work-wrap'>
                            <Card id = 'card-4' category = 'work' className = 'card-3' draggable = 'true'>
                                <p>Meeting with client B</p>
                            </Card>
                            <Card id = 'card-6' category = 'work' className = 'card-3' draggable = 'true'>
                                <p>Re-designing a logo project due</p>
                            </Card>
                            <Card id = 'card-7' category = 'work' className = 'card-3' draggable = 'true'>
                                <p>Meeting with company D</p>
                            </Card>
                        </div>
                    </Board>
                </div>
            </div>
        </div>
    )
}

export default Categorybox;