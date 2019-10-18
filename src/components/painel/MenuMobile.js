import React from 'react';
import Logo from "../../assets/img/logo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import './MenuMobile.scss';
import ItemMenu from "./ItemMenu";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

export default function MenuMobile(props) {

    return (
        <div className={!props.controlMenu ? 'sidebar-mobile hide-mobile' : 'sidebar-mobile'}>

            <div className='menu-nav-bar-mobile'>
                <span onClick={props.setControlMenu} className='arrow-back-menu-mobile'>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </span>

                <div className="logo-bar">
                    <img src={Logo} alt='Logo MEL'/>
                </div>
            </div>


            <div className="perfil-info-bar">

                <div className="perfil-avatar-bar">
                    <img src="http://www.carderator.com/assets/avatar_placeholder_small.png" alt='Perfil do usuário'/>
                </div>

                <div className="perfil-info">
                    <strong>Lucas Jr</strong>
                    <p>Usuário</p>
                </div>

            </div>

            <div className="items-bar">

                {props.itensMenu.map((menu, i) => (
                    <ItemMenu key={i} menu={menu} closeMenu={true} actionCloseMenu={props.setControlMenu} />
                ))}

            </div>
        </div>
    )

}