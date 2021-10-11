import React from 'react';

import * as s from './ContenidoAdmin.styles'

const ContenidoDispositivo = (props) => {
    return(
        <s.page_tabs_box>
            <s.el_col_24>
                <s.el_tabs_card>
                    <s.el_tabs_header>
                        <s.el_tabs_nav_wrap>
                            <s.el_tabs_nav_scroll>
                                <s.el_tabs_nav>
                                    <s.el_tabs_item><s.icon_vision /> Añadir objetivos</s.el_tabs_item>
                                </s.el_tabs_nav>
                            </s.el_tabs_nav_scroll>
                        </s.el_tabs_nav_wrap>
                    </s.el_tabs_header>
                </s.el_tabs_card>
            </s.el_col_24>
        </s.page_tabs_box>
    )
}

export default ContenidoDispositivo;