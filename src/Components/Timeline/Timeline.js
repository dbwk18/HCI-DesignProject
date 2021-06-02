import React, {useState, useCallback, update, useRef, state, setState} from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
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
const getItemStyle = (draggableStyle, isDragging) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    // padding: grid * 2,
    // marginBottom: grid,
    textAlign: 'center',
    height: '90px',
    lineHeight: '90px',
    fontSize: '20px',
    position: 'relative',
    marginBottom: '5px',
    borderRadius: '20px',
    border: '2px solid grey',
    margin: '10px',

    // change background colour if dragging
    background: isDragging ?  '#ABFFA9' : '#EBFFEB',
  
    // styles we need to apply on draggables
    ...draggableStyle,
  });
const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'white' : 'white',
    // padding: grid,
    width: 310,
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

    const Wrapper = styled.div`
        opacity: ${props => (props.isDragging ? 0 : 1)};
    `;

    function addPriority(event) {
        console.log(event.target.innerText);
        setprname(event.target.innerText);

        var inputbox = document.createElement("div");
        inputbox.innerText= event.target.innerText;
        var position = document.getElementById('priorityMenu');
        // position.appendChild(inputbox);

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

        setCards([...cards,
            {id: String(cards.length+1), title: event.target.innerText, index: cards.length},])

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
                            style={getListStyle(snapshot.isDraggingOver)}
                            >
                            {itemlist.items.map(item => (
                                <Draggable key={item.id} draggableId={item.id} index={item.index}>
                                {(provided, snapshot) => (
                                    
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={getItemStyle(
                                        provided.draggableStyle,
                                        snapshot.isDragging
                                        )}
                                        {...provided.dragHandleProps}
                                    >
                                        {item.title}
                                        
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