import React, {useEffect, useState} from 'react'
import * as s from '../../Reportes.styles';
import {BiBarChart} from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";
import ReactExport from "react-data-export";

import DataTable from 'react-data-table-component';

import '../../styles.css';

const ResCombViaje = () => {
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
    const [totalViaje, settotalViaje] = useState(0);
    const [totalKilo, settotalKilo] = useState(0);
    const [totalFuel, settotalFuel] = useState(0)
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
            console.log("antes de consulta "+ dateFrom)
            console.log("antes de consulta "+ dateTo)
            //generar url
            let url = "https://www.protrack.ad105.net/api/reports/trips?";
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
            let viaje = 0;
            let kilo = 0;
            let fuel = 0;
            for (let i = 0; i < deviceData2.length; i++) {
                viaje = 0;
                fuel = fuel + deviceData2[i].spentFuel;
                kilo = kilo + deviceData2[i].averageSpeed;
            }
            settotalViaje(viaje);
            settotalFuel(fuel);
            settotalKilo(kilo);
            for(let i = 0; i < devAll.length; i++){
                let velocidad = 0;
                let combustible = 0;
                for(let j = 0; j < deviceData2.length; j++){
                //console.log(devAll[i].id)
                    if (devAll[i].id === deviceData2[j].deviceId) {
                            velocidad = velocidad + deviceData2[j].averageSpeed;
                            combustible = combustible + deviceData2[j].spentFuel;
                    }
                }
                console.log(devAll[i].name+' '+velocidad+' '+combustible);
                ubicacion.push({id: devAll[i].id, name: devAll[i].name, speed: velocidad, fuel: combustible, time: 0, medio: 0, ejecucion: 0,});
                //setDatosTotal(...datosTotal, {id: devAll[i].id, name: devAll[i].name, encendido: on, apagado: off})
                //console.log(devAll[i].name+' '+on+' '+off);
            }
            console.log(ubicacion)
            setDatosTotal(ubicacion);
            
            /* console.log(ubicacion)
            setReportData(deviceData2); */
            setFilename(`ResumenDeConsumoDeCombustibleDeViaje ${dateFrom} - ${dateTo}`);
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
            name: 'Tiempo de viaje',
            selector: 'time',
            sortable: true,
        },
        {
            name: 'Kilometraje (Km)',
            sortable: true,
            cell: row => <span>{((row.speed)*1.852).toFixed(2)+' Km/h'}</span>
        },
        {
            name: 'Tiempo de Ejeución',
            selector: 'ejecucion',
            sortable: true,
        },
        {
            name: 'Consumo de combustible(L)',
            selector: 'fuel',
            sortable: true,
        },
        {
            name: 'Consumo medio de combustible(L/100KM)',
            selector: 'medio',
            sortable: true,
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
                { title: "RESUMEN DE CONSUMO DE COMBUSTIBLE DE VIAJE", width: {wpx: 300}, height: {wpx: 40}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true, sz:14}, border: {top: {style: "none", color: "#fff"}, bottom: {style: "nono", color: "#fff"}, left: {style: "none", color: "#fff"}, right: {style: "none", color: "#fff"}}}}
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
                { title: "RESUMEN DE CONSUMO DE COMBUSTIBLE DE VIAJE", width: {wpx: 520}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true, sz:12}} }
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
                { title: "Tiempo de Viaje", width: {wpx: 120}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { title: "Kilometraje", width: {wpx: 120}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { title: "Tiempo de Ejecución", width: {wpx: 120}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { title: "Consumo de Combustible", width: {wpx: 120}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { title: "Consumo medio de combustible", width: {wpx: 120}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                ],
            data: datosTotal.map((dev, index) => {
                return [
                { value: dev.id, style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: dev.name, style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: dev.time, style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: ((dev.speed)*1.852).toFixed(2)+' Km/h', style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: dev.ejecucion, style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: dev.fuel, style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: dev.medio, style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
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
                    &nbsp;<BiBarChart />&nbsp;&nbsp;Resumen de consumo de combustible de viaje
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
                    <s.divCards>
                        <s.divCard>
                            <s.LabelCard>Totla Tiempos de Viaje:</s.LabelCard>
                            <s.LabelCard2>{totalViaje}</s.LabelCard2>
                        </s.divCard>
                        <s.divCard>
                            <s.LabelCard>Total Kilometraje:</s.LabelCard>
                            <s.LabelCard2>{((totalKilo)*1.852).toFixed(2)+' Km/h'}</s.LabelCard2>
                        </s.divCard>
                        <s.divCard>
                            <s.LabelCard>Total Tiempo de Ejecución:</s.LabelCard>
                            <s.LabelCard2>{totalViaje}</s.LabelCard2>
                        </s.divCard>
                        <s.divCard>
                            <s.LabelCard>Total Consumo de Combustible:</s.LabelCard>
                            <s.LabelCard2>{totalFuel}</s.LabelCard2>
                        </s.divCard>
                        <s.divCard>
                            <s.LabelCard>Total Consumo Medio de Combustible:</s.LabelCard>
                            <s.LabelCard2>{totalFuel}</s.LabelCard2>
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
                            <ExcelSheet dataSet={data} name={filename} />
                        </ExcelFile>
                        <s.PrintButon>Imprimir</s.PrintButon>
                    </s.divButonsGral>
                </s.contentReportesDiv>
            </s.contenido_panel_dispositivo>  
        </s.caja_dispositivo_panelGral>
    )
}

export default ResCombViaje
