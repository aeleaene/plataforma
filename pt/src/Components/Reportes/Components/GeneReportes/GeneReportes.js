import React, { useContext } from 'react'
import * as s from '../../Reportes.styles';

import {BiBarChart} from "react-icons/bi";

import Tarea from './Tarea';
import Buscar from './Buscar';

/* Context */
import {MenContext} from '../../../../Context/MenuContext';

const GeneReportes = () => {

    const { submenuOp, setSubmenuOp } = useContext(MenContext);
    const contenido = () =>{
        if (submenuOp === 22) {return <Tarea />}
        if (submenuOp === 23) {return <Buscar />}
    }
    return (
        <s.caja_dispositivo_panelGral style={{left:'0px', top:'0px', marginTop:'10px', marginLeft:'10px'}}>
                
            <s.caja_dispositivo_titulo >
            
                <s.barra_arrastable />
                <s.barra_superior_tituloGral>
                &nbsp;
                    &nbsp;<BiBarChart />&nbsp;&nbsp;Generar Reporte
                </s.barra_superior_tituloGral>
            </s.caja_dispositivo_titulo>
            <s.contenido_panel_dispositivo>
                {/* CONTENIDO */}
                <s.MainContent>
                    <s.Nav>
                        <s.Options>
                            <s.SpanOptions onClick={() => setSubmenuOp(22)} id="enviar" className={submenuOp === 22 ? 'seleccionComand' : ''}>Generar Reporte</s.SpanOptions>
                            <s.SpanOptions onClick={() => setSubmenuOp(23)} id="historial" className={submenuOp === 23 ? 'seleccionComand' : ''}>Buscar Reporte</s.SpanOptions>
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

export default GeneReportes