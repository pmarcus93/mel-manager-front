import React, {useState, useEffect} from 'react';

import './LoginPage.scss';
import Logo from '../assets/img/Logo-Mel.svg';
import {loginSistema} from "../services/UsuarioService";

export default function LoginPage({history}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [erro, setErro] = useState('');

    useEffect( () => {
        localStorage.clear();
    }, []);

    async function handleLogin(e) {
        e.preventDefault();
        setErro('');
        let usuario = {
            email,
            password
        };
        loginSistema(usuario, (response) => {
            localStorage.setItem('userLogged', response.data.id);
            history.push('/selecionarperfil');
        }, response => {
            setErro(response.text)
        });

    }

    return (
        <div className='page-main-login'>

            <div className='form-login animate-to-down'>
                <form onSubmit={handleLogin}>

                    <div className='img-div'>
                        <img src={Logo} alt="Logo MEL Manager"/>
                    </div>

                    {erro && (
                        <div className='erro-login'>
                            {erro}
                        </div>
                    )}

                    <input type="text" className="mel-input" required
                           placeholder="E-mail"
                           value={email}
                           onChange={ event => setEmail(event.target.value)}
                    />

                    <input type="password" className="mel-input" required
                           value={password}
                           onChange={ event => setPassword(event.target.value)}
                           placeholder="Senha"/>

                    <button className='btn-mel-login-variant'>ENTRAR</button>

                </form>

                <span className='login-ou-text'>OU</span>


                <div className='login-cadastre-se'>
                    <button onClick={() => history.push('/sign-in')} className='btn-mel-login'>CADASTRE-SE</button>
                </div>

            </div>
        </div>
    )

}