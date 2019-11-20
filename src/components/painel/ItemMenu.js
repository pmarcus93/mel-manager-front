import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './ItemMenu.scss';

export default function ItemMenu(props) {

    return (
        <div
            onClick={props.closeMenu ? () => {
                props.actionCloseMenu();
                props.menu.action();

            } : props.menu.action}

            className="item-bar">
            <span className="icon-bar">
                <FontAwesomeIcon icon={props.menu.icon}/>
            </span>
            <span> {props.menu.text} </span>
        </div>
    );

}