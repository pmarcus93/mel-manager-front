import React, {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './App.scss';

import LoginPage from "./pages/LoginPage";
import PainelPage from "./pages/PainelPage";
import SelectPerfil from "./pages/SelectPerfil";


function App() {

    //Constantes de inicialização
    const [evento_id, setEvento_id] = useState('');
    const [edicao_id, setEdicao_id] = useState('');
    const [token, setToken] = useState('');


    useEffect(() => {

        //Buscar informações do local storage
        setEvento_id(localStorage.getItem('evento_id'));
        setEdicao_id(localStorage.getItem('edicao_id'));
        setToken(localStorage.getItem('token'));

    }, []);


    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact component={LoginPage}/>
                <Route path="/selecionarperfil" exact
                       render={({history}) => (
                           <SelectPerfil
                               setEvento_id={setEvento_id}
                               setEdicao_id={setEdicao_id}
                               history={history}
                           />
                       )}/>
                <Route path="/" component={PainelPage}/>
            </Switch>

        </BrowserRouter>
    );
}

export default App;
