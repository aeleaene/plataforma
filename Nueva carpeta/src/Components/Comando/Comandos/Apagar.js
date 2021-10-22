import React from 'react'
import * as s from './Comandos.styles';
import * as r from './Response.styles';
import { BsChevronDoubleRight } from "react-icons/bs";

import { FcInfo } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";

import { usePromiseTracker } from 'react-promise-tracker';
import { trackPromise } from 'react-promise-tracker';

import Loader from 'react-loader-spinner';

const Apagar = ({objetivo}) => {

    const LoadingIndicator = () => {
        const { promiseInProgress } = usePromiseTracker();
        return (
            promiseInProgress &&
            <s.animacionCargar>
                <Loader type="Oval" color="#ffab05" height="50" width="50" />
            </s.animacionCargar>
        );
    }

    const [reporte, setReporte] = React.useState();
    const [pass, setPass] = React.useState();
    const [passs, setPasss] = React.useState('');
    const [toggle, setToggle] = React.useState(true);

    const handleToggle = (e) => {
        e.preventDefault();
        setToggle(!toggle)
    }

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    const handleCambio = (e) => {
        setPasss(e.target.value);
    }

    const validarPass = e => {
        setPass(getCookie("passCk"));
        if (pass === passs) {
            comando();
        } else {
            setReporte("Verificar credenciales");
            setToggle(!toggle);
        }
    }

    const posicion = (e) => {
        var requestOptions = {
            method: 'GET',
            credentials: 'include'
        };
        trackPromise(
            fetch("https://www.protrack.ad105.net/api/positions", requestOptions)
                .then(response => response.json())
                .then((responseData) => {
                        setReporte("Motor apagado OK");
                }).catch(error => console.warn(error))
        );
        setToggle(!toggle);
    }

    const comando = e => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var data = JSON.stringify({
            "id": -1,
            "deviceId": objetivo.id,
            "textChannel": false,
            "type": "engineStop",
            "description": "aPAGAR motor"

        })

        var requestOptions = {
            method: 'POST',
            credentials: 'include',
            body: data,
            headers: myHeaders
        };

        fetch("https://www.protrack.ad105.net/api/commands", requestOptions)
            .then((response) => {
                if (response.status === 200) {
                    posicion();
                } else {
                    setReporte('Comando no enviado');
                    setToggle(!toggle);
                }
            })

    }
    return (
        <s.Content>
            <s.HeadComands><BsChevronDoubleRight/> Apagar</s.HeadComands>
            <s.ComandContent>
                <s.InputGroup>
                    <s.DivLabel><s.Label>Objetivo </s.Label></s.DivLabel>
                    <s.DivCont><s.InputDis type="text" value={objetivo.name} disabled/></s.DivCont>
                </s.InputGroup>
                <s.InputGroup>
                    <s.DivLabel><s.Label>Contraseña </s.Label></s.DivLabel>
                    <s.DivCont><s.Input type="password" onChange={handleCambio}/></s.DivCont>
                </s.InputGroup>
                <s.InputGroup>
                    <s.DivLabel></s.DivLabel>
                    <s.DivCont><s.Span>Por favor ingrese su contraseña.</s.Span></s.DivCont>
                </s.InputGroup>
                <s.InputGroup>
                    <s.DivLabel></s.DivLabel>
                    <s.DivCont><s.Button onClick={validarPass}>Enviar</s.Button></s.DivCont>
                </s.InputGroup>

                <r.response_wrapper visibility={toggle}>
                <r.el_message_box>
                    <r.el_message_box_header>
                        <r.el_message_box_title>
                            <r.Span>Response</r.Span>
                            <r.el_message_box_headerBtn>
                                <r.el_message_box_close onClick={handleToggle}>
                                    <AiOutlineClose />
                                </r.el_message_box_close>
                            </r.el_message_box_headerBtn>
                        </r.el_message_box_title>
                    </r.el_message_box_header>


                    <r.el_message_box_content>
                        <r.el_message_box_container>

                            <r.el_message_box_status>
                                <FcInfo />
                            </r.el_message_box_status>

                            <r.el_message_box_message>
                                <r.P>
                                    <r.f13>
                                        {reporte}
                                    </r.f13>
                                </r.P>
                            </r.el_message_box_message>

                        </r.el_message_box_container>
                    </r.el_message_box_content>
                </r.el_message_box>
            </r.response_wrapper>
            </s.ComandContent>
        </s.Content>
    )
}

export default Apagar
