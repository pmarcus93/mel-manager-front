import {
    faArrowLeft,
    faBuilding, faCalendarAlt,
    faCodeBranch, faCoins,
    faEdit,
    faHome, faMoneyBillAlt, faPlusCircle,
    faStar,
    faUserAlt, faUsers
} from "@fortawesome/free-solid-svg-icons";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons/faSignOutAlt";
import {faCogs} from "@fortawesome/free-solid-svg-icons/faCogs";


export function ItensMenu(history) {
    return [
        {
            icon: faHome,
            text: 'Dashboard',
            action: () => {
                history.push('/');
            }
        },
        {
            icon: faStar,
            text: 'Evento',
            action: () => {
                history.push('/evento');
            }
        },
        {
            icon: faCalendarAlt,
            text: 'Edições',
            action: () => {
                history.push('/edicoes');
            }
        },
        {
            icon: faUsers,
            text: 'Colaboradores',
            action: () => {
                history.push('/colaboradores');
            }
        },
        {
            icon: faBuilding,
            text: 'Empresas',
            action: () => {
                history.push('/empresa');
            }
        },
        {
            icon: faMoneyBillAlt,
            text: 'Caixa',
            action: () => {
                history.push('/caixa');
            }
        },
        // {
        //     icon: faCogs,
        //     text: 'Configurações',
        //     action: () => {
        //         history.push('/caixa');
        //     }
        // },

        {
            icon: faSignOutAlt,
            text: 'Sair',
            action: () => {
                history.push('/login');
            }
        }
    ];

}

export function ItensMenuSuspenso(history) {
    return [
        {
            icon: faEdit,
            text: 'Editar perfil',
            action: () => {
                history.push('/perfil')
            }
        },
        {
            icon: faCodeBranch,
            text: 'Trocar evento',
            action: () => {
                history.push('/selecionarperfil');
            }
        },
        {
            icon: faPlusCircle,
            text: 'Novo evento',
            action: () => {
                history.push('/evento/novo');
            }
        },
        {
            icon: faSignOutAlt,
            text: 'Sair',
            action: () => {
                history.push('/login');

            }
        }
    ];
}
