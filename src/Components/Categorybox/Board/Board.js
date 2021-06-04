import React from 'react';

function Board(props) {
    const drop = (evt) => {
        const card_id = evt.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = 'block';

        evt.target.appendChild(card);
    }

    const dragOver = (evt) => {
        evt.preventDefault();
    }

    return (
        <div
            id = {props.id}
            className = {props.className}
            category = {props.category}
            onDrop = {drop}
            onDragOver = {dragOver}>
            
            {props.children}
        </div>
    )
}

export default Board;