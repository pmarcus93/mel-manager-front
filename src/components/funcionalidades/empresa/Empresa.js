import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave} from "@fortawesome/free-solid-svg-icons";
import {salvarEmpresa} from "../../../services/EmpresaService";


export default function Empresa() {

    const [nome, setNome] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let empresa = {
            nome
        };

        salvarEmpresa(empresa);

    };

    return (
        <div className='row funcionalidade-padrao'>
            <div className='col-12'>
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nome do Evento</label>
                        <input type="text" className="form-control" id="nome"
                               placeholder="Nome do evento"
                               onChange={(e => setNome(e.target.value))}/>
                    </div>

                    <button type="submit" className="btn btn-primary"><FontAwesomeIcon icon={faSave}/> Salvar</button>

                </form>
            </div>
        </div>
    )

}