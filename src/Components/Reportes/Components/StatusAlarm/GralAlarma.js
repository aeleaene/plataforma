import React, {useEffect, useState} from 'react'
import * as s from '../../Reportes.styles';
import {BiBarChart} from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";
import ReactExport from "react-data-export";

import DataTable from 'react-data-table-component';

/* TOAST ALERTS */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../../styles.css';

const GralAlarma = () => {
    const [device, setDevice] = useState([]); //SE GUARDAN LOS DISPOSITIVOS
    const [deviceId, setDeviceId] = useState("0");
    const [devAll, setDevAll] = useState([]); //Id's de todos los dispositivos
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");
    const [error, setError] = useState(false);
    const [errorDevice, setErrorDevice] = useState(false);
    const ubicacion = [];
    const [reportData, setReportData] = useState([]); //SE GUARDAN LOS REPORTES
    const [datosTotal, setDatosTotal] = useState([]);
    //INSTANCIAS PARA EL EXCEL
    const ExcelFile = ReactExport.ExcelFile;
    const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
    const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
    const [filename, setFilename] = useState("");
    useEffect(() => {
        DevicesAll()
    }, [])
    const DesdeForm = () =>{
        //validar
        if (dateFrom.trim() === '' || dateTo.trim() === '') {
            toast.error("Se debe de indicar una Fecha de Inicio y de Final para generar el reporte")
            setError(true);
            return;
        }
        if (dateFrom > dateTo) {
            toast.error("La fecha de partida no puede ser mayor a la fecha de llegada");
            setError(true);
            return;
        }
        setError(false);
        setErrorDevice(false)
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
            
            try{
                const resulDev = await fetch("https://www.protrack.ad105.net/api/devices", requestOptions)
                const resDev = await resulDev.json()
                setDevAll(resDev);
            }
            catch(err){
                toast.error('Hubo un problema, intentelo más tarde');
            }
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
            try{
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
                
                console.log(ubicacion);

                for(let i = 0; i < devAll.length; i++){
                    let alarm = 0;
                    let powerCut = 0;
                    let lowBattery = 0;
                    let sos = 0;
                    let geoExit = 0;
                    let geoEnter = 0;
                    let overSpeed = 0;
                    let accOn = 0;
                    let accOff = 0;
                    for(let j = 0; j < deviceData2.length; j++){
                    //console.log(devAll[i].id)
                        if (devAll[i].id === deviceData2[j].deviceId) {
                            switch (deviceData2[j].type) {
                                case 'alarm':
                                        alarm = alarm + 1;
                                    break;
                                    case 'powerCut':
                                        powerCut = powerCut + 1;
                                    break;
                                    case 'lowBattery':
                                        lowBattery = lowBattery + 1;
                                    break;
                                    case 'sos':
                                        sos = sos + 1;
                                    break;
                                    case 'geofenceExit':
                                        geoExit = geoExit + 1;
                                    break;
                                    case 'geoFenceEnter':
                                        geoEnter = geoEnter + 1;
                                    break;
                                    case 'overSpeed':
                                        overSpeed = overSpeed + 1;
                                    break;
                                    case 'deviceOnline':
                                        accOn = accOn + 1;
                                    break;
                                    case 'deviceOffline':
                                        accOff = accOff + 1;
                                    break;
                                default:
                                    break;
                            }
                                
                        }
                    }
                    console.log(devAll[i].name+' '+accOn+' '+accOff);
                    ubicacion.push({id: i, name: devAll[i].name, alarm: alarm, powerCut: powerCut, lowBattery: lowBattery, sos: sos, geoExit: geoExit, geoEnter: geoEnter, overSpeed: overSpeed, accOn: accOn, accOff: accOff});
                    //setDatosTotal(...datosTotal, {id: devAll[i].id, name: devAll[i].name, encendido: on, apagado: off})
                    //console.log(devAll[i].name+' '+on+' '+off);
                }
                console.log(ubicacion)
                setDatosTotal(ubicacion);
                
                /* console.log(ubicacion)
                setReportData(deviceData2); */
                setFilename(`DescripciónGeneralDeAlamara ${dateFrom} - ${dateTo}`);
            }
            catch(err){
                toast.error('Hubo un problema, intentelo más tarde');
            }
    }
    const columns = [
        {
            name: '#',
            selector: 'id',
            sortable: true,
            maxWidth: '60px',
            minWidth: '60px',
        },
        {
            name: 'Objetivo',
            selector: 'name',
            sortable: true,
        },
        {
            name: 'Alarma de Vibración',
            selector: 'alarm',
            sortable: true,
            maxWidth: '120px',
            minWidth: '100px',
        },
        {
            name: 'Alarma de desconexión de la alimentación',
            selector: 'powerCut',
            sortable: true,
            maxWidth: '120px',
            minWidth: '100px',
        },
        {
            name: 'Alarma de Bateria Baja',
            selector: 'lowBattery',
            sortable: true,
            maxWidth: '120px',
            minWidth: '100px',
        },
        {
            name: 'Alarma SOS',
            selector: 'sos',
            sortable: true,
            maxWidth: '120px',
            minWidth: '100px',
        },
        {
            name: 'Alarma Salida de Geo-cerca',
            selector: 'geoExit',
            sortable: true,
            maxWidth: '120px',
            minWidth: '100px',
        },
        {
            name: 'Alarma Entrada en Geo-cerca',
            selector: 'geoEnter',
            sortable: true,
            maxWidth: '120px',
            minWidth: '100px',
        },
        {
            name: 'Exceso de velocidad',
            selector: 'overSpeed',
            sortable: true,
            maxWidth: '120px',
            minWidth: '100px',
        },
/*         {
            name: 'Remolcando',
            selector: 'remolcando',
            sortable: true,
        }, */
        {
            name: 'Acc Encendido',
            selector: 'accOn',
            sortable: true,
            maxWidth: '100px',
            minWidth: '100px',
        },
        {
            name: 'Acc Apagado',
            selector: 'accOff',
            sortable: true,
            maxWidth: '100px',
            minWidth: '100px',
        },

    ];
    const csvEmptyData = [
        {
          foo: ""
        }
      ];
    //Estructura para guardar en el excel
    const data = [
        {
            xSteps: 3,
            columns: [
                { title: "DESCRIPCIÓN GENERAL DE ALARMA", width: {wpx: 300}, height: {wpx: 40}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true, sz:14}, border: {top: {style: "none", color: "#fff"}, bottom: {style: "nono", color: "#fff"}, left: {style: "none", color: "#fff"}, right: {style: "none", color: "#fff"}}}}
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
                { title: "DESCRIPCIÓN GENERAL DE ALARMA", width: {wpx: 520}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true, sz:12}} }
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
                { title: "Alarma de Vibración", width: {wpx: 120}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { title: "Alarma de Desconexión de alimentación", width: {wpx: 120}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { title: "Alarma de Bateria baja", width: {wpx: 120}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { title: "Alarma SOS", width: {wpx: 120}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { title: "Alarma Salida de GeoCerca", width: {wpx: 120}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { title: "Alarma Entrada de GeoCerca", width: {wpx: 120}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { title: "Exceso de Velocidad", width: {wpx: 120}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { title: "ACC Encendido", width: {wpx: 120}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { title: "ACC Apagado", width: {wpx: 120}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
            ],
            data: datosTotal.map((dev, index) => {
                return [
                { value: dev.id, style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: dev.name, style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: dev.alarm, style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: dev.powerCut, style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: dev.lowBattery, style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: dev.sos, style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: dev.geoExit, style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: dev.geoEnter, style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: dev.overSpeed, style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: dev.accOn, style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: dev.accOff, style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
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
            <ToastContainer 
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover

            />
            <s.caja_dispositivo_titulo >
            
                <s.barra_arrastable />
                <s.barra_superior_tituloGral>
                &nbsp;
                    &nbsp;<BiBarChart />&nbsp;&nbsp;Descripción General de Alarma
                </s.barra_superior_tituloGral>
            </s.caja_dispositivo_titulo>

            <s.contenido_panel_dispositivo>
                {/* CONTENIDO */}
                <s.contentReportesDiv>
                    <s.row1>
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
                            <ExcelSheet dataSet={data} name={filename} />
                        </ExcelFile>
                        <s.PrintButon>Imprimir</s.PrintButon>
                    </s.divButonsGral>
                </s.contentReportesDiv>
            </s.contenido_panel_dispositivo>  
        </div>
    )
}

export default GralAlarma
