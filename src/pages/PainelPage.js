import React, {useState, useEffect} from 'react';
import NavBar from "../components/painel/NavBar";
import Menu from "../components/painel/Menu";

import {ItensMenu, ItensMenuSuspenso} from "../configs/Menus";

import './PainelPage.scss';
import RoutesFuncionalidades from "../components/funcionalidades/RoutesFuncionalidades";


import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {retornarEventoEdicao} from "../services/EventoEdicaoService";
import {retornarEvento} from "../services/EventoService";

export default function PainelPage(props) {

    const [hideMenu, setHideMenu] = useState(true);
    const [arrowBack, setArrowBack] = useState(false);
    const [optionUser, setOptionUser] = useState(false);
    const [loggedUser, setLoggedUser] = useState({});

    const [currentEvent, setCurrentEvent] = useState({});
    const [currentEdicao, setCurrentEdicao] = useState({});


    useEffect(() => {

        if (!localStorage.getItem('userLogged')) {
            props.history.push('/login');
        }

        setLoggedUser({
            user_id: localStorage.getItem('userLogged')
        });

    }, []);


    useEffect(() => {
        if (props.evento_id) {
            retornarEvento(props.evento_id, setCurrentEvent);
        }
    }, [props.evento_id]);


    useEffect(() => {
        if (props.edicao_id) {
            retornarEventoEdicao(props.edicao_id, setCurrentEdicao);
        }
    }, [props.edicao_id]);

    function hideSideBar() {
        setHideMenu(!hideMenu);
    }

    function closeAllPopUp() {
        optionUser && setOptionUser(!optionUser);
    }

    function clickTitle() {
        props.history.push('/evento');
    }

    return (
        <div className="wrapper p-0 " onClick={closeAllPopUp}>

            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange
                draggable
                pauseOnHover
            />

            <NavBar clickHamburguer={() => hideSideBar()}
                    clickCog={() => setOptionUser(!optionUser)}
                    controlBoxCog={optionUser}
                    cogMenu={ItensMenuSuspenso(props.history)}
                    arrowBack={arrowBack}
                    history={props.history}
                    title={currentEvent.nome}
                    subtitle={currentEdicao.nome}
                    clickTitle={clickTitle}
            />

            <Menu
                {...props}
                loggedUser={loggedUser}
                controlMenu={hideMenu}
                itensMenu={ItensMenu(props.history)}/>

            <div className="main">
                <div className="content">
                    <RoutesFuncionalidades history={props.history} setArrowBack={setArrowBack} loggedUser={loggedUser} {...props} />
                </div>
            </div>
        </div>
    )
}