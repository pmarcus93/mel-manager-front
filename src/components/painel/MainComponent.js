import React from 'react';
import HeaderComponent from "./HeaderComponent";
import './MainComponent.scss';

export default function MainComponent(props) {

    return (
        <div className='main-component'>

            <HeaderComponent header={props.header} buttons={props.buttonsHeader} />

            <div className="component-render container-fluid">
                {props.children}
                {/*<div className={drawCanva ? 'grafico' : 'grafico grafico-transicao'}>*/}
                {/*    <Line redraw={true} options={optionsChart} data={dataChart} width={drawCanva} height={45}*/}
                {/*          display="flex"></Line>*/}
                {/*</div>*/}
            </div>
        </div>
    )

}