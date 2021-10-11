import React from 'react'
import * as s from './Comando.styles';


import { usePromiseTracker } from 'react-promise-tracker';
import { trackPromise } from 'react-promise-tracker';

import { FaCheck } from 'react-icons/fa';


const Historial = ({ objetivo }) => {

    const [fecha, setFecha] = React.useState('Fecha del d[ia de hoy mi valedor');
    const [historial, setHistorial] = React.useState([]);

    const comandoHistorial = (e) => {
        e.preventDefault();
        var requestOptions = {
            method: 'GET',
            credentials: 'include'
        };
        trackPromise(
            fetch("https://www.protrack.ad105.net/api/commands", requestOptions)
                .then(response => response.json())
                .then((responseData) => {
                    for (var i = 0; i < responseData.length; i++) {
                        if (responseData[i].deviceId === objetivo.id) {
                           console.log(responseData[i]);
                        }
                    }
                }).catch(error => console.warn(error))
        );
        console.log(historial);
    }


    return (
        <s.HistorialBody>
            <s.HistorialNav>
                <s.divNav1>
                    <s.HistorialSelect>
                        <option value="" selected>TODOS</option>
                        <option value="">Ubicación</option>
                        <option value="">Apagar Motor</option>
                        <option value="">Restaurar Motor</option>
                        <option value="">Número de SOS</option>
                        <option value="">Check Status</option>
                        <option value="">Parámetros</option>
                        <option value="">GPRS Settings</option>
                        <option value="">Versión</option>
                        <option value="">Reset</option>
                        <option value="">Comandos</option>
                    </s.HistorialSelect>
                    <s.HistorialButton onClick={comandoHistorial}>Búsqueda</s.HistorialButton>
                </s.divNav1>
                <s.duvNav2></s.duvNav2>



            </s.HistorialNav>

            <s.command_history_content>
                
            </s.command_history_content>
        </s.HistorialBody>
    )
}

        {/*return(
            <s.command_history_item>
            <s.cmd_history_num>
                <s.span_NO>1</s.span_NO>
            </s.cmd_history_num>

            <s.cmd_status>
                <FaCheck />
            </s.cmd_status>

            <s.cmd_history_key>
                {historial.type} [ <s.el_button> <span>Repetir</span> </s.el_button> ]
            </s.cmd_history_key>

            <s.cmd_history_desc>
                {historial.description}
            </s.cmd_history_desc>
        </s.command_history_item>
        )*/}

export default Historial
