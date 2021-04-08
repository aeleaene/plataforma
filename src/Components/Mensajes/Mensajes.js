import React from 'react'
import * as s from './Mensajes.styles';
import * as ic from 'react-icons/all';

const Mensajes = () => {
    return (
        <s.BodyContent>
            <s.Label>
                <ic.FiFileText/>
                <s.P>Sin datos</s.P>
            </s.Label>
        </s.BodyContent>
    )
}

export default Mensajes
