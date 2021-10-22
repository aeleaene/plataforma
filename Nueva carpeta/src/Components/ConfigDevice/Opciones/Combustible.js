import React, {useState} from 'react'
import * as s from './Opciones.styles';

import Consumo from './Combustible/Consumo';
import Sensor from './Combustible/Sensor';
import Deposito from './Combustible/Deposito';

import '../scrollArrow.css'

const Combustible = () => {

    const [valor, setValor] = useState(1)


    const Content = () =>{
        if (valor === 1) { return <Consumo /> }
        if (valor === 2) { return <Sensor /> }
        if (valor === 3) { return <Deposito /> }
    }

    return (
        <s.ContentCombustible>
            <s.MainCombustible>
                <s.NavCombustible>
                    <s.MenuCombustible>
                        <s.MenuCombustibleItem onClick={ () => setValor(1)} className={valor === 1 ? 'seleccionComb1' : ''}>Consumo de Combustible</s.MenuCombustibleItem>
                        <s.MenuCombustibleItem onClick={ () => setValor(2)} className={valor === 2 ? 'seleccionComb2' : ''}>Sensor de Combustible</s.MenuCombustibleItem>
                        <s.MenuCombustibleItem onClick={ () => setValor(3)} className={valor === 3 ? 'seleccionComb3' : ''}>Depósito de Combustible</s.MenuCombustibleItem>
                    </s.MenuCombustible>
                </s.NavCombustible>
                <s.MenuCombustibleContent>{Content()}</s.MenuCombustibleContent>
            </s.MainCombustible>
        </s.ContentCombustible>
    )
}

export default Combustible
