import React from "react";
import {Route, Switch} from "react-router";
import MainComponent from "../painel/MainComponent";
import EmpresaList from "./empresa/EmpresaList";

import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import Empresa from "./empresa/Empresa";
import Evento from "./evento/Evento";
import UsuarioList from "./usuario/UsuarioList";
import Usuario from "./usuario/Usuario";
import Edicao from "./edicao/Edicao";
import EdicaoList from "./edicao/EdicaoList";
import Colaborador from "./colaborador/Colaborador";
import Caixa from "./caixa/Caixa";
import {faPrint} from "@fortawesome/free-solid-svg-icons/faPrint";

export default function RoutesFuncionalidades(props) {
    return (
        <Switch>
            <Route path="/" exact render={
                () => (
                    <MainComponent
                        {...props}
                        header={
                            {
                                title: 'Bem Vindo ao MEL',
                                description: 'Sistema para gerenciamento de eventos.'
                            }
                        }
                       >
                    </MainComponent>
                )
            }/>

            <Route path="/empresa" exact render={
                () => (
                    <MainComponent
                        {...props}
                        header={
                            {
                                title: 'Empresas',
                                description: 'Gerencie empresas.'
                            }
                        }
                        buttonsHeader={[
                            {
                                text: 'Adicionar',
                                icon: faPlusCircle,
                                action: () => {
                                    props.history.push('/empresa/novo');
                                }
                            }
                        ]}
                    >
                        <EmpresaList {...props}/>
                    </MainComponent>
                )
            }/>

            <Route path="/empresa/novo" exact render={
                () => (
                    <MainComponent
                        {...props}
                        header={
                            {
                                title: 'Nova Empresa',
                                description: 'Crie uma nova empresa.'
                            }
                        }
                        arrowBack={true}
                    >
                        <Empresa {...props} edit={false} params={{}} />
                    </MainComponent>
                )
            }/>

            <Route path="/empresa/:empresa_id" exact render={
                ({match}) => (
                    <MainComponent
                        {...props}
                        header={
                            {
                                title: 'Edicão de  Empresa',
                                description: 'Altere os dados de uma empresa.'
                            }
                        }
                        arrowBack={true}
                    >
                        <Empresa {...props} params={match.params} edit={true}/>
                    </MainComponent>
                )
            }/>

            <Route path="/colaboradores" exact render={
                () => (
                    <MainComponent
                        {...props}
                        header={
                            {
                                title: 'Colaboradores',
                                description: 'Usuários que podem gerenciar este evento'
                            }
                        }
                        buttonsHeader={[
                            {
                                text: 'Adicionar',
                                icon: faPlusCircle,
                                action: () => {
                                    props.history.push('/colaborador/novo');
                                }
                            }
                        ]}
                    >
                        <UsuarioList {...props}/>
                    </MainComponent>
                )
            }/>

            <Route path="/colaborador/novo" exact render={
                () => (
                    <MainComponent
                        {...props}
                        header={
                            {
                                title: 'Adicionar Colaborador',
                                description: 'Adicione pessoas para gerenciar este evento.'
                            }
                        }
                        arrowBack={true}
                    >
                        <Colaborador {...props}/>
                    </MainComponent>
                )
            }/>

            <Route path="/evento" exact render={
                () => (
                    <MainComponent
                        {...props}

                        header={
                            {
                                title: 'Evento',
                                description: 'Dados do evento'
                            }
                        }

                    >
                        <Evento {...props} edit={true}/>
                    </MainComponent>
                )
            }/>

            <Route path="/evento/novo" exact render={
                () => (
                    <MainComponent
                        {...props}
                        header={
                            {
                                title: 'Evento',
                                description: 'Crie um novo evento'
                            }
                        }

                    >
                        <Evento {...props} />
                    </MainComponent>
                )
            }/>

            <Route path="/edicoes/" exact render={
                ({match}) => (
                    <MainComponent
                        {...props}
                        header={
                            {
                                title: 'Edições',
                                description: 'Edição de eventos'
                            }
                        }
                        buttonsHeader={[
                            {
                                text: 'Adicionar',
                                icon: faPlusCircle,
                                action: () => {
                                    props.history.push('/edicao/novo');
                                }
                            }
                        ]}

                    >
                        <EdicaoList
                            {...props}
                            params={match.params}/>
                    </MainComponent>
                )
            }/>


            <Route path="/edicao/:edicao_id" exact render={
                ({match}) => (
                    <MainComponent
                        {...props}
                        header={
                            {
                                title: 'Edições',
                                description: 'Edição de eventos'
                            }
                        }

                        arrowBack={true}
                    >
                        <Edicao
                            {...props}
                            params={match.params}/>
                    </MainComponent>
                )
            }/>

            <Route path="/perfil" exact render={
                () => (
                    <MainComponent
                        {...props}
                        header={
                            {
                                title: 'Minha Conta',
                                description: 'Altere seus dados cadastrais'
                            }
                        }
                    >
                        <Usuario
                            {...props}
                        />
                    </MainComponent>
                )
            }/>


            <Route path="/caixa/" exact render={
                ({match}) => (
                    <MainComponent
                        {...props}
                        header={
                            {
                                title: 'Fluxo de caixa',
                                description: 'Gerenciamento de entradas e saídas'
                            }
                        }
                        buttonsHeader={[
                            {
                                text: 'Adicionar',
                                icon: faPlusCircle,
                                action: () => {
                                    props.history.push('/lancamento/novo');
                                }
                            },
                            {
                                text: 'Relatórios',
                                icon: faPrint,
                                action: () => {
                                    props.history.push('/relatorios');
                                }
                            }
                        ]}

                    >
                        <Caixa
                            {...props}
                            params={match.params}/>
                    </MainComponent>
                )
            }/>

            <Route path="/lancamento/novo" exact render={
                ({match}) => (
                    <MainComponent
                        {...props}
                        header={
                            {
                                title: 'Fluxo de caixa',
                                description: 'Adição de lançamentos'
                            }
                        }

                    >
                        <Caixa
                            {...props}
                            params={match.params}/>
                    </MainComponent>
                )
            }/>


        </Switch>
    )
}
