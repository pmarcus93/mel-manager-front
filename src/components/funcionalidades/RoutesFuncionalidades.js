import React from "react";
import {Route, Switch} from "react-router";
import MainComponent from "../painel/MainComponent";
import EmpresaList from "./empresa/EmpresaList";

import {faArrowAltCircleLeft, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import Empresa from "./empresa/Empresa";

export default function RoutesFuncionalidades(props) {
    return (
        <Switch>
            <Route path="/evento" exact render={
                () => (
                    <MainComponent
                        header={
                            {
                                title: 'Eventos',
                                description: 'Gerencie seus eventos.'
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
                        <EmpresaList/>
                    </MainComponent>
                )
            }/>

            <Route path="/evento/novo" exact render={
                () => (
                    <MainComponent
                        header={
                            {
                                title: 'Novo evento',
                                description: 'Crie um novo evento.'
                            }
                        }

                        buttonsHeader={[
                            {
                                text: 'Voltar',
                                icon: faArrowAltCircleLeft,
                                action: () => {
                                    props.history.push('/evento');
                                }
                            }
                        ]}

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
                    >
                        <EmpresaList/>
                    </MainComponent>
                )
            }/>

        </Switch>
    )
}
