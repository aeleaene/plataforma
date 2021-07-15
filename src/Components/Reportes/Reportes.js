import React, { useContext, useState } from 'react'
import * as s from './Reportes.styles';
import * as sapp from '../../App.styles'
import {BiBarChart} from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import './styles.css';

/* Estadisticas de Operación */
import InfoGral from './Components/EstadisticasOp/InfoGral';
import InfoKilo from './Components/EstadisticasOp/InfoKilo';
import DetallesVel from './Components/EstadisticasOp/DetallesVel';
import DetallesEstadia from './Components/EstadisticasOp/DetallesEstadia';
/* Reportes de Viaje */
import ReportesViaje from './Components/ReportesViaje/ReportesViaje';
import InformeViaje from './Components/ReportesViaje/InformeViaje';
/* Comportamiento */
import VisionGral from './Components/Comportamiento/VisionGral';
import InformeComp from './Components/Comportamiento/InformeComp';
import DetallesComp from './Components/Comportamiento/DetallesComp';
/* ACC */
import VisionAcc from './Components/ACC/VisionAcc';
import ReporteAcc from './Components/ACC/ReporteAcc';
import InformeRM from './Components/ACC/InformeRM';
/* Reporte de Información del Vehículo */
import InfoCombustible from './Components/InfoVehiculo/InfoCombustible';
import InfoPresNeu from './Components/InfoVehiculo/InfoPresNeu';
import TemperatureReport from './Components/InfoVehiculo/TemperatureReport';
/* Informe OBD */
import DetailsCombViaje from './Components/OBD/DetailsCombViaje';
import ResCombViaje from './Components/OBD/ResCombViaje';
import InfoDTC from './Components/OBD/InfoDTC';
/* Estadística de Alarma */
import GralAlarma from './Components/StatusAlarm/GralAlarma';
import StatusAlarma from './Components/StatusAlarm/StatusAlarma';
import DetailsAlarma from './Components/StatusAlarm/DetailsAlarma';

/* Generar Reportes */
import GeneReportes from './Components/GeneReportes/GeneReportes';

/* CONTEXT */
import {MenContext} from '../../Context/MenuContext';

