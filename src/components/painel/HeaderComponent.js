import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './HeaderComponent.scss';


export default function HeaderComponent(props) {
    return (
        <div className="header">
            <div className='info-funcionalidade'>
                <h1>{props.header.title}</h1>
                <h4>{props.header.description}</h4>
            </div>

            <div className='buttons-actions'>
                {props.buttons && props.buttons.map(button => (
                    <button onClick={button.action}><FontAwesomeIcon icon={button.icon}/> <span className='text-button-action'> {button.text}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}