import React, {useState} from 'react'
import * as s from './ConfigDevice.styles';
import './scrollArrow.css';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

/* VISTAS */
import InfoDispositivo from './Opciones/InfoDispositivo';
import InfoInstalacion from './Opciones/InfoInstalacion';
import Combustible from './Opciones/Combustible';
import OtraInformacion from './Opciones/OtraInformacion';
import ConfigAlarma from './Opciones/ConfigAlarma';


const ConfigDevice = ({datos, datos2}) => {

    const scroll = (scrollOffset) => {
        var elem = document.getElementById('scrollItems')
        elem.scrollLeft = scrollOffset;
      };
    const [valor, setValor] = useState(1);
    const mostrarContent = () =>{
        if(valor === 1){ return <InfoDispositivo dataDis={datos} dataPos={datos2}/> }
        if(valor === 2){ return <InfoInstalacion /> }
        if(valor === 3){ return <Combustible /> }
        if(valor === 4){ return <OtraInformacion /> }
        if(valor === 5){ return <ConfigAlarma /> }
    }

    return (
        <s.MainContent>
            <s.Nav>
                <AiOutlineLeft  className="scrollArrowLeft" onClick={() => scroll(-20)}/>
                <s.Options id="scrollItems">
                    <s.SpanOptions onClick={() => setValor(1)} className={valor === 1 ? 'seleccionComand' : ''}>Información del Dispoitivo</s.SpanOptions>
                    <s.SpanOptions onClick={() => setValor(2)} className={valor === 2 ? 'seleccionComand' : ''}>Información de Instalación</s.SpanOptions>
                    <s.SpanOptions onClick={() => setValor(3)} className={valor === 3 ? 'seleccionComand' : ''}>Combustible</s.SpanOptions>
                    <s.SpanOptions onClick={() => setValor(4)} className={valor === 4 ? 'seleccionComand' : ''}>Otra Información</s.SpanOptions>
                    <s.SpanOptions onClick={() => setValor(5)} className={valor === 5 ? 'seleccionComand' : ''}>Configuración de Alarma</s.SpanOptions>
                </s.Options>
                <AiOutlineRight  className="scrollArrowRight" onClick={() => scroll(1000)}/>
            </s.Nav>
            <s.Hr></s.Hr>
            <s.Contenedor>
                {mostrarContent()}
            </s.Contenedor>
        </s.MainContent>
    )
}

export default ConfigDevice
