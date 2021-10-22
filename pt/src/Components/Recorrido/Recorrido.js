import React, { useState } from 'react';
import * as s from './Recorrido.styles';


import * as i from 'react-icons/all';

import DatePicker from 'react-date-picker'

import BarraInferior from './BarraInferior/BarraInferior';

const Recorrido = () => {

    const [value, onChange] = useState(new Date());

    return (
        <s.Body>
            <s.app>

                <s.playback_box>
                    <s.playback_header>
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
                                        onChange={onChange}
                                        value={value}
                                    />
                                </s.el_form_item_content>
                            </s.el_form_item>

                            <s.el_form_item>
                                <s.el_form_item_content>
                                    <s.el_form_item_label>To</s.el_form_item_label>
                                    <DatePicker
                                        onChange={onChange}
                                        value={value}
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

                                    <s.el_button_warning>
                                            <i.HiOutlinePlay/> 
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
                </s.playback_box>

            <s.left_map_control>
                <s.l_m_c_item>
                    <s.iconfont_speed><i.IoIosSpeedometer /></s.iconfont_speed>
                </s.l_m_c_item>
                <s.l_m_c_item>
                    <s.iconfont_speed><i.IoDocumentTextSharp/></s.iconfont_speed>
                </s.l_m_c_item>
                <s.l_m_c_item>
                    <s.iconfont_speed><i.GiGps/></s.iconfont_speed></s.l_m_c_item>
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

            </s.app>

        </s.Body>

    )

}

export default Recorrido;