import React, {useState, useEffect} from 'react';
import './SelectPerfil.scss';
import Logo from '../assets/img/logo.png';
import Events from "../components/selectperfil/Events";
import {retornarEventosUsuario} from "../services/EventoService";

export default function SelectPerfil(props) {

    const [eventos, setEventos] = useState([]);

    useEffect(() => {
         retornarEventosUsuario(1, setEventos);
    }, []);

    function handleHeaderClick(id) {

        setEventos(eventos.map(evento => {

            if (+evento.evento_id === +id) {
                evento.show = !evento.show;
            }

            return evento;

        }, id))

    }

    function handleBodyClick(evento_id, edicao_id) {
        localStorage.setItem('evento_id', evento_id);
        localStorage.setItem('edicao_id', edicao_id);
        props.history.push('/');
    }

    return (
        <div className='select-perfil-page'>

            <div className='events animate-to-down'>

                <div className='logo-events'>
                    <img src={Logo} alt='Logo MEL Manager'/>
                </div>

                <div>
                    {eventos.map(evento =>
                        <Events
                            key={evento.evento_id}
                            edicoes={evento.edicoes}
                            showVersoes={evento.show}
                            evento={evento}
                            clickHeader={() => handleHeaderClick(evento.evento_id)}
                            clickBody={handleBodyClick}
                        />
                    )}
                </div>
            </div>
        </div>
    )


}