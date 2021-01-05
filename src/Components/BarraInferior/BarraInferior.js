import React from 'react';

/*
*Falta agregar caja de busqueda 
*Falta acomodar la pantalla
*Falta acomodar los botones y su funcionalidad
 */

import * as s from './BarraInferior.styles';

const BarraInferior = () => {
    return (
        <s.herramienta_mapa>
            <s.icono_distancia/>
            <s.icono_area/>
            <s.icono_trafico/>
            <s.icono_mapa/>

            <s.caja_zoom>
                <s.icono_zoom_menos/>
                <s.zoom_slider>
                    <s.slider role={"slider"} aria-valuemin={"0"} aria-valuemax={"21"} aria-orientation={"horizontal"} aria-valuetext={"13"} aria-label={"slider entre 0 y 21"}>
                        <s.slider_runway>
                            <s.slider_bar style={{width: '9.52381%', left: '0%'}}></s.slider_bar>
                            <s.slider_button_wrapper style={{left: '9.52381%'}}>
                                <s.slider_button aria-describedby={"el-tooltip-5456"} tabindex={"0"}></s.slider_button>
                            </s.slider_button_wrapper>
                        </s.slider_runway>
                    </s.slider>
                </s.zoom_slider>
                <s.icono_zoom_menos/>
            </s.caja_zoom>

            <s.caja_derecha>
                <s.icono_POI/>
                <s.icono_Ruta/>
                <s.icono_GEO/>
                <s.icono_Alertas/>
                <s.icono_Recorrido/>
            </s.caja_derecha>


        </s.herramienta_mapa>
    );
}

export default BarraInferior;