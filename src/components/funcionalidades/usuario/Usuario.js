import React, {useState, useEffect, createRef} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave} from "@fortawesome/free-solid-svg-icons";
import {
    editarUsuario, retornarUsuario,
} from "../../../services/UsuarioService";
import {defaultProps} from "recompose";
import HeaderFuncionalidade from "../../HeaderFuncionalidade";
import InputMask from "react-input-mask";


export default function Usuario(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [telefone, setTelefone] = useState('');

    const [usuario, setUsuario] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        let usuario = {
            name,
            email,
            // password,
            telefone,
            user_id: props.loggedUser.user_id
        };

        editarUsuario(usuario);

    };

    useEffect(() => {

        if (props.loggedUser.user_id) {
            retornarUsuario(props.loggedUser.user_id, setUsuario);
        }

    }, [props.loggedUser.user_id]);

    useEffect(() => {

        if (usuario.id) {
            setName(usuario.name);
            setEmail(usuario.email);
            setTelefone(usuario.telefone);
        }

    }, [usuario]);

    return (
        <div className='row funcionalidade-padrao'>
            <form onSubmit={handleSubmit} className='col-12'>
                <div className='row'>
                    <div className='col-md-12'>

                        <HeaderFuncionalidade text='Dados Básicos'/>

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Nome</label>
                            <input type="text" className="form-control" id="name"
                                   placeholder="Nome"
                                   required={true}
                                   value={name}
                                   onChange={(e => setName(e.target.value))}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="email" className="form-control" id="email"
                                   placeholder="email@dominio.com.br"
                                   required={true}
                                   value={email}
                                   onChange={(e => setEmail(e.target.value))}/>
                        </div>

                        {/*<div className="form-group">*/}
                        {/*    <label htmlFor="exampleInputEmail1">Senha do Usuário</label>*/}
                        {/*    <input type="password" className="form-control" id="password"*/}
                        {/*           required={true}*/}
                        {/*           onChange={(e => setPassword(e.target.value))}/>*/}
                        {/*</div>*/}

                        <div className="form-group">
                            <label>Telefone</label>

                            <InputMask required
                                       className="form-control"
                                       mask="99 999999999"
                                       maskChar=""
                                       value={telefone}
                                       onChange={(e => setTelefone(e.target.value))}>
                                {(inputProps) => <input {...inputProps} required/>}

                            </InputMask>
                        </div>

                    </div>

                    <div className='col-12'>
                        <button type="submit" onClick={handleSubmit} className="btn btn-primary"><FontAwesomeIcon
                            icon={faSave}/> Salvar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )

}

const withDefaultProps = defaultProps({
    params: {}
});

Usuario = withDefaultProps(Usuario);