import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave} from "@fortawesome/free-solid-svg-icons";
import HeaderFuncionalidade from "../../HeaderFuncionalidade";
import {cadastrarEventoEdicao, editarEventoEdicao, retornarEventoEdicao} from "../../../services/EventoEdicaoService";


export default function Edicao(props) {

    const [nome, setNome] = useState('');
    const [id, setId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (id) {
            editaEdicao();
            return;
        }

        salvaEdicao();
    };

    function editaEdicao() {
        let edicao = {
            nome,
            edicao_id: id
        };

        editarEventoEdicao(edicao, response => {
            props.history.push('/edicoes/');
        });
    }


    function salvaEdicao() {
        let edicao = {
            nome,
            evento_id: props.evento_id
        };

        cadastrarEventoEdicao(edicao, () => {
            props.history.push('/edicoes/');
        });
    }

    useEffect(() => {

        setId('');
        setNome('');

        if (props.params.edicao_id) {
            retornarEventoEdicao(props.params.edicao_id, null, response => {
                setId(response.data.id);
                setNome(response.data.nome);
            })
        }

    }, [props.params.edicao_id]);

    return (
        <div className='row funcionalidade-padrao'>

            <div className='col-12'>
                <HeaderFuncionalidade text='Dados Básicos'/>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nome da Edição</label>
                        <input type="text" className="form-control" id="nome"
                               placeholder="Nome da Edição"
                               required={true}
                               value={nome}
                               onChange={(e => setNome(e.target.value))}/>
                    </div>

                    <button type="submit" className="btn btn-primary-mel-color"><FontAwesomeIcon icon={faSave}/> Salvar</button>

                </form>
            </div>

        </div>
    )

}