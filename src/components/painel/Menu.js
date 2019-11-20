import React, {useEffect, useState} from 'react';
import Logo from "../../assets/img/Logo-Mel-White.svg";

import './Menu.scss';
import ItemMenu from "./ItemMenu";
import ImgPerfil from '../../assets/img/perfil.jpg';
import {retornarUsuario} from "../../services/UsuarioService";

export default function Menu(props) {

    const [dataUsuario, setDataUsuario] = useState({});
    const [iniciais, setIniciais] = useState('');

    useEffect(() => {
        if (props.loggedUser.user_id) {
            retornarUsuario(props.loggedUser.user_id, setDataUsuario, response => {
                let nome = response.data.name;
                nome  = nome.split(' ');

                let first = nome[0][0];
                let second = '';

                if (nome[1]) {
                    second = nome[1][0];
                }

                setIniciais(first.toUpperCase() + second.toUpperCase());
            })
        }
    }, [props.loggedUser]);

    return (
        <div className={!props.controlMenu ? 'sidebar hide' : 'sidebar'}>

            <div className="perfil-info-bar">

                <div className="perfil-avatar-bar">
                    <div className='fundo-perfil-imagem'>
                        <img src={ImgPerfil}/>
                    </div>
                    <div className='capitalize-perfil'>
                        <span>{iniciais}</span>
                    </div>

                </div>

                <div className="perfil-info">
                    <strong>{dataUsuario.name}</strong>
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