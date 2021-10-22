import React, { useEffect, useState } from 'react'
import * as s from '../Dispositivo.styles';
import {BiBarChart} from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import {  BsPencil   } from "react-icons/bs";
import {  FiArrowDownCircle   } from "react-icons/fi";

import DataTable from 'react-data-table-component';

import '../styles.css';

const GestionLinks = () => {
    const [device, setDevice] = useState([]); //SE GUARDAN LOS JSON MEZCALDOS
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");
    const [devAll, setDevAll] = useState([]); //Id's de todos los dispositivos
    const [deviceId, setDeviceId] = useState("");
    useEffect(() => {
        DevicesAll()
    }, [])
    const Datos = () => {
        Devices()
    }
    const DevicesAll = async() =>{
        var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Accept", "*/*");

            var requestOptions = {
                method: 'GET',
                credentials: 'include',
                headers: myHeaders,
                redirect: 'follow'
            };
            
            const resulDev = await fetch("https://www.protrack.ad105.net/api/devices", requestOptions)
            const resDev = await resulDev.json()

            setDevAll(resDev);
    }
    const Devices = async() =>{
        var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Accept", "*/*");

            var requestOptions = {
                method: 'GET',
                credentials: 'include',
                headers: myHeaders,
                redirect: 'follow'
            };
            
            if (dateFrom === "" && dateTo === "" && deviceId === "") {
                const resultado = await fetch("https://www.protrack.ad105.net/api/devices", requestOptions)
                const resultado2 = await fetch(`https://www.protrack.ad105.net/api/positions`, requestOptions)
                /* .then(response => response.json())
                .catch(error => console.log('error', error)); */
                const deviceData = await resultado.json();
                const deviceData2 = await resultado2.json();

                var full = [] //JSONS MEZClados
                Object.keys(deviceData).forEach(k=>{full[k] = Object.assign(deviceData[k],deviceData2[k])});

                console.log('full data')
                console.log(full);
                setDevice(full);
            }
            else{
                const resultado = await fetch(`https://www.protrack.ad105.net/api/devices/${deviceId}`, requestOptions)
                const resultado2 = await fetch(`https://www.protrack.ad105.net/api/positions?deviceid=${deviceId}&from=${dateFrom}:00.000z&to=${dateTo}:00.000z`, requestOptions)
                /* .then(response => response.json())
                .catch(error => console.log('error', error)); */
                const deviceData = await resultado.json();
                const deviceData2 = await resultado2.json();

                var full = [] //JSONS MEZClados
                Object.keys(deviceData).forEach(k=>{full[k] = Object.assign(deviceData[k],deviceData2[k])});

                console.log('full data')
                console.log(full);
                setDevice(full);
            }
    }
    const data = [{ id: 1, objetivo: 'Vehiculo 1', kilometraje: '6.22', velocidad: '76', estadia: '2' }]
    const columns = [
        {
            name: '#',
            selector: 'deviceId',
            sortable: true,
        },
        {
            name: 'Nombre de link a compartir',
            selector: 'link',
            sortable: true,
        },
        {
            name: 'Dispositivo',
            selector: 'name',
            sortable: true,
        },
        {
            name: 'IMEI',
            selector: 'uniqueId',
            sortable: true,
        },
        {
            name: 'Periodo',
            selector: 'periodo',
            sortable: true,
        },
        {
            name: 'Estado',
            selector: 'status',
            sortable: true,
        },
        {
            name: 'Ubicación',
            selector: 'ubiacion',
            sortable: true,
        },
        {
            name: 'Crear Tiempo',
            selector: 'tiempo',
            sortable: true,
        },
        {
            name: 'Operación',
            cell:(row) =>
                        <s.tableButtons>
                            <s.tabButton id={row.ID}><BsPencil /></s.tabButton>
                            <s.tabButton id={row.ID}><FiArrowDownCircle /></s.tabButton>
                        </s.tableButtons> ,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];
    return (
        <div className="menuContent" style={{left:'0px', top:'0px', marginTop:'10px', marginLeft:'10px'}}>
                
            <s.caja_dispositivo_titulo >
            
                <s.barra_arrastable />
                <s.barra_superior_tituloGral>
                &nbsp;
                    &nbsp;<BiBarChart />&nbsp;&nbsp;Gestionar link`s compartidos
                </s.barra_superior_tituloGral>
            </s.caja_dispositivo_titulo>

            <s.contenido_panel_dispositivo>
                {/* CONTENIDO */}
                <s.contentReportesDiv>
                    <s.row1>
                        <s.LabelGral>Dispositivo <s.selecttGral onChange={(e) => setDeviceId(e.target.value)}>
                                <option value="" selected> -- Dispositivo -- </option>
                            {devAll.map((item) => (
                                <option value={item.id}>{item.name}</option>
                            ))}
                        </s.selecttGral></s.LabelGral>
                        <s.LabelGral>Crear Tiempo <s.inputGral type="datetime-local" onChange={(e) => setDateFrom(e.target.value)}/></s.LabelGral>
                        <s.LabelGral>A <s.inputGral type="datetime-local" onChange={(e) => setDateTo(e.target.value)}/></s.LabelGral>
                        <s.LabelGral>Tipo de Alarma <s.selecttGral></s.selecttGral> </s.LabelGral>
                        <s.InfoBoton onClick={() => Datos()}>Comprobar</s.InfoBoton>
                        <s.GenBoton><AiOutlinePlus /> Nuevo</s.GenBoton>
                    </s.row1>
                    <s.divTable>
                        <DataTable
                            columns={columns}
                            data={device}
                            striped={true}
                            highlightOnHover={true}
                            pointerOnHover={true}
                        />
                    </s.divTable>
                </s.contentReportesDiv>
            </s.contenido_panel_dispositivo>  
        </div>
    )
}

export default GestionLinks
