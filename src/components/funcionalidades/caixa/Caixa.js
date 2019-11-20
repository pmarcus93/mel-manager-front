import React, {useState} from 'react';
import HeaderFuncionalidade from "../../HeaderFuncionalidade";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave} from "@fortawesome/free-solid-svg-icons/faSave";
import {cadastrarFluxoCaixa} from "../../../services/FluxoCaixa";


export default function Caixa(props) {

    const [categoria_id, setCategoria_id] = useState('');
    const [nome_operacao, setNome_operacao] = useState('');
    const [valor, setValor] = useState('');
    const [data_movimento, setData_movimento] = useState('');
    const [tipo_operacao, setTipo_operacao] = useState('CREDITO');

    const handleSubmit = e => {
        e.preventDefault();

        let data = {
            eventoedicao_id : props.edicao_id,
            categoria_id,
            nome_operacao,
            valor,
            data_movimento,
            tipo_operacao
        };

        cadastrarFluxoCaixa(data);

    };


    return (
        <div className='row funcionalidade-padrao'>
            <div className='col-12'>
                <HeaderFuncionalidade text='Adição de lançamentos'/>
            </div>

            <div className='col-12'>
                <form className='row' onSubmit={handleSubmit}>

                    <div className='col-12'>

                        <div className="form-group">
                            <label>Descrição:</label>
                            <input type="text" className="form-control" id="nome_operacao"
                                   placeholder="Descrição"
                                   required={true}
                                   onChange={event => {
                                       setNome_operacao(event.target.value)
                                   }}
                                   value={nome_operacao}
                            />
                        </div>
                    </div>


                    <div className='col-3'>
                        <div className="form-group">

                            <label>Valor:</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">$</span>
                                </div>
                                <input type="money" className="form-control" id='valor' placeholder="0,00"
                                       onChange={event => {
                                           setValor(event.target.value)
                                       }}
                                       value={valor}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='col-3'>
                        <div className="form-group">
                            <label>Tipo de Operação:</label>
                            <select className="form-control" id="tipo_operacao"
                                    onChange={event => {
                                        setTipo_operacao(event.target.value)
                                    }}
                                    value={tipo_operacao}>
                                <option selected={true} value="CREDITO">Entrada</option>
                                <option value="DEBITO">Saída</option>
                            </select>
                        </div>
                    </div>

                    <div className='col-3'>
                        <div className="form-group">
                            <label>Categoria:</label>
                            <select className="form-control" id="categoria_id" required={true}
                                    onChange={event => {
                                        setCategoria_id(event.target.value)
                                    }}
                                    value={categoria_id}>
                                <option selected value="1">Patrocinio</option>
                                <option value="">Alimentação</option>
                                <option value="">Locação</option>
                            </select>
                        </div>
                    </div>


                    <div className='col-3'>
                        <div className="form-group">
                            <label>Data:</label>
                            <input type="date" className="form-control" id="data_movimento"
                                   placeholder="Nome"
                                   required={true}
                                   onChange={event => {
                                       setData_movimento(event.target.value)
                                   }}
                                   value={data_movimento}
                            />
                        </div>
                    </div>

                    <div className='col-12'>
                        <div className="form-group">
                            <button className='btn-primary-mel-color btn'><FontAwesomeIcon icon={faSave}/> Salvar
                            </button>
                        </div>
                    </div>


                </form>

            </div>
        </div>
    )

}