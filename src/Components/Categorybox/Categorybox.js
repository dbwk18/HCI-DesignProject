import React, { useState } from 'react';
import './Categorybox.css'

import Item from "./components/Item";
import DropWrapper from "./components/DropWrapper";
import Col from "./components/Col";
import { data, statuses } from "./data/index";

//정보를 firebase database에서 불러올것?

function Category(){
    const [items, setItems] = useState(data);

    const onDrop = (item, monitor, status) => {
        //const mapping = statuses.find(si => si.status === status);

        setItems(prevState => {
            const newItems = prevState
                .filter(i => i.id !== item.id)
               // .concat({ ...item, status, icon: mapping.icon });
            return [ ...newItems ];
        });
    };

    const moveItem = (dragIndex, hoverIndex) => {
        const item = items[dragIndex];
        setItems(prevState => {
            const newItems = prevState.filter((i, idx) => idx !== dragIndex);
            newItems.splice(hoverIndex, 0, item);
            return  [ ...newItems ];
        });
    };
    return(
        <div className={"row"}>
            {statuses.map(s => {
                return (
                    <div key={statuses} className={"col-wrapper"}>
                        <h2 className={"col-header"}>{s.status.toUpperCase()}</h2>
                        <DropWrapper onDrop={onDrop} status={s.status}>
                            <Col>
                                {items
                                    .filter(i => i.status === s.status)
                                    .map((i, idx) => <Item key={i.id} item={i} index={idx} moveItem={moveItem} status={s} />)
                                }
                            </Col>
                        </DropWrapper>
                    </div>
                );
            })}
        </div>
        // <div class = 'category-box'>
        //     <div class = 'box' id = 'pin-board'>
        //         This is pin board
        //         <div id = 'icon'>
        //             <img src = './icons/pin.png'></img>
        //         </div>
        //     </div>

        //     <div class = 'box' id = 'work-wrap'>
        //         This is work box
        //         <div id = 'icon'>
        //             <img src = './icons/work.png'></img>
        //         </div>
        //     </div>
        //     <div class = 'box' id = 'family-wrap'>
        //          This is family box
        //         <div id = 'icon'>
        //             <img src = './icons/family.png'></img>
        //         </div>
        //     </div>
        //     <div class = 'box' id = 'private-wrap'>
        //         This is private box
        //         <div id = 'icon'>
        //             <img src = './icons/private.png'></img>
        //         </div>
        //     </div>
        // </div>
    )

}

export default Category;
