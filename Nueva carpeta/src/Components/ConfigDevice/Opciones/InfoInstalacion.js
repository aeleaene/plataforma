import React from 'react'
import * as s from './Opciones.styles';

const InfoInstalacion = () => {
    return (
        <s.Contenedor>
            <s.Container>
                <s.InputGroup>
                    <s.Label>Técnico Instalador:</s.Label>
                    <s.InputOtraInfo type="text" />
                </s.InputGroup>
                <s.InputGroup>
                    <s.Label>Tiempo de Instalación:</s.Label>
                    <s.InputOtraInfo type="date" />
                </s.InputGroup>
            </s.Container>
            <s.Container>
                <s.InputGroup>
                    <s.Label>Empresa de Instalación:</s.Label>
                    <s.InputOtraInfo type="text" />
                </s.InputGroup>
                <s.InputGroup>
                    <s.Label>Dirección de Instalación:</s.Label>
                    <s.InputOtraInfo type="text" />
                </s.InputGroup>
            </s.Container>
            <s.Container>
                <s.InputGroup>
                    <s.Label>Dirección de Instalación:</s.Label>
                    <s.InputOtraInfo type="text"/>
                </s.InputGroup>
            </s.Container>
            <s.Container>
                <s.InputGroup>
                    <s.Label>Imagen de Instalación:</s.Label>
                    <s.InputOtraInfo type="file" />
                </s.InputGroup>
            </s.Container>
            <s.InputGroupTextArea>
                    <s.Label>Observación:</s.Label>
                    <s.TextArea></s.TextArea>
            </s.InputGroupTextArea>
        </s.Contenedor>
    )
}

export default InfoInstalacion
