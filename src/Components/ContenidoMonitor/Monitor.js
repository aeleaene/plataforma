import React from 'react';

import * as s from './Monitor.styles';

import MainView from '../MainView/MainView';
import BarraInferior from '../BarraInferior/BarraInferior';
import BarraLateral from '../BarraLateral/BarraLateral';


const ContenidoMonitor = () => {
    const [contador, setContador] = React.useState(10);
    React.useEffect(()=> {
        contador > 0 && setTimeout(() => setContador(contador -1), 1000);
        if(contador===0) {
            setContador(10);
        }
    }, [contador])

    
    return(
        
            <BarraInferior></BarraInferior>


    );

}

export default ContenidoMonitor;
