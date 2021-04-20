import React from 'react';
import * as s from './Principal.styles';

import BarraLateral from '../BarraLateral/BarraLateral';
import ContenidoMonitor from '../ContenidoMonitor/Monitor';
import BarraInferior from '../BarraInferior/BarraInferior';

const Principal = () => {
    return(
        <s.App>
            <s.content_box>
                <s.menu_izquierdo>
                    <BarraLateral/>
                </s.menu_izquierdo>

                <s.contenido_derecho>
                    <ContenidoMonitor />
                    <BarraInferior/>
                </s.contenido_derecho>
            </s.content_box>
        </s.App>
    )
}

export default Principal;