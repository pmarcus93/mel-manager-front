import React, {useEffect, useState} from 'react';

import {retornarEventosUsuario} from "../../../services/EventoService";
import CardImageActions from "../../CardImageAction";
import Loading from "../../Loading";

export default function UsuarioList(props) {

    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(false);

    const buscaEventos = async function () {
        setLoading(true);
        // await retornarEventosUsuario(1, setEventos);
        setLoading(false);

    };

    useEffect(() => {
        buscaEventos();
    }, []);

    return (
        <div className='row '>

            {loading ? (
                <Loading/>
            ) : (
                <div className='col-12 card-group'>
                    <div className='row'>
                        {usuarios.map(evento => (

                            <div className='card-evento col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-3'>
                                <CardImageActions
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