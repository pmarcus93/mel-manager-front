import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons/faEye";

export default function CardImageActions(props) {

    return (
        <div onClick={props.actionButton} className="card card-default">
            {/*<img*/}
            {/*    src="https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"*/}
            {/*    className="card-img-top" alt="..."/>*/}
            <div className="card-body">
                <h5 className="card-title">{props.nome}</h5>
                <p className="card-text">Descrição</p>
                {/*<button onClick={props.actionButton} className="btn btn-primary justify-content-end"><FontAwesomeIcon icon={faEye}/> Visualizar</button>*/}
            </div>
        </div>
    )

}