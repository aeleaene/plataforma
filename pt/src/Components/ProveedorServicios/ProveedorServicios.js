import React from 'react'
import * as s from './ProveedorServicios.styles';

const ProveedorServicios = () => {
    return (
        <s.Contenido>
            <s.Contenedor>
                <s.Label>GLOBAL GPS SYSTEM</s.Label>
                <s.ContentGps>
                    <s.SpanGps>Contacto:</s.SpanGps>
                    <s.SpanGps>GPS</s.SpanGps>
                </s.ContentGps>
                <s.Span>Móvil:</s.Span>
                <br/>
                <s.Span>Correo electrónico:</s.Span>
            </s.Contenedor>
        </s.Contenido>
    )
}

export default ProveedorServicios