const Reportes = () => {
    const { submenuOp, setSubmenuOp } = useContext(MenContext);
    const [vista, setVista] = useState(1);
    const contenido = () =>{
        if (submenuOp === 1) {return <InfoGral />}
        if (submenuOp === 2) {return <InfoKilo />}
        if (submenuOp === 3) {return <DetallesVel />}
        if (submenuOp === 4) {return <DetallesEstadia />}
        if (submenuOp === 5) {return <ReportesViaje />}
        if (submenuOp === 6) {return <InformeViaje />}
        if (submenuOp === 7) {return <VisionGral />}
        if (submenuOp === 8) {return <InformeComp />}
        if (submenuOp === 9) {return <DetallesComp />}
        if (submenuOp === 10) {return <VisionAcc />}
        if (submenuOp === 11) {return <ReporteAcc />}
        if (submenuOp === 12) {return <InformeRM />}
        if (submenuOp === 13) {return <InfoCombustible />}
        if (submenuOp === 14) {return <InfoPresNeu />}
        if (submenuOp === 15) {return <TemperatureReport />}
        if (submenuOp === 16) {return <ResCombViaje />}
        if (submenuOp === 17) {return <DetailsCombViaje />}
        if (submenuOp === 18) {return <InfoDTC />}
        if (submenuOp === 19) {return <GralAlarma />}
        if (submenuOp === 20) {return <StatusAlarma />}
        if (submenuOp === 21) {return <DetailsAlarma />}
        if (submenuOp === 22) {return <GeneReportes />}
        if (submenuOp === 23) {return <GeneReportes />}
    }
    return (
        <s.App>
            <sapp.content_box>
        <s.contenido_monitor>
            <s.caja_dispositivo_panel style={{left:'0px', top:'0px', marginTop:'10px', marginLeft:'10px'}}>
                
                <s.caja_dispositivo_titulo >
                
                    <s.barra_arrastable />
                    <s.barra_superior_titulo>
                    &nbsp;
                        &nbsp;<BiBarChart />&nbsp;&nbsp;Informes Generales
                    </s.barra_superior_titulo>
                </s.caja_dispositivo_titulo>

                <s.contenido_panel_dispositivo>
                    <Accordion>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton><AiFillCaretDown/> Estadísticas de Operación</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <s.submenu2opciones style={{ listStyle:'none' }}>
                                    <s.submenu2opcionesli onClick={() => setSubmenuOp(1)}>Información General de Moviemiento</s.submenu2opcionesli>
                                    <s.submenu2opcionesli onClick={() => setSubmenuOp(2)}>Informe sobre Kilometraje</s.submenu2opcionesli>
                                    <s.submenu2opcionesli onClick={() => setSubmenuOp(3)}>Detalles de exceso de velocidad</s.submenu2opcionesli>
                                    <s.submenu2opcionesli onClick={() => setSubmenuOp(4)}>Detalles de Estadia</s.submenu2opcionesli>
                                </s.submenu2opciones>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton><AiFillCaretDown/> Reporte de Viaje</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <s.submenu2opciones style={{ listStyle:'none' }}>
                                    <s.submenu2opcionesli onClick={() => setSubmenuOp(5)}>Reporte de Viaje</s.submenu2opcionesli>
                                    <s.submenu2opcionesli onClick={() => setSubmenuOp(6)}>Informe de viaje en exceso de velocidad</s.submenu2opcionesli>
                                </s.submenu2opciones>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton><AiFillCaretDown/> Informe de Comportamiento de conducción</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <s.submenu2opciones style={{ listStyle:'none' }}>
                                    <s.submenu2opcionesli onClick={() => setSubmenuOp(7)}>Visión general del comportamiento de conducción</s.submenu2opcionesli>
                                    <s.submenu2opcionesli onClick={() => setSubmenuOp(8)}>Informe de comportamiento de conducción</s.submenu2opcionesli>
                                    <s.submenu2opcionesli onClick={() => setSubmenuOp(9)}>Detalles del comportamiento de conducción</s.submenu2opcionesli>
                                </s.submenu2opciones>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton> <AiFillCaretDown/>Reporte de ACC (Encendido)</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <s.submenu2opciones style={{ listStyle:'none' }}>
                                    <s.submenu2opcionesli onClick={() => setSubmenuOp(10)}>Visión general del ACC</s.submenu2opcionesli>
                                    <s.submenu2opcionesli onClick={() => setSubmenuOp(11)}>Reporte de ACC (Encendido)</s.submenu2opcionesli>
                                    <s.submenu2opcionesli onClick={() => setSubmenuOp(12)}>Informe de Ralenté Mínimo</s.submenu2opcionesli>
                                </s.submenu2opciones>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton><AiFillCaretDown/> Reporte de Información del Vehículo</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <s.submenu2opciones style={{ listStyle:'none' }}>
                                    <s.submenu2opcionesli onClick={() => setSubmenuOp(13)}>Informe de Combustible</s.submenu2opcionesli>
                                    <s.submenu2opcionesli onClick={() => setSubmenuOp(14)}>Informe de presión de neúmaticos</s.submenu2opcionesli>
                                    <s.submenu2opcionesli onClick={() => setSubmenuOp(15)}>Temperature Report</s.submenu2opcionesli>
                                </s.submenu2opciones>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton><AiFillCaretDown/> Informe OBD</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <s.submenu2opciones style={{ listStyle:'none' }}>
                                    <s.submenu2opcionesli onClick={() => setSubmenuOp(16)}>Resumen de consumo de combustible de viaje</s.submenu2opcionesli>
                                    <s.submenu2opcionesli onClick={() => setSubmenuOp(17)}>Detalles de consumo de combustible de viaje</s.submenu2opcionesli>
                                    <s.submenu2opcionesli onClick={() => setSubmenuOp(18)}>Informe DTC</s.submenu2opcionesli>
                                </s.submenu2opciones>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton><AiFillCaretDown/> Estadística de Alarma</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <s.submenu2opciones style={{ listStyle:'none' }}>
                                    <s.submenu2opcionesli onClick={() => setSubmenuOp(19)}>Descripción General de Alarma</s.submenu2opcionesli>
                                    <s.submenu2opcionesli onClick={() => setSubmenuOp(20)}>Estadística de Alarma</s.submenu2opcionesli>
                                    <s.submenu2opcionesli onClick={() => setSubmenuOp(21)}>Detalle de Alarma</s.submenu2opcionesli>
                                </s.submenu2opciones>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </s.contenido_panel_dispositivo>  
            </s.caja_dispositivo_panel>
            {/* TODO: AQUI VA EL CONTENIDO DE LA SECCION */}
            <s.contentReportes>
                {contenido()}
            </s.contentReportes>    
        </s.contenido_monitor>
        </sapp.content_box>
        </s.App>
    )
}

export default Reportes
