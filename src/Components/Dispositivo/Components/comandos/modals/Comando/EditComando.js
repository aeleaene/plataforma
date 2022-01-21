import React, { useState } from 'react'
import * as s from './Comando.styles';
import { AiOutlineRight } from "react-icons/ai";


import EditarComando from './EditarComando ';

import './styles.css';

const Comando = ({deviceIdEdit, commandNameEdit, commandTypeEdit, commandDateEdit, timeTypeEdit, setDeviceIdEdit, setCommandNameEdit, setCommandTypeEdit, setCommandDateEdit, setTimeTypeEdit, errorDevice, errorName, errorType}) => {

    return (
        <s.MainContent>
            <EditarComando
                    deviceIdEdit={deviceIdEdit}
                    commandNameEdit={commandNameEdit}
                    commandTypeEdit={commandTypeEdit}
                    commandDateEdit={commandDateEdit}
                    timeTypeEdit={timeTypeEdit}

                    setDeviceIdEdit={setDeviceIdEdit}
                    setCommandNameEdit={setCommandNameEdit}
                    setCommandTypeEdit={setCommandTypeEdit}
                    setCommandDateEdit={setCommandDateEdit}
                    setTimeTypeEdit={setTimeTypeEdit}

                    errorDevice={errorDevice}
                    errorName={errorName}
                    errorType={errorType}
            /> 
        </s.MainContent>
    )
}

export default Comando
