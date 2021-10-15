import React , { useState }from 'react';

import * as sd from './agregarDispositivos.styles';
import * as s from '../ContenidoAdminDashboard/ContenidoAdminDashboard.styles';

import BarraSuperior from '../BarraSuperiorAdmin/BarraSuperior';
import ContenidoAdmin from '../ContenidoAdmin/ContenidoAdmin';

import T from './t';
import BarraLateralAdmin from '../BarraLateralAdmin/BarraLateralAdmin';




const AgregarUsuario = (props) => {

    return(
        <s.body>
            <s.app id="app">
                <s.app_main>
                    <s.sidebar_container>
                        <BarraLateralAdmin />
                    </s.sidebar_container>
                </s.app_main>
            </s.app>
            <s.main_cointainer>
                <BarraSuperior />
                <ContenidoAdmin />
                <T/>
            </s.main_cointainer>
        </s.body>          
    )
}

export default AgregarUsuario;