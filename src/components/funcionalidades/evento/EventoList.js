import React, {useEffect, useState} from 'react';
import './Evento.scss';
import {retornarEventosUsuario} from "../../../services/EventoService";
import ItemList from "../../ItemList";
import Loading from "../../Loading";

export default function EventoList(props) {

    const [eventos, setEventos] = useState([]);
    const [loading, setLoading] = useState(false);

    const buscaEventos = async function () {
        setLoading(true);
        await retornarEventosUsuario(1, setEventos, () => setLoading(false));

    };

    useEffect(() => {
        buscaEventos();
    }, []);

    return (
        <div className='row funcionalidade-padrao'>

            {loading ? (
                <Loading/>
            ) : (
                <div className='col-12'>
                    <div className='row'>
                        {eventos.map(evento => (

                            <div className='card-evento col-12 my-1'>
                                <ItemList
                                    nome={evento.nome}
                                    actionButton={() => props.history.push('/evento/' + evento.evento_id)}
                                />
                            </div>

                        ))}
                    </div>
                </div>
            )}


        </div>
    )

}