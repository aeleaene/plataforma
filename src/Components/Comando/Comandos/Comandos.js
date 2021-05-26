import React from 'react'
import * as s from './Comandos.styles';
import { BsChevronDoubleRight } from "react-icons/bs";

const Comandos = () => {
    return (
        <s.Content>
            <s.HeadComands><BsChevronDoubleRight/> Comandos</s.HeadComands>
            <s.ComandContent>
                <s.InputGroup>
                    <s.DivLabel><s.Label>Objetivo </s.Label></s.DivLabel>
                    <s.DivCont><s.InputDis type="text" disabled/></s.DivCont>
                </s.InputGroup>
                <s.InputGroup>
                    <s.DivLabel></s.DivLabel>
                    <s.DivCont><s.Button>Enviar</s.Button></s.DivCont>
                </s.InputGroup>
            </s.ComandContent>
        </s.Content>
    )
}

export default Comandos
