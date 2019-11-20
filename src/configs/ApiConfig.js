import axios from 'axios';
import {toast} from "react-toastify";

const endPoint = 'http://127.0.0.1:8000/api/';
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
 * @param onSuccess
 * @param onFailure
 * @param NotifySucces
 * @param NotifyError
 * @returns {Promise<void>}
 */
export async function post(url, data, onSuccess, onFailure, NotifySucces = true, NotifyError = true) {
    await axios.post(endPoint + url, data).then(response => {
        if (onSuccess) {
            onSuccess(response.data);
        }

        if (NotifySucces) {
            toast.success(response.data.text);
        }

    }).catch(erro => {

        if (erro.response) {

            if (onFailure) {
                onFailure(erro.response.data);
            }

            if (NotifyError) {
                toast.error(erro.response.data.text);
            }
            return;
        }

        toast.error('Não foi possível realizar a requisição!');

    })
}

/**
 *
 * @param url
 * @param setFunction
 * @param onSuccess
 * @returns {Promise<void>}
 */
export async function get(url, setFunction, onSuccess) {

    await axios.get(endPoint + url).then(response => {

        if (setFunction) {
            setFunction(response.data.data);
        }

        if (onSuccess) {
            onSuccess(response.data);
        }

    }).catch(erro => {

        if (erro.response) {
            toast.error(erro.response.data.exceptionMessage);
            return;
        }

        toast.error('Não foi possível realizar a requisição!');

    });

}

