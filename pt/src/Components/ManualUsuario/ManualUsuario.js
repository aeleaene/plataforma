import React from 'react'
import * as s from './ManualUsuario.styles';
import * as ic from 'react-icons/all';

const ManualUsuario = () => {
    return (
        <s.BodyContent>
            <s.Label><ic.FiFileText /><s.A href="#">[Pdf] Downlaod Monitor Manaual</s.A></s.Label>
            <s.Hr />
        </s.BodyContent>
    )
}

export default ManualUsuario
