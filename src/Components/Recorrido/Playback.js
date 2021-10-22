import React, { useState } from 'react';
import * as s from './Recorrido.styles';

import * as i from 'react-icons/all';

import { usePromiseTracker } from 'react-promise-tracker';
import { trackPromise } from 'react-promise-tracker';

import Loader from 'react-loader-spinner';

import DatePicker from 'react-date-picker';

const Playback = ({datos}) => {
    const [de, setDe] = useState(new Date());
    const [hasta, setHasta] = useState(new Date());

    const LoadingIndicator = () => {
        const {promiseInProgress} = usePromiseTracker();
        return(
            promiseInProgress &&
            <s.animacionCargar>
                <Loader type="Oval" color="#ffab05" height="50" width="50" />
            </s.animacionCargar>
        );
    }

    const Probarfecha = (e) => {
        e.preventDefault();
        console.log('Fecha de: '+de.toISOString()+' Fecha hasta: '+hasta.toISOString());
    }

    const reporte = (e) => {
        e.preventDefault();
        var requestOptions = {
            method: 'GET',
            credentials: 'include'
        };

        trackPromise(
            fetch("https://www.protrack.ad105.net/api/positions?deviceId="+datos.deviceId+"&from="+de.toISOString()+"&to="+hasta.toISOString(), requestOptions)
            .then(response => response.json())
            .then((responseData) => {
                console.log(responseData);
            }).catch(error => console.warn(error))
            );
    }

    return(
        <s.playback_header>
            <LoadingIndicator />
                        <s.el_form>

                            <s.el_form_item>
                                <s.el_form_item_label>Device</s.el_form_item_label>

                                <s.el_form_item_content>
                                    <s.w150>
                                        <s.el_select_device>

                                            <s.el_input>
                                                <s.el_input_inner type="text" autoComplete="off" placeholder="Por favor selecciona el dispositivo   " readOnly="readonly" />
                                                <s.el_input_prefix>
                                                    <s.el_input_prefix_inner>
                                                        <s.el_select_caret><i.GoTriangleUp /></s.el_select_caret>
                                                    </s.el_input_prefix_inner>
                                                </s.el_input_prefix>
                                            </s.el_input>

                                            <s.el_select_dropdown>
                                                <s.el_scrollbar>

                                                    <s.el_select_dropdown_wrap>
                                                        <s.el_scrollbar_view>
                                                            <s.el_select_dropdown_item>Hola</s.el_select_dropdown_item>
                                                            <s.el_select_dropdown_item>Hola</s.el_select_dropdown_item>
                                                            <s.el_select_dropdown_item>Hola</s.el_select_dropdown_item>
                                                            <s.el_select_dropdown_item>Hola</s.el_select_dropdown_item>
                                                            <s.el_select_dropdown_item>Hola</s.el_select_dropdown_item>
                                                            <s.el_select_dropdown_item>Hola</s.el_select_dropdown_item>
                                                            <s.el_select_dropdown_item>Hola</s.el_select_dropdown_item>
                                                            <s.el_select_dropdown_item>Hola</s.el_select_dropdown_item>
                                                            <s.el_select_dropdown_item>Hola</s.el_select_dropdown_item>
                                                            <s.el_select_dropdown_item>Hola</s.el_select_dropdown_item>
                                                            <s.el_select_dropdown_item>Hola</s.el_select_dropdown_item>
                                                            <s.el_select_dropdown_item>Hola</s.el_select_dropdown_item>
                                                            <s.el_select_dropdown_item>Hola</s.el_select_dropdown_item>
                                                        </s.el_scrollbar_view>
                                                    </s.el_select_dropdown_wrap>

                                                    <s.el_scrollbar_horizontal>
                                                        <s.el_scrollbar_thumb />
                                                    </s.el_scrollbar_horizontal>

                                                    <s.el_scrollbar_vertical>
                                                        <s.el_scrollbar_thumb_v />
                                                    </s.el_scrollbar_vertical>

                                                    <s.popper_arrow>
                                                    </s.popper_arrow>
                                                </s.el_scrollbar>
                                            </s.el_select_dropdown>

                                        </s.el_select_device>

                                        <s.form_item_detail>
                                            <i.HiOutlineDocument />
                                        </s.form_item_detail>

                                    </s.w150>
                                </s.el_form_item_content>

                            </s.el_form_item>

                            <s.el_form_item>
                                <s.el_form_item_content>
                                    <s.el_form_item_label>Time</s.el_form_item_label>
                                    <DatePicker
                                        onChange={setDe}
                                        value={de}
                                    />
                                </s.el_form_item_content>
                            </s.el_form_item>

                            <s.el_form_item>
                                <s.el_form_item_content>
                                    <s.el_form_item_label>To</s.el_form_item_label>
                                    <DatePicker
                                        onChange={setHasta}
                                        value={hasta}
                                    />
                                </s.el_form_item_content>
                            </s.el_form_item>

                            <s.el_form_item>
                                <s.el_form_item_content>
                                    <span>
                                        <s.el_popover_reference_wrapper>
                                            <s.link>
                                                <s.iconfont><i.IoOptionsOutline /> </s.iconfont>
                                                <span>Option</span>
                                            </s.link>
                                        </s.el_popover_reference_wrapper>
                                    </span>
                                </s.el_form_item_content>
                            </s.el_form_item>

                            <s.el_form_item>
                                <s.el_form_item_content>

                                    <s.el_button_warning onClick={reporte}>
                                        <i.HiOutlinePlay />
                                        <span>&nbsp;Play</span>
                                    </s.el_button_warning>

                                    <s.el_button_info>
                                        <i.AiOutlinePauseCircle />
                                        <span>&nbsp;Pause</span>
                                    </s.el_button_info>

                                    <s.el_button_default>
                                        <span>Reset</span>
                                    </s.el_button_default>
                                    <s.iconfont>&nbsp;&nbsp;&nbsp;<i.FcInfo /></s.iconfont>
                                </s.el_form_item_content>
                            </s.el_form_item>

                            <s.outline_play_btn>
                                <i.AiOutlinePauseCircle />
                                &nbsp; Play local data
                            </s.outline_play_btn>

                        </s.el_form>


                    </s.playback_header>
    )

}

export default Playback;