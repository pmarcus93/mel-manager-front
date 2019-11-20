import React from 'react';
import './ListSimpleAction.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash, faEdit} from "@fortawesome/free-solid-svg-icons";

export default function ListSimpleAction(props) {
    return (

        <div className='d-flex p-2 my-2 list-simple-action'>
            <div className='my-auto'>{props.text}</div>

            <div className='d-flex ml-auto '>

                {props.actionEdit && (
                    <button onClick={props.actionEdit} className='btn btn-primary-mel-color'><FontAwesomeIcon icon={faEdit}/></button>
                )}

                {props.actionDelete && (
                    <button onClick={props.actionDelete} className='ml-1 btn btn-primary-mel-color'><FontAwesomeIcon
                        icon={faTrash}/></button>
                )}

            </div>
        </div>

    )
}