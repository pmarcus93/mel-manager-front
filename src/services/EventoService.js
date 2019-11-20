import {post, get} from '../configs/ApiConfig';

export function salvarEvento(data, successFunction, failFunction, pNotify = true) {
    post('evento/cadastrar-evento', data, successFunction, failFunction, pNotify);
}

export function editarEvento(data, successFunction, failFunction, pNotify = true) {
    post('evento/editar-evento', data, successFunction, failFunction, pNotify);
}

export function retornarEventosUsuario(user_id, setFunction, onSuccess) {
    get('evento/retornar-eventos-usuario/' + user_id, setFunction, onSuccess);
}

export async function retornarEdicoesEvento(evento_id, setFunction, onSucces) {
    await get('evento/retornar-edicoes-evento/' + evento_id, setFunction, onSucces);
}

export function retornarEvento(evento_id, setFunction, onSuccess) {
    get('evento/retornar-evento/' + evento_id, setFunction, onSuccess);
}
