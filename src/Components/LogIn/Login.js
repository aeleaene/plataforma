import React, {useState} from 'react';

import * as s from './Login.styles';
import logo from '../../assets/images/logo.png'

import axios from 'axios';
import qs from 'qs';

const Login = (props) => {

    const [usuario, setUsuario] = useState({
        email: "",
        password: ""
    });

    const handleCambio = (e) => {
        const {id, value} = e.target;
        setUsuario(prevUsuario => ({
            ...prevUsuario,
            [id] : value
        }))
    }

    const handleEnviar = (e) => {
        e.preventDefault();
        if(usuario.password != "") {
           iniciarSesion();
        }else{
            alert('Mamaste');
        }
    }

    const iniciarSesion = () => {
        const data = qs.stringify({
            'email': usuario.email,
            'password': usuario.password
        });

        console.log(data);

        const config = {
            method: 'post',
            url: '"https://cors-anywhere.herokuapp.com/52.36.58.203:7082/api/session',
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded'
              },
            data : data
        };

        axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
    }
 

    return(
        <s.principal>

            <s.cabecera>
                <s.wrap>
                    <s.logo><img src={logo}/></s.logo>
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
                <s.wrap style={{width: '1100px', visibility: 'visible'}}>
                    <s.caja_login>
                        <s.container>
                            <s.formulario onSubmit={handleEnviar}>
                                <s.formulatio_titulo>Iniciar Sesión</s.formulatio_titulo>
                                <s.formulario_contenido>
                                  <s.formulario_contenido_cuenta>
                                      <s.ipt_f_f_ms type="text" id="email" value={usuario.email} onChange={handleCambio} tabIndex={1} style={{display:"table-cell", color: "white"}} placeholder="Cuenta"/>
                                      <s.icono_cuenta />
                                      <s.tips_f13 />
                                      <s.entrada_limpia />
                                  </s.formulario_contenido_cuenta>

                                  <s.formulario_contenido_contrasena>
                                  <s.ipt_f_f_ms type="password" id="password" value={usuario.password} onChange={handleCambio} tabIndex={2} style={{display:"table-cell", color:"white"}} placeholder="Contraseña"/>
                                  <s.icono_contra />
                                  <s.tips_f13 />
                                  <s.entrada_limpia />
                                  </s.formulario_contenido_contrasena>

                                  <s.cl_verificar style={{display: "none"}}>
                                    <s.verificar_wrap style={{width: "300px"}}>
                                        <s.dragProgress style={{width: "0px;"}}/>
                                        <s.dragBtn style={{left: "0px"}} />
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
                            <s.icono_bandera/>
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
                            <a>OPEN API</a> &nbsp;&nbsp;
                            <a>Privacy policy</a>&nbsp;&nbsp;
                            <a>Terms of service</a>&nbsp;&nbsp;
                            <a>v3.1.9@20210121</a>&nbsp;&nbsp;
                            <a>v1</a>
                        </s.enlaces>
                    </s.copyright>

                </s.wrap_footer>
            </s.footer>

        </s.principal>
        
    )
}

export default Login;