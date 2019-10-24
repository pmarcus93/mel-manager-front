import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faCog} from "@fortawesome/free-solid-svg-icons";
import './NavBar.scss';
import ItemMenuSuspenso from "./ItemMenuSuspenso";

export default function NavBar(props) {

    return (
        <div className="top-bar">
            <div className="icon-menu" onClick={props.arrowBack && props.history.goBack}>
                {props.arrowBack && (<FontAwesomeIcon icon={faArrowLeft}/>
                )}
            </div>

            <div className="info-evento-top-bar"> EGPM 2020</div>

            <div className="end-top-bar">
                <div className="top-bar-item" onClick={props.clickCog}>
                    <FontAwesomeIcon icon={faCog}/>
                </div>
            </div>

            <div className={props.controlBoxCog ? 'option-user showFadeInTop' : 'option-user'}>

                {props.cogMenu.map((menu, i) => (
                    <ItemMenuSuspenso key={i} menu={menu}/>
                ))}

            </div>
        </div>
    )

}