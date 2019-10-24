import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave} from "@fortawesome/free-solid-svg-icons";
import {salvarUsuario} from "../../../services/UsuarioService";


export default function Usuario() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let usuario = {
            name,
            email,
            password
        };

        salvarUsuario(usuario);

    };

    return (
        <div className='row funcionalidade-padrao'>
            <div className='col-12'>
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nome do Usuário</label>
                        <input type="text" className="form-control" id="name"
                               placeholder="Nome do Usuário"
                               onChange={(e => setName(e.target.value))}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email do Usuário</label>
                        <input type="email" className="form-control" id="email"
                               placeholder="email@dominio.com.br"
                               onChange={(e => setEmail(e.target.value))}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Senha do Usuário</label>
                        <input type="password" className="form-control" id="password"
                               placeholder="Senha inicial"
                               onChange={(e => setPassword(e.target.value))}/>
                    </div>

                    <button type="submit" className="btn btn-primary"><FontAwesomeIcon icon={faSave}/> Salvar</button>

                </form>
            </div>
        </div>
    )

}