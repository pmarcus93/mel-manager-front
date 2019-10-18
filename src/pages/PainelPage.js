import React, {useState} from 'react';
import NavBar from "../components/painel/NavBar";
import Menu from "../components/painel/Menu";

import {ItensMenu, ItensMenuSuspenso} from "../configs/Menus";

import './PainelPage.scss';
import RoutesFuncionalidades from "../components/funcionalidades/RoutesFuncionalidades";
import MenuMobile from "../components/painel/MenuMobile";

export default function PainelPage({history}) {

    const [hideMenu, setHideMenu] = useState(true);
    const [optionUser, setOptionUser] = useState(false);

    function hideSideBar() {
        setHideMenu(!hideMenu);
        setDrawCanva(0);
        setTimeout(() => {
            setDrawCanva(100);
        }, 350);

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
                        cogMenu={ItensMenuSuspenso(history)}/>

                <div className="contend">
                    <RoutesFuncionalidades history={history}/>
                </div>
            </div>
        </div>
    )
}