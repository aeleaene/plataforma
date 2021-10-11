import React from 'react'
import * as s from './ModificarPassword.styles';

const ModificarPassword = () => {
    return (
        <s.BodyContent>
            <s.InputGroup>
                <s.Label><s.Sup>*</s.Sup>Contraseña Anterior:</s.Label>
                <s.Input type="text"/>
            </s.InputGroup>
            <s.InputGroup>
                <s.Label><s.Sup>*</s.Sup>Nueva Contraseña:</s.Label>
                <s.Input type="text"/>
            </s.InputGroup>
            <s.InputGroup>
                <s.Label><s.Sup>*</s.Sup>Confirmar Contraseña:</s.Label>
                <s.Input type="text"/>
            </s.InputGroup>
        </s.BodyContent>
    )
}

export default ModificarPassword
