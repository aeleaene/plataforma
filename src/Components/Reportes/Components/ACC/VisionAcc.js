import React, {useEffect, useState} from 'react'
import * as s from '../../Reportes.styles';
import {BiBarChart} from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";
import ReactExport from "react-data-export";

import DataTable from 'react-data-table-component';

import '../../styles.css';

const VisionAcc = () => {
    const [device, setDevice] = useState([]); //SE GUARDAN LOS DISPOSITIVOS
    const [deviceId, setDeviceId] = useState("0");
    const [devAll, setDevAll] = useState([]); //Id's de todos los dispositivos
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");
    const [error, setError] = useState(false);
    const [reportData, setReportData] = useState([]); //SE GUARDAN LOS REPORTES
    const [datosTotal, setDatosTotal] = useState([]);
    const [totalDevices, setTotalDevices] = useState(0);
    const [totalOff, setTotalOff] = useState(0);
    const [totalOn, seTtotalOn] = useState(0)
    const datosArray= [];
    //INSTANCIAS PARA EL EXCEL
    const ExcelFile = ReactExport.ExcelFile;
    const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
    const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
    const [filename, setFilename] = useState(``);
    useEffect(() => {
        DevicesAll()
    }, [])
    const DesdeForm = () =>{
        //validar
        if (dateFrom.trim() === '' || dateTo.trim() === '') {
            alert("Se debe de indicar una Fecha de Inicio y de Final para generar el reporte")
            setError(true);
            return;
        }
        if (dateFrom > dateTo) {
            alert("La fecha de partida no puede ser mayor a la fecha de llegada");
            setError(true);
            return;
        }
        setError(false);
        
        Devices();
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
        let date1Y = new Date(date)
        let dateF1 = new Date(date1Y.getFullYear(), date1Y.getMonth(), date1Y.getDate())
        dateF1 = dateF1.toISOString();

        let date2 = new Date();
        let dateF2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate())
        dateF2 = dateF2.toISOString()
        
        setDateFrom(dateF1);
        setDateTo(dateF2);
        console.log(dateF1, dateF2)
        Devices();
    }
    const DateWeek = () => {
        var today = new Date();
        var day = today.getDay() || 7; // Get current day number, converting Sun. to 7
        if( day !== 1 )  today.setHours(-24 * (day - 1));   // Set the hours to day number minus 1//   multiplied by negative 24
        let date2 = new Date(today);
        let dateF1 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate())
        dateF1 = dateF1.toISOString();

        //Fecha actual
        let dateToday = new Date();
        let dateF2 = new Date(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate());
        dateF2 = dateF2.toISOString();
        //console.log(dateToday);
        setDateFrom(dateF1);
        setDateTo(dateF2);
        Devices();
    }
    const DateLastWeek = () => {
        var today = new Date();
        var day = today.getDay() || 7; // Get current day number, converting Sun. to 7
        if( day !== 1 )  today.setHours(-24 * (day - 1));   // Set the hours to day number minus 1//   multiplied by negative 24
        let date2 = new Date(today);
        let dateF1 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate())
        dateF1 = dateF1.toISOString();
        //Fecha actual
        let dateToday = new Date();
        let dateF2 = new Date(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate());
        dateF2 = dateF2.toISOString();
        //console.log(dateToday);
        setDateFrom(dateF1);
        setDateTo(dateF2);
        Devices();
    }
    const DateMonth = () => {
        let date = new Date();
        let primerDia = new Date(date.getFullYear(), date.getMonth(), 1);
        let dateF1 = new Date(primerDia.getFullYear(), primerDia.getMonth(), primerDia.getDate())
        let diaActual = date;
        let dateF2 = new Date(diaActual.getFullYear(), diaActual.getMonth(), diaActual.getDate())
        setDateFrom(dateF1.toISOString());
        setDateTo(dateF2.toISOString());
        Devices();
    }
    const DateLastMonth = () => { //bien
        let dte = new Date();
        var primerDia = new Date(dte.getFullYear(), dte.getMonth() -1, 1);
        let dateF1 = new Date(primerDia.getFullYear(), primerDia.getMonth(), primerDia.getDate())
        var ultimoDia = new Date(dte.getFullYear(), dte.getMonth(), 0);
        let dateF2 = new Date(ultimoDia.getFullYear(), ultimoDia.getMonth(), ultimoDia.getDate())
        setDateFrom(dateF1.toISOString());
        //Fecha actual
        setDateTo(dateF2.toISOString());
        Devices();
    }
    const DevicesAll = async() =>{  //obtener dispositivos para el select
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
            console.log(devAll);
    }
