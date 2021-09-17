import React, {useEffect, useState} from 'react'
import * as s from '../../Reportes.styles';
import {BiBarChart} from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";

import DataTable from 'react-data-table-component';

import '../../styles.css'

const InfoKilo = () => {
    const [device, setDevice] = useState([]); //SE GUARDAN LOS JSON MEZCALDOS
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");
    const [devAll, setDevAll] = useState([]); //Id's de todos los dispositivos
    const [deviceId, setDeviceId] = useState("");
    useEffect(() => {
        DevicesAll()
    }, [])
    const Datos = () => {
        Devices();
        /* console.log(`https://www.protrack.ad105.net/api/devices/${deviceId}`)
        console.log(`https://www.protrack.ad105.net/api/positions?deviceId=${deviceId}&from=${dateFrom}.000z&to=${dateTo}.000z`) */
    }
    console.log(dateFrom)
    console.log(dateTo);
    console.log(deviceId);
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
                    const resultado2 = await fetch(`https://www.protrack.ad105.net/api/positions?deviceId=${deviceId}&from=${dateFrom}.000z&to=${dateTo}.000z`, requestOptions)
                    /* .then(response => response.json())
                    .catch(error => console.log('error', error)); */
                    const deviceData = await resultado.json();
                    const deviceData2 = await resultado2.json();

                    var full = [] //JSONS MEZClados
                    console.log(deviceData)
                    console.log(deviceData2)
                    Object.keys(deviceData2).forEach(k=>{full[k] = Object.assign(deviceData2[k],deviceData)});

                    console.log('full data')
                    console.log(full);
                    setDevice(full);
            }
    }
    const Fecha = (fecha) => {
        const fecha1 = new Date();
        const date = new Date(fecha);
        if (fecha1.getDate() === date.getDate()) {
            return date.getHours()+':'+ date.getMinutes()+':'+date.getSeconds();
        }
        return date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate();
    }
    //TODO: https://www.protrack.ad105.net/api/positions?deviceId=1&from=2021-08-06T21:48:56.000z&to=2021-08-06T21:48:56.000z
    /* const data = [{ id: 1, objetivo: 'Vehiculo 1', kilometraje: '6.22', velocidad: '76', estadia: '2' }] */
    const columns = [
        {
            name: '#',
            selector: 'deviceId',
            sortable: true,
        },
        {
            name: 'Objetivo',
            selector: 'name',
            sortable: true,
        },
        {
            name: 'Fecha',
            sortable: true,
            cell: row => <span>{Fecha(row.serverTime)}</span>
        },
        {
            name: 'Kilometraje (Km)',
            sortable: true,
            cell: row => <span>{((row.speed)*1.852).toFixed(2)+' Km/h'}</span>
        },
        {
            name: 'Exceso de Velocidad(Tiempos)',
            selector: 'velocidad',
            sortable: true,
        },
        {
            name: 'Estadia(Tiempos)',
            selector: 'estadia',
            sortable: true,
        },
        {
            name: 'Combustible (L)',
            selector: 'combustible',
            sortable: true,
        },
    ];
    return (
        <s.caja_dispositivo_panelGral style={{left:'0px', top:'0px', marginTop:'10px', marginLeft:'10px'}}>
                
            <s.caja_dispositivo_titulo >
            
                <s.barra_arrastable />
                <s.barra_superior_tituloGral>
                &nbsp;
                    &nbsp;<BiBarChart />&nbsp;&nbsp;Informe sobre Kilometraje
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
                        <s.LabelGral><s.CheckBox type="radio" name="infoGral"/>Detalles Diarios </s.LabelGral>
                        <s.LabelGral><s.CheckBox type="radio" name="infoGral"/>Detalles del Periodo</s.LabelGral>
                        <div>
                            <div>
                            <s.LabelGral>Fecha <s.inputGral type="datetime-local" step="1" onChange={(e) => setDateFrom(e.target.value)} value={dateFrom}/></s.LabelGral>
                            <s.LabelGral>A <s.inputGral type="datetime-local" step="1" onChange={(e) => setDateTo(e.target.value)} value={dateTo}/></s.LabelGral>
                            </div>
                            <s.SmallGral>El rango de tiempo máximo es de 30 días. Por favor, para más informes.<s.AGral> Programar Ahora</s.AGral></s.SmallGral>
                        </div>
                        <s.InfoBoton onClick={() => Datos()}>Comprobar</s.InfoBoton>
                        <s.ExportBoton>Exportar por Lotes</s.ExportBoton>
                    </s.row1>
                    <s.row2>
                        <s.DivSpan>
                            <s.SpanFechas>Ayer </s.SpanFechas>|
                            <s.SpanFechas>Esta Semana </s.SpanFechas>|
                            <s.SpanFechas>La Semana Pasada</s.SpanFechas>|
                            <s.SpanFechas>Este Mes</s.SpanFechas>|
                            <s.SpanFechas>Mes Pasado</s.SpanFechas>
                        </s.DivSpan>
                    </s.row2>
                    <s.divTable>
                        <DataTable
                            columns={columns}
                            data={device}
                            striped={true}
                            highlightOnHover={true}
                            pointerOnHover={true}
                        />
                    </s.divTable>
                    <s.divButonsGral>
                        <s.ExcelButon>Exportar Excel</s.ExcelButon>
                        <s.PrintButon>Imprimir</s.PrintButon>
                    </s.divButonsGral>
                </s.contentReportesDiv>
            </s.contenido_panel_dispositivo>  
        </s.caja_dispositivo_panelGral>
    )
}

export default InfoKilo
