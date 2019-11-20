import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './SignIn.scss';
import {toast, ToastContainer} from "react-toastify";
import {faCheck} from "@fortawesome/free-solid-svg-icons/faCheck";
import {cadastrarUsuario} from "../services/UsuarioService";

export default function SignIn({history}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    const [successSignIn, setSuccessSignIn] = useState(false);

    const handleSubmitCadastro = (e) => {

        e.preventDefault();

        if (password !== passwordCheck) {
            toast.error('As senhas informadas não estão iguais.');
            return;
        }

        let usuarioCadastro = {
            name,
            email,
            telefone,
            password
        };

        cadastrarUsuario(usuarioCadastro, () => {
            setSuccessSignIn(true);
        })
    };

    return (
        <div className='page-main-login'>

            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange
                draggable
                pauseOnHover
            />

            <div className='cadastre-se-form'>

                {successSignIn ? (
                    <div>
                        <div className='success-sign-in animate-to-down'>

                            <h3> Quase Pronto! <FontAwesomeIcon icon={faCheck}/></h3>

                            <p>Para ativar seu cadastro, clique no link do e-mail de
                                confirmação enviado para {email}.</p>
                        </div>

                        <div className='back-login-page-sign-in'>
                            <span onClick={() => history.push('/login')}>Voltar para tela de login</span>
                        </div>
                    </div>
                ) : (

                    <div className='animate-to-down'>
                        <div className='header-sign-in'>
                            <p>Preencha os dados do formulário abaixo para se cadastar.</p>
                        </div>

                        < form onSubmit={handleSubmitCadastro}>
                            <input type="text" className="mel-input" required
                                   placeholder="Nome completo"
                                   onChange={(e) => setName(e.target.value)}
                            />

                            <input type="email" className="mel-input" required
                                   placeholder="E-mail"
                                   onChange={(e) => setEmail(e.target.value)}
                            />

                            <input type="text" className="mel-input" required
                                   placeholder="Telefone"
                                   onChange={(e) => setTelefone(e.target.value)}
                            />

                            <input type="password" className="mel-input" required
                                   placeholder="Senha"
                                   onChange={(e) => setPassword(e.target.value)}
                            />

                            <input type="password" className="mel-input" required
                                   placeholder="Confirme a senha"
                                   onChange={(e) => setPasswordCheck(e.target.value)}
                            />

                            <button className='btn-mel-login'>SALVAR</button>

                        </form>

                        <div className='back-login-page-sign-in'>
                            <span onClick={() => history.push('/login')}>Voltar para tela de login</span>
                        </div>

                    </div>

                )}

            </div>
        </div>
    );

}