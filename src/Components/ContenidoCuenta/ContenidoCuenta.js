import React from 'react'
import * as s from './ContenidoCuenta.styles';
import perfil from '../../assets/images/perfil.jpg';
import * as ic from 'react-icons/all';

const ContenidoCuenta = () => {
    return (
        <s.Contenedor>
            <s.ContentOne>
                <s.ContentOneInside>
                    <s.InputGroup>
                        <s.Label>Cuenta:</s.Label>
                        <s.Input type="text" disabled  style={{backgroundColor: '#f5f7fa', cursor: 'not-allowed'}}/>
                    </s.InputGroup>
                    <s.InputGroup>
                    <s.Label>Nombre:</s.Label>
                        <s.Input type="text"/>
                    </s.InputGroup>
                </s.ContentOneInside>
                <s.ContentImage>
                <s.InputGroup style={{ paddingRight: 0}}>
                    <s.Label>Retrato:</s.Label>
                    <s.Img src={perfil}/>
                    <s.EditButon><ic.FiEdit3 /></s.EditButon>
                </s.InputGroup>
                </s.ContentImage>
            </s.ContentOne>

            <s.ContentTwo>
                <s.InputGroup>
                    <s.Label>Contacto:</s.Label>
                    <s.Input type="text"/>
                </s.InputGroup>
                <s.InputGroup>
                    <s.Label>Móvil:</s.Label>
                    <s.Input type="text"/>
                </s.InputGroup>
            </s.ContentTwo>

            <s.ContentTwo>
                <s.InputGroup>
                    <s.Label>Teléfono:</s.Label>
                    <s.Input type="text"/>
                </s.InputGroup>
                <s.InputGroup>
                    <s.Label>Correo Electrónico:</s.Label>
                    <s.Input type="text"/>
                </s.InputGroup>
            </s.ContentTwo>

            <s.ContentTwo>
                <s.InputGroup>
                    <s.Label>Página Web:</s.Label>
                    <s.Input type="text" />
                </s.InputGroup>
                <s.InputGroup>
                    <s.Label>Crear Tiempo:</s.Label>
                    <s.Input type="text" disabled style={{backgroundColor: '#f5f7fa', cursor: 'not-allowed'}}/>
                </s.InputGroup>
            </s.ContentTwo>
            <s.InputGroup>
                <s.Label>Dirección:</s.Label>
                <s.TextArea></s.TextArea>
            </s.InputGroup>
        </s.Contenedor>
    )
}

export default ContenidoCuenta
