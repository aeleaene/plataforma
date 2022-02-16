import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import '../../styles/modals.css';
import {
    BrowserRouter as Router,
    useHistory,
  } from "react-router-dom";

import * as s from './BarraLateral.styles';
import perfil from '../../assets/images/perfil.jpg';

import * as ic from 'react-icons/all';
import { getSessionCookie } from '../../sessions';

import * as Cookies from 'js-cookie';

/* TOAST ALERTS */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles.css'

/* Modals */
import ContenidoCuenta from '../ContenidoCuenta/ContenidoCuenta';
import ProveedorServicios from '../ProveedorServicios/ProveedorServicios';
import ModificarPassword from '../ModificarPassword/ModificarPassword';
import RegistroSesion from '../RegistroSesion/RegistroSesion';
import ManualUsuario from '../ManualUsuario/ManualUsuario';
import Mensajes from '../Mensajes/Mensajes';
import Preferencias from '../Preferencias/Preferencias';
import ApiGoogle from '../ApiGoogle/ApiGoogle';
import Notificaciones from '../Notificaciones/Notificaciones';

import {MenContext} from '../../Context/MenuContext';

Modal.setAppElement('#root');

const BarraLateral = (props) => {

    const [sesion, setSesion] = useState(false);
    const history = useHistory();

    const handleSalir = (e) => {
        e.preventDefault();
        salir();
    }

    const consultarDispositivos = async() => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "*/*");

        var requestOptions = {
            method: 'GET',
            credentials: 'include',
            headers: myHeaders,
            redirect: 'follow'
          };
          
           await fetch("https://www.protrack.ad105.net/api/devices", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    const handleDevices = () =>{
        consultarDispositivos();
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
            redirect: 'follow',
            credentials: 'include'
        };

        fetch("https://www.protrack.ad105.net/api/session", requestOptions)
        .then((response) => {
            console.log('Estado'+response.status)
            if(response.status === 204){
                alert('Sesión finalizada')
                redireccionar();
            }else{
                alert('Ocurrió un error')
            }
        }).catch(error => console.log('error: ', error))
    }
    /* State Modal */
    const [modalCuenta, setModalCuenta] = useState(false);
    const [modalServicios, setModalServicios] = useState(false);
    const [modalModPassword, setModalModPassword] = useState(false);
    const [modalRegistroSesion, setModalRegistroSesion] = useState(false);
    const [modalManualUsuario, setModalManualUsuario] = useState(false);
    const [modalMensajes, setModalMensajes] = useState(false);
    const [modalPreferencias, setModalPreferencias] = useState(false);
    const [modalApiGoogle, setModalApiGoogle] = useState(false);
    const [modalNotificaciones, setModalNotificaciones] = useState(false);


    /* useContext */
    const { menuOp, setMenuOp, submenuOp, setSubmenuOp } = useContext(MenContext);
    return (
        <Router>
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
        <s.menu_caja>

            <s.cuenta>
                <s.caja_imagen onClick={() => setModalCuenta(true)} style={{ backgroundImage: `url(${perfil})` }} />
                <s.nombre_cuenta>demo</s.nombre_cuenta>
                <s.submenu_perfil >
                    <s.submenu_elemento onClick={() => setModalCuenta(true)}><ic.FiUserPlus /> Cuenta</s.submenu_elemento>
                    <s.submenu_elemento onClick={() => setModalServicios(true)}><ic.FaUserAlt /> Proveedor de servicios</s.submenu_elemento>
                    <s.submenu_elemento onClick={() => setModalModPassword(true)}><ic.AiFillLock /> Modificar la contraseña</s.submenu_elemento>
                    <s.submenu_elemento onClick={() => setModalRegistroSesion(true)}><ic.FaUser /> Registro de inicio de sesión</s.submenu_elemento>
                    <s.submenu_elemento onClick={() => setModalManualUsuario(true)}><ic.AiOutlineCloudDownload /> Manual de usuario</s.submenu_elemento>
                </s.submenu_perfil>
            </s.cuenta>
            {/* MODALS */}
            {/* Modal Cuenta */}
            <Modal 
                isOpen={modalCuenta}
                onRequestClose={() => setModalCuenta(false)}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(15, 15, 15, 0.507)'
                    },
                    content: {
                        width: 650,
                        height: 478
                    }
                }}
            >
                <s.HeaderModal>
                    <s.TituloModal><ic.FiUserPlus /> Cuenta</s.TituloModal>
                    <s.CerrarModal onClick={() => setModalCuenta(false)}>+</s.CerrarModal>
                </s.HeaderModal>
                <ContenidoCuenta/>
                <s.DivBotones>
                    <s.BotonCancelar onClick={() => setModalCuenta(false)}>Cancelar</s.BotonCancelar>
                    <s.BotonGuardar>Guardar</s.BotonGuardar>
                </s.DivBotones>
            </Modal>
                {/* Modal Servicios */}
            <Modal 
                isOpen={modalServicios}
                onRequestClose={() => setModalServicios(false)}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(15, 15, 15, 0.507)'
                    },
                    content: {
                        width: 350
                    }
                }}
            >
                <s.HeaderModal>
                    <s.TituloModal><ic.FaUserAlt /> Proveedor de Servicios</s.TituloModal>
                    <s.CerrarModal onClick={() => setModalServicios(false)}>+</s.CerrarModal>
                </s.HeaderModal>
                <ProveedorServicios/>
            </Modal>
            {/* Modal Password */}
            <Modal 
                isOpen={modalModPassword}
                onRequestClose={() => setModalModPassword(false)}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(15, 15, 15, 0.507)'
                    },
                    content: {
                        width: 350
                    }
                }}
            >   
                <s.HeaderModal>
                    <s.TituloModal><ic.AiFillLock /> Modificar Password</s.TituloModal>
                    <s.CerrarModal onClick={() => setModalModPassword(false)}>+</s.CerrarModal>
                </s.HeaderModal>
                <ModificarPassword/>
                <s.DivBotones>
                    <s.BotonCancelar onClick={() => setModalModPassword(false)}>Cancelar</s.BotonCancelar>
                    <s.BotonGuardar>Guardar</s.BotonGuardar>
                </s.DivBotones>
            </Modal>
            {/* Modal Registro */}
            <Modal 
                isOpen={modalRegistroSesion}
                onRequestClose={() => setModalRegistroSesion(false)}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(15, 15, 15, 0.507)'
                    },
                    content: {
                        width: 850,
                        height: 427
                    }
                }}
            >
                <s.HeaderModal>
                    <s.TituloModal><ic.FaUser /> Registro de Inicio de Sesión</s.TituloModal>
                    <s.CerrarModal onClick={() => setModalRegistroSesion(false)}>+</s.CerrarModal>
                </s.HeaderModal>
                <RegistroSesion/>
            </Modal>
            {/* Modal Manual */}
            <Modal 
                isOpen={modalManualUsuario}
                onRequestClose={() => setModalManualUsuario(false)}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(15, 15, 15, 0.507)'
                    },
                    content: {
                        width: 350
                    }
                }}
            >
                <s.HeaderModal>
                    <s.TituloModal><ic.AiOutlineCloudDownload /> Manual de Usuario</s.TituloModal>
                    <s.CerrarModal onClick={() => setModalManualUsuario(false)}>+</s.CerrarModal>
                </s.HeaderModal>
                <ManualUsuario/>
            </Modal>
            

            <s.menu_superior>

                <s.monitor onClick={() => setMenuOp(1)} className={menuOp === 1 ? 'seleccionMonitor' : ''}>
                    <s.icono_monitor />
                    <s.texto_elemento_menu>Monitor</s.texto_elemento_menu>
                    <s.tooltip_monitor>Monitor</s.tooltip_monitor>
                </s.monitor>

                <s.reportes className={menuOp === 2 ? 'seleccionReportes' : ''}>
                    <s.icono_reportes onClick={() => {setMenuOp(2); setSubmenuOp(1)}}/>
                    <s.texto_elemento_menu onClick={() => {setMenuOp(2); setSubmenuOp(1)}}>Reportes</s.texto_elemento_menu>
                    <s.submenu_reportes tabIndex="-1">
                        <s.submenu_reportes_grupo>Informes generales</s.submenu_reportes_grupo>
                        <s.submenu_reportes_grupo_contenido_operacion>
                            <s.submenu_reportes_grupo_dos className={submenuOp === 1 || submenuOp === 2 || submenuOp === 3 || submenuOp === 4 ? 'subMenus' : ''}>
                                <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                <span onClick={() => {setMenuOp(2); setSubmenuOp(1)}}> Estadísticas de Operación &nbsp; &nbsp; &nbsp;</span>
                                <s.submenu_reportes_grupo_dos_icono_derecha><ic.AiOutlineRight /></s.submenu_reportes_grupo_dos_icono_derecha>

                                <s.submenu_reportes_submenu>
                                    <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos className={submenuOp === 1 ? 'subMenus' : ''}>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span onClick={() => {setMenuOp(2); setSubmenuOp(1)}}> Informe General de Movimiento</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>

                                    <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos className={submenuOp === 2 ? 'subMenus' : ''}>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span onClick={() => {setMenuOp(2); setSubmenuOp(2)}}> Informe sobre el kilometraje</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>

                                    <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos className={submenuOp === 3 ? 'subMenus' : ''}>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span onClick={() => {setMenuOp(2); setSubmenuOp(3)}}> Detalles de exceso de velocidad</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>

                                    <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos className={submenuOp === 4 ? 'subMenus' : ''}>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span onClick={() => {setMenuOp(2); setSubmenuOp(4)}}> Detalles de estadias</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>
                                </s.submenu_reportes_submenu>


                            </s.submenu_reportes_grupo_dos>
                        </s.submenu_reportes_grupo_contenido_operacion>

                        <s.submenu_reportes_grupo_contenido>
                            <s.submenu_reportes_grupo_dos className={submenuOp === 5 || submenuOp === 6 ? 'subMenus' : ''}>
                                <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                <span onClick={() => {setMenuOp(2); setSubmenuOp(5)}}> Reporte de viaje &nbsp; &nbsp; &nbsp;</span>
                                <s.submenu_reportes_grupo_dos_icono_derecha><ic.AiOutlineRight /></s.submenu_reportes_grupo_dos_icono_derecha>
                                <s.submenu_reportes_submenu>
                                <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos className={submenuOp === 5 ? 'subMenus' : ''}>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span onClick={() => {setMenuOp(2); setSubmenuOp(5)}}> Reporte de viaje</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>

                                    <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos className={submenuOp === 6 ? 'subMenus' : ''}>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span onClick={() => {setMenuOp(2); setSubmenuOp(6)}}> Informe de viaje de exceso de velocidad</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>
                                </s.submenu_reportes_submenu>
                            </s.submenu_reportes_grupo_dos>
                        </s.submenu_reportes_grupo_contenido>

                        {/* <s.submenu_reportes_grupo_contenido>
                            <s.submenu_reportes_grupo_dos className={submenuOp === 7 || submenuOp === 8 || submenuOp === 9 ? 'subMenus' : ''}>
                                <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                <span onClick={() => {setMenuOp(2); setSubmenuOp(7)}}> Informe de comportamiento de conducción &nbsp; &nbsp; &nbsp;</span>
                                <s.submenu_reportes_grupo_dos_icono_derecha><ic.AiOutlineRight /></s.submenu_reportes_grupo_dos_icono_derecha>
                                <s.submenu_reportes_submenu>
                                <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos className={submenuOp === 7 ? 'subMenus' : ''}>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span onClick={() => {setMenuOp(2); setSubmenuOp(7)}}> Visión general del comporamiento de conducción</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>

                                    <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos className={submenuOp === 8 ? 'subMenus' : ''}>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span onClick={() => {setMenuOp(2); setSubmenuOp(8)}}> Informe de comportamiento de conducción</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>

                                    <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos className={submenuOp === 9 ? 'subMenus' : ''}>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span onClick={() => {setMenuOp(2); setSubmenuOp(9)}}> Detalles de comportamiento de conducción</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>
                                </s.submenu_reportes_submenu>
                            </s.submenu_reportes_grupo_dos>
                        </s.submenu_reportes_grupo_contenido> */}

                        <s.submenu_reportes_grupo_contenido>
                            <s.submenu_reportes_grupo_dos className={submenuOp === 10 || submenuOp === 11 || submenuOp === 12 ? 'subMenus' : ''}>
                                <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                <span onClick={() => {setMenuOp(2); setSubmenuOp(10)}}> Reporte de ACC (Encendido) &nbsp; &nbsp; &nbsp;</span>
                                <s.submenu_reportes_grupo_dos_icono_derecha><ic.AiOutlineRight /></s.submenu_reportes_grupo_dos_icono_derecha>
                                <s.submenu_reportes_submenu>
                                <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos className={submenuOp === 10 ? 'subMenus' : ''}>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span onClick={() => {setMenuOp(2); setSubmenuOp(10)}}> Visión general de ACC</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>

                                    <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos className={submenuOp === 11 ? 'subMenus' : ''}>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span onClick={() => {setMenuOp(2); setSubmenuOp(11)}}> Reporte de ACC (Enciendido)</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>

                                    <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos className={submenuOp === 12 ? 'subMenus' : ''}>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span onClick={() => {setMenuOp(2); setSubmenuOp(12)}}> Informe de Ralentí Mínimo</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>
                                </s.submenu_reportes_submenu>
                            </s.submenu_reportes_grupo_dos>
                        </s.submenu_reportes_grupo_contenido>

                        <s.submenu_reportes_grupo_contenido>
                            <s.submenu_reportes_grupo_dos className={submenuOp === 13 || submenuOp === 14 || submenuOp === 15 ? 'subMenus' : ''}>
                                <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                <span onClick={() => {setMenuOp(2); setSubmenuOp(13)}}> Reporte de información del vehículo &nbsp; &nbsp; &nbsp;</span>
                                <s.submenu_reportes_grupo_dos_icono_derecha><ic.AiOutlineRight /></s.submenu_reportes_grupo_dos_icono_derecha>
                                <s.submenu_reportes_submenu>
                                <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos className={submenuOp === 13 ? 'subMenus' : ''}>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span onClick={() => {setMenuOp(2); setSubmenuOp(13)}}> Informe de combustible</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>

                                    <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos className={submenuOp === 14 ? 'subMenus' : ''}>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span onClick={() => {setMenuOp(2); setSubmenuOp(14)}}> Informe de presión de neúmaticos</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>

                                    <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos className={submenuOp === 15 ? 'subMenus' : ''}>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span onClick={() => {setMenuOp(2); setSubmenuOp(15)}}> Temperature Report</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>
                                </s.submenu_reportes_submenu>
                            </s.submenu_reportes_grupo_dos>
                        </s.submenu_reportes_grupo_contenido>

                        <s.submenu_reportes_grupo_contenido>
                            <s.submenu_reportes_grupo_dos className={submenuOp === 16 || submenuOp === 17 || submenuOp === 18 ? 'subMenus' : ''}>
                                <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                <span onClick={() => {setMenuOp(2); setSubmenuOp(16)}}> Informe OBD &nbsp; &nbsp; &nbsp;</span>
                                <s.submenu_reportes_grupo_dos_icono_derecha><ic.AiOutlineRight /></s.submenu_reportes_grupo_dos_icono_derecha>
                                <s.submenu_reportes_submenu>
                                <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos className={submenuOp === 16 ? 'subMenus' : ''}>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span onClick={() => {setMenuOp(2); setSubmenuOp(16)}}> Resumen de consumo de combustible de viaje</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>

                                    <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos className={submenuOp === 17 ? 'subMenus' : ''}>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span onClick={() => {setMenuOp(2); setSubmenuOp(17)}}> Detalles de consumo de combustible de viaje</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>

                                    <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos className={submenuOp === 18 ? 'subMenus' : ''}>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span onClick={() => {setMenuOp(2); setSubmenuOp(18)}}> Informe DTC</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>
                                </s.submenu_reportes_submenu>
                            </s.submenu_reportes_grupo_dos>
                        </s.submenu_reportes_grupo_contenido>

                        <s.submenu_reportes_grupo_contenido>
                            <s.submenu_reportes_grupo_dos className={submenuOp === 19 || submenuOp === 20 || submenuOp === 21 ? 'subMenus' : ''}>
                                <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                <span onClick={() => {setMenuOp(2); setSubmenuOp(19)}}> Estadística de Alarma &nbsp; &nbsp; &nbsp;</span>
                                <s.submenu_reportes_grupo_dos_icono_derecha><ic.AiOutlineRight /></s.submenu_reportes_grupo_dos_icono_derecha>
                                
                                <s.submenu_reportes_submenu>
                                <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos className={submenuOp === 19 ? 'subMenus' : ''}>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span onClick={() => {setMenuOp(2); setSubmenuOp(19)}}> Descripción general de alarma</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>

                                    <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos className={submenuOp === 20 ? 'subMenus' : ''}>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span onClick={() => {setMenuOp(2); setSubmenuOp(20)}}> Estadística de alarma</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>

                                    <s.submenu_reportes_grupo_contenido>
                                        <s.submenu_reportes_grupo_dos className={submenuOp === 21 ? 'subMenus' : ''}>
                                            <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                            <span onClick={() => {setMenuOp(2); setSubmenuOp(21)}}> Detalle de Alarma</span>
                                        </s.submenu_reportes_grupo_dos>
                                    </s.submenu_reportes_grupo_contenido>
                                </s.submenu_reportes_submenu>
                            </s.submenu_reportes_grupo_dos>
                        </s.submenu_reportes_grupo_contenido>

                        <s.submenu_reportes_grupo>Generar Reporte</s.submenu_reportes_grupo>
                        <s.submenu_reportes_grupo_contenido>
                            <s.submenu_reportes_grupo_dos className={submenuOp === 22 ? 'subMenus' : ''}>
                                <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                <span onClick={() => {setMenuOp(2); setSubmenuOp(22)}}> Tareas de informe | Nuevo</span>
                            </s.submenu_reportes_grupo_dos>
                        </s.submenu_reportes_grupo_contenido>

                        <s.submenu_reportes_grupo_contenido>
                            <s.submenu_reportes_grupo_dos className={submenuOp === 23 ? 'subMenus' : ''}>
                                <s.submenu_reportes_grupo_dos_icono_izquierda><ic.IoIosStats /></s.submenu_reportes_grupo_dos_icono_izquierda>
                                <span onClick={() => {setMenuOp(2); setSubmenuOp(23)}}> Buscar reporte</span>
                            </s.submenu_reportes_grupo_dos>
                        </s.submenu_reportes_grupo_contenido>

                    </s.submenu_reportes>
                </s.reportes>



                <s.dispositivo className={menuOp === 3 ? 'seleccionDispos' : ''}>
                    <s.icono_dispositivos onClick={() => {setMenuOp(3); setSubmenuOp(24)}}/>
                    <s.texto_elemento_menu onClick={() => {setMenuOp(3); setSubmenuOp(24)}}>Dispositivo</s.texto_elemento_menu>
                    <s.submenu_dispositivo tabIndex="-1">
                        <s.submenu_dispositivo_contenido_item onClick={() => {setMenuOp(3); setSubmenuOp(24)}} className={submenuOp === 24 ? 'subMenus' : ''}>
                            <s.submenu_dispositivo_contenido_item_icono><ic.FaCarAlt /></s.submenu_dispositivo_contenido_item_icono> &nbsp;
                            Configuración del Dispositivo
                        </s.submenu_dispositivo_contenido_item>

                        <s.submenu_dispositivo_contenido_item onClick={() => {setMenuOp(3); setSubmenuOp(25)}} className={submenuOp === 25 ? 'subMenus' : ''}>
                            <s.submenu_dispositivo_contenido_item_icono><ic.TiFlag /></s.submenu_dispositivo_contenido_item_icono> &nbsp;
                            Detalle de Alarma
                        </s.submenu_dispositivo_contenido_item>

                        <s.submenu_dispositivo_contenido_item_dividido onClick={() => {setMenuOp(3); setSubmenuOp(26)}} className={submenuOp === 26 ? 'subMenus' : ''}>
                            <s.submenu_dispositivo_contenido_item_icono><ic.GoTerminal /></s.submenu_dispositivo_contenido_item_icono> &nbsp;
                            Horario para Comando
                        </s.submenu_dispositivo_contenido_item_dividido>

                        <s.submenu_dispositivo_contenido_item onClick={() => {setMenuOp(3); setSubmenuOp(27)}} className={submenuOp === 27 ? 'subMenus' : ''}>
                            <s.submenu_dispositivo_contenido_item_icono><ic.BsBellFill /></s.submenu_dispositivo_contenido_item_icono> &nbsp;
                            Administración de notificaciones de vencimiento
                        </s.submenu_dispositivo_contenido_item>

                        <s.submenu_dispositivo_contenido_item onClick={() => {setMenuOp(3); setSubmenuOp(28)}} className={submenuOp === 28 ? 'subMenus' : ''}>
                            <s.submenu_dispositivo_contenido_item_icono><ic.AiFillTool /></s.submenu_dispositivo_contenido_item_icono> &nbsp;
                            Gestión de mantenimiento
                        </s.submenu_dispositivo_contenido_item>

                        <s.submenu_dispositivo_contenido_item onClick={() => {setMenuOp(3); setSubmenuOp(29)}} className={submenuOp === 29 ? 'subMenus' : ''}>
                            <s.submenu_dispositivo_contenido_item_icono><ic.FaShareAlt /></s.submenu_dispositivo_contenido_item_icono> &nbsp;
                            Gestionar link`s compartidos
                        </s.submenu_dispositivo_contenido_item>
                    </s.submenu_dispositivo>
                </s.dispositivo>

            </s.menu_superior>

            <s.menu_inferior>

                <s.anterior onClick={handleDevices}>
                    <s.icono_anterior />
                    <s.tooltip_anterior role="tooltip" aria-hidden="true" >Versión Anterior</s.tooltip_anterior>
                </s.anterior>


                <s.opciones>
                    <s.icono_opciones />
                    <s.submenu_opciones tabIndex="-1">
                        <s.submenu_opciones_item onClick={() => setModalPreferencias(true)}>
                            <s.submenu_opciones_item_icono><ic.HiCog /></s.submenu_opciones_item_icono> &nbsp;
                            Preferencias
                        </s.submenu_opciones_item>
                    

                        <s.submenu_opciones_item onClick={() => setModalNotificaciones(true)}>
                            <s.submenu_opciones_item_icono><ic.BsBellFill /></s.submenu_opciones_item_icono> &nbsp;
                            Notificación de la aplicación
                        </s.submenu_opciones_item>

                        <s.submenu_opciones_item onClick={() => setModalApiGoogle(true)}>
                            <s.submenu_opciones_item_icono><ic.GoKey /></s.submenu_opciones_item_icono> &nbsp;
                            Llave API de Google Maps
                        </s.submenu_opciones_item>
                    </s.submenu_opciones>
                </s.opciones>
                {/* Modals */}
                    <Modal 
                        isOpen={modalPreferencias}
                        onRequestClose={() => setModalPreferencias(false)}
                        style={{
                            overlay: {
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(15, 15, 15, 0.507)'
                            },
                            content: {
                                width: 650,
                                height: 478
                            }
                        }}
                    >
                        <s.HeaderModal>
                            <s.TituloModal><ic.FiSettings /> Preferencias</s.TituloModal>
                            <s.CerrarModal onClick={() => setModalPreferencias(false)}>+</s.CerrarModal>
                        </s.HeaderModal>
                        <Preferencias/>
                        <s.DivBotones>
                            <s.BotonCancelar onClick={() => setModalPreferencias(false)}>Cancelar</s.BotonCancelar>
                            <s.BotonGuardar>Guardar</s.BotonGuardar>
                        </s.DivBotones>
                    </Modal>

                    <Modal 
                        isOpen={modalNotificaciones}
                        onRequestClose={() => setModalNotificaciones(false)}
                        style={{
                            overlay: {
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(15, 15, 15, 0.507)'
                            },
                            content: {
                                width: 600,
                                height: 612
                            }
                        }}
                    >
                        <s.HeaderModal>
                            <s.TituloModal><ic.BsBellFill/> Notificaciones de la Aplicación</s.TituloModal>
                            <s.CerrarModal onClick={() => setModalNotificaciones(false)}>+</s.CerrarModal>
                        </s.HeaderModal>
                        <Notificaciones/>
                        <s.DivBotones>
                            <s.BotonCancelar onClick={() => setModalNotificaciones(false)}>Cancelar</s.BotonCancelar>
                            <s.BotonGuardar>Guardar</s.BotonGuardar>
                        </s.DivBotones>
                    </Modal>

                    <Modal 
                        isOpen={modalApiGoogle}
                        onRequestClose={() => setModalApiGoogle(false)}
                        style={{
                            overlay: {
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(15, 15, 15, 0.507)'
                            },
                            content: {
                                width: 600,
                                height: 478
                            }
                        }}
                    >
                        <s.HeaderModal>
                            <s.TituloModal><ic.GoKey /> Clave API de Google Maps</s.TituloModal>
                            <s.CerrarModal onClick={() => setModalApiGoogle(false)}>+</s.CerrarModal>
                        </s.HeaderModal>
                        <ApiGoogle/>
                    </Modal>

                <s.mensajes onClick={() => setModalMensajes(true)}>
                    <s.icono_mensajes />
                    <s.tooltip_mensaje role="tooltip" aria-hidden="true" >Mensaje</s.tooltip_mensaje>
                </s.mensajes>
                {/* Modal */}
                <Modal 
                    isOpen={modalMensajes}
                    onRequestClose={() => setModalMensajes(false)}
                    style={{
                        overlay: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(15, 15, 15, 0.507)'
                        },
                        content: {
                            width: 850,
                            height: 427
                        }
                    }}
                >
                    <s.HeaderModal>
                        <s.TituloModal><ic.FiMail /> Mensajes</s.TituloModal>
                        <s.CerrarModal onClick={() => setModalMensajes(false)}>+</s.CerrarModal>
                    </s.HeaderModal>
                    <Mensajes/>
                </Modal>

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