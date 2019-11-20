import {get, post} from '../configs/ApiConfig';

export function cadastrarEmpresa(data, onSuccess, onFaillure) {
    post('empresa/cadastrar-empresa', data, onSuccess, onFaillure);
}

export function editarEmpresa(data, onSuccess, onFaillure) {
    post('empresa/editar-empresa', data, onSuccess, onFaillure);
}

export function removerEmpresa(data, onSuccess, onFaillure) {
    post('empresa/remover-empresa', data, onSuccess, onFaillure);
}

export function retornarEmpresa(empresa_id, setFunction, onSuccess){
    get('empresa/retornar-empresa/' + empresa_id, setFunction, onSuccess);
}

export function retornarEmpresasEvento(evento_id, setFunction, onSuccess){
    get('empresa/retornar-empresas-evento/' + evento_id, setFunction, onSuccess);
}

