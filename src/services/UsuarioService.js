import {post, get} from '../configs/ApiConfig';

export function retornarUsuarioEmail(email, setFunction, onSuccess) {
    get('usuario/retornar-usuario-email/' + email, setFunction, onSuccess);
}

export function cadastrarUsuario(usuario, onSuccess) {
    post('usuario/cadastrar-usuario', usuario, onSuccess);
}

export function editarUsuario(usuario) {
    post('usuario/editar-usuario', usuario);
}

export function loginSistema(usuario, onSuccess, onFailure) {
    post('usuario/login-sistema', usuario, onSuccess, onFailure, false, false);
}

export function retornarUsuario(user_id, setFunction, onSuccess) {
    get('usuario/retornar-usuario/' + user_id, setFunction, onSuccess);
}

