import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave} from "@fortawesome/free-solid-svg-icons";
import {salvarEvento, retornarEventoComEdicoes} from "../../../services/EventoService";
import {defaultProps} from 'recompose';


export default function Evento(props) {

    const [nome, setNome] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let evento = {
            nome,
            user_id: props.loggedUser.user_id
        };

        salvarEvento(evento);

    };


    useEffect(() => {

        //Buscar Evento
        if (props.params.evento_id) {
            retornarEventoComEdicoes(props.params.evento_id);
        }

    }, [props.params.evento_id]);

    return (
        <div className='row funcionalidade-padrao'>
            <div className='col-12'>
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nome do Evento</label>
                        <input type="text" className="form-control" id="nome"
                               placeholder="Nome do evento"
                               onChange={(e => setNome(e.target.value))}/>
                    </div>

                    <button type="submit" className="btn btn-primary"><FontAwesomeIcon icon={faSave}/> Salvar</button>

                </form>
            </div>
        </div>
    )

}

const withDefaultProps = defaultProps({
    params: {}
});

Evento = withDefaultProps(Evento);