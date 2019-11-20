import React, {useEffect, useState} from 'react';
import HeaderFuncionalidade from "../../HeaderFuncionalidade";
import {removerEmpresa, retornarEmpresasEvento} from "../../../services/EmpresaService";
import ItemList from "../../ItemList";
import Loading from "../../Loading";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {faEdit} from "@fortawesome/free-solid-svg-icons/faEdit";
import ItemListEmpty from "../../ItemListEmpty";

export default function EmpresaList(props) {

    const [empresas, setEmpresas] = useState([]);
    const [loading, setLoading] = useState(true);

    function deletarEmpresa(empresa_id) {
        removerEmpresa({
                empresa_id
            },
            () => retornarEmpresasEvento(props.evento_id, setEmpresas, () => {
                setLoading(false);
            }));
    }

    useEffect(() => {
        if (props.evento_id) {
            retornarEmpresasEvento(props.evento_id, setEmpresas, () => {
                setLoading(false);
            });
        }
    }, [props.evento_id]);

    return (
        <div className='row funcionalidade-padrao'>
            <div className='col-12'>
                <HeaderFuncionalidade text='Empresas do evento'/>

                {loading ? (
                    <Loading/>
                ) : (
                    <div className='row'>
                        {
                            empresas.map(empresa => (
                                <div className='card-evento col-12 my-1'>
                                    <ItemList
                                        buttons={[
                                            {
                                                text: 'Editar',
                                                icon: faEdit,
                                                action: () => props.history.push('/empresa/' + empresa.id)
                                            },
                                            {
                                                text: 'Remover',
                                                icon: faTrash,
                                                action: () => deletarEmpresa(empresa.id)
                                            }
                                        ]}
                                        nome={empresa.nome} descricao={'Telefone: ' + empresa.telefone}/>
                                </div>
                            ))
                        }

                        {empresas.length === 0 && (
                            <div className='card-evento col-12 my-1'>
                                <ItemListEmpty text='Sem empresas neste evento.'/>
                            </div>
                        )}

                    </div>)}
            </div>
        </div>
    )

}