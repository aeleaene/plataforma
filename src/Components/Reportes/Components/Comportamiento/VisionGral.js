import React, {useEffect, useState} from 'react'
import * as s from '../../Reportes.styles';
import {BiBarChart} from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";

import DataTable from 'react-data-table-component';

import '../../styles.css';

const VisionGral = () => {
    const [device, setDevice] = useState([]);
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");
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
    const DateWeek = () => {
        var today = new Date();
        var day = today.getDay() || 7; // Get current day number, converting Sun. to 7
        if( day !== 1 )  today.setHours(-24 * (day - 1));   // Set the hours to day number minus 1//   multiplied by negative 24
        let date2 = new Date(today);
        date2 = date2.toISOString();

        //Fecha actual
        let dateToday = new Date();
        dateToday = dateToday.toISOString();
        //console.log(dateToday);
        setDateFrom(date2);
        setDateTo(dateToday);
        Datos();
    }
    const DateLastWeek = () => {
        var today = new Date();
        var day = today.getDay() || 7; // Get current day number, converting Sun. to 7
        if( day !== 1 )  today.setHours(-24 * (day - 1));   // Set the hours to day number minus 1//   multiplied by negative 24
        let date2 = new Date(today);
        date2 = date2.toISOString();
        //Fecha actual
        let dateToday = new Date();
        dateToday = dateToday.toISOString();
        //console.log(dateToday);
        setDateFrom(date2);
        setDateTo(dateToday);
        Datos();
    }
    const DateMonth = () => {
        let date = new Date();
        let primerDia = new Date(date.getFullYear(), date.getMonth(), 1);
        let diaActual = date;
        setDateFrom(primerDia.toISOString());
        setDateTo(diaActual.toISOString());
        Datos();
    }
    const DateLastMonth = () => {
        let dte = new Date();
        var primerDia = new Date(dte.getFullYear(), dte.getMonth() -1, 1);
        var ultimoDia = new Date(dte.getFullYear(), dte.getMonth(), 0);
        setDateFrom(primerDia.toISOString());
        //Fecha actual
        setDateTo(ultimoDia.toISOString());
        Datos();
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
            
            if (dateFrom === "" && dateTo === "") {
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
                const resultado = await fetch("https://www.protrack.ad105.net/api/devices", requestOptions)
                const resultado2 = await fetch(`https://www.protrack.ad105.net/api/positions?from=${dateFrom}:00.000z&to=${dateTo}:00.000z`, requestOptions)
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
            name: 'Objetivo',
            selector: 'name',
            sortable: true,
        },
        {
            name: 'Fatiga de conducción',
            selector: 'fatiga',
            sortable: true,
        },
        {
            name: 'Aceleración de conducción dura',
            selector: 'aceleracion',
            sortable: true,
        },
        {
            name: 'Frenado Brusco',
            selector: 'frenado',
            sortable: true,
        },
        {
            name: 'Giro Brusco',
            selector: 'giro',
            sortable: true,
        },
        {
            name: 'Giro Pronunciado',
            selector: 'pronunciado',
            sortable: true,
        },
    ];
    return (
        <s.caja_dispositivo_panelGral style={{left:'0px', top:'0px', marginTop:'10px', marginLeft:'10px'}}>
                
            <s.caja_dispositivo_titulo >
            
                <s.barra_arrastable />
                <s.barra_superior_tituloGral>
                &nbsp;
                    &nbsp;<BiBarChart />&nbsp;&nbsp;Visión General del Comportamiento de Conducción.
                </s.barra_superior_tituloGral>
            </s.caja_dispositivo_titulo>

            <s.contenido_panel_dispositivo>
                {/* CONTENIDO */}
                <s.contentReportesDiv>
                    <s.row1>
                        <div>
                            <div>
                            <s.LabelGral>Fecha <s.inputGral type="datetime-local" onChange={(e) =>DateFromValue(e.target.value)}/></s.LabelGral>
                            <s.LabelGral>A <s.inputGral type="datetime-local" onChange={(e) => DateToValue(e.target.value)}/></s.LabelGral>
                            </div>
                            <s.SmallGral>El rango de tiempo máximo es de 30 días. Por favor, para más informes.<s.AGral> Programar Ahora</s.AGral></s.SmallGral>
                        </div>
                        <s.InfoBoton onClick={() => Datos()}>Comprobar</s.InfoBoton>
                    </s.row1>
                    <s.row2>
                        <s.DivSpan>
                            <s.SpanFechas onClick={DateYesterday}>Ayer </s.SpanFechas>|
                            <s.SpanFechas onClick={DateWeek}>Esta Semana </s.SpanFechas>|
                            <s.SpanFechas onClick={DateLastWeek}>La Semana Pasada</s.SpanFechas>|
                            <s.SpanFechas onClick={DateMonth}>Este Mes</s.SpanFechas>|
                            <s.SpanFechas onClick={DateLastMonth}>Mes Pasado</s.SpanFechas>
                        </s.DivSpan>
                    </s.row2>
                    <s.divCards>
                        <s.divCard>
                            <s.LabelCard>Total Fatiga de conducción:</s.LabelCard>
                            <s.LabelCard2></s.LabelCard2>
                        </s.divCard>
                        <s.divCard>
                            <s.LabelCard>Total Aceleración de conducción dura:</s.LabelCard>
                            <s.LabelCard2></s.LabelCard2>
                        </s.divCard>
                        <s.divCard>
                            <s.LabelCard>Total Frenado Brusco:</s.LabelCard>
                            <s.LabelCard2></s.LabelCard2>
                        </s.divCard>
                        <s.divCard>
                            <s.LabelCard>Total Giro Brusco:</s.LabelCard>
                            <s.LabelCard2></s.LabelCard2>
                        </s.divCard>
                        <s.divCard>
                            <s.LabelCard>Total Giro Pronunciado:</s.LabelCard>
                            <s.LabelCard2></s.LabelCard2>
                        </s.divCard>
                    </s.divCards>
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

export default VisionGral
