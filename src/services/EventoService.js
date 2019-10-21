import {post} from '../configs/ApiConfig';

export function salvarEvento(data) {
    post('evento/cadastrar-evento', data, function () {
            alert('Sucessso!');
        }, function () {
            alert('Falha!');
        }
    );
}