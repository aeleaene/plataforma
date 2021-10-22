import React, { useContext, useState } from 'react'
import * as s from './Dispositivo.styles';
import * as sapp from '../../App.styles'


import './styles.css';

import ConfigDispositivos from './Components/ConfigDispositvos';
import DetallesAlarma from './Components/DetallesAlarma';
import HorarioComand from './Components/HorarioComand';
import AdminNotify from './Components/AdminNotify';
import GestionMan from './Components/GestionMan';
import GestionLinks from './Components/GestionLinks';

/* Context */
import {MenContext} from '../../Context/MenuContext';


const Dispositivo = () => {
    const { submenuOp, setSubmenuOp } = useContext(MenContext);

    const contenido = () =>{
        if (submenuOp === 24) {return <ConfigDispositivos />}
        if (submenuOp === 25) {return <DetallesAlarma />}
        if (submenuOp === 26) {return <HorarioComand />}
        if (submenuOp === 27) {return <AdminNotify />}
        if (submenuOp === 28) {return <GestionMan />}
        if (submenuOp === 29) {return <GestionLinks />}
    }
    return (
        <s.App>
            <sapp.content_box>
        <s.contenido_monitor>
            {/* TODO: AQUI VA EL CONTENIDO DE LA SECCION */}
            <s.contentReportes>
                {contenido()}
            </s.contentReportes>    
        </s.contenido_monitor>
        </sapp.content_box>
        </s.App>
    )
}

export default Dispositivo
