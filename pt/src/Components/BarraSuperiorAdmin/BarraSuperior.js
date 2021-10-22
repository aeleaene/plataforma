import React from 'react';

import * as s from './BarraSuperior.styles';
import * as ri from 'react-icons/all';

const BarraSuperior = (props) => {
    return(
        <s.header_top>
            <s.header_box>
                <s.header_content>

                    <s.btn_monitor>
                        <s.base_icon/> Monitor
                    </s.btn_monitor>

                    <s.search_box>
                        <s.header_search_box>
                        <s.input_inner placeholder={"IMEI/Cuenta/Cliente"}/>

                        <s.input_prefix >
                            <s.icon_search_box></s.icon_search_box>
                        </s.input_prefix>

                        </s.header_search_box>

                        <s.btn_search_device>
                            <span><s.base_icon_device />Dispositivo</span>
                        </s.btn_search_device>

                        <s.btn_search_user>
                        <span><s.base_icon_user />Cliente</span>
                        </s.btn_search_user>
                    </s.search_box>

                    <s.header_option>
                        <a><s.go_back_icon/></a>
                        <s.badge_item><s.message_icon/> </s.badge_item>
                        <s.set_icon></s.set_icon>
                    </s.header_option>

                    <span></span>
                    <span></span>

                </s.header_content>
            </s.header_box>
        </s.header_top>
    )
}

export default BarraSuperior;