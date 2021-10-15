import React from 'react'
import * as s from './RegistroSesion.styles';

const RegistroSesion = () => {
    return (
        <s.Contenedor>
            <s.Tabla>
                <s.Thead>
                    <s.Tr>
                        <s.Th>#</s.Th>
                        <s.Th>Fecha y Hora</s.Th>
                        <s.Th>Clente de Inicio de Sesión</s.Th>
                        <s.Th>IP de Inicio de Sesión</s.Th>
                        <s.Th>Información del Agente</s.Th>
                    </s.Tr>
                </s.Thead>
            </s.Tabla>
        </s.Contenedor>
    )
}

export default RegistroSesion
