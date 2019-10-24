import {post, get} from '../configs/ApiConfig';

export function salvarEvento(data) {
    post('evento/cadastrar-evento', data, function () {
            alert('Sucessso!');
        }, function () {
            alert('Falha!');
        }
    );
}

export function retornarEventosUsuario(user_id, setFunction) {
    get('evento/retornar-edicoes-evento-usuario/' + user_id, setFunction);
}

export function retornarEventoComEdicoes(evento_id, setFunction) {
    get('evento/retornar-administradores/' + evento_id, setFunction);
}