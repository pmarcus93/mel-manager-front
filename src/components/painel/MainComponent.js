import React from 'react';
import HeaderComponent from "./HeaderComponent";
import './MainComponent.scss';

export default function MainComponent(props) {

    props.setArrowBack(props.arrowBack);

    return (
        <div className='main-component'>

            <HeaderComponent header={props.header} buttons={props.buttonsHeader} />

            <div className="component-render container-fluid">
                {props.children}
            </div>
        </div>
    )

}