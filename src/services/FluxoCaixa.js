import {post, get} from "../configs/ApiConfig";

const route = "fluxo-caixa/";

export function cadastrarFluxoCaixa(data, onSuccess, onFailure){
    post(route + "cadastrar-fluxo-caixa", data, onSuccess, onFailure);
}

export function editarFluxoCaixa(data, onSuccess, onFailure){
    post(route + "editar-fluxo-caixa", data, onSuccess, onFailure);
}

export function removerFluxoCaixa(data, onSuccess, onFailure){
    post(route + "remover-fluxo-caixa", data, onSuccess, onFailure);
}

export function retornaFluxoCaixa(id, setFunction, onSuccess){
    get(route + "retornar-fluxo-caixa/" + id , setFunction, onSuccess);
}

export function retornarFluxosCaixaPorEdicao(id_edicao, setFunction, onSuccess){
    get(route + "retornar-fluxos-caixa-por-edicao/" + id_edicao , setFunction, onSuccess);
}
