import React from 'react'
import * as s from './ApiGoogle.styles';
import * as ic from 'react-icons/all';

const ApiGoogle = () => {
    return (
        <s.Contenedor>
            <s.ContentInfo>
                <ic.BsInfoCircleFill style={{
                    fontSize: 14,
                    color: '#2cabe3'
                }}/>
                <s.Label>
                La clave de la API de Google Maps se usa para acceder a la API de Google Maps. Si desea que la información de la dirección sea más precisa, debe registrarse en la Consola de la API de Google y obtener su propia clave. Al tener una clave API, se le otorga su límite gratuito individual de consultas de los usuarios, de acuerdo con su cuota. Además, con la clave de la API de Google Maps, puede monitorear sus consultas y controlarlas si es necesario.<s.A> Precios de la API de Google Maps</s.A>
                </s.Label>
            </s.ContentInfo>
            <s.ButtonContent>
                <s.ActiveButton>Nuevo</s.ActiveButton>
                <s.SecondButton>¿Cómo utlizar?</s.SecondButton>
            </s.ButtonContent>
            <s.Table>
                <s.THead>
                    <s.Tr>
                        <s.Th>Llave</s.Th>
                        <s.Th>Tipo</s.Th>
                        <s.Th>Estado de la clave API</s.Th>
                        <s.Th>Estado</s.Th>
                        <s.Th>Operación</s.Th>
                    </s.Tr>
                </s.THead>
                <s.TBody>
                    
                </s.TBody>
            </s.Table>
        </s.Contenedor>
    )
}

export default ApiGoogle