/*     const cantidad = (cantidad) => {
        let encendido = 0;
        let apagado = 0;
        for(let i = 0; i < cantidad.length; i++){
            if (cantidad[i].type === "deviceOnline") {
                encendido = encendido + 1;
            }
            else{
                apagado = apagado + 1;
            }
        }
        return {encendido, apagado};
    } */
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
            
                console.log("antes de consulta "+ dateFrom)
                console.log("antes de consulta "+ dateTo)
                //generar url
                let url = "https://www.protrack.ad105.net/api/reports/events?";
                let groupId;
                for(let i = 0; i < devAll.length; i++){
                    url = url+"deviceId="+devAll[i].id+"&";
                    groupId= devAll[i].groupId;
                }
                url = url+"groupId="+groupId+"&type=allEvents&from="+dateFrom+"&to="+dateTo;
                console.log(url)
                const resultado2 = await fetch(`${url}`, requestOptions)
                const deviceData2 = await resultado2.json();

                console.log(deviceData2)
                setReportData(deviceData2);
                let encendido = 0;
                let apagado = 0;
                for(let i = 0; i < deviceData2.length; i++){
                    if (deviceData2[i].type === "deviceOnline") {
                        encendido = encendido + 1;
                    }
                    else{
                        apagado = apagado + 1;
                    }
                }
                setTotalDevices(devAll.length);
                seTtotalOn(encendido);
                setTotalOff(apagado);
                for(let i = 0; i < devAll.length; i++){
                    let on = 0;
                    let off = 0;
                    for(let j = 0; j < reportData.length; j++){
                    //console.log(devAll[i].id)
                        if (devAll[i].id === reportData[j].deviceId) {
                            
                                if (reportData[j].type === "deviceOnline") {
                                    on = on + 1;
                                }
                                else{
                                    off = off + 1;
                                }
                        }
                    }
                    console.log(devAll[i].name+' '+on+' '+off);
                    datosArray.push({id: i, name: devAll[i].name, encendido: on, apagado: off});
                    //setDatosTotal(...datosTotal, {id: devAll[i].id, name: devAll[i].name, encendido: on, apagado: off})
                    //console.log(devAll[i].name+' '+on+' '+off);
                }

                console.log(encendido+" "+apagado);
                console.log(datosArray);
                setDatosTotal(datosArray);
                console.log(datosTotal);
                setFilename(`VisiónGeneraldelACC ${dateFrom} - ${dateTo}`);
    }
    const TimeFormat = (duration) => {
        let seconds = (duration / 1000).toFixed(1);
        let minutes = (duration / (1000 * 60)).toFixed(1);
        let hours = (duration / (1000 * 60 * 60)).toFixed(1);
        let days = (duration / (1000 * 60 * 60 * 24)).toFixed(1);
        if (seconds < 60) return seconds + " Seg";
        else if (minutes < 60) return minutes + " Min";
        else if (hours < 24) return hours + " Hrs";
        else return days + " Días"
    }
    const Fecha = (fecha) => {
        const fecha1 = new Date();
        const date = new Date(fecha);
        if (fecha1.getDate() === date.getDate()) {
            return date.getHours()+':'+ date.getMinutes()+':'+date.getSeconds();
        }
        return date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate();
    }
    const columns = [
        {
            name: '#',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Objetivo',
            selector: 'name',
            sortable: true,
        },
        {
            name: 'Acc Encendidos',
            selector: 'encendido',
            sortable: true,
        },
        {
            name: 'Acc Apagados',
            selector: 'apagado',
            sortable: true,
        },
    ];
    const csvEmptyData = [
        {
          foo: ""
        }
      ];
    const data = [
        {
            xSteps: 3,
            columns: [
                { title: "VISIÓN GENERAL DEL ACC", width: {wpx: 300}, height: {wpx: 40}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true, sz:14}, border: {top: {style: "none", color: "#fff"}, bottom: {style: "nono", color: "#fff"}, left: {style: "none", color: "#fff"}, right: {style: "none", color: "#fff"}}}}
            ],
            data: csvEmptyData.map((record, index) => {
                return [
                    { value: record.foo }
                ];
            }),
        },
        {
            xSteps: 3,
            ySteps: -1,
            columns: [
                { title: "VISIÓN GENERAL DEL ACC", width: {wpx: 520}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true, sz:12}} }
            ],
            data: csvEmptyData.map((record, index) => {
                return [
                    { value: record.foo }
                ];
            }),
        },
        {
            xSteps: 3,
            ySteps: -1,
            columns: [
                { title: "DESDE "+dateFrom+" A "+dateTo, width: {wpx: 520}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true, sz:12}} }
            ],
            data: csvEmptyData.map((record, index) => {
                return [
                    { value: record.foo }
                ];
            }),
        },
        {
            ySteps: -1,
            columns: [
                { title: "#", width: {wpx: 40}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { title: "Objetivo", width: {wpx: 120}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { title: "ACC Encendidos", width: {wpx: 120}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { title: "ACC Apagados", width: {wpx: 120}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
            ],
            data: datosTotal.map((dev, index) => {
                return [
                { value: dev.id, style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: dev.name, style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: dev.encendido, style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: dev.apagado, style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                ];
            }),
        },
    ];
    //config pagination
    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };
    return (
        <s.caja_dispositivo_panelGral style={{left:'0px', top:'0px', marginTop:'10px', marginLeft:'10px'}}>
                
            <s.caja_dispositivo_titulo >
            
                <s.barra_arrastable />
                <s.barra_superior_tituloGral>
                &nbsp;
                    &nbsp;<BiBarChart />&nbsp;&nbsp;Visión general del ACC
                </s.barra_superior_tituloGral>
            </s.caja_dispositivo_titulo>

            <s.contenido_panel_dispositivo>
                {/* CONTENIDO */}
                <s.contentReportesDiv>
                    <s.row1>
                        <s.LabelGral><s.CheckBox type="radio" name="infoGral"/>Detalles Diarios </s.LabelGral>
                        <s.LabelGral><s.CheckBox type="radio" name="infoGral"/>Detalles del Periodo</s.LabelGral>
                        <div>
                            <div>
                            <s.LabelGral>Fecha <s.inputGral type="date" onChange={(e) =>DateFromValue(e.target.value)} className={error ? 'errorFormDate' :  ''}/></s.LabelGral>
                            <s.LabelGral>A <s.inputGral type="date" onChange={(e) => DateToValue(e.target.value)} className={error ? 'errorFormDate' :  ''}/></s.LabelGral>
                            </div>
                            <s.SmallGral>El rango de tiempo máximo es de 30 días. Por favor, para más informes.<s.AGral> Programar Ahora</s.AGral></s.SmallGral>
                        </div>
                        <s.InfoBoton onClick={DesdeForm}>Comprobar</s.InfoBoton>
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
                            <s.LabelCard>Cantidad de Dispositivos:</s.LabelCard>
                            <s.LabelCard2>{totalDevices}</s.LabelCard2>
                        </s.divCard>
                        <s.divCard>
                            <s.LabelCard>Total ACC Encendidos:</s.LabelCard>
                            <s.LabelCard2>{totalOn}</s.LabelCard2>
                        </s.divCard>
                        <s.divCard>
                            <s.LabelCard>Total ACC Apagados:</s.LabelCard>
                            <s.LabelCard2>{totalOff}</s.LabelCard2>
                        </s.divCard>
                    </s.divCards>
                    <s.divTable>
                        <DataTable
                            columns={columns}
                            data={datosTotal}
                            striped={true}
                            highlightOnHover={true}
                            pointerOnHover={true}
                            pagination
                            paginationComponentOptions={paginationComponentOptions}
                        />
                    </s.divTable>
                    <s.divButonsGral>
                        <ExcelFile element={<s.ExcelButon>Exportar Excel</s.ExcelButon>} filename={filename}>
                            <ExcelSheet dataSet={data} name={filename}>
                                <ExcelColumn label="INFORMACIÓN GENERAL DE MOVIMIENTO"/>
                            </ExcelSheet>
                        </ExcelFile>
                        <s.PrintButon>Imprimir</s.PrintButon>
                    </s.divButonsGral>
                </s.contentReportesDiv>
            </s.contenido_panel_dispositivo>  
        </s.caja_dispositivo_panelGral>
    )
}

export default VisionAcc
