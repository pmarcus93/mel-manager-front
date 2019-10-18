import React from 'react';
import Logo from "../../assets/img/logo.png";

import './Menu.scss';
import ItemMenu from "./ItemMenu";

export default function Menu(props) {

    return (
        <div className={!props.controlMenu ? 'sidebar hide' : 'sidebar'}>

            <div className="logo-bar">
                <img src={Logo} alt='Logo MEL'/>
            </div>

            <div className="perfil-info-bar">

                <div className="perfil-avatar-bar">
                    <img src="http://www.carderator.com/assets/avatar_placeholder_small.png" alt='Perfil do Usuário'/>
                </div>

                <div className="perfil-info">
                    <strong>Lucas Jr</strong>
                    <p>Usuário</p>
                </div>

            </div>

            <div className="items-bar">

                {props.itensMenu.map((menu, i) => (
                    <ItemMenu key={i} menu={menu}/>
                ))}

            </div>
        </div>
    )

}