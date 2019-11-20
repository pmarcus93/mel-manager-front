import React from 'react';
import './HeaderFuncionalidade.scss';

export default function HeaderFuncionalidade(props) {
    return (
        <div className='header-funcionalidade'>
            <span>{props.text}</span>
        </div>
    )
}