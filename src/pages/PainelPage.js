import React, {useState, useEffect} from 'react';
import NavBar from "../components/painel/NavBar";
import Menu from "../components/painel/Menu";

import {ItensMenu, ItensMenuSuspenso} from "../configs/Menus";

import './PainelPage.scss';
import RoutesFuncionalidades from "../components/funcionalidades/RoutesFuncionalidades";
import MenuMobile from "../components/painel/MenuMobile";

export default function PainelPage({history}) {

    const [hideMenu, setHideMenu] = useState(true);
    const [arrowBack, setArrowBack] = useState(false);
    const [optionUser, setOptionUser] = useState(false);
    const [loggedUser, setLoggedUser] = useState({});

    useEffect(()=> {
        setLoggedUser({
            user_id: 1
        })
    }, []);

    function hideSideBar() {
        setHideMenu(!hideMenu);
    }

    function closeAllPopUp() {
        optionUser && setOptionUser(!optionUser);
    }

    return (
        <div className="wrapper p-0 " onClick={closeAllPopUp}>

            <Menu controlMenu={hideMenu}
                  itensMenu={ItensMenu(history)}/>

            <MenuMobile controlMenu={hideMenu}
                        itensMenu={ItensMenu(history)}
                        setControlMenu={() => {
                            setHideMenu(!hideMenu)
                        }}/>

            <div className="main">
                <NavBar clickHamburguer={() => hideSideBar()}
                        clickCog={() => setOptionUser(!optionUser)}
                        controlBoxCog={optionUser}
                        cogMenu={ItensMenuSuspenso(history)}
                        arrowBack={arrowBack}
                        history={history}
                />

                <div className="content">
                    <RoutesFuncionalidades history={history} setArrowBack={setArrowBack} loggedUser={loggedUser}/>
                </div>
            </div>
        </div>
    )
}