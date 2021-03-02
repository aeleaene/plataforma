import React from 'react';
import * as s from './MainView.styles';

//Componentes
import Mapa from '../Mapa/Mapa'

const MainView = () => {
    return (
        <s.MainViewContainer>
        <Mapa />
        </s.MainViewContainer>
    );
}

export default MainView;