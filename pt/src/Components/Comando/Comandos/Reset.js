import React from 'react'
import * as s from './Comandos.styles';
import { BsChevronDoubleRight } from "react-icons/bs";

const Reset = ({objetivo}) => {
    const comando = e => {
        e.preventDefault()

        var data = JSON.stringify({
            "deviceId": objetivo.id,
            "Type": "custom",
            "id": 9,
        })

        var requestOptions = {
            method: 'POST',
            redirect: 'manual',
            credentials: 'include',
            body: data
          };
          
          fetch("https://www.protrack.ad105.net/api/commands/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    return (
        <s.Content>
            <s.HeadComands><BsChevronDoubleRight/> Reset</s.HeadComands>
            <s.ComandContent>
                <s.InputGroup>
                    <s.DivLabel><s.Label>Objetivo </s.Label></s.DivLabel>
                    <s.DivCont><s.InputDis type="text" value={objetivo.name} disabled/></s.DivCont>
                </s.InputGroup>
                <s.InputGroup>
                    <s.DivLabel><s.Label>Contraseña </s.Label></s.DivLabel>
                    <s.DivCont><s.Input type="password"/></s.DivCont>
                </s.InputGroup>
                <s.InputGroup>
                    <s.DivLabel></s.DivLabel>
                    <s.DivCont><s.Span>Por favor ingrese su contraseña.</s.Span></s.DivCont>
                </s.InputGroup>
                <s.InputGroup>
                    <s.DivLabel></s.DivLabel>
                    <s.DivCont><s.Button>Enviar</s.Button></s.DivCont>
                </s.InputGroup>
            </s.ComandContent>
        </s.Content>
    )
}

export default Reset
