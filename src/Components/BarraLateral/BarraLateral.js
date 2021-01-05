import React from 'react';

import * as s from './BarraLateral.styles';

import perfil from '../../assets/images/perfil.jpg';

const BarraLateral = () => {
    return (
            <s.menu_caja>

            <s.cuenta>
                <s.caja_imagen style={{backgroundImage: `url(${perfil})`}}/>
                <s.nombre_cuenta>demo</s.nombre_cuenta>
            </s.cuenta>

            <s.submenu_perfil style={{display: 'none'}}>
                <s.submenu_elemento>Cuenta</s.submenu_elemento>
                <s.submenu_elemento>Cuenta</s.submenu_elemento>
                <s.submenu_elemento>Cuenta</s.submenu_elemento>
                <s.submenu_elemento>Cuenta</s.submenu_elemento>
                <s.submenu_elemento>Cuenta</s.submenu_elemento>
            </s.submenu_perfil>

            <s.menu_superior>
                <s.redireccionador_activo>
                    <s.elemento_menu_activo>
                        <s.icono_monitor/>
                        <s.texto_elemento_menu>Monitor</s.texto_elemento_menu>
                    </s.elemento_menu_activo>
                </s.redireccionador_activo>

                <s.redireccionador_inactivo>
                    <s.elemento_menu_inactivo>
                        <s.icono_reportes/>
                        <s.texto_elemento_menu>Reportes</s.texto_elemento_menu>
                    </s.elemento_menu_inactivo>
                </s.redireccionador_inactivo>

                <s.redireccionador_inactivo>
                    <s.elemento_menu_inactivo>
                        <s.icono_dispositivos/>
                        <s.texto_elemento_menu>Dispositivos</s.texto_elemento_menu>
                    </s.elemento_menu_inactivo>
                </s.redireccionador_inactivo>
            </s.menu_superior>

            <s.menu_inferior>
               
                <s.anterior>
                    <s.elemento_menu_inactivo>
                        <s.icono_anterior/>
                    </s.elemento_menu_inactivo>
                </s.anterior>
                

                <s.opciones>
                    <s.elemento_menu_inactivo>
                        <s.icono_opciones/>
                    </s.elemento_menu_inactivo>
                </s.opciones>

                <s.mensajes>
                    <s.elemento_menu_inactivo>
                        <s.icono_mensajes/>
                    </s.elemento_menu_inactivo>
                </s.mensajes>

                <s.salir>
                    <s.elemento_menu_inactivo>
                        <s.icono_salir />
                    </s.elemento_menu_inactivo>
                </s.salir>
            </s.menu_inferior>

            </s.menu_caja>
    );
}

export default BarraLateral;