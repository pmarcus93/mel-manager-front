import React from 'react';

export default function ItemListEmpty(props) {

    return (
        <div className="item-list-empty p-3">
            {props.text}
        </div>
    )

}