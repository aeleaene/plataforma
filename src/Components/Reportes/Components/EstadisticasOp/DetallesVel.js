import React, {useEffect, useState} from 'react'
import * as s from '../../Reportes.styles';
import {BiBarChart} from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";
import ReactExport from "react-data-export";
import axios from 'axios';

import DataTable from 'react-data-table-component';

import '../../styles.css';

const DetallesVel = () => {
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
        if(deviceId === "0"){
            alert("Seleccione objetivo")
            setErrorDevice(true)
            return;
        }
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
    const DateToday = () => {
        if(deviceId === "0"){
            alert("Seleccione objetivo")
            setErrorDevice(true)
            return;
        }
        setErrorDevice(false)
        let date = new Date();
        let dateF1 = new Date(date.getFullYear(), date.getMonth(), date.getDate())
        dateF1 = dateF1.toISOString()

        let date2 = new Date();
        let dateF2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate())
        dateF2 = dateF2.toISOString()
        
        setDateFrom(dateF1);
        setDateTo(dateF2);
        console.log(dateF1, dateF2)
        Devices();
    }
    const DateYesterday = () => {
        if(deviceId === "0"){
            alert("Seleccione objetivo")
            setErrorDevice(true)
            return;
        }
        setErrorDevice(false)
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
    const Address = async(id, lon, lat, name, time, speed) => {
        const url = `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&featureTypes=&location=${lon},${lat}`
                const resultado = await axios.get(url);
                //return ubicacion.ShortLabel;
                console.log(resultado.data.address.LongLabel)
                ubicacion.push({id: id, lon: lon, lat: lat, address: resultado.data.address.LongLabel, name: name, time: time, speed: speed});
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
            
            if (deviceId === "all") {
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
                for(let i = 0; i < deviceData2.length; i++){
                    //obtener direccion
                    const url = `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&featureTypes=&location=${deviceData2[i].endLon},${deviceData2[i].endLat}`
                    const resultado = await axios.get(url);
                    //return ubicacion.ShortLabel;
                    console.log(resultado.data.address.LongLabel)
                    ubicacion.push({id: i, lon: deviceData2[i].endLon, lat: deviceData2[i].endLat, address: resultado.data.address.LongLabel, name: deviceData2[i].deviceName, time: deviceData2[i].endTime, speed: deviceData2[i].averageSpeed});
                 }
                 console.log(ubicacion);
                 setDatosTotal(ubicacion);
                /* setReportData(deviceData2);
                console.log(reportData) */
                setFilename(`DetallesdeExcesodeVelocidad ${dateFrom} - ${dateTo}`);
            }
            else{
                console.log("antes de consulta "+ dateFrom)
                console.log("antes de consulta "+ dateTo)
                //generar url
                let url = "https://www.protrack.ad105.net/api/reports/trips?";
                let groupId;
                for(let i = 0; i < devAll.length; i++){
                    groupId= devAll[i].groupId;
                }
                url = url+"deviceId="+deviceId+"&";
                url = url+"groupId="+groupId+"&type=allEvents&from="+dateFrom+"&to="+dateTo;
                console.log(url)
                const resultado2 = await fetch(`${url}`, requestOptions)
                const deviceData2 = await resultado2.json();
                

                console.log(deviceData2)
                for(let i = 0; i < deviceData2.length; i++){
                    //obtener direccion
                    const url = `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&featureTypes=&location=${deviceData2[i].endLon},${deviceData2[i].endLat}`
                    const resultado = await axios.get(url);
                    //return ubicacion.ShortLabel;
                    console.log(resultado.data.address.LongLabel)
                    ubicacion.push({id: i, lon: deviceData2[i].endLon, lat: deviceData2[i].endLat, address: resultado.data.address.LongLabel, name: deviceData2[i].deviceName, time: deviceData2[i].endTime, speed: deviceData2[i].averageSpeed});
                 }
               
                console.log(ubicacion)
                setDatosTotal(ubicacion);
                /* setReportData(deviceData2);
                console.log(reportData); */
                setFilename(`DetallesdeExcesodeVelocidad ${dateFrom} - ${dateTo}`);
            }
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
    const obtenerUbicacion = (speed) => {
        let address
        for(let i = 0; i < ubicacion.length; i++){
            if (ubicacion[i].averageSpeed === speed) {
                address = ubicacion[i].address;
            }
        }
        return address;
    }

    //const data = [{ id: 1, objetivo: 'Vehiculo 1', kilometraje: '6.22', velocidad: '76', estadia: '2' }]
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
            name: 'Tiempo GPS',
            sortable: true,
            cell: row => <span>{Fecha(row.time)}</span>
        },
        {
            name: 'Velocidad (Km/h)',
            sortable: true,
            cell: row => <span>{((row.speed)*1.852).toFixed(2)+' Km/h'}</span>
        },
        {
            name: 'Longitud',
            selector: 'lon',
            sortable: true,
        },
        {
            name: 'Latitud',
            selector: 'lat',
            sortable: true,
        },
        {
            name: 'Ubicación',
            sortable: true,
            cell: row => <s.GMapLink href={`http://map.google.com/maps?q=${row.lat},${row.lon}`} target="_blank" rel="noreferrer">
                            <span>{row.address}</span>
                        </s.GMapLink>
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
                { title: "DETALLES DE EXCESO DE VELOCIDAD", width: {wpx: 300}, height: {wpx: 40}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true, sz:14}, border: {top: {style: "none", color: "#fff"}, bottom: {style: "nono", color: "#fff"}, left: {style: "none", color: "#fff"}, right: {style: "none", color: "#fff"}}}}
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
                { title: "EXCESO DE VELOCIDAD", width: {wpx: 520}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true, sz:12}} }
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
                { title: "Tiempo GPS", width: {wpx: 120}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { title: "Velocidad (Km/h)", width: {wpx: 120}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { title: "Longitud", width: {wpx: 120}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { title: "Latitud", width: {wpx: 120}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { title: "Ubicación", width: {wpx: 120}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
            ],
            data: datosTotal.map((dev, index) => {
                return [
                { value: dev.id, style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: dev.name, style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: Fecha(dev.time), style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: ((dev.speed)*1.852).toFixed(2)+' Km/h', style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: dev.lon, style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: dev.lat, style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: dev.address, style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
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
                    &nbsp;<BiBarChart />&nbsp;&nbsp;Detalles de Exceso de Velocidad
                </s.barra_superior_tituloGral>
            </s.caja_dispositivo_titulo>

            <s.contenido_panel_dispositivo>
                {/* CONTENIDO */}
                <s.contentReportesDiv>
                    <s.row1>
                        <s.LabelGral>Dispositivo <s.selecttGral onChange={(e) => setDeviceId(e.target.value)} className={errorDevice ? 'errorFormDate' :  ''}>
                                <option value="" selected> -- Dispositivo -- </option>
                                <option value="all" > -- TODOS -- </option>
                            {devAll.map((item) => (
                                <option value={item.id}>{item.name}</option>
                            ))}
                        </s.selecttGral></s.LabelGral>
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
                            <s.SpanFechas onClick={DateToday}>Hoy </s.SpanFechas>|
                            <s.SpanFechas onClick={DateYesterday}>Ayer </s.SpanFechas>
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
        </s.caja_dispositivo_panelGral>
    )
}

export default DetallesVel
