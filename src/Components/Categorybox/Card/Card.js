import React from 'react'

function Card (props) {
    
    const dragStart = (evt) => {
        const target = evt.target;
        evt.dataTransfer.setData('card_id', target.id);
    }

    const dragOver = (evt) => {
        evt.stopPropagation();
    }

    return (
        <div
        id = {props.id}
        className = {props.className}
        category = {props.category}
        draggable = {props.draggable}
        onDragStart = {dragStart}
        onDragOver = {dragOver}>

            {props.children}

        </div>
    )
}

export default Card;