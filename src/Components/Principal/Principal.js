import React, { useContext } from 'react';
import * as s from './Principal.styles';

import BarraLateral from '../BarraLateral/BarraLateral';
import ContenidoMonitor from '../ContenidoMonitor/Monitor';
import BarraInferior from '../BarraInferior/BarraInferior';
import {MenContext} from '../../Context/MenuContext';
import Reportes from '../Reportes/Reportes';
import Dispositivo from '../Dispositivo/Dispositivo';


const Principal = () => {

    const { menuOp } = useContext(MenContext);
    console.log(menuOp)
    return(
        <s.App>
            <s.content_box>
                <s.menu_izquierdo>
                    <BarraLateral/>
                </s.menu_izquierdo>

                    {
                        menuOp === 1 ? 
                            <s.contenido_derecho>
                                <ContenidoMonitor/>
                                <BarraInferior/>
                            </s.contenido_derecho>
                        : null
                    }
                    {
                        menuOp === 2 ? 
                            <s.contenido_derecho>
                                <Reportes/>
                            </s.contenido_derecho>
                        : null
                    }
                    {
                        menuOp === 3 ? 
                            <s.contenido_derecho>
                                <Dispositivo/>
                            </s.contenido_derecho>
                        : null
                    }
            </s.content_box>
        </s.App>
    )
}

export default Principal;