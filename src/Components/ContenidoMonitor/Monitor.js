import React, { useEffect, useState } from 'react';

import * as s from './Monitor.styles';

import MainView from '../MainView/MainView';

import Draggable from 'react-draggable';

import BarraInferior from '../BarraInferior/BarraInferior';
import BarraLateral from '../BarraLateral/BarraLateral';

import * as fa from 'react-icons/fa';
import * as ai from 'react-icons/ai';
import {GiFootprint} from "react-icons/gi";
import {VscThreeBars} from "react-icons/vsc";
import {BiTargetLock} from "react-icons/bi";
import {BsThreeDotsVertical, BsDot} from "react-icons/bs";

import * as sapp from '../../App.styles'




const ContenidoMonitor = (props) => {
    const [contador, setContador] = React.useState(10);
    const [toggle, setToggle] = React.useState(false);
    const [device, setDevice] = useState([])
    useEffect(() => {
        Devices()
    }, [])
    const Devices = async() =>{
        var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Accept", "*/*");

            var requestOptions = {
                method: 'GET',
                credentials: 'include',
                headers: myHeaders,
                redirect: 'follow'
            };
            
            const resultado = await fetch("https://www.protrack.ad105.net/api/devices", requestOptions)
                /* .then(response => response.json())
                .catch(error => console.log('error', error)); */
                const deviceData = await resultado.json();
                console.log(deviceData)
                setDevice(deviceData);
                console.log(device)
    }

    const handleToggle = () => {
        setToggle(!toggle)
        console.log(toggle);
    }

    React.useEffect(()=> {
        contador > 0 && setTimeout(() => setContador(contador -1), 1000);
        if(contador == 0) {
            setContador(10);
        }
    }, [contador])

    return(
        <s.App>
            <sapp.content_box>
        <s.contenido_monitor>

            <s.caja_direccion_dispositivo><span></span></s.caja_direccion_dispositivo>

            <s.refrescar>
                <span>"Refrescarse después de "
                    <s.refTemporizador>{contador}</s.refTemporizador>
                    " segundos"
                </span>
            </s.refrescar>

            <s.caja_dispositivo_pequena visibility={toggle} onClick={handleToggle}/>

            
            <Draggable bounds="parent">
            <s.caja_dispositivo_panel visibility={toggle} style={{left:'0px', top:'0px'}}>
                
                <s.caja_dispositivo_titulo >
                
                    <s.barra_arrastable />
                    <s.barra_superior_titulo>
                    &nbsp;
                         &nbsp;<fa.FaLaptop />&nbsp;&nbsp;Mis Metas
                    </s.barra_superior_titulo>
                    <s.opcion_derecha onClick={handleToggle} visibility={toggle}/>
                </s.caja_dispositivo_titulo>

                <s.contenido_panel_dispositivo>
                    <s.busqueda_dispositivo>

                        <s.busqueda_en_linea aria-haspopup="listbox" role="combobox" aria-owns="el-complete-8812">
                            <s.sufijo_entrada>
                                <s.entrada_interna type='text' autoComplete='off' valuekey='value' placeholder='Objetivo/IMEI' />
                                
                              {/*  <s.el_input__suffix>
                                    <s.el_input__suffix_inner>
                                       <s.icono_cerrar>
                                            <ai.AiOutlineClose/>   
                                        </s.icono_cerrar> 
                                    </s.el_input__suffix_inner>
                                </s.el_input__suffix>
                                                        */}
                             {/* agregar el icono de cerrar */}
                            </s.sufijo_entrada>
                        </s.busqueda_en_linea>
                    </s.busqueda_dispositivo>
                    <s.submenu1>
                        <s.submenu1left>
                            <s.seguirSpan><GiFootprint/></s.seguirSpan>
                            <s.listado><VscThreeBars/></s.listado>
                        </s.submenu1left>
                        <s.submenu1right>
                            <s.ordenarList>
                                <option value="name">Nombre</option>
                                <option value="status">Estado</option>
                                <option value="speed">Velocidad</option>
                            </s.ordenarList>
                            <s.objetivo>T</s.objetivo>
                            <s.rastreador><BiTargetLock/></s.rastreador>
                        </s.submenu1right>
                    </s.submenu1>
                    <s.submenu2>
                        <s.submenu2opciones>
                            <s.submenu2opcionesli>Todos ({device.length})</s.submenu2opcionesli>
                            <s.submenu2opcionesli>En Linea ({device.length})</s.submenu2opcionesli>
                            <s.submenu2opcionesli>Fuera de Linea</s.submenu2opcionesli>
                        </s.submenu2opciones>
                    </s.submenu2>
                    {
                        device.map(item => (
                            <s.deviceonlist key={item.id}>
                                <s.deviceonlistsub1>
                                    <s.deviceChebox type="checkbox"/>
                                    <s.deviceName>{item.name}</s.deviceName>
                                </s.deviceonlistsub1>
                                <s.deviceonlistsub2>
                                    <s.deviceTime>2d+</s.deviceTime>
                                    <s.deviceStatus>{
                                        item.status === "online" ? <BsDot style={{color: "#0795fb", fontSize: 45}}/> : <BsDot style={{color: "#999999", fontSize: 45}}/>
                                    }</s.deviceStatus>
                                    <s.deviceOptions><BsThreeDotsVertical /></s.deviceOptions>
                                </s.deviceonlistsub2>
                            </s.deviceonlist>
                        ))
                    }
                </s.contenido_panel_dispositivo>

                <s.arbol_caja_monitor>
                    <s.titulo_caja>
                        <s.icono_fondo>
                            <ai.AiFillCaretDown />
                        </s.icono_fondo>
                    </s.titulo_caja>
                </s.arbol_caja_monitor>  
            </s.caja_dispositivo_panel>
            
            </Draggable> 
            

            <MainView />
            
        </s.contenido_monitor>
        </sapp.content_box>
        </s.App>
    );

}

export default ContenidoMonitor;
