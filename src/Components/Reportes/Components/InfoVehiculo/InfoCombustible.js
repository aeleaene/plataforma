import React, {useEffect, useState} from 'react'
import * as s from '../../Reportes.styles';
import {BiBarChart, BiBorderTop} from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";

import ReactECharts from 'echarts-for-react';

import DataTable from 'react-data-table-component';

import '../../styles.css';

const InfoCombustible = () => {
    const [device, setDevice] = useState([]);
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
    console.log(dateFrom)
    console.log(dateTo);
    const DateFromValue = e => {
        let date = new Date(e);
        setDateFrom(date.toISOString());
        //console.log(date.toISOString());
    }
    const DateToValue = e => {
        let date = new Date(e);
        setDateTo(date.toISOString());
        //console.log(date.toISOString());
    }
    const DateYesterday = () => {
        let date = new Date();
        date = date.setDate(date.getDate() -1);
        let date2 = new Date(date);
        date2 = date2.toISOString();
        setDateFrom(date2);
        setDateTo(date2);
        console.log(date2)
        Datos();
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
        /* var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Accept", ); */

            /* var requestOptions = {
                method: 'GET',
                credentials: 'include',
                headers: myHeaders,
                redirect: 'follow'
            };
            
            if (dateFrom === "" && dateTo === "" && deviceId === "") {
                const resultado = await fetch("https://www.protrack.ad105.net/api/devices", requestOptions)
                const resultado2 = await fetch(`https://www.protrack.ad105.net/api/positions`, requestOptions)
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
                const deviceData = await resultado.json();
                const deviceData2 = await resultado2.json();

                var full = [] //JSONS MEZClados
                Object.keys(deviceData).forEach(k=>{full[k] = Object.assign(deviceData[k],deviceData2[k])});

                console.log('full data')
                console.log(full);
                setDevice(full);
            } */
    }
    const Fecha = (fecha) => {
        const date = new Date(fecha);
        return date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate()+' '+date.getHours()+':'+ date.getMinutes()+':'+date.getSeconds();
    }
    const data = [{ id: '', objetivo: '', kilometraje: '', velocidad: '', estadia: '' }]
    const columns = [
        {
            name: '#',
            selector: 'deviceId',
            sortable: true,
        },
        {
            name: 'Fecha y Hora',
            selector: 'time',
            sortable: true,
        },
        {
            name: 'Repostar/El consumo de combustible',
            selector: 'consumo',
            sortable: true,
        },
        {
            name: 'Combustible (L)',
            selector: 'combustible',
            sortable: true,
        },
        {
            name: 'Volumen inicial (L)',
            selector: 'vinicial',
            sortable: true,
        },
        {
            name: 'Volumen final (L)',
            selector: 'vfinal',
            sortable: true,
        },
        {
            name: 'Kilometraje (Km)',
            selector: 'kilometraje',
            sortable: true,
        },
        {
            name: 'Odometro (Km)',
            selector: 'odometro',
            sortable: true,
        },
        {
            name: 'Consumo medio de combustible(L/100KM)',
            selector: 'consumomedio',
            sortable: true,
        },
        {
            name: 'Ubicación',
            selector: 'ubicacion',
            sortable: true,
        },
    ];
    const options = {
        grid: { top: 8, right: 8, bottom: 24, left: 36, containLabel: true },
        xAxis: {
            type: 'category',
            data: ['', '', '', '', '', 'Odometro'],
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                data: ['Sin Datos'],
                type: 'line',
                smooth: true,
                areaStyle: {normal: {}},
            },
        ],
        tooltip: {
            trigger: 'axis',
        },
    };
    return (
        <s.caja_dispositivo_panelGral style={{left:'0px', top:'0px', marginTop:'10px', marginLeft:'10px'}}>
                
            <s.caja_dispositivo_titulo >
            
                <s.barra_arrastable />
                <s.barra_superior_tituloGral>
                &nbsp;
                    &nbsp;<BiBarChart />&nbsp;&nbsp;Informe de combustible
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
                        <div>
                            <div>
                            <s.LabelGral>Hora <s.inputGral type="datetime-local" onChange={(e) =>DateFromValue(e.target.value)}/></s.LabelGral>
                            <s.LabelGral>A <s.inputGral type="datetime-local" onChange={(e) => DateToValue(e.target.value)}/></s.LabelGral>
                            </div>
                            <s.SmallGral>El rango de tiempo máximo es de 30 días. Por favor, para más informes.<s.AGral> Programar Ahora</s.AGral></s.SmallGral>
                        </div>
                        <s.InfoBoton onClick={() => Datos()}>Comprobar</s.InfoBoton>
                    </s.row1>
                    <s.row2>
                        <s.DivSpan>
                            <s.SpanFechas onClick={DateYesterday}>Ayer </s.SpanFechas>
                        </s.DivSpan>
                    </s.row2>
                    {/* chart */}
                    <s.divTable>
                        <ReactECharts option={options} />
                    </s.divTable>
                    <s.divCardsOut>
                        <s.LabelGral>Total Kilometraje:</s.LabelGral>
                        <s.LabelGral>Total Consumido:</s.LabelGral>
                        <s.LabelGral>Total Combustible suministrado:</s.LabelGral>
                        <s.LabelGral>Tiempo de Ejecución:</s.LabelGral>
                    </s.divCardsOut>
                    <s.divTable>
                        <DataTable
                            columns={columns}
                            data={data}
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

export default InfoCombustible
