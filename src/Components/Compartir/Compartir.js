import React from 'react'
import * as s from './Compartir.styles';

const Compartir = () => {
    return (
        <s.Contenedor>
            <s.InputGroup>
                <s.Label><s.Sup>*</s.Sup> Dispositivo:</s.Label>
                <s.Select></s.Select>
            </s.InputGroup>
            <s.InputGroup>
                <s.Label><s.Sup>*</s.Sup> Nombre del Link a compartir:</s.Label>
                <s.Input type="text"></s.Input>
            </s.InputGroup>
            <s.InputGroup>
                <s.Label><s.Sup>*</s.Sup> Tiempo de Inicio:</s.Label>
                <s.Input type="date"/>
            </s.InputGroup>
            <s.InputGroup>
                <s.Label><s.Sup>*</s.Sup> Tiempo Final:</s.Label>
                <s.Input type="date"/>
                <s.DivSpan>
                    <s.Span>Hoy </s.Span>|
                    <s.Span>Mañana </s.Span>|
                    <s.Span>Tres Días</s.Span>
                </s.DivSpan>
            </s.InputGroup>
            <s.InputGroup>
                <s.Label><s.Sup>*</s.Sup> Observación:</s.Label>
                <s.TextArea></s.TextArea>
            </s.InputGroup>
        </s.Contenedor>
    )
}

export default Compartir