import {
    faArrowLeft,
    faBuilding,
    faCodeBranch,
    faEdit,
    faHome,
    faStar,
    faUserAlt
} from "@fortawesome/free-solid-svg-icons";


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
            icon: faUserAlt,
            text: 'Usuários',
            action: () => {
                history.push('/usuario');
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
            icon: faStar,
            text: 'Eventos',
            action: () => {
                history.push('/evento');
            }
        },
        {
            icon: faArrowLeft,
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
            text: 'Editar perfil'
        },
        {
            icon: faCodeBranch,
            text: 'Trocar evento',
            action: () => {
                history.push('/selecionarperfil');
            }
        },
        {
            icon: faArrowLeft,
            text: 'Sair',
            action: () => {
                history.push('/login');

            }
        }
    ];
}
