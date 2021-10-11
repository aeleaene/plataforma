import React from 'react'
import * as s from './Comando.styles';


import { usePromiseTracker } from 'react-promise-tracker';
import { trackPromise } from 'react-promise-tracker';

import { FaCheck } from 'react-icons/fa';


const Historial = ({ objetivo }) => {

    const fecha = new Date();
    const [historial, setHistorial] = React.useState([]);
    const [bandera, setBandera] = React.useState(false);

    const mostrarReportes = () => {
        return(
            <s.command_history_item>
                <s.cmd_history_num>
                    <s.span_NO></s.span_NO>
                </s.cmd_history_num>

                <s.cmd_status>
                <FaCheck />
                </s.cmd_status>

                <s.cmd_history_key>
                tipo [ <s.el_button> <span>Repetir</span> </s.el_button> ]
                </s.cmd_history_key>

                <s.cmd_history_desc>
                Descripción
                </s.cmd_history_desc>

            </s.command_history_item>
        )
    }

    const mostrarHis = historial.map((number) =>
    <p>{number}</p> 
    );

    const comandoHistorial = (e) => {
        e.preventDefault();
        const reporte = historial;
        var requestOptions = {
            method: 'GET',
            credentials: 'include'
        };
        trackPromise(
            fetch("https://www.protrack.ad105.net/api/commands", requestOptions)
                .then(response => response.json())
                .then((responseData) => {
                    for (var i = 0; i < responseData.length; i++) {
                        console.log(responseData[i].deviceId);
                        if (responseData[i].deviceId === objetivo.id) {
                        
                           reporte.push(responseData[i]);
                           setHistorial([...reporte]);
                        }
                    }
                }).catch(error => console.warn(error))
        );
        console.log(historial);
        setBandera(true);
    }

    const mostrar = () => {
        mostrarReportes();
    }

    return (
        <s.HistorialBody>
            <s.HistorialNav>
                <s.divNav1>
                    <s.HistorialSelect disabled={bandera} >
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
                    <s.HistorialButton disabled={bandera} onClick={comandoHistorial}>Búsqueda</s.HistorialButton>
                </s.divNav1>
                <s.duvNav2></s.duvNav2>



            </s.HistorialNav>

            <s.command_history_content>
                {historial.map(val => <s.command_history_item><s.cmd_history_num><s.span_NO>{val.id}</s.span_NO></s.cmd_history_num><s.cmd_status><FaCheck /></s.cmd_status><s.cmd_history_key>{val.description} [ <s.el_button> <span>Repetir</span> </s.el_button> ]</s.cmd_history_key><s.cmd_history_desc>Consulta realizada el día: | tipo de comando: {val.type}</s.cmd_history_desc></s.command_history_item>)}
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