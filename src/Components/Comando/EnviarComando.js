import React, {useState} from 'react'
import * as s from './Comando.styles';
import { VscTriangleDown } from "react-icons/vsc";
/* COMANDS */
import Ubicacion from './Comandos/Ubicacion';
import Apagar from './Comandos/Apagar';
import Restaurar from './Comandos/Restaurar';
import Numero from './Comandos/Numero';
import Status from './Comandos/Status';
import Parametros from './Comandos/Parametros';
import Gprs from './Comandos/Gprs';
import Version from './Comandos/Version';
import Reset from './Comandos/Reset';
import Comandos from './Comandos/Comandos';

import './styles.css';

const EnviarComando = () => {
    const [valor, setValor] = useState(1);
    const mostrarContent = () =>{
        if(valor === 1){ return <Ubicacion/> }
        if(valor === 2){ return <Apagar /> }
        if(valor === 3){ return <Restaurar /> }
        if(valor === 4){ return <Numero /> }
        if(valor === 5){ return <Status /> }
        if(valor === 6){ return <Parametros /> }
        if(valor === 7){ return <Gprs /> }
        if(valor === 8){ return <Version /> }
        if(valor === 9){ return <Reset /> }
        if(valor === 10){ return <Comandos /> }
    }
    return (
        <s.Contenedor>
            <s.ContentComands>
                <s.HeadComands><VscTriangleDown/> Lista de Comandos</s.HeadComands>
                <s.ComandList>
                    <s.ComandElem onClick={() => setValor(1)} className={valor === 1 ? 'seleccionButton' : ''}>Ubicación</s.ComandElem>
                    <s.ComandElem onClick={() => setValor(2)} className={valor === 2 ? 'seleccionButton' : ''}>Apagar Motor</s.ComandElem>
                    <s.ComandElem onClick={() => setValor(3)} className={valor === 3 ? 'seleccionButton' : ''}>Restaurar Motor</s.ComandElem>
                    <s.ComandElem onClick={() => setValor(4)} className={valor === 4 ? 'seleccionButton' : ''}>Número de SOS</s.ComandElem>
                    <s.ComandElem onClick={() => setValor(5)} className={valor === 5 ? 'seleccionButton' : ''}>Check status</s.ComandElem>
                    <s.ComandElem onClick={() => setValor(6)} className={valor === 6 ? 'seleccionButton' : ''}>Parámetros</s.ComandElem>
                    <s.ComandElem onClick={() => setValor(7)} className={valor === 7 ? 'seleccionButton' : ''}>GPRS Settings</s.ComandElem>
                    <s.ComandElem onClick={() => setValor(8)} className={valor === 8 ? 'seleccionButton' : ''}>Versión</s.ComandElem>
                    <s.ComandElem onClick={() => setValor(9)} className={valor === 9 ? 'seleccionButton' : ''}>Reset</s.ComandElem>
                    <s.ComandElem onClick={() => setValor(10)} className={valor === 10 ? 'seleccionButton' : ''}>Comandos</s.ComandElem>
                </s.ComandList>
            </s.ContentComands>
            <s.ComandsBody>
                {mostrarContent()} 
            </s.ComandsBody>
        </s.Contenedor>
    )
}

export default EnviarComando
