import React from 'react';
import './ItemList.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function ItemList(props) {

    return (
        <div className="card-default" onClick={props.actionList}>

            <div className="info-area">
                <sapn className="">{props.nome}</sapn>
                {props.descricao && (
                    <span className="descricao-item-list">{props.descricao}</span>
                )}
            </div>

            <div className='item-list-buttons'>
                {props.buttons && props.buttons.map(button => (
                    <button onClick={button.action} className="btn-primary-mel">
                        <FontAwesomeIcon icon={button.icon}/> {button.text}
                    </button>
                ))}

            </div>

        </div>
    )

}