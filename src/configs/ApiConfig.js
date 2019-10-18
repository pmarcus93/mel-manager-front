import axios from 'axios';

const endPoint = 'http://mel.marcuspereira.com/api/';
var tokenAtual = '';
var header = {};


export function setHeader() {

}


/**
 *
 * @param token
 */
export function setToken(token) {
    tokenAtual = token;
}

/**
 *
 * @param url
 * @param data
 */
export function post(url, data, onSuccess, onFailure) {
    axios.post(endPoint + url, data).then(response => {
        onSuccess(response);
    }).catch(erro => {
        onFailure(erro.response);
    })
}

export function get(url) {
    axios.get(endPoint + url)
}

