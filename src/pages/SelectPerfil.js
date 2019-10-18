import React, {useState, useEffect} from 'react';
import './SelectPerfil.scss';
import Logo from '../assets/img/logo.png';
import Events from "../components/selectperfil/Events";


export default function SelectPerfil({history}) {

    const [eventos, setEventos] = useState([]);

    useEffect(() => {

        function buscaEventos() {
            var eventos = [
                {
                    id: 1,
                    name: 'EGPM',
                    versoes: [
                        {
                            id: 1,
                            nome: '2020'
                        },
                        {
                            id: 2,
                            nome: '2021'
                        }
                    ]
                },

                {
                    id: 2,
                    name: 'FINECON',
                    versoes: [
                        {
                            id: 1,
                            nome: '2019'
                        },
                        {
                            id: 2,
                            nome: '2020'
                        },
                        {
                            id: 3,
                            nome: 'Teste'
                        }
                    ]
                }

            ];

            setEventos(eventos);
        }

        buscaEventos();
    }, []);

    function handleHeaderClick(id) {

        setEventos(eventos.map(evento => {

            if (+evento.id === +id) {
                evento.show = !evento.show;
            }

            return evento;

        }, id))

    }

    function handleBodyClick() {
        //Setar Local Storage
        history.push('/');
    }

    return (
        <div className='select-perfil-page'>

            <div className='events animate-to-down'>

                <div className='logo-events'>
                    <img src={Logo} alt='Logo MEL Manager'/>
                </div>

                <div>
                    {eventos.map(evento =>
                        <Events
                            key={evento.id}
                            versoes={evento.versoes}
                            showVersoes={evento.show}
                            nome={evento.name}
                            clickHeader={() => handleHeaderClick(evento.id)}
                            clickBody={() => handleBodyClick(evento.id)}
                        />
                    )}
                </div>
            </div>
        </div>
    )


}