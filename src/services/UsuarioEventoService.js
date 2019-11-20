import {post, get} from '../configs/ApiConfig';

export function retornarAdministradoresEvento(evento_id, setData, onSuccess) {
    get('usuarios-evento/retornar-administradores-evento/' + evento_id, setData, onSuccess);
}

export function vincularAdministradorEvento(data, onSuccess) {
    post('usuarios-evento/vincular-administrador-evento/', data, onSuccess);
}

export function desvincularAdministradorEvento(data, onSuccess) {
    post('usuarios-evento/desvincular-administrador-evento/', data, onSuccess);
}