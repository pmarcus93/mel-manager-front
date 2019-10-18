import React from "react";
import {Route, Switch} from "react-router";
import MainComponent from "../painel/MainComponent";
import EmpresaList from "./empresa/EmpresaList";

import {faArrowAltCircleLeft, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import Empresa from "./empresa/Empresa";

export default function RoutesFuncionalidades(props) {
    return (
        <Switch>
            <Route path="/empresa" exact render={
                () => (
                    <MainComponent
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
                        header={
                            {
                                title: 'Nova Empresa',
                                description: 'Crie uma novo empresa.'
                            }
                        }

                        buttonsHeader={[
                            {
                                text: 'Voltar',
                                icon: faArrowAltCircleLeft,
                                action: () => {
                                    props.history.push('/empresa');
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
                    <MainComponent header={
                        {
                            title: 'Usuários',
                            description: 'Gerencie usuários'
                        }
                    }>
                        <EmpresaList/>
                    </MainComponent>
                )
            }/>

        </Switch>
    )
}
