import React, { useEffect, useState } from 'react';

import {
    BrowserRouter as Router,
    useHistory,
  } from "react-router-dom";

import * as s from './BarraLateral.styles';
import perfil from '../../assets/images/perfil.jpg';

import * as ic from 'react-icons/all';
import { getSessionCookie } from '../../sessions';

import * as Cookies from 'js-cookie';



const BarraLateral = (props) => {

    const [sesion, setSesion] = useState(false);
    const history = useHistory();

    const handleSalir = (e) => {
        e.preventDefault();
        salir();
        setSesion(true);
    }

    const Probar = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'manual'
        }
        fetch('http://52.36.58.203:7082/api/session?token='+Cookies.get('session'), requestOptions)
        .then((response) => {
            if(response.ok) {
                salir();
                Cookies.remove('session');
                history.push('/');

            }else{
                console.log('ASKI');
            }
        })
        .catch(error => console.log('error', error));
        {/*Cookies.remove("session");
        history.push("/");
        console.log(Cookies)
          fetch("http://52.36.58.203:7082/api/session")
            .then(response => response.text())
            .then(result => console.log(result))
        .catch(error => console.log('error', error));*/}
    }

    const redireccionar = () => {
        history.push("/")
    }

    const salir = async() => {
        var myHeaders = new Headers();

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://52.36.58.203:7082/api/session", requestOptions)
        .then((response) => {
            console.log('Estado'+response.status)
        if(response.ok){
            alert('SALIR');
        }else{
            alert('Hubo un problema');
            redireccionar();
        }
        }).catch(error => console.log('error: ', error))
    }

    return (
        <Router>
        <s.menu_caja>

            <s.cuenta>
                <s.caja_imagen style={{ backgroundImage: `url(${perfil})` }} />
                <s.nombre_cuenta>demo</s.nombre_cuenta>
                <s.submenu_perfil >
                    <s.submenu_elemento><ic.FiUserPlus /> Cuenta</s.submenu_elemento>
                    <s.submenu_elemento><ic.FaUserAlt /> Proveedor de servicios</s.submenu_elemento>
                    <s.submenu_elemento><ic.AiFillLock /> Modificar la contraseña</s.submenu_elemento>
                    <s.submenu_elemento><ic.FaUser /> Registro de inicio de sesión</s.submenu_elemento>
                    <s.submenu_elemento><ic.AiOutlineCloudDownload /> Manual de usuario</s.submenu_elemento>
                </s.submenu_perfil>
            </s.cuenta>


            <s.menu_superior>

                <s.monitor>
                    <s.icono_monitor />
                    <s.texto_elemento_menu>Monitor</s.texto_elemento_menu>
                    <s.tooltip_monitor>Monitor</s.tooltip_monitor>
                </s.monitor>

                <s.reportes>
                    <s.icono_reportes />
                    <s.texto_elemento_menu>Reportes</s.texto_elemento_menu>
                    <s.submenu_reportes tabIndex="-1">
                        <s.submenu_reportes_grupo>Informes generales</s.submenu_reportes_grupo>
                        <s.submenu_reportes_grupo_contenido_operacion>
                            <s.submenu_reportes_grupo_dos>
                                <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                <span> Estadísticas de Operación &nbsp; &nbsp; &nbsp;</span>
                                <s.submenu_reportes_grupo_dos_icono_derecha><ic.AiOutlineRight /></s.submenu_reportes_grupo_dos_icono_derecha>

                                <s.submenu_reportes_submenu>
                                    <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span> Visión general del comportamiento de conducción</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>

                                    <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span> Informe sobre el kilometraje</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>

                                    <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span> Detalles de exceso de velocidad</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>

                                    <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span> Detalles de estadias</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>

                                    <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span> Visión general del ACC</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>

                                    <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span> Reporte del ACC (encendido)</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>

                                    <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span> Informe de inactividad del motor</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>

                                    <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span> Reporte de viaje</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>

                                    <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span> Informe de viaje de exceso de velocidad</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>

                                    <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span> Informe de combustible</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>
                                </s.submenu_reportes_submenu>


                            </s.submenu_reportes_grupo_dos>
                        </s.submenu_reportes_grupo_contenido_operacion>

                        <s.submenu_reportes_grupo_contenido>
                            <s.submenu_reportes_grupo_dos>
                                <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                <span> Informe OBD &nbsp; &nbsp; &nbsp;</span>
                                <s.submenu_reportes_grupo_dos_icono_derecha><ic.AiOutlineRight /></s.submenu_reportes_grupo_dos_icono_derecha>
                                <s.submenu_reportes_submenu>
                                <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span> Visión general del comportamiento de conducción</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>

                                    <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span> Informe de comportamiento de conducción</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>

                                    <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span> Detalles del comportamiento de conducción</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>

                                    <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span> Resumen de consumo de combustible de viaje</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>

                                    <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span> Detalles de consumo de combustible de viaje</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>

                                    <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span> Informe DTC</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>

                                </s.submenu_reportes_submenu>
                            </s.submenu_reportes_grupo_dos>
                        </s.submenu_reportes_grupo_contenido>

                        <s.submenu_reportes_grupo_contenido>
                            <s.submenu_reportes_grupo_dos>
                                <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                <span> Estadística de Alarma &nbsp; &nbsp; &nbsp;</span>
                                <s.submenu_reportes_grupo_dos_icono_derecha><ic.AiOutlineRight /></s.submenu_reportes_grupo_dos_icono_derecha>
                                
                                <s.submenu_reportes_submenu>
                                <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span> Descripción general de alarma</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>

                                    <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span> Estadística de alarma</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>

                                    <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span> Detalle de Alarma</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>

                                </s.submenu_reportes_submenu>
                            </s.submenu_reportes_grupo_dos>
                        </s.submenu_reportes_grupo_contenido>

                        <s.submenu_reportes_grupo>Generar Reporte</s.submenu_reportes_grupo>
                        <s.submenu_reportes_grupo_contenido>
                            <s.submenu_reportes_grupo_dos>
                                <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                <span> Tareas de informe | Nuevo</span>
                            </s.submenu_reportes_grupo_dos>
                        </s.submenu_reportes_grupo_contenido>

                        <s.submenu_reportes_grupo_contenido>
                            <s.submenu_reportes_grupo_dos>
                                <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                <span> Buscar reporte</span>
                            </s.submenu_reportes_grupo_dos>
                        </s.submenu_reportes_grupo_contenido>

                    </s.submenu_reportes>
                </s.reportes>



                <s.dispositivo>
                    <s.icono_dispositivos />
                    <s.texto_elemento_menu>Dispositivo</s.texto_elemento_menu>
                    <s.submenu_dispositivo tabIndex="-1">
                        <s.submenu_dispositivo_contenido_item>
                            <s.submenu_dispositivo_contenido_item_icono><ic.FaCarAlt /></s.submenu_dispositivo_contenido_item_icono> &nbsp;
                            Configuración del Dispositivo
                        </s.submenu_dispositivo_contenido_item>

                        <s.submenu_dispositivo_contenido_item>
                            <s.submenu_dispositivo_contenido_item_icono><ic.TiFlag /></s.submenu_dispositivo_contenido_item_icono> &nbsp;
                            Detalle de Alarma
                        </s.submenu_dispositivo_contenido_item>

                        <s.submenu_dispositivo_contenido_item_dividido>
                            <s.submenu_dispositivo_contenido_item_icono><ic.GoTerminal /></s.submenu_dispositivo_contenido_item_icono> &nbsp;
                            Horario para Comando
                        </s.submenu_dispositivo_contenido_item_dividido>

                        <s.submenu_dispositivo_contenido_item>
                            <s.submenu_dispositivo_contenido_item_icono><ic.BsBellFill /></s.submenu_dispositivo_contenido_item_icono> &nbsp;
                            Administración de notificaciones de vencimiento
                        </s.submenu_dispositivo_contenido_item>

                        <s.submenu_dispositivo_contenido_item>
                            <s.submenu_dispositivo_contenido_item_icono><ic.AiFillTool /></s.submenu_dispositivo_contenido_item_icono> &nbsp;
                            Gestión de mantenimiento
                        </s.submenu_dispositivo_contenido_item>

                        <s.submenu_dispositivo_contenido_item>
                            <s.submenu_dispositivo_contenido_item_icono><ic.FaShareAlt /></s.submenu_dispositivo_contenido_item_icono> &nbsp;
                            Gestionar link`s compartidos
                        </s.submenu_dispositivo_contenido_item>
                    </s.submenu_dispositivo>
                </s.dispositivo>

            </s.menu_superior>

            <s.menu_inferior>

                <s.anterior>
                    <s.icono_anterior />
                    <s.tooltip_anterior role="tooltip" aria-hidden="true">Versión Anterior</s.tooltip_anterior>
                </s.anterior>


                <s.opciones>
                    <s.icono_opciones />
                    <s.submenu_opciones tabIndex="-1">
                        <s.submenu_opciones_item>
                            <s.submenu_opciones_item_icono><ic.HiCog /></s.submenu_opciones_item_icono> &nbsp;
                            Preferencias
                        </s.submenu_opciones_item>
                    

                        <s.submenu_opciones_item>
                            <s.submenu_opciones_item_icono><ic.BsBellFill /></s.submenu_opciones_item_icono> &nbsp;
                            Notificación de la aplicación
                        </s.submenu_opciones_item>

                        <s.submenu_opciones_item>
                            <s.submenu_opciones_item_icono><ic.GoKey /></s.submenu_opciones_item_icono> &nbsp;
                            Llave API de Google Maps
                        </s.submenu_opciones_item>
                    </s.submenu_opciones>
                </s.opciones>

                <s.mensajes>
                    <s.icono_mensajes />
                    <s.tooltip_mensaje role="tooltip" aria-hidden="true">Mensaje</s.tooltip_mensaje>
                </s.mensajes>

                <s.salir>
                    <s.icono_salir onClick={handleSalir}/>
                    <s.tooltip_salir role="tooltip" aria-hidden="true">Salir</s.tooltip_salir>   
                </s.salir>
            
            </s.menu_inferior> 
        </s.menu_caja>
        </Router>
    );
}

export default BarraLateral;