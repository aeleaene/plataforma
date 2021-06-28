import React from 'react';

import * as  s from './cardsDash.styles';
import * as ri from 'react-icons/all';

const TarjetaDashboard = (props) => {
    return(
        <s.dashboard_card_clearfix>
            <s.f1_thw>

                <s.second_item_mt100_hw70>
                    <s.home_work>
                        <s.el_tabs_el_tabs_top>
                            <s.el_tabs_header>
                                <s.el_tabs_nav_wrap>
                                    
                                    <s.el_tabs_nav_prev>
                                        <s.el_icon_arrow_left><ri.AiOutlineLeft /></s.el_icon_arrow_left>
                                    </s.el_tabs_nav_prev>
                                
                                    <s.el_tabs_nav_next>
                                        <s.el_icon_arrow_right><ri.AiOutlineRight /></s.el_icon_arrow_right>
                                    </s.el_tabs_nav_next>

                                    <s.el_tabs_nav_scroll>
                                        <s.el_tabs_nav>
                                            <s.el_tabs_active/>
                                            <s.tab_sale>Venta Rápida</s.tab_sale>
                                            <s.tab_batchsale>Venta de lotes</s.tab_batchsale>
                                            <s.tab_batchmove>Movimiento por lotes</s.tab_batchmove>
                                            <s.tab_batchrecharge>Recarga por lotes</s.tab_batchrecharge>
                                            <s.tab_batchtime>Tiempo de distribuidor por lotes</s.tab_batchtime>
                                        </s.el_tabs_nav>
                                    </s.el_tabs_nav_scroll>

                                </s.el_tabs_nav_wrap>
                            </s.el_tabs_header>

                            <s.el_tabs_content>
                                <s.el_tab_pane>

                                    <s.el_form>
                                        <s.el_row>
                                            <s.el_col>
                                                <s.el_form_item>
                                                    <s.el_form_item_label>Meta cliente</s.el_form_item_label>
                                                </s.el_form_item>
                                            </s.el_col>
                                        </s.el_row>
                                    </s.el_form>

                                </s.el_tab_pane>
                            </s.el_tabs_content>

                        </s.el_tabs_el_tabs_top>
                    </s.home_work>
                </s.second_item_mt100_hw70>


            </s.f1_thw>
        </s.dashboard_card_clearfix>
    )
}

export default TarjetaDashboard;