import React, { useState } from 'react'
import * as s from './Comando.styles';
import { AiOutlineRight } from "react-icons/ai";


import EnviarComando from './EnviarComando';
import Historial from './Historial';

import './styles.css';

const Comando = ({setDeviceId, setCommandName, setCommandType, setCommandDate, setTimeType, errorDevice, errorName, errorType}) => {

    return (
        <s.MainContent>
            <EnviarComando 
                setDeviceId={setDeviceId}
                setCommandName={setCommandName}
                setCommandType={setCommandType}
                setCommandDate={setCommandDate}
                setTimeType={setTimeType}
                errorDevice={errorDevice}
                errorName={errorName}
                errorType={errorType}
            /> 
        </s.MainContent>
    )
}

export default Comando
