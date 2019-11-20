import React, {useState, useEffect} from 'react';
import './SelectPerfil.scss';
import Events from "../components/selectperfil/Events";
import {retornarEdicoesEvento, retornarEventosUsuario} from "../services/EventoService";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {faArrowAltCircleLeft} from "@fortawesome/free-solid-svg-icons/faArrowAltCircleLeft";
import Loading from "../components/Loading";
import HeaderComponent from "../components/painel/HeaderComponent";
import HeaderFuncionalidade from "../components/HeaderFuncionalidade";
import Edicao from "../components/funcionalidades/edicao/Edicao";
import Edicoes from "../components/selectperfil/Edicoes";

export default function SelectPerfil(props) {

    const [eventos, setEventos] = useState([]);
    const [edicoes, setEdicoes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedEvent, setSelectedEvent] = useState(false);

    useEffect(() => {
        props.setEvento_id('');
        localStorage.setItem('event_id', '');
        localStorage.setItem('edicao_id', '');
        setLoading(true);
        retornarEventosUsuario(localStorage.getItem('userLogged'), setEventos, () => {
            setLoading(false)
        });
    }, []);

    function setEdicao(edicao) {
        props.setEdicao_id(edicao);
        localStorage.setItem('edicao_id', edicao);
        props.history.push('/');

    }

    function handleHeaderClick(evento_id) {
        localStorage.setItem('evento_id', evento_id);
        props.setEvento_id(evento_id);

        //Buscar as Edições
        setSelectedEvent(true);
        setLoading(true);
        retornarEdicoesEvento(evento_id, setEdicoes, response => {
            if (response.data.length < 1) {
                props.setEdicao_id('');
                localStorage.setItem('edicao_id', '');
                props.history.push('/');
                return;
            }
            setLoading(false);
        });

    }

    function logout() {
        localStorage.setItem('user_id', '');
        props.history.push('/login');
    }

    return (
        <div className='select-perfil-page '>


            {!selectedEvent ? (
                <div className='events animate-to-down'>

                    {loading ? (
                        <Loading/>
                    ) : (

                        <div>
                            <HeaderFuncionalidade text='Selecione um evento'/>

                            {eventos.length === 0 && (
                                <div className='empty-select-eventos'>
                                    <h4>Você não possui eventos.</h4>
                                    Crie um novo evento ou solicite ao administrador seu vínculo como colaborador.
                                </div>
                            )}

                            {eventos.map(evento =>
                                <Events
                                    key={evento.id}
                                    edicoes={evento.edicoes}
                                    showVersoes={evento.show}
                                    evento={evento}
                                    clickHeader={() => handleHeaderClick(evento.id)}
                                />
                            )}
                        </div>
                    )}

                    <div className='buttons-event'>
                        <div className='button-event' onClick={() => props.history.push('/evento/novo')}>
                            <span>Criar evento</span>
                            <span className='icon'><FontAwesomeIcon icon={faPlusCircle}/></span></div>
                        <div className='button-event' onClick={logout}>
                            <span>Sair</span>
                            <span className='icon'><FontAwesomeIcon icon={faArrowAltCircleLeft}/></span></div>
                    </div>
                </div>
            ) : (
                <div className='events animate-to-down'>

                    {loading ? (
                        <Loading/>
                    ) : (
                        <div>
                            <HeaderFuncionalidade text='Selecione uma edição'/>

                            {edicoes.length > 0 && edicoes.map(edicao =>
                                <Edicoes
                                    key={edicao.id}
                                    edicao={edicao}
                                    clickHeader={() => setEdicao(edicao.id)}
                                />
                            )}

                        </div>
                    )}
                </div>
            )}


        </div>
    )


}