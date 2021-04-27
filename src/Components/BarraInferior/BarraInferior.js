import React from 'react';


import * as s from './BarraInferior.styles';
import {Icon} from '@iconify/react';
import * as ic from 'react-icons/all';

import Draggable from 'react-draggable';


const BarraInferior = () => {

    const [toggle, setToggle] = React.useState(false);
    const [layer, setLayer] = React.useState(false);

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const handleLayerGs = () => {
        setLayer(!layer);
        window.valorCapaGs = layer;
    }

    const handleLayerGh = () => {
        setLayer(!layer);
        window.valorCapaGh = layer;
    }

    
    const handleLayerGt = () => {
        setLayer(!layer);
        window.valorCapaGt = layer;
    }

    
    const handleLayerOsm = () => {
        setLayer(!layer);
        window.valorCapaOsm = layer;
    }

    
    const handleLayerOsmBn = () => {
        setLayer(!layer);
        window.valorCapaOsmBn = layer;
    }

    
    const handleLayerBing = () => {
        setLayer(!layer);
        window.valorCapaBing = layer;
    }
    


    return (
        <s.herramienta_mapa>
           <s.caja_izquierda>
            <s.icono_distancia/>
                <s.icono_area/>
                <s.icono_trafico/>
            <s.icono_mapa visibility={toggle} onClick={handleToggle}>
                <s.capa_mapa visibility={toggle}>
                    <s.capa_mapa_titulo>
                        <s.capa_mapa_titulo_icono_izquierda />
                        Mapa 
                        <s.capa_mapa_titulo_icono_derecha><ic.AiOutlineMinus/></s.capa_mapa_titulo_icono_derecha>
                    </s.capa_mapa_titulo>
                    <s.capa_mapa_item_seleccionado gs={layer} onClick={handleLayerGs}>Google</s.capa_mapa_item_seleccionado>
                    <s.capa_mapa_item gh={layer} onClick={handleLayerGh}>Google Hybrid</s.capa_mapa_item>
                    <s.capa_mapa_item gt={layer} onClick={handleLayerGt}>Google Terrain</s.capa_mapa_item>
                    <s.capa_mapa_item osm={layer} onClick={handleLayerOsm}>Open Street Maps</s.capa_mapa_item>
                    <s.capa_mapa_item osmbn={layer} onClick={handleLayerOsmBn}>Open Street Maps B/N</s.capa_mapa_item>
                    <s.capa_mapa_item bing={layer} onClick={handleLayerBing}>Bing</s.capa_mapa_item>
                </s.capa_mapa>
            </s.icono_mapa>
    {/* El valor es de -13 a 47*/}
            <s.caja_zoom>
                    <s.icono_zoom_menos/>
                    <s.zoom_slider>
                        <s.slider role={"slider"} aria-valuemin={"0"} aria-valuemax={"21"} aria-orientation={"horizontal"} aria-valuetext={"13"} aria-label={"slider entre 0 y 21"}>
                            <s.slider_runway>
                                <s.slider_bar style={{width: '9.52381%', left: '0%'}}></s.slider_bar>
                                <Draggable axis="x" defaultPosition={{x:-13, y:0}} bounds={{left:-13, right:47}}>
                                <s.slider_button_wrapper style={{left:''}}> 
                                    <s.slider_button aria-describedby={"el-tooltip-5456"} tabindex={"0"}></s.slider_button>
                                </s.slider_button_wrapper>
                                </Draggable>
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
           </s.caja_izquierda>

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