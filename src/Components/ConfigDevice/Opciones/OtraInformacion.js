import React from 'react'
import * as s from './Opciones.styles';

const OtraInformacion = () => {
    return (
        <s.Contenedor>
            <s.Container>
                <s.InputGroup>
                    <s.Label>Nombre del Conductor:</s.Label>
                    <s.InputOtraInfo type="text">
                    </s.InputOtraInfo>
                </s.InputGroup>
                <s.InputGroup>
                    <s.Label>Móvil:</s.Label>
                    <s.InputOtraInfo type="text">
                    </s.InputOtraInfo>
                </s.InputGroup>
            </s.Container>
            <s.Container>
                <s.InputGroup>
                    <s.Label>NIV:</s.Label>
                    <s.InputOtraInfo type="text">
                    </s.InputOtraInfo>
                </s.InputGroup>
                <s.InputGroup>
                    <s.Label>Número de motor:</s.Label>
                    <s.InputOtraInfo type="text">
                    </s.InputOtraInfo>
                </s.InputGroup>
            </s.Container>
            <s.Container>
                <s.InputGroup>
                    <s.Label>Color:</s.Label>
                    <s.InputOtraInfo type="text">
                    </s.InputOtraInfo>
                </s.InputGroup>
                <s.InputGroup>
                    <s.Label>Marca de vehiculo:</s.Label>
                    <s.InputOtraInfo type="text">
                    </s.InputOtraInfo>
                </s.InputGroup>
            </s.Container>
        </s.Contenedor>
    )
}

export default OtraInformacion
