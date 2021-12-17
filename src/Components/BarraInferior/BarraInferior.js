import React from 'react';


import * as s from './BarraInferior.styles';
import {Icon} from '@iconify/react';
import * as ic from 'react-icons/all';

import Draggable from 'react-draggable';

import GeoCercas from './GeoCercas';

import Alarms from './Alarms';

import './PopUp.css';

const BarraInferior = () => {

    const [toggle, setToggle] = React.useState(false);
    const [toggleGeo, setToggleGeo] = React.useState(false);
    const [toggleAlarm, setToggleAlarm] = React.useState(false);
    const [layer, setLayer] = React.useState(false);
    const [zoom, setZoom] = React.useState(5);

    const handleToggle = () => {
        setToggle(!toggle)
    }
    const handleToggleGeo = () => {
        setToggleGeo(!toggleGeo)
    }
    const handleToggleAlarm = () => {
        setToggleAlarm(!toggleAlarm)
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

    const handleZoomMin = () => {
        setZoom(zoom-1);
        window.zoom = zoom;
    }

    const handleZoomMax = () => {
        setZoom(zoom+1);
        window.zoom = zoom;
    }
    const zoomByRange = (val) => {
        setZoom(val);
        window.zoom = zoom;
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
                    <s.icono_zoom_menos onClick={handleZoomMin}/>
                    <s.zoom_slider type="range" defaultValue={zoom} min="0" max="21" step="1" onChange={(e) => zoomByRange(e.target.value)}>
                        {/* <s.slider role={"slider"} aria-valuemin={"0"} aria-valuemax={"21"} aria-orientation={"horizontal"} aria-valuetext={"13"} aria-label={"slider entre 0 y 21"}>
                            <s.slider_runway>
                                <s.slider_bar style={{width: '9.52381%', left: '0%'}}></s.slider_bar>
                                <Draggable axis="x" defaultPosition={{x:-13, y:0}} bounds={{left:-13, right:47}}>
                                <s.slider_button_wrapper style={{left:''}}> 
                                    <s.slider_button aria-describedby={"el-tooltip-5456"} tabindex={"0"}></s.slider_button>
                                </s.slider_button_wrapper>
                                </Draggable>
                            </s.slider_runway>
                        </s.slider> */}
                    </s.zoom_slider>
                    <s.icono_zoom_mas onClick={handleZoomMax}/>
            </s.caja_zoom>

                <s.direccion_mapa>
                    <s.busqueda type={'text'} autoComplete={'off'} placeholder={'Búsqueda de Dirección'}/>
                    <s.input_prefix>
                        
                    </s.input_prefix>
                </s.direccion_mapa>
           </s.caja_izquierda>

            <s.caja_derecha>
                <s.icono_POI></s.icono_POI>
                <s.icono_Ruta></s.icono_Ruta>
                <s.icono_GEO visibility={toggleGeo} onClick={handleToggleGeo}>
                </s.icono_GEO>
                <s.icono_Alertas visibility={toggleAlarm} onClick={handleToggleAlarm}></s.icono_Alertas>
                <s.icono_Recorrido></s.icono_Recorrido>
            </s.caja_derecha>
            <s.geofences visibility={toggleGeo} className="geofence-scroll">
                <s.capa_mapa_titulo onClick={handleToggleGeo}>
                    <s.capa_mapa_titulo_icono_izquierdaGeo />
                    GeoCercas
                    <s.capa_mapa_titulo_icono_derecha><ic.AiOutlineMinus/></s.capa_mapa_titulo_icono_derecha>
                </s.capa_mapa_titulo>
                <GeoCercas ver={toggleGeo} ocultar={setToggleGeo}/>
            </s.geofences>

            <s.alarms visibility={toggleAlarm} className="geofence-scroll">
                <s.capa_mapa_titulo onClick={handleToggleAlarm}>
                    <s.capa_mapa_titulo_icono_izquierdaAlert />
                    Alertas
                    <s.capa_mapa_titulo_icono_derecha><ic.AiOutlineMinus/></s.capa_mapa_titulo_icono_derecha>
                </s.capa_mapa_titulo>
                <Alarms ver={toggleAlarm} ocultar={setToggleAlarm}/>
            </s.alarms>


        </s.herramienta_mapa>
    );
}

export default BarraInferior;