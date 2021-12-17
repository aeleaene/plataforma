import React, {useEffect, useState, useMemo} from 'react'
import * as s from '../../Reportes.styles';
import {BiBarChart} from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";
import ReactExport from "react-data-export";

import DataTable from 'react-data-table-component';

import '../../styles.css';

const InfoGral = () => {
    const [device, setDevice] = useState([]); //SE GUARDAN LOS DISPOSITIVOS
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");
    const [error, setError] = useState(false);
    const [reportData, setReportData] = useState([]); //SE GUARDAN LOS REPORTES
    //INSTANCIAS PARA EL EXCEL
    const ExcelFile = ReactExport.ExcelFile;
    const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
    const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
    const [filename, setFilename] = useState(``);
    const [totalKm, setTotalKm] = useState(0);
    const [maxKm, setMaxKm] = useState(0);
    const [totalEstadia, setTotalEstadia] = useState(0);

    useEffect(() => {
        /* let date = new Date();
        date = date.setDate(date.getDate() -1);
        let date1Y = new Date(date)
        let dateF1 = new Date(date1Y.getFullYear(), date1Y.getMonth(), date1Y.getDate())
        dateF1 = dateF1.toISOString();

        let date2 = new Date();
        let dateF2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate())
        dateF2 = dateF2.toISOString()
        
        setDateFrom(dateF1);
        setDateTo(dateF2);
        console.log(dateF1, dateF2) */
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
            const resultado = await fetch("https://www.protrack.ad105.net/api/devices", requestOptions)
            const deviceData = await resultado.json();
            //generar url
            let url = "https://www.protrack.ad105.net/api/reports/trips?";
            let groupId;
            for(let i = 0; i < deviceData.length; i++){
                url = url+"deviceId="+deviceData[i].id+"&";
                groupId= deviceData[i].groupId;
            }
            url = url+"groupId="+groupId+"&type=allEvents&from="+dateFrom+"&to="+dateTo;
            console.log(url)
            
            const resultado2 = await fetch(`${url}`, requestOptions)
            /* .then(response => response.json())
            .catch(error => console.log('error', error)); */
            const deviceData2 = await resultado2.json();

            //var full = [] //JSONS MEZClados
            //Object.keys(deviceData).forEach(k=>{full[k] = Object.assign(deviceData[k],deviceData2[k])});
            console.log(deviceData2)
            //leer kilometraje, exceso de velocidad y estadia
            let kilometraje = 0;
            let maxKm = 0;
            let estadia = 0;

            for(let i = 0; i < deviceData2.length; i++){
                kilometraje = kilometraje + deviceData2[i].averageSpeed;
                estadia = estadia + deviceData2[i].duration;
                if (parseFloat((deviceData2[i].maxSpeed*1.852).toFixed(2)) > 80 ) {
                    maxKm = maxKm+1;
                }
            }
            kilometraje = (kilometraje*1.852).toFixed(2)+' Km/h';
            console.log(kilometraje)
            setTotalKm(kilometraje);
            setTotalEstadia(estadia);
            setMaxKm(maxKm);

            setDevice(deviceData);
            setReportData(deviceData2);
            setFilename(`Informacióngeneraldemovimiento ${dateFrom} - ${dateTo}`);
    }
    const FechaActual = () =>{
        const fecha = new Date("DD-MM-YYYTHH:mm");
        const fch = fecha.getDate();
        return fch;
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
    //TODO: https://www.protrack.ad105.net/api/positions?from=2021-08-06T21:48:56.000z&to=2021-08-06T21:48:56.000z
    const Fecha = (fecha) => {
        const fecha1 = new Date();
        const date = new Date(fecha);
        if (fecha1.getDate() === date.getDate()) {
            return date.getHours()+':'+ date.getMinutes()+':'+date.getSeconds();
        }
        return date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate();
    }
    //const devi = [{ deviceId: 1, name: 'Vehiculo 1', speed: '6.22', estadia: '76'}]
    const columns = [
        {
            name: '#',
            selector: 'deviceId',
            sortable: true,
        },
        {
            name: 'Objetivo',
            selector: 'deviceName',
            sortable: true,
        },
        {
            name: 'Kilometraje (Km)',
            sortable: true,
            cell: row => <span>{((row.averageSpeed)*1.852).toFixed(2)+' Km/h'}</span>
        },
        {
            name: 'Exceso de Velocidad(Tiempos)',
            sortable: true,
            cell: row => <span>{((row.maxSpeed)*1.852).toFixed(2)+' Km/h'}</span>
        },
        {
            name: 'Estadia(Tiempos)',
            sortable: true,
            cell: row => <span>{TimeFormat(row.duration)}</span>
        },
    ];
    /* const actionsMemo = useMemo(() => <Export onExport={() => downloadCSV(device)} />, []); */
    const csvEmptyData = [
        {
          foo: ""
        }
      ];
    //Estructura para guardar en el excel
    const data = [
        {
            xSteps: 2,
            columns: [
                { title: "INFORMACIÓN DE RECORRIDO", width: {wpx: 300}, height: {wpx: 40}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true, sz:14}, border: {top: {style: "none", color: "#fff"}, bottom: {style: "nono", color: "#fff"}, left: {style: "none", color: "#fff"}, right: {style: "none", color: "#fff"}}}}
            ],
            data: csvEmptyData.map((record, index) => {
                return [
                    { value: record.foo }
                ];
            }),
        },
        {
            xSteps: 2,
            ySteps: -1,
            columns: [
                { title: "RECORRIDO", width: {wpx: 520}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true, sz:12}} }
            ],
            data: csvEmptyData.map((record, index) => {
                return [
                    { value: record.foo }
                ];
            }),
        },
        {
            xSteps: 2,
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
                { title: "Kilometraje (km)", width: {wpx: 120}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { title: "Exceso de Velocidad (Km/h)", width: {wpx: 120}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { title: "Estadia", width: {wpx: 120}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
            ],
            data: reportData.map((dev, index) => {
                return [
                { value: dev.deviceId, style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: dev.deviceName, style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: ((dev.averageSpeed)*1.852).toFixed(2)+' Km/h', style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: ((dev.maxSpeed)*1.852).toFixed(2)+' Km/h', style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: TimeFormat(dev.duration), style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
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
        <div className="menuContent" style={{left:'0px', top:'0px', marginTop:'10px', marginLeft:'10px'}}>
                
            <s.caja_dispositivo_titulo >
            
                <s.barra_arrastable />
                <s.barra_superior_tituloGral>
                &nbsp;
                    &nbsp;<BiBarChart />&nbsp;&nbsp;Información General de Movimiento
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
                            <s.LabelCard2>{reportData.length}</s.LabelCard2>
                        </s.divCard>
                        <s.divCard>
                            <s.LabelCard>Total Kilometraje:</s.LabelCard>
                            <s.LabelCard2>{totalKm}</s.LabelCard2>
                        </s.divCard>
                        <s.divCard>
                            <s.LabelCard>Total Exceso de Velocidad:</s.LabelCard>
                            <s.LabelCard2>{maxKm}</s.LabelCard2>
                        </s.divCard>
                        <s.divCard>
                            <s.LabelCard>Total Estadia:</s.LabelCard>
                            <s.LabelCard2>{TimeFormat(totalEstadia)}</s.LabelCard2>
                        </s.divCard>
                    </s.divCards>
                    <s.divTable>
                        <DataTable
                            columns={columns}
                            data={reportData}
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
        </div>
    )
}

export default InfoGral;