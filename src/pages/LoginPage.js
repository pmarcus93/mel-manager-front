import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleRight} from "@fortawesome/free-solid-svg-icons";

import './LoginPage.scss';
import Logo from '../assets/img/logo.png';

export default function LoginPage({history}) {

    async function handleLogin(e) {
        e.preventDefault();
        //Realizar Autenticação
        history.push('/selecionarperfil');
    }

    return (
        <div className='page-main'>

            <div className='form-login'>
                <form className='animate-to-down' onSubmit={handleLogin}>

                    <div className='img-div'>
                        <img src={Logo} alt="Logo MEL Manager"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">E-mail</label>
                        <input type="text" className="form-control" required id="exampleInputPassword1"
                               placeholder="email@dominio.com"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">E-mail</label>
                        <input type="password" className="form-control" required id="exampleInputPassword1"
                               placeholder="Senha"/>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Entrar <FontAwesomeIcon
                        icon={faArrowCircleRight}/></button>

                </form>
            </div>
        </div>
    )

}