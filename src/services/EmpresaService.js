import {post} from '../configs/ApiConfig';

export function salvarEmpresa(data) {
    post('empresa', data, function () {
            alert('Sucessso!');
        }, function () {
            alert('Falha!');
        }
    );
}