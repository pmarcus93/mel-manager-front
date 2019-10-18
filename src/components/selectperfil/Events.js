import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp, faArrowDown, faSignInAlt} from "@fortawesome/free-solid-svg-icons";

import './Events.scss';

export default function Events(props) {

    return (
        <div className='event'>
            <div className='header-event'
                 onClick={props.clickHeader}>

                <span className='text'><h2>{props.nome}</h2></span>
                <span className='icon'><FontAwesomeIcon icon={props.showVersoes ? faArrowUp : faArrowDown}/></span>

            </div>

            {props.versoes && props.versoes.map( versao => (
                <div className={props.showVersoes ? 'body-event' : 'body-event hide-event'}
                     onClick={() => props.clickBody(versao.id)}>

                    <span className='text'>{versao.nome}</span>
                    <span className='icon'><FontAwesomeIcon icon={faSignInAlt}/></span>

                </div>
            ))}

        </div>
    )

}