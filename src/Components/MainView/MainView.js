import React from 'react';
import * as s from './MainView.styles';

//Componentes
import Mapa from '../BarraInferior/Mapa'

const MainView = () => {
    return (
        <s.MainViewContainer>
        <Mapa />
        </s.MainViewContainer>
    );
}

export default MainView;