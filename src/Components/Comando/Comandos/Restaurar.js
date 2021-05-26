import React from 'react'
import * as s from './Comandos.styles';
import { BsChevronDoubleRight } from "react-icons/bs";

const Restaurar = () => {
    return (
        <s.Content>
            <s.HeadComands><BsChevronDoubleRight/> Restaurar motor</s.HeadComands>
            <s.ComandContent>
                <s.InputGroup>
                    <s.DivLabel><s.Label>Objetivo </s.Label></s.DivLabel>
                    <s.DivCont><s.InputDis type="text" disabled/></s.DivCont>
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

export default Restaurar
