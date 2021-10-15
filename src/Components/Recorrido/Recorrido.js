import React, { useState } from 'react';
import * as s from './Recorrido.styles';



import BarraInferior from './BarraInferior/BarraInferior';

import Mapa from './Mapa';
import Playback from './Playback';


import * as i from 'react-icons/all'
import { useLocation } from 'react-router';
const Recorrido = ({datos}) => {

    const [value, onChange] = useState(new Date());
    const location = useLocation();
    const dispositivo = location.state;


    return (
        <s.Body>
            <s.app>

                <s.playback_box>
                    <Playback datos={dispositivo}/>
                    <Mapa datos={dispositivo}/>
                    <s.left_map_control>

                        <s.l_m_c_item>
                            <s.iconfont_speed><i.IoIosSpeedometer /></s.iconfont_speed>
                        </s.l_m_c_item>
                        <s.l_m_c_item>
                            <s.iconfont_speed><i.IoDocumentTextSharp /></s.iconfont_speed>
                        </s.l_m_c_item>
                        <s.l_m_c_item>
                            <s.iconfont_speed><i.GiGps /></s.iconfont_speed></s.l_m_c_item>
                    </s.left_map_control>


                    <s.right_map_control>
                        <s.alert_icon />
                        <s.starting_icon />
                        <s.stop_icon />
                        <s.info_icon />
                    </s.right_map_control>


                    <s.play_progress_box>
                        <s.play_progress_content>
                            <s.play_progress_stop />
                        </s.play_progress_content>
                    </s.play_progress_box>
                    <BarraInferior />

                </s.playback_box>
            </s.app>

        </s.Body>

    )

}

export default Recorrido;