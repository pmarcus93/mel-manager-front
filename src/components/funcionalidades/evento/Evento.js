import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave} from "@fortawesome/free-solid-svg-icons";
import {
    salvarEvento,
    retornarEvento, retornarEdicoesEvento, editarEvento
} from "../../../services/EventoService";
import {defaultProps} from 'recompose';
import ListSimpleAction from "../../ListSimpleAction";
import HeaderFuncionalidade from "../../HeaderFuncionalidade";
import {retornarAdministradoresEvento} from "../../../services/UsuarioEventoService";


export default function Evento(props) {

    const [edicoes, setEdicoes] = useState([]);
    const [administradores, setAdministradores] = useState([]);

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [id, setId] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        let evento = {
            nome
        };

        if (id) {

            evento.evento_id = id;
            editarEvento(evento, response => {
                props.setEvento_id(response.data.id);
            });

            return;
        }

        evento.user_id = props.loggedUser.user_id;

        salvarEvento(evento, function (response) {
            localStorage.setItem('evento_id', response.data.id);
            props.setEvento_id(response.data.id);
            props.history.push('/evento');
        });

    };

    useEffect(() => {

        if (props.edit && props.evento_id ) {
            retornarEvento(props.evento_id, null, response => {
                setNome(response.data.nome);
                setId(response.data.id);
            });

            retornarEdicoesEvento(props.evento_id, setEdicoes);
            retornarAdministradoresEvento(props.evento_id, setAdministradores);
            return;
        }

        setNome('');
        setAdministradores([]);
        setEdicoes([]);
        setDescricao('');
        setId('');

    }, [props.edit, props.evento_id]);


    return (
        <div className='row funcionalidade-padrao'>
            <div className='col-md-12 col-sm-12'>

                <HeaderFuncionalidade text='Dados Básicos'/>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label >Nome do Evento</label>
                        <input type="text" className="form-control" id="nome"
                               placeholder="Nome do evento"
                               value={nome}
                               required={true}
                               onChange={(e => setNome(e.target.value))}/>
                    </div>

                    <div className="form-group">
                        <label>Descrição do Evento</label>
                        <textarea type="text" className="form-control" id="nome"
                                  placeholder="Descrição do evento"
                                  value={descricao}
                                  onChange={(e => setDescricao(e.target.value))}/>
                    </div>

                    <button type="submit" className="btn btn-primary-mel-color"><FontAwesomeIcon icon={faSave}/> Salvar</button>

                </form>
            </div>

            {props.edit && (
                <div className='col-md-12 col-sm-12'>

                    <div className='col-12 p-0'>

                        <HeaderFuncionalidade text='Edições'/>

                        {edicoes.map(edicao => (
                            <ListSimpleAction
                                text={edicao.nome}
                                key={edicao.id}
                                actionEdit={() => props.history.push('/edicao/' + edicao.id)}
                            />
                        ))}

                    </div>

                    <div className='col-12 p-0'>

                        <HeaderFuncionalidade text='Colaboradores'/>

                        {administradores.map(usuario => (
                            <ListSimpleAction
                                key={usuario.id}
                                text={usuario.name}
                            />
                        ))}

                    </div>
                </div>
            )}


        </div>
    )

}

const withDefaultProps = defaultProps({
    params: {}
});

Evento = withDefaultProps(Evento);