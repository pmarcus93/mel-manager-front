import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave} from "@fortawesome/free-solid-svg-icons";
import {cadastrarEmpresa, editarEmpresa, retornarEmpresa} from "../../../services/EmpresaService";
import HeaderFuncionalidade from "../../HeaderFuncionalidade";


export default function Empresa(props) {

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [id, setId] = useState('');
    const [evento_id, setEvento_id] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!id) {
            let empresa = {
                nome,
                telefone,
                evento_id: props.evento_id
            };

            cadastrarEmpresa(empresa, () => {
                props.history.push('/empresa');
            });

            return;

        }

        let empresaUpdate = {
            id,
            nome,
            telefone
        };

        editarEmpresa(empresaUpdate, () => {
            props.history.push('/empresa');
        });

    };

    useEffect(() => {

        setId('');
        setNome('');
        setEvento_id('');

        if (props.params.empresa_id) {
            retornarEmpresa(props.params.empresa_id, null,response => {
                setNome(response.data.nome);
                setTelefone(response.data.telefone);
                setId(response.data.id);
                setEvento_id(response.data.evento_id);
            })
        }

    }, [props.params.empresa_id]);

    return (
        <div className='row funcionalidade-padrao'>
            <div className='col-12'>
                <HeaderFuncionalidade text='Dados básicos'/>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nome</label>
                        <input type="text" className="form-control" id="nome"
                               placeholder="Nome"
                               value={nome}
                               onChange={(e => setNome(e.target.value))}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Telefone</label>
                        <input type="text" className="form-control" id="telefone"
                               maxLength={11}
                               placeholder="(XX) X.XXXX-XXXX"
                               value={telefone}
                               onChange={(e => setTelefone(e.target.value))}/>
                    </div>

                    <button type="submit" className="btn btn-primary"><FontAwesomeIcon icon={faSave}/> Salvar</button>

                </form>
            </div>
        </div>
    )

}