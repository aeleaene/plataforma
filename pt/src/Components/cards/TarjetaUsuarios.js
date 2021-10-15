import React from 'react';

import * as s from './cards.styles';
import * as ri from 'react-icons/all';

const TarjetaUsuarios = (props) => {
    return(
        <s.dashboard_user_clearfix>
            <s.item>
                <s.item_content>
                    <s.item_title>Usuario</s.item_title>

                    <s.item_user_info>
                    <s.user_num>
                        <s.num_title_mr5>Clientes</s.num_title_mr5>
                        <s.link_line_hover>
                            <s.total_user>10</s.total_user>
                        </s.link_line_hover>
                    </s.user_num>

                    <s.option_box_clearfix>
                    <s.option_item_f1>
                        <s.option_icon_base_icon_add_user_white_icon />
                        <s.option_desc>Nuevo</s.option_desc>
                    </s.option_item_f1>

                    <s.option_item_f2>
                        <s.option_icon_base_icon_edit_white_icon />
                        <s.option_desc_edit>Editar</s.option_desc_edit>
                    </s.option_item_f2>

                    <s.option_item_f3>
                        <s.option_icon_base_icon_password_white_icon />
                        <s.option_desc_pass>Contraseña</s.option_desc_pass>
                    </s.option_item_f3>
                    </s.option_box_clearfix>

                    <s.el_button_refresh><ri.BiRefresh/></s.el_button_refresh>

                    </s.item_user_info>

                </s.item_content>
            </s.item>

            <s.item_devices>
                <s.item_content_devices>
                    <s.item_title>Cantidad de dispositivos</s.item_title>
                    <s.item_user_info>
                        <s.user_num>
                            <s.num_title_mr5>Total</s.num_title_mr5>
                            <s.link_line_hover>
                                <s.total_user>6</s.total_user>
                            </s.link_line_hover>
                        </s.user_num>
                        
                        <s.option_box_clearfix>
                            <s.option_item_f1>
                                <s.option_num>6</s.option_num>
                                <s.option_desc>Importado</s.option_desc>
                            </s.option_item_f1>

                            <s.option_item_f1>
                                <s.option_num>6</s.option_num>
                                <s.option_desc>Activación / Sesión cerrada</s.option_desc>
                            </s.option_item_f1>

                            <s.option_item_f1>
                                <s.option_num>6</s.option_num>
                                <s.option_desc>Recargado</s.option_desc>
                            </s.option_item_f1>

                            <s.option_item_f1>
                                <s.option_num>6</s.option_num>
                                <s.option_desc>Caducidad</s.option_desc>
                            </s.option_item_f1>


                        </s.option_box_clearfix>
                    </s.item_user_info>
                </s.item_content_devices>
            </s.item_devices>

            <s.item_content_balance_pr>
                <s.item_content_balance>
                    <s.item_title>Saldo</s.item_title>
                    <s.balance_content_box>
                        <s.balance_num_item>
                            <s.link_line_hover><s.balance_num>0</s.balance_num></s.link_line_hover>
                            <s.balance_dec>Nueva tarjeta</s.balance_dec>
                        </s.balance_num_item>

                        <s.balance_num_item>
                            <s.link_line_hover><s.balance_num>0</s.balance_num></s.link_line_hover>
                            <s.balance_dec>Nueva tarjeta de por vida</s.balance_dec>
                        </s.balance_num_item>
                    
                    </s.balance_content_box>

                    <s.balance_content_box>
                        <s.balance_num_item>
                            <s.link_line_hover><s.balance_num>0</s.balance_num></s.link_line_hover>
                            <s.balance_dec>Tarjeta anual</s.balance_dec>
                        </s.balance_num_item>

                        <s.balance_num_item>
                            <s.link_line_hover><s.balance_num>0</s.balance_num></s.link_line_hover>
                            <s.balance_dec>Tarjeta de por vida</s.balance_dec>
                        </s.balance_num_item>
                    
                    </s.balance_content_box>


                </s.item_content_balance>
            </s.item_content_balance_pr>


        </s.dashboard_user_clearfix>
    )
}

export default TarjetaUsuarios;