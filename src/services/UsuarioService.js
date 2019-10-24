import {post, get} from '../configs/ApiConfig';

export function retornarUsuarios(setFunction) {
    // get('evento/retornar-edicoes-evento-usuario/', setFunction);
}

export function salvarUsuario(usuario) {
    post('usuario/cadastrar-usuario', usuario);
}