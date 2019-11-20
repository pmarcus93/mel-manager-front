import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

import './Events.scss';

export default function Events(props) {

    return (
        <div className='event' onClick={props.clickHeader}>
            <span className='text'>{props.evento.nome}</span>
            <span className='icon'><FontAwesomeIcon icon={faCheck}/></span>
        </div>
    )

}