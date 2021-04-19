import React from 'react';

import * as s from './Monitor.styles';

import MainView from '../MainView/MainView';

import Draggable from 'react-draggable';

import BarraInferior from '../BarraInferior/BarraInferior';
import BarraLateral from '../BarraLateral/BarraLateral';

import * as fa from 'react-icons/fa';
import * as ai from 'react-icons/ai';

import * as sapp from '../../App.styles'




const ContenidoMonitor = () => {
    const [contador, setContador] = React.useState(10);
    const [toggle, setToggle] = React.useState(false);

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
        <sapp.App>
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
        </sapp.App>
    );

}

export default ContenidoMonitor;
