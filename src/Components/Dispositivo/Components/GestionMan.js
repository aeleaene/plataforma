import React, { useState } from 'react'
import * as s from '../Dispositivo.styles';
import {BiBarChart} from "react-icons/bi";

import '../styles.css'

import MantenKm from './mantenimiento/MantenKm';
import HorasMotor from './mantenimiento/HorasMotor';

const GestionMan = () => {
    const [stateCom, setStateCom] = useState(1)
    const contenido = () =>{
        if (stateCom === 1) {return <MantenKm />}
        if (stateCom === 2) {return <HorasMotor />}
    }
    return (
        <s.caja_dispositivo_panelGral style={{left:'0px', top:'0px', marginTop:'10px', marginLeft:'10px'}}>
                
            <s.caja_dispositivo_titulo >
            
                <s.barra_arrastable />
                <s.barra_superior_tituloGral>
                &nbsp;
                    &nbsp;<BiBarChart />&nbsp;&nbsp;Gestión de Mantenimiento
                </s.barra_superior_tituloGral>
            </s.caja_dispositivo_titulo>
            <s.contenido_panel_dispositivo>
                {/* CONTENIDO */}
                <s.MainContent>
                    <s.Nav>
                        <s.Options>
                            <s.SpanOptions onClick={() => setStateCom(1)} id="enviar" className={stateCom === 1 ? 'seleccionComand' : ''}>Mantenimiento Kilometraje</s.SpanOptions>
                            <s.SpanOptions onClick={() => setStateCom(2)} id="historial" className={stateCom === 2 ? 'seleccionComand' : ''}>Horas de Motor</s.SpanOptions>
                        </s.Options>
                    </s.Nav>
                    <s.Hr></s.Hr>
                    <s.contentGenReportes>
                        {contenido()}
                    </s.contentGenReportes>
                </s.MainContent>
            </s.contenido_panel_dispositivo>  
        </s.caja_dispositivo_panelGral>
    )
}

export default GestionMan
