import React, {useEffect, useState} from 'react';

import ItemList from "../../ItemList";
import Loading from "../../Loading";
import {desvincularAdministradorEvento, retornarAdministradoresEvento} from "../../../services/UsuarioEventoService";
import HeaderFuncionalidade from "../../HeaderFuncionalidade";
import {faTrash, faEdit} from "@fortawesome/free-solid-svg-icons";
import ItemListEmpty from "../../ItemListEmpty";

export default function UsuarioList(props) {

    const [loading, setLoading] = useState(false);
    const [usuariosAdministradores, setUsuariosAdministradores] = useState([]);

    const desvincularColaborador = user_id => {
        let data = {
            user_id,
            evento_id: props.evento_id
        };

        desvincularAdministradorEvento(data, () => buscarColaboradores())

    };

    const buscarColaboradores = () => {
        setLoading(true);
        retornarAdministradoresEvento(props.evento_id, setUsuariosAdministradores, () => setLoading(false));
    };

    useEffect(() => {
        if (props.evento_id) {
            buscarColaboradores();
        }

    }, [props.evento_id]);

    return (
        <div className='row funcionalidade-padrao'>

            <div className='col-12'>

                <HeaderFuncionalidade text='Usuários que administram o evento corrente.'/>

                {loading ? (
                    <Loading/>
                ) : (
                    <div className='row'>
                        {usuariosAdministradores.map(usuario => (
                            <div className='card-evento col-12 my-1'>
                                <ItemList
                                    nome={usuario.name}
                                    descricao={usuario.email + ' | ' + usuario.telefone}
                                    buttons={[
                                        // {
                                        //     text: 'Editar',
                                        //     icon: faEdit,
                                        //     action: () => props.history.push('/colaborador/' + usuario.id)
                                        // },
                                        {
                                            text: 'Remover',
                                            icon: faTrash,
                                            action: () => desvincularColaborador(usuario.id)
                                        }
                                    ]}

                                />
                            </div>
                        ))}

                        {usuariosAdministradores.length === 0 && (
                            <div className='card-evento col-12 my-1'>
                                <ItemListEmpty text='Não existem usuários administrando este evento.'/>
                            </div>
                        )}

                    </div>)}


            </div>

        </div>
    )

}