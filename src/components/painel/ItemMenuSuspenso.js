import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './ItemMenuSuspenso.scss';

export default function ItemMenuSuspenso(props) {

    return (
        <div onClick={props.menu.action} className="item-option-user">
            <span className="icon-bar"> <FontAwesomeIcon icon={props.menu.icon}/></span>
            <span> {props.menu.text} </span>
        </div>
    )

}