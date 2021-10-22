import React from 'react';

import * as s from './ContenidoAdminDashboard.styles';

import BarraLateralAdmin from '../BarraLateralAdmin/BarraLateralAdmin';
import BarraSuperior from '../BarraSuperiorAdmin/BarraSuperior';
import ContenidoAdmin from '../ContenidoAdmin/ContenidoAdmin';
import TarjetaUsuarios from '../cards/TarjetaUsuarios'
import TarjetaDashboard from '../cards/TarjetaDashboard';

const ContenidoAdminDashboard = (props) => {
    return(
        <s.body>
            <s.app id="app">
                <s.app_main>
                    <s.sidebar_container_>
                        <BarraLateralAdmin />
                    </s.sidebar_container_>

                </s.app_main>

            </s.app>

            <s.main_cointainer>
                        <BarraSuperior />
                        <ContenidoAdmin />
                        <TarjetaUsuarios />
                        <TarjetaDashboard />
            </s.main_cointainer>
        </s.body>
    )
}

export default ContenidoAdminDashboard;
