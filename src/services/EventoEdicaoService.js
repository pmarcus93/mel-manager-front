import {post, get} from '../configs/ApiConfig';

export function retornarEventoEdicao(eventoedicao_id, setFunction, onSuccess) {
    get('evento-edicao/retornar-evento-edicao/' + eventoedicao_id, setFunction, onSuccess);
}

export function cadastrarEventoEdicao(data, onSuccess) {
    post('evento-edicao/cadastrar-evento-edicao/', data, onSuccess);
}

export function editarEventoEdicao(data, onSuccess) {
    post('evento-edicao/editar-evento-edicao/', data, onSuccess);
}

export function removerEventoEdicao(data, onSuccess) {
    post('evento-edicao/remover-evento-edicao/', data, onSuccess);
}

