import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faCog} from "@fortawesome/free-solid-svg-icons";
import './NavBar.scss';
import ItemMenuSuspenso from "./ItemMenuSuspenso";

export default function NavBar(props) {

    return (
        <div className="top-bar">
            <div className="icon-menu" onClick={props.clickHamburguer}>
                <FontAwesomeIcon icon={faBars}/>
            </div>

            <div className="info-evento-top-bar"> EGPM 2020</div>

            <div className="end-top-bar">
                <div className="top-bar-item" onClick={props.clickCog}>
                    <FontAwesomeIcon icon={faCog}/>
                </div>
            </div>

            <div className={props.controlBoxCog ? 'option-user showFadeInTop' : 'option-user'}>

                {props.cogMenu.map(menu => (
                    <ItemMenuSuspenso menu={menu}/>
                ))}

            </div>
        </div>
    )

}