import React, { useState, createContext, useContext } from 'react';
import * as s from './Login.styles';
import logo from '../../assets/images/logo.png'
import { usePromiseTracker } from 'react-promise-tracker';
import { trackPromise } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';

import { FaRegUser } from "react-icons/fa";

import * as Cookies from 'js-cookie';

/* TOAST ALERTS */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
    BrowserRouter as Router,
    useHistory,
} from "react-router-dom";


const Login = (props) => {


    const history = useHistory();

    const [usuario, setUsuario] = useState({
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false)

    const handleCambio = (e) => {
        const { id, value } = e.target;
        setUsuario(prevUsuario => ({
            ...prevUsuario,
            [id]: value
        }))
    }

    const handleEnviar = (e) => {
        e.preventDefault();
        if (usuario.password == "") {
            /* iniciarSesion(); */
            alert('Por favor, introduzca la contraseña');
        }
        else if(usuario.email == "") {
            alert('Por favor ingrese la cuenta.');
        }
        else{
            handleLogin();
            //iniciarSesion();
        }
    }

    const LoadingIndicator = () => {
        const { promiseInProgress } = usePromiseTracker();
        return (
            promiseInProgress &&
            <s.animacionCargar>
                <Loader type="ThreeDots" color="#ffab05" height="50" width="50" />
            </s.animacionCargar>
        );
    }

    function createCookie(cookieName, cookieValue, daysToExpire){
        var date = new Date();
        date.setTime(date.getTime()+(daysToExpire*24*60*60*1000));
        document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toGMTString() + "path=/";
    }

    const redireccionar = () => {
        createCookie("passCk", usuario.password, 5);
        history.push("/Mapa")
        setLoading(false);
    }

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch('https://www.protrack.ad105.net/api/session', {credentials: 'include',method: 'POST', body: new URLSearchParams(`email=${usuario.email}&password=${usuario.password}`)});
    
        if(response.ok) {
            const user = await response.json();
            console.log(user);
            redireccionar();
        }else{
            toast.error('Usuario o Contraseña Incorrecta.');
        }
    }


    return (
        <Router>
            <s.principal>
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

                <s.cabecera>
                    <s.wrap>
                        <s.logo><img src={logo} /></s.logo>
                        <s.applink>
                            <s.android>
                                <s.android_span>Android</s.android_span>
                            </s.android>
                            <s.ios>
                                <s.ios_span>App Store</s.ios_span>
                            </s.ios>
                        </s.applink>
                    </s.wrap>
                </s.cabecera>

                <s.body_>
                    <s.wrap style={{ width: '1100px', visibility: 'visible' }}>
                        <s.caja_login>
                            <s.container>
                                <s.formulario onSubmit={handleLogin}>
                                    <s.formulatio_titulo><FaRegUser /></s.formulatio_titulo>
                                    <s.formulario_contenido>
                                        <s.formulario_contenido_cuenta>
                                            <s.ipt_f_f_ms type="text" id="email" value={usuario.email} onChange={handleCambio} tabIndex={1} style={{ display: "table-cell", color: "#fff" }} placeholder="Cuenta" />
                                            <s.icono_cuenta />
                                            <s.tips_f13 />
                                            <s.entrada_limpia />
                                        </s.formulario_contenido_cuenta>

                                        <s.formulario_contenido_contrasena>
                                            <s.ipt_f_f_ms type="password" id="password" value={usuario.password} onChange={handleCambio} tabIndex={2} style={{ display: "table-cell", color: "#fff" }} placeholder="Contraseña" />
                                            <s.icono_contra />
                                            <s.tips_f13 />
                                            <s.entrada_limpia />
                                        </s.formulario_contenido_contrasena>

                                        <s.cl_verificar style={{ display: "none" }}>
                                            <s.verificar_wrap style={{ width: "300px" }}>
                                                <s.dragProgress style={{ width: "0px;" }} />
                                                <s.dragBtn style={{ left: "0px" }} />
                                                <s.fixtips>Deslice para verificar</s.fixtips>
                                                <s.verifyMsg>Exitoso</s.verifyMsg>
                                            </s.verificar_wrap>
                                        </s.cl_verificar>

                                        <s.formulario_contenido_recordar>
                                            <s.chk_remember>
                                                <s.icono_marcar></s.icono_marcar>
                                          Recordar la contraseña
                                      </s.chk_remember>
                                            <s.encontrar href={"#"} target={"_blank"}> Encontrar contraseña</s.encontrar>
                                        </s.formulario_contenido_recordar>

                                        <s.iniciar>
                                            <s.boton>Iniciar Sesión</s.boton>
                                            <LoadingIndicator />
                                        </s.iniciar>

                                        <s.formulario_contenido_demo>
                                            <s.demo href={"#"}>Demo</s.demo>
                                        </s.formulario_contenido_demo>

                                    </s.formulario_contenido>
                                </s.formulario>
                            </s.container>
                        </s.caja_login>
                    </s.wrap>
                </s.body_>

                <s.footer>
                    <s.wrap_footer>
                        <s.seleccion_lenguaje>
                            <s.seleccion_lenguaje_cur>
                                <s.icono_bandera />
                            Español
                        </s.seleccion_lenguaje_cur>

                            <s.panel_lenguaje>
                                <s.elemento_lenguaje><s.bandera_ingles></s.bandera_ingles>English</s.elemento_lenguaje>
                                <s.elemento_lenguaje><s.bandera_espanol></s.bandera_espanol>Español</s.elemento_lenguaje>
                                <s.elemento_lenguaje><s.bandera_portugues></s.bandera_portugues>Português</s.elemento_lenguaje>
                                <s.elemento_lenguaje><s.bandera_portugues_brasil></s.bandera_portugues_brasil>Português</s.elemento_lenguaje>
                                <s.elemento_lenguaje><s.bandera_frances></s.bandera_frances>Français</s.elemento_lenguaje>
                                <s.elemento_lenguaje><s.bandera_aleman></s.bandera_aleman>Deutsch</s.elemento_lenguaje>
                                <s.elemento_lenguaje><s.bandera_italiano></s.bandera_italiano>Italiana</s.elemento_lenguaje>
                                <s.elemento_lenguaje><s.bandera_holandes></s.bandera_holandes>Nederlands</s.elemento_lenguaje>
                                <s.elemento_lenguaje><s.bandera_noruego></s.bandera_noruego>Norsk</s.elemento_lenguaje>
                                <s.elemento_lenguaje><s.bandera_arabe></s.bandera_arabe>عربية‎</s.elemento_lenguaje>
                                <s.elemento_lenguaje><s.bandera_farsi></s.bandera_farsi>ارسی</s.elemento_lenguaje>
                                <s.elemento_lenguaje><s.bandera_vietnamita></s.bandera_vietnamita>Tiếng Việt</s.elemento_lenguaje>
                                <s.elemento_lenguaje><s.bandera_camboyano></s.bandera_camboyano>ជនជាតិខ្មែរ</s.elemento_lenguaje>
                                <s.elemento_lenguaje><s.bandera_tailandes></s.bandera_tailandes>ภาษาไทย</s.elemento_lenguaje>
                                <s.elemento_lenguaje><s.bandera_indonesio></s.bandera_indonesio>Bahasa Indonesia</s.elemento_lenguaje>
                                <s.elemento_lenguaje><s.bandera_bengali></s.bandera_bengali>বাংলা</s.elemento_lenguaje>
                                <s.elemento_lenguaje><s.bandera_mandarin></s.bandera_mandarin>简体中文</s.elemento_lenguaje>
                            </s.panel_lenguaje>
                        </s.seleccion_lenguaje>

                        <s.copyright>
                            <s.derechos>Copyright © 2021 Protrack GPS. All rights reserved.</s.derechos>

                            <s.enlaces>
                                <a href='!#'>OPEN API</a> &nbsp;&nbsp;
                                <a href='!#'>Privacy policy</a>&nbsp;&nbsp;
                                <a href='!#'>Terms of service</a>&nbsp;&nbsp;
                                <a href='!#'>Realese Notes</a>&nbsp;&nbsp;
                            </s.enlaces>
                        </s.copyright>

                    </s.wrap_footer>
                </s.footer>

            </s.principal>

        </Router>
    )
}

export default Login;