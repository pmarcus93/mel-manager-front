import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp, faArrowDown, faCheck} from "@fortawesome/free-solid-svg-icons";

import './Events.scss';

export default function Events(props) {

    return (
        <div className='event'>

            {props.edicoes.length > 0 && (
                <div className='header-event'
                     onClick={props.clickHeader}>

                    <span className='text'><h2>{props.evento.nome}</h2></span>
                    <span className='icon'><FontAwesomeIcon icon={props.showVersoes ? faArrowUp : faArrowDown}/></span>

                </div>
            )}


            {props.edicoes && props.edicoes.map(versao => (
                <div
                    key={versao.edicao_id}
                    className={props.showVersoes ? 'body-event' : 'body-event hide-event'}
                    onClick={() => props.clickBody(props.evento.evento_id, versao.edicao_id)}
                >

                    <span className='text'>{versao.nome}</span>
                    <span className='icon'><FontAwesomeIcon icon={faCheck}/></span>

                </div>
            ))}

        </div>
    )

}