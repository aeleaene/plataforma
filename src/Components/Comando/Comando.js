import React, { useState } from 'react'
import * as s from './Comando.styles';
import { AiOutlineRight } from "react-icons/ai";


import EnviarComando from './EnviarComando';
import Historial from './Historial';

import './styles.css';

const Comando = ({datos}) => {

    const [valor, setValor] = useState(1);
    const mostrarContent = () =>{
        if(valor === 1){ 
            /* console.log(props.name) */
            return <EnviarComando datosDis={datos}/> 
        }
        if(valor === 2){ 
            return <Historial objetivo={datos}/> 
        }
    }

    return (
        <s.MainContent>
            <s.Nav>
                <s.Options>
                    <s.SpanOptions onClick={() => setValor(1)} id="enviar" className={valor === 1 ? 'seleccionComand' : ''}>Enviar Comandos</s.SpanOptions>
                    <s.SpanOptions onClick={() => setValor(2)} id="historial" className={valor === 2 ? 'seleccionComand' : ''}>Historial de Comandos</s.SpanOptions>
                </s.Options>
                <s.Horario>Horario para Comando <AiOutlineRight /></s.Horario>
            </s.Nav>
            <s.Hr></s.Hr>
            {mostrarContent()}
        </s.MainContent>
    )
}

export default Comando
