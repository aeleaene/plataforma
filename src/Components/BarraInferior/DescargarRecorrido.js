import React, {useState, Fragment, useEffect} from 'react'
import * as s from './GeoCercas.styles'
import * as ic from 'react-icons/all';
import {RiRouteLine, RiFileExcel2Line} from 'react-icons/ri';
import {SiGoogleearth} from 'react-icons/si';
import {AiOutlineFile} from 'react-icons/ai';

import ReactExport from "react-data-export";
import { saveAs } from "file-saver";

import Spinner from './Spinner';

const DescargarRecorrido = () => {

    const [device, setDevice] = useState([]);
    const [deviceId, setDeviceId] = useState("0");
    const [devAll, setDevAll] = useState([]); //Id's de todos los dispositivos
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");
    const [error, setError] = useState(false);
    const [errorDevice, setErrorDevice] = useState(false);
    const ubicacion = [];
    const [datosTotal, setDatosTotal] = useState([]);
    const [devName, setDevName] = useState("");
    let plainText = "";
    //INSTANCIAS PARA EL EXCEL
    const ExcelFile = ReactExport.ExcelFile;
    const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
    const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
    const [filename, setFilename] = useState("");

    const [habilitado, setHabilitado] = useState(0);

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
        setHabilitado(1);
        Devices();
    }
    console.log(dateFrom)
    console.log(dateTo);
    const DateFromValue = e => {
        let date = new Date(e);
        setDateFrom(date.toISOString());
        setHabilitado(0);
        //console.log(date.toISOString());
    }
    const DateToValue = e => {
        let date = new Date(e);
        setDateTo(date.toISOString());
        setHabilitado(0);
        //console.log(date.toISOString());
    }
    const DeviceIdValue = e => {
        setDeviceId(e)
        setHabilitado(0);
    }
    const DateFormat = (date) => {
        let fecha = new Date(date);
        return fecha.getTime();
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
            //generar url de ruta
            let url = "https://www.protrack.ad105.net/api/reports/route?";
            let groupId;
            for(let i = 0; i < devAll.length; i++){
                groupId= devAll[i].groupId;
            }
            url = url+"deviceId="+deviceId+"&";
            url = url+"groupId="+groupId+"&type=allEvents&from="+dateFrom+"&to="+dateTo;
            console.log(url)
            const resultado2 = await fetch(`${url}`, requestOptions)
            const deviceData2 = await resultado2.json();
            
            for(let i = 0; i < deviceData2.length; i ++){
                //obtener direccion
                ubicacion.push({id: i, gpsTime: deviceData2[i].serverTime, deviceTime: deviceData2[i].deviceTime, latitude: deviceData2[i].latitude, longitude: deviceData2[i].longitude, speed: deviceData2[i].speed, direction: deviceData2[i].course,})
            }
            //api device seleccionado
            const resDevice = await fetch(`https://www.protrack.ad105.net/api/devices/${deviceId}`, requestOptions)
            const resDev = await resDevice.json()
            
            setDatosTotal(ubicacion);
            console.log(ubicacion);
            console.log(datosTotal);
            console.log(resDev.name);
            setDevice(resDev);
            setFilename(`${resDev.name}_gps(${DateFormat(dateFrom)} - ${DateFormat(dateTo)})`);
            setHabilitado(2);
            console.log(device);
    }
    const Fecha = (fecha) => {
        const fecha1 = new Date();
        const date = new Date(fecha);
        if (fecha1.getDate() === date.getDate()) {
            return date.getHours()+':'+ date.getMinutes()+':'+date.getSeconds();
        }
        return date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate()+' '+date.getHours()+':'+ date.getMinutes()+':'+date.getSeconds();
    }
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
                { title: filename+"("+datosTotal.length+")", width: {wpx: 300}, height: {wpx: 40}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true, sz:14}, border: {top: {style: "none", color: "#fff"}, bottom: {style: "nono", color: "#fff"}, left: {style: "none", color: "#fff"}, right: {style: "none", color: "#fff"}}}}
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
                { title: "Exceso de Velocidad", width: {wpx: 520}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true, sz:12}} }
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
                { title: "NO.", width: {wpx: 40}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { title: "GPS Time", width: {wpx: 120}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { title: "Latitude", width: {wpx: 120}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { title: "Longitude", width: {wpx: 120}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { title: "Speed(kph)", width: {wpx: 120}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { title: "Direction", width: {wpx: 120}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { title: "View Map", width: {wpx: 360}, style: {alignment: {vertical: "center", horizontal: "center"}, font: {bold: true}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
            ],
            data: datosTotal.map((dev, index) => {
                return [
                { value: dev.id, style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: Fecha(dev.gpsTime), style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: dev.latitude, style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: dev.longitude, style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: ((dev.speed)*1.852).toFixed(0)+' Km/h', style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: dev.direction, style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                { value: `http://map.google.com/maps?q=${dev.latitude},${dev.longitude}`, style: {alignment: {vertical: "center", horizontal: "center"}, border: {top: {style: "thin", color: "#000"}, bottom: {style: "thin", color: "#000"}, left: {style: "thin", color: "#000"}, right: {style: "thin", color: "#000"}}}},
                ];
            }),
        },
    ];
    const exportTxt = () => {
        plainText = "begintime="+DateFormat(dateFrom)+"\n";
        plainText = plainText+"endtime="+DateFormat(dateTo)+"\n";
        plainText = plainText+"overspeedThreshold=\n";
        plainText = plainText+"deviceName="+device.name+"\n";
        plainText = plainText+"deviceType="+device.model+"\n";
        plainText = plainText+"plate=\n";
        plainText = plainText+"imei="+(device.uniqueId).replace((device.uniqueId).substr(2,11), '***********')+"\n";
        plainText = plainText+"initMapCenter="+datosTotal[0].latitude+","+datosTotal[0].longitude+"\n";
        plainText = plainText+"version=1.0\n";
        plainText = plainText+"gpsData[1]=";
        for(let i = 0; i < datosTotal.length; i++){
            plainText = plainText+datosTotal[i].latitude+","+datosTotal[i].longitude+","+DateFormat(datosTotal[i].gpsTime)+";";
        }
        var blob = new Blob([plainText], { type: "text/plain;charset=utf-8" });
        saveAs(blob, `${filename}.txt`);
    }
    return (
        <s.Container>
            <s.ContentInfo>
                <ic.BsInfoCircleFill style={{
                    fontSize: 14,
                    color: '#2cabe3'
                }}/>
                <s.LabelTrips>
                    La diferencia de tiempo es mayor de siete días
                </s.LabelTrips>
            </s.ContentInfo>
            <s.DivTrips>
                <s.DivFormTrips>
                    <s.NameInputTrips>Dispositivo: </s.NameInputTrips>
                    <s.SelectDevTrips onChange={(e) => DeviceIdValue(e.target.value)} className={errorDevice ? 'errorFormDate' :  ''}>
                        <option value="" selected disabled>-- Selecciona un Dispositivo --</option>
                        {devAll.map((item) => (
                                <option key={item.id} value={item.id}>{item.name}</option>
                        ))}
                    </s.SelectDevTrips>
                </s.DivFormTrips>
                <s.DivFormTrips>
                    <s.NameInputTrips>Tiempo de Inicio:</s.NameInputTrips>
                    <s.InputTrips type="date" onChange={(e) =>DateFromValue(e.target.value)} className={error ? 'errorFormDate' :  ''}/>
                </s.DivFormTrips>
                <s.DivFormTrips>
                    <s.NameInputTrips>Tiempo Final:</s.NameInputTrips>
                    <s.InputTrips type="date" onChange={(e) => DateToValue(e.target.value)} className={error ? 'errorFormDate' :  ''}/>
                </s.DivFormTrips>
            </s.DivTrips>
            <s.ContentTripsDownload>
                {habilitado === 0 ? (
                    <s.ContentButtonDownload>
                        <s.DownloadButtonTxt
                            onClick={DesdeForm}
                        ><AiOutlineFile style={{
                            fontSize: 20,
                        }}/>Generar Reporte</s.DownloadButtonTxt>
                    </s.ContentButtonDownload>
                ) : null }
                {habilitado === 1 ? <Spinner /> : null}
                {habilitado === 2 ? (
                    <Fragment>
                        <s.ContentButtonDownload>
                            <s.DownloadButtonKml><SiGoogleearth  style={{
                                fontSize: 20,
                            }}/>Download Kml</s.DownloadButtonKml>
                            <ic.BsInfoCircleFill style={{
                                fontSize: 14,
                                color: '#2cabe3'
                            }}/>
                        </s.ContentButtonDownload>
                        <s.ContentButtonDownload>
                        <ExcelFile element={
                            <s.DownloadButtonExcel><RiFileExcel2Line style={{
                                fontSize: 20,
                            }}/>Download Excel</s.DownloadButtonExcel>
                        } filename={filename}><ExcelSheet dataSet={data} name={filename} /></ExcelFile>
                            <ic.BsInfoCircleFill style={{
                                fontSize: 14,
                                color: '#2cabe3'
                            }}/>
                        </s.ContentButtonDownload>
                        <s.ContentButtonDownload>
                            <s.DownloadButtonTxt
                                onClick={exportTxt}
                            ><RiRouteLine style={{
                                fontSize: 20,
                            }}/>Download Txt</s.DownloadButtonTxt>
                            <ic.BsInfoCircleFill style={{
                                fontSize: 14,
                                color: '#2cabe3'
                            }}/>
                        </s.ContentButtonDownload>
                    </Fragment>
                ) : null}
            </s.ContentTripsDownload>
        </s.Container>
    )
}

export default DescargarRecorrido
