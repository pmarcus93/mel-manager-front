import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './App.scss';

import LoginPage from "./pages/LoginPage";
import PainelPage from "./pages/PainelPage";
import SelectPerfil from "./pages/SelectPerfil";


function App() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact component={LoginPage}/>
                <Route path="/selecionarperfil" exact component={SelectPerfil}/>
                <Route path="/" component={PainelPage}/>
            </Switch>

        </BrowserRouter>
    );
}

export default App;
