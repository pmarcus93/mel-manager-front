import React from "react";
import {Route, Switch} from "react-router";
import MainComponent from "../painel/MainComponent";
import EmpresaList from "./empresa/EmpresaList";

import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import Empresa from "./empresa/Empresa";
import EventoList from "./evento/EventoList";
import Evento from "./evento/Evento";
import UsuarioList from "./usuario/UsuarioList";
import Usuario from "./usuario/Usuario";

export default function RoutesFuncionalidades(props) {
    return (
        <Switch>
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
                        <EmpresaList/>
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
                        <Empresa/>
                    </MainComponent>
                )
            }/>


            <Route path="/usuario" exact render={
                () => (
                    <MainComponent
                        {...props}
                        header={
                            {
                                title: 'Usuários',
                                description: 'Gerencie usuários'
                            }
                        }
                        buttonsHeader={[
                            {
                                text: 'Adicionar',
                                icon: faPlusCircle,
                                action: () => {
                                    props.history.push('/usuario/novo');
                                }
                            }
                        ]}
                    >
                        <UsuarioList {...props}/>
                    </MainComponent>
                )
            }/>

            <Route path="/usuario/novo" exact render={
                () => (
                    <MainComponent
                        {...props}
                        header={
                            {
                                title: 'Usuários',
                                description: 'Criar um novo usuários'
                            }
                        }
                        arrowBack={true}
                    >
                        <Usuario {...props}/>
                    </MainComponent>
                )
            }/>


            <Route path="/evento" exact render={
                () => (
                    <MainComponent
                        {...props}
                        header={
                            {
                                title: 'Eventos',
                                description: 'Gerencie eventos'
                            }
                        }
                        buttonsHeader={[
                            {
                                text: 'Adicionar',
                                icon: faPlusCircle,
                                action: () => {
                                    props.history.push('/evento/novo');
                                }
                            }
                        ]}
                    >
                        <EventoList {...props}/>
                    </MainComponent>
                )
            }/>

            <Route path="/evento/novo" exact render={
                () => (
                    <MainComponent
                        {...props}
                        header={
                            {
                                title: 'Eventos',
                                description: 'Criação de novo evento'
                            }
                        }
                        arrowBack={true}
                    >
                        <Evento {...props}/>
                    </MainComponent>
                )
            }/>

            <Route path="/evento/:evento_id" exact render={
                ({match}) => (
                    <MainComponent
                        {...props}
                        header={
                            {
                                title: 'Eventos',
                                description: 'Edição de eventos'
                            }
                        }
                        buttonsHeader={[
                            {
                                text: 'Adicionar',
                                icon: faPlusCircle,
                                action: () => {
                                    props.history.push('/evento/novo');
                                }
                            }
                        ]}
                        arrowBack={true}
                    >
                        <Evento
                            {...props}
                            params={match.params}/>
                    </MainComponent>
                )
            }/>

        </Switch>
    )
}
