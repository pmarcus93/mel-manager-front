import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faBars, faCalendarAlt, faCog, faStar} from "@fortawesome/free-solid-svg-icons";
import './NavBar.scss';
import ItemMenuSuspenso from "./ItemMenuSuspenso";

export default function NavBar(props) {

    return (
        <div className="top-bar">

            {/*<div className="icon-menu" onClick={props.arrowBack && props.history.goBack}>*/}
            {/*    {+props.arrowBack === 1 ?  (<FontAwesomeIcon icon={faArrowLeft}/>*/}
            {/*    ) : (*/}
            {/*        <FontAwesomeIcon icon={faBars}/>*/}
            {/*    )}*/}
            {/*</div>*/}

            {props.title && (
                <div className="info-evento-top-bar" onClick={props.clickTitle} title='Evento'>
                    <span><FontAwesomeIcon icon={faStar}/></span>
                    <span> {props.title}</span>
                </div>
            )}

            {props.subtitle && (
                <div className="info-evento-top-bar-subtitle" onClick={props.clickSubTitle} title='Edição' >
                    <span><FontAwesomeIcon icon={faCalendarAlt}/></span>
                    <span> {props.subtitle}</span>
                </div>
            )}

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