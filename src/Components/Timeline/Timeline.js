import React, {useState, useCallback, update, useRef, state, setState} from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import * as classNames from 'classnames';
import ReactDOM from 'react';
import styled from 'styled-components';
import './Timeline.css'
import './Projectmenu/Projectmenu.css'
import Boxes from './Projectmenu/Boxes';

import { Link } from 'react-router-dom';
import { CenturyView } from 'react-calendar';


// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };
  
  // using some little inline style helpers to make the app look okay
//   const grid = 8;
const getItemStyle = (draggableStyle, isDragging, itemclass) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    // padding: grid * 2,
    // marginBottom: grid,
    textAlign: 'center',
    height: '90px',
    lineHeight: '90px',
    fontSize: '18px',
    position: 'relative',
    marginBottom: '5px',
    borderRadius: '20px',
    border: '2px solid grey',
    margin: '15px',
    width: '335px',

    // change background colour if dragging
    background: itemclass==='workschedule' ? '#fffdc6' : itemclass==='familyschedule' ? '#c8f7f4': '#ffdcfb',
    opacity: isDragging ? 0.5 : 1,
  
    // styles we need to apply on draggables
    ...draggableStyle
  });

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'white' : 'white',
    // padding: grid,
    width: '370px',
    height: '700px'
  });


