import React from 'react';

import * as s from './BarraLateralAdmin.styles';

import * as ri from 'react-icons/all';

const BarraLateralAdmin = (props) => {
    return(
        <s.app_main>
                    <s.sidebar_container>
                    <s.header_logo>
                        <s.logo />
                        <s.collapse_btn />
                        <s.user_portrait />
                        <s.user_name>Usuario</s.user_name>

                        <s.user_option>
                        <s.el_row_is_justify_center>

                            <s.user_option_item_password>
                                <s.user_option_item_password_wrapper><s.icono_password /> Contraseña </s.user_option_item_password_wrapper>
                            </s.user_option_item_password>

                            <s.user_option_item_profile>
                                <s.user_option_item_profile_wrapper><s.icono_profile /> Mi Perfil</s.user_option_item_profile_wrapper>
                            </s.user_option_item_profile>

                            <s.user_option_item_logout>
                                <s.user_option_item_logout_wrapper><s.icono_logout /> Salir</s.user_option_item_logout_wrapper>
                            </s.user_option_item_logout>

                        </s.el_row_is_justify_center>
                        </s.user_option>
                    </s.header_logo>

                    <s.el_scrollbar>
                        <s.scrollbar_wrapper>
                            <s.scrollbar_view>

                                <s.menu_box>
                                    <s.el_menu_item><s.icono_dashboard /><span>&nbsp;Visión general</span></s.el_menu_item>
                                    <s.el_menu_item_uf><s.icono_bussines /><span>&nbsp;Negocios</span></s.el_menu_item_uf>
                                    <s.el_menu_item_uf_border><s.icono_add /><span>&nbsp;Añadir al cliente</span></s.el_menu_item_uf_border>
                                    <s.el_menu_item_uf><s.icono_add_obj/><span>&nbsp;Añadir Objetivos</span></s.el_menu_item_uf>
                                    <s.menu_border/>
                                    <s.el_menu_item_uf><s.icono_card /><span>&nbsp;Tarjeta</span> <s.icono_chevron> <ri.MdKeyboardArrowRight /> </s.icono_chevron></s.el_menu_item_uf>
                                    <s.menu_border/>
                                    <s.el_menu_item_uf><s.icono_imei /><span>&nbsp;Cambiar Imei</span></s.el_menu_item_uf>
                                    <s.el_menu_item_uf><s.icono_func /><span>&nbsp;Funciones</span> <s.icono_chevron> <ri.MdKeyboardArrowRight /> </s.icono_chevron></s.el_menu_item_uf>
                                </s.menu_box>

                            </s.scrollbar_view>
                        </s.scrollbar_wrapper>
                    </s.el_scrollbar>

                    </s.sidebar_container>


                </s.app_main>
    )
}

export default BarraLateralAdmin;