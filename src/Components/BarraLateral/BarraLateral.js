import React from 'react';
import * as s from './BarraLateral.styles';
import * as io from 'react-icons/io5'

const BarraLateral = () => {
    return (
        <s.BarraLateralContainer>
            <s.account>
                <s.images_box></s.images_box>
                <s.menu_account_name>Nombre</s.menu_account_name>
            </s.account>
            <s.profile_submenu_box >
                <s.submenu_box>
                <s.submenu_item><io.IoPersonOutline />  Cuenta</s.submenu_item>
                <s.submenu_item><io.IoPersonSharp />  Proveedor de Servicios</s.submenu_item>
                <s.submenu_item><io.IoLockClosedSharp />  Modificar la Contraseña</s.submenu_item>
                <s.submenu_item><io.IoPerson />  Registro de Inicio de Sesión</s.submenu_item>
                <s.submenu_item><io.IoCloudDownloadOutline /> Manual de Usuario</s.submenu_item>
                </s.submenu_box>
                <s.top_menu>
                    <s.router_link_exact_active>HOLA</s.router_link_exact_active>
                </s.top_menu>
            </s.profile_submenu_box>
        </s.BarraLateralContainer>
    );
}

export default BarraLateral;