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

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as sapp from '../../App.styles'

import './submenustyles.css';

import Todos from './Todos';
import Online from './Online';
import Offline from './Offline';



const ContenidoMonitor = (props) => {
    const [contador, setContador] = React.useState(10);
    const [toggle, setToggle] = React.useState(false);
    const [device, setDevice] = useState([])
    const [deviceOption, setDeviceOption] = useState(1)
    var disponibles = 0;
    device.forEach((data) => {
        /* console.log(data) */
        if (data.status === "online") {
            disponibles = disponibles + 1;
            /* console.log(disponibles) */
        }
    })
    useEffect(() => {
        const interval = setInterval(() => {
            Devices()
        }, 10000);
        return () => clearInterval(interval);
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
            
            try{
                const resultado = await fetch("https://www.protrack.ad105.net/api/devices", requestOptions)
                const deviceData = await resultado.json();
                setDevice(deviceData);
            }
            catch(err){
                toast.error("Hubo un problema, intentelo más tarde.");
            }
            
    }

    const DeviceOpt = () => {
        if (deviceOption === 1) { return <Todos/> }
        if (deviceOption === 2) { return <Online />}
        if (deviceOption === 3) { return <Offline />}
    }

    const handleToggle = () => {
        setToggle(!toggle)
        /* console.log(toggle); */
    }

    React.useEffect(()=> {
        contador > 0 && setTimeout(() => setContador(contador -1), 1000);
        if(contador == 0) {
            setContador(10);
        }
    }, [contador])

    return(
        <s.App>
            <ToastContainer 
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                
            />
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
                            <s.submenu2opcionesli onClick={() => setDeviceOption(1)} className={deviceOption === 1 ? 'submenuclass' : ''}>Todos ({device.length})</s.submenu2opcionesli>
                            <s.submenu2opcionesli onClick={() => setDeviceOption(2)} className={deviceOption === 2 ? 'submenuclass' : ''}>En Linea ({disponibles})</s.submenu2opcionesli>
                            <s.submenu2opcionesli onClick={() => setDeviceOption(3)} className={deviceOption === 3 ? 'submenuclass' : ''}>Fuera de Linea</s.submenu2opcionesli>
                        </s.submenu2opciones>
                    </s.submenu2>
                    {
                        DeviceOpt()
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