function Timeline(){

    const [prname, setprname] = useState('');
    const [cards, setCards] = useState([]);
    // const [itemlist, setItemlist] = useState({});
    // const ItemTypes = {
    //     CARD: 'card',
    //   };

    const moveCard = useCallback( // (**) Reorder an array
    (dragIndex, hoverIndex) => {
      const dragCard = cards[dragIndex];

      setCards(
        update(cards, {
          $splice: [
            [dragIndex, 1], // Delete
            [hoverIndex, 0, dragCard], // Add
          ],
        })
      );
    },
    [cards]
  );


    function addPriority(event) {
        console.log(event.target.innerText);
        // setprname(event.target.innerText);

        // var inputbox = document.createElement("div");
        // inputbox.innerText= event.target.innerText;
        // var position = document.getElementById('priorityMenu');
        // // position.appendChild(inputbox);

        // var priorityClass = event.target.getAttribute('class');
        // inputbox.style.fontSize = 24+"px"
        // inputbox.style.textAlign = "center"
        // inputbox.style.height = 90+"px"
        // inputbox.style.lineHeight = 90+"px"
        // inputbox.style.borderRadius = 10+"px"
        // inputbox.style.margin= 5+"px"

        setCards([...cards,
            {id: String(cards.length+1), title: event.target.innerText, class: event.target.getAttribute('class'), date: event.target.getAttribute('name'), index: cards.length},])

        // setItemlist({items:[
        //     ...cards,
        //     {id: String(cards.length+1), title: event.target.innerText, index: cards.length},
        // ]})
        // setCards(state.push({id: cards.length, title: event.target.innerText}))
        // console.log(cards)
        
        // return(
        //     <div>
        //         {cards.map((item, index) => (
        //             <div
        //               index={index}
        //               id={item.id}
        //               title={item.title}
        //               moveCard={moveCard}
        //               key={item.id}
        //             />
        //           ))}
        //     </div>
        // )
        // setItemlist({item: cards})

    }

    console.log(cards)
    
    // const [itemlist, setItemlist] = useState({item: cards});

    var itemlist = {items: cards};
    console.log(itemlist)
    // this.setState({items: cards})
    onDragEnd = onDragEnd.bind(this)

    function onDragEnd(result) {
        console.log('drag')
        // dropped outside the list
        if (!result.destination) {
          return;
        }

        const items = reorder(
          itemlist.items,
          result.source.index,
          result.destination.index
        );
    
        itemlist.items = items;
        
      }
    
    function showDetail(event){
        var id = "popup" + event.target.getAttribute('id');
        
        // var detail = event.target.getAttribute('detail');
        console.log(id)
        document.getElementById(id).style.display = "block"
        document.getElementById(id).style.width = "310px"
        document.getElementById(id).style.height = "80px"
        document.getElementById(id).style.lineHeight = "80px"
        document.getElementById(id).style.textAlign = "center"
        document.getElementById(id).style.backgroundColor = "#F1F1F1"
        document.getElementById(id).style.borderRadius = "5px"
        document.getElementById(id).style.fontWeight = "9px"
    }
    
    function hideDetail(event){
        var id = "popup" + event.target.getAttribute('id');
        console.log(id)
        document.getElementById(id).style.display = "none"
    }


    return(
        <div>
            <div className='projectmenuContainer'>
                <div className = 'projectMenuHeader'>
                    <p className = 'projectHeaderText'>This week's <b>Priorities</b></p>
                </div>
            
                <div className='priorityMenu' id='priorityMenu'>
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            // className={classNames('list', snapshot.isDraggingOver && 'draggingOver')}
                            style={getListStyle(snapshot.isDraggingOver)}
                            >
                            {itemlist.items.map(item => (
                                <Draggable key={item.id} draggableId={item.id} index={item.index}>
                                {(provided, snapshot) => (
                                    
                                    <div
                                        // className={classNames('item', snapshot.isDragging && 'dragging')}
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={getItemStyle(
                                        provided.draggableProps.style,
                                        snapshot.isDragging,
                                        item.class
                                        )}
                                    >
                                        {item.date + '\t' + item.title}
                                        
                                    </div>
                                
                                )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                            </div>
                        )}
                        </Droppable>
                    </DragDropContext>
                               

                </div>
            

        </div>

            <div className="timelineContainer">
                <ul class="days">
                    <li class="day">
                        <div class="dayweek" id="holiday">Sun</div>
                        <div class="date" id="holiday">5/2</div>   
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
                        <div class="dayweek" id="holiday">Wed</div>
                        <div class="date" id="holiday">5/5</div>             
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
                        <div class="dayweek" id="holiday">Sun</div>
                        <div class="date" id="holiday">5/9</div>  
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

                <div class="privateschedule" id="sch1" name="5/2" detail="Dinner at Gangnam 6:00 PM" onDoubleClick={evt => addPriority(evt)} onMouseOver={evt => showDetail(evt)} onMouseOut={evt => hideDetail(evt)}>
                    Dinner with friend
                </div> 
                <div class="detailPopup" id="popupsch1" >Dinner at Gangnam 6:00PM</div>
                <div class="workschedule" id="sch2" name="5/3" onDoubleClick={evt => addPriority(evt)} >
                    Meeting A
                    {/* <div class="detailPopup" id="popupsch2">Meeting at 2:00PM with developers</div> */}
                </div>  
                <div class="workschedule" id="sch3" name="5/3" onDoubleClick={evt => addPriority(evt)}>
                    Weekly Meeting
                    {/* <div class="detailPopup" id="popupsch3">Weekly Scrum Meeting at 11:00AM</div> */}
                </div>
                <div class="privateschedule" id="sch4" name="5/4" onDoubleClick={evt => addPriority(evt)}  onMouseOver={evt => showDetail(evt)} onMouseOut={evt => hideDetail(evt)}>
                    Fitness
                </div> 
                <div class="detailPopup" id="popupsch4">Personal Training at 7:00PM</div>
                <div class="familyschedule" id="sch5" name="5/7" onDoubleClick={evt => addPriority(evt)} >
                    Bring son academy
                    <div class="detailPopup" id="popupsch5">Bring son from ABC Academy at 6:00PM</div>
                </div> 
                <div class="familyschedule" id="sch6" name="5/8" onDoubleClick={evt => addPriority(evt)} >
                    Going to museum
                    <div class="detailPopup" id="popupsch6">Family Trip to museum in Gyengju</div>
                </div>  
                <div class="privateschedule" id="sch7" name="5/6" onDoubleClick={evt => addPriority(evt)} >
                    Golf
                    {/* <div class="detailPopup" id="popupsch7">Golf Lesson at 6:30PM</div> */}
                </div> 
                <div class="workschedule" id="sch8" name="5/10" onDoubleClick={evt => addPriority(evt)}>
                    Weekly Meeting
                    <div class="detailPopup" id="popupsch8">Weekly Scrum Meeting at 11:00 AM</div>
                </div>
                <div class="workschedule" id="sch9" name="5/7" onDoubleClick={evt => addPriority(evt)} >
                    Client Meeting
                    <div class="detailPopup" id="popupsch9">Client Meeting at 02:30PM in Cafe A</div>
                </div>
                <div class="familyschedule" id="sch10" name="5/5" onDoubleClick={evt => addPriority(evt)} onMouseOver={evt => showDetail(evt)} onMouseOut={evt => hideDetail(evt)}>
                    Going out for dinner
                </div> 
                <div class="detailPopup" id="popupsch10">Going out for dinner with family to VIPS</div>
                <div class="workschedule" id="sch11" name="5/6" onDoubleClick={evt => addPriority(evt)}>
                    Presentation
                    <div class="detailPopup" id="popupsch11">Design Feedback Presentation at 11:00AM</div>
                </div>  
                <div class="familyschedule" id="sch12" name="5/7" onDoubleClick={evt => addPriority(evt)}>
                    School Sports Day
                    {/* <div class="detailPopup" id="popupsch12">Son's School Sports Day at 11:00AM</div> */}
                </div>  
                <div class="privateschedule" id="sch13" name="5/12" onDoubleClick={evt => addPriority(evt)}>
                    Appointment w/ YJ
                </div>
                <div class="familyschedule" id="sch14" name="5/15" onDoubleClick={evt => addPriority(evt)} >
                    Spring-Clean
                </div> 
                <div class="workschedule" id="sch15" name="5/12" onDoubleClick={evt => addPriority(evt)}>
                    Meeting B
                </div>  
                <div class="familyschedule" id="sch16" name="5/13" onDoubleClick={evt => addPriority(evt)}>
                    Participating Class
                </div>
                <div class="workschedule" id="sch17" name="5/4" onDoubleClick={evt => addPriority(evt)} >
                    User-Testing
                </div>  
                {/* <div class="detailPopup" id="popupsch17">User Testing starting at 3:00PM in RoomA</div> */}
                <div class="workschedule" id="sch18" name="5/4" onDoubleClick={evt => addPriority(evt)} >
                    Presen. Rehearsal
                    {/* <div class="detailPopup" id="popupsch18">Presentation Rehearsal at 1:30PM for 5/6 PT</div> */}
                </div>
                <div class="workschedule" id="sch19" name="5/3" onDoubleClick={evt => addPriority(evt)} >
                    Client Meeting
                    <div class="detailPopup" id="popupsch19">Client Meeting at 11:00AM</div>
                </div>
                <div class="privateschedule" id="sch20" name="5/6" onDoubleClick={evt => addPriority(evt)} >
                    Appointment w/ SW
                    <div class="detailPopup" id="popupsch20">Dinner at Gangnam at 7:00PM </div>
                </div>
                

            </div>
        </div>
    )
}

export default Timeline;