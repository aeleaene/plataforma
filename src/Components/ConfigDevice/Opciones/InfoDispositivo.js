import React from 'react'
import * as s from './Opciones.styles';

const InfoDispositivo = () => {
    return (
        <s.Contenedor>
            <s.Container>
                <s.InputGroup>
                    <s.Label>Nombre:</s.Label>
                    <s.InputOtraInfo type="text" />
                </s.InputGroup>
                <s.InputGroup>
                    <s.Label>Número de placa del vehículo:</s.Label>
                    <s.InputOtraInfo type="text" />
                </s.InputGroup>
            </s.Container>
            <s.Container>
                <s.InputGroup>
                    <s.Label>IMEI:</s.Label>
                </s.InputGroup>
                <s.InputGroup>
                    <s.Label>Tipo:</s.Label>
                </s.InputGroup>
            </s.Container>
            <s.Container>
                <s.InputGroup>
                    <s.Label>Sim Card:</s.Label>
                </s.InputGroup>
            </s.Container>
            <s.Container>
                <s.InputGroup>
                    <s.Label>Tiempo Online:</s.Label>
                </s.InputGroup>
                <s.InputGroup>
                    <s.Label>Fecha de Vencimiento:</s.Label>
                </s.InputGroup>
            </s.Container>
            <s.Container>
                <s.InputGroup>
                    <s.Label>Última Actualización:</s.Label>
                </s.InputGroup>
            </s.Container>
            <s.Container>
                <s.InputGroup>
                    <s.Label>Icono:</s.Label>
                </s.InputGroup>
                <s.InputGroup>
                    <s.Label>Imagen del Vehículo:</s.Label>
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

export default InfoDispositivo
