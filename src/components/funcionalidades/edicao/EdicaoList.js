import React, {useEffect, useState} from 'react';
import ItemList from "../../ItemList";
import Loading from "../../Loading";
import ItemListEmpty from "../../ItemListEmpty";
import HeaderFuncionalidade from "../../HeaderFuncionalidade";
import {retornarEdicoesEvento} from "../../../services/EventoService";
import {faEdit} from "@fortawesome/free-solid-svg-icons/faEdit";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {removerEventoEdicao} from "../../../services/EventoEdicaoService";

export default function EdicaoList(props) {

    const [edicoes, setEdicoes] = useState([]);
    const [loading, setLoading] = useState(false);

    const buscaEdicoes = async function () {
        setLoading(true);
        await retornarEdicoesEvento(props.evento_id, setEdicoes);
        setLoading(false);

    };

    const deletaEdicao = edicao_id => {
        removerEventoEdicao({edicao_id}, () => {
            buscaEdicoes();
        })
    };

    useEffect(() => {
        if (props.evento_id) {
            buscaEdicoes();

        }
    }, [props.evento_id]);


    return (
        <div className='row funcionalidade-padrao'>

            <div className='col-12'>
                <HeaderFuncionalidade text='Edições do evento corrente.'/>

                {loading ? (
                    <Loading/>
                ) : (


                    <div className='row'>
                        {edicoes.map(edicao => (

                            <div key={edicao.id} className='card-evento col-12 my-1'>
                                <ItemList
                                    nome={edicao.nome}

                                    buttons={[
                                        {
                                            text: 'Editar',
                                            icon: faEdit,
                                            action: () => props.history.push('/edicao/' + edicao.id)
                                        },
                                        {
                                            text: 'Remover',
                                            icon: faTrash,
                                            action: () => deletaEdicao(edicao.id)
                                        }
                                    ]}

                                />

                            </div>

                        ))}

                        {edicoes.length <= 0 && (
                            <div className='card-evento col-12 my-1'>
                                <ItemListEmpty text='O evento corrente não tem edições disponíveis.'/>
                            </div>
                        )}

                    </div>


                )}

            </div>
        </div>
    )

}