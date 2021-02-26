import React from 'react';

import * as s from './ContenidoAdminDashboard.styles';

import BarraLateralAdmin from '../BarraLateralAdmin/BarraLateralAdmin'

const ContenidoAdminDashboard = (props) => {
    return(
        <s.body>
            <s.tip_box>Versión Anterior</s.tip_box>
            <s.app id="app">
                <BarraLateralAdmin />
            </s.app>
        </s.body>
    )
}

export default ContenidoAdminDashboard;
