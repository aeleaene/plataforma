import React from 'react';

import * as s from './BarraInferior.styles';

const BarraInferior = () => {
    return (
    <s.BarraInferiorContainer>

        <s.item_icon_distancia></s.item_icon_distancia>
        <s.item_icon_area></s.item_icon_area>
        <s.item_icon_trafico></s.item_icon_trafico>
        <s.item_icon_mapa></s.item_icon_mapa>
        <s.zoom_box>
            <s.zoom_out></s.zoom_out>
            <s.zoom_slider>
                <s.slider></s.slider>
            </s.zoom_slider>
            <s.zoom_in></s.zoom_in>
        </s.zoom_box>

        <s.map_address>
            <s.input_inner placeholder={'Búsqueda de dirección'}></s.input_inner>
            <s.item_icon_busqueda></s.item_icon_busqueda>
        </s.map_address>

        <s.caja_derecha>
            <s.item_icon_POI></s.item_icon_POI>
            <s.item_icon_ruta></s.item_icon_ruta>
            <s.item_icon_geo></s.item_icon_geo>
            <s.item_icon_alerta></s.item_icon_alerta>
            <s.item_icon_descargar></s.item_icon_descargar>
            
        </s.caja_derecha>

    </s.BarraInferiorContainer>
    );
}

export default BarraInferior;