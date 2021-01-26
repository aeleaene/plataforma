import React from 'react';

/*
*Falta agregar caja de busqueda 
*Falta acomodar la pantalla
*Falta acomodar los botones y su funcionalidad
 */

import * as s from './BarraInferior.styles';
import {Icon} from '@iconify/react';
import * as ic from 'react-icons/all';

const BarraInferior = () => {
    return (
        <s.herramienta_mapa>
           <s.icono_distancia/>
            <s.icono_area/>
            <s.icono_trafico/>
           <s.icono_mapa>
               <s.capa_mapa>
                   <s.capa_mapa_titulo>
                       <s.capa_mapa_titulo_icono_izquierda />
                       Mapa 
                       <s.capa_mapa_titulo_icono_derecha><ic.AiOutlineMinus/></s.capa_mapa_titulo_icono_derecha>
                   </s.capa_mapa_titulo>
                   <s.capa_mapa_item_seleccionado>Google Streets</s.capa_mapa_item_seleccionado>
                   <s.capa_mapa_item>Google Hybrid</s.capa_mapa_item>
                   <s.capa_mapa_item>Google Terrain</s.capa_mapa_item>
                   <s.capa_mapa_item>Bing Road</s.capa_mapa_item>
                   <s.capa_mapa_item>Bing Aerial</s.capa_mapa_item>
                   <s.capa_mapa_item>Bing Aerial</s.capa_mapa_item>
                   <s.capa_mapa_item>OSM Map</s.capa_mapa_item>
                   <s.capa_mapa_item>Mapbox Streets</s.capa_mapa_item>
                   <s.capa_mapa_item>Mapbox Satellite</s.capa_mapa_item>
                   <s.capa_mapa_item>Baidu Map</s.capa_mapa_item>
               </s.capa_mapa>
           </s.icono_mapa>

           <s.caja_zoom>
                <s.icono_zoom_menos/>
                <s.zoom_slider>
                    <s.slider role={"slider"} aria-valuemin={"0"} aria-valuemax={"21"} aria-orientation={"horizontal"} aria-valuetext={"13"} aria-label={"slider entre 0 y 21"}>
                        <s.slider_runway>
                            <s.slider_bar style={{width: '9.52381%', left: '0%'}}></s.slider_bar>
                               <s.slider_button_wrapper style={{left:''}}> 
                                <s.slider_button aria-describedby={"el-tooltip-5456"} tabindex={"0"}></s.slider_button>
                            </s.slider_button_wrapper>
                        </s.slider_runway>
                    </s.slider>
                </s.zoom_slider>
                <s.icono_zoom_mas/>
           </s.caja_zoom>

            <s.direccion_mapa>
                <s.busqueda type={'text'} autoComplete={'off'} placeholder={'Búsqueda de Dirección'}/>
                <s.input_prefix>
                    
                </s.input_prefix>
            </s.direccion_mapa>

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