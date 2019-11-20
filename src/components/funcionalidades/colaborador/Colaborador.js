import React, {useState, useEffect, createRef} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index";
import {faPlusCircle, faSearch} from "@fortawesome/free-solid-svg-icons/index";
import {
    retornarUsuarioEmail,
} from "../../../services/UsuarioService";
import {defaultProps} from "recompose";
import HeaderFuncionalidade from "../../HeaderFuncionalidade";
import './Colaborador.scss';
import ItemList from "../../ItemList";
import {vincularAdministradorEvento} from "../../../services/UsuarioEventoService";
import ItemListEmpty from "../../ItemListEmpty";

export default function Colaborador(props) {

    const [emailPesquisa, setEmailPesquisa] = useState('');
    const [usuario, setUsuario] = useState({});
    const [buscaRealizada, setBuscaRealizada] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        // setBuscaRealizada(false);
        retornarUsuarioEmail(emailPesquisa, null, response => {
            setBuscaRealizada(true);
            if (response.data.length === 0) {
                    setUsuario({});
                return;
            }
            setUsuario(response.data[0]);
        });
    };

    const vincularColaborador = (user_id) => {
        let data = {
            user_id,
            evento_id: props.evento_id
        };

        vincularAdministradorEvento(data);
    };

    return (
        <div className='row funcionalidade-padrao'>

            <div className='col-md-12'>

                <HeaderFuncionalidade text='Procure um usuário informando o seu e-mail'/>

            </div>
            <div className='col-md-12'>

                <form onSubmit={handleSubmit} className='form-pesquisa-colaborador'>

                    <div className='input-pesquisa-colaborador'>
                        <input required={true}
                               type="email"
                               className='form-control'
                               placeholder='email@email.com.br'
                               onChange={e => (setEmailPesquisa(e.target.value))}
                        />
                    </div>

                    <div>
                        <button className='btn-primary-mel-color btn'><FontAwesomeIcon icon={faSearch}/> Procurar
                        </button>
                    </div>

                </form>

            </div>

            <div className='col-12'>
                <div className='info-usuario-pesquisado'>

                    {usuario.id && (
                        <ItemList
                            nome={usuario.name}
                            descricao={'E-mail: ' + usuario.email + ' | Telefone: ' + usuario.telefone}
                            buttons={[
                                {
                                    text: 'Adicionar',
                                    icon: faPlusCircle,
                                    action: () => vincularColaborador(usuario.id)
                                }
                            ]}
                        />
                    )}

                    {!usuario.id && buscaRealizada && (
                        <ItemListEmpty text='Este email não está cadastrado!'/>
                        )}

                </div>
            </div>

        </div>
    )

}

const withDefaultProps = defaultProps({
    params: {}
});

Colaborador = withDefaultProps(Colaborador);