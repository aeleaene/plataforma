import React, { useEffect, useState, useContext } from 'react'
import * as s from './GeoCercas.styles'
import { BsBellFill, BsPlus, BsGearFill, BsPencil, BsTrash } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoVolumeMuteOutline, IoStatsChartSharp } from "react-icons/io5";
import { SiCircle } from "react-icons/si";
import { FiTarget } from "react-icons/fi";
import { FaDrawPolygon } from "react-icons/fa";
import { BsCircle } from "react-icons/bs";
import { HiOutlineViewGridAdd, HiOutlineDotsVertical } from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";

import {MenContext} from '../../Context/MenuContext';

const Alarms = ({ver, ocultar}) => {

    /* useContext */
    const { setMenuOp, setSubmenuOp } = useContext(MenContext);

    const [devAll, setDevAll] = useState([]); //Id's de todos los dispositivos
    const [reportData, setReportData] = useState([]); //SE GUARDAN LOS REPORTES
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");
    const [datosTotal, setdatosTotal] = useState([])
    const ubicacion = [];
    let index = 0;

    useEffect(() => {
        if(ver){
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

            DevicesAll();
            Devices();
        }
    }, [ver])

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
                let url = "https://www.protrack.ad105.net/api/reports/events?";
                let groupId;
                for(let i = 0; i < devAll.length; i++){
                    url = url+"deviceId="+devAll[i].id+"&";
                    groupId= devAll[i].groupId;
                }
                url = url+"groupId="+groupId+"&type=allEvents&from="+dateFrom+"&to="+dateTo+'&daily=false&page=1&start=0&limit=25';
                console.log(url)
                const resultado2 = await fetch(`${url}`, requestOptions)
                const deviceData2 = await resultado2.json();

                console.log(deviceData2)
                for(let i = 0; i< deviceData2.length; i++){
                    for (let j = 0; j < devAll.length; j++) {
                        if(deviceData2[i].deviceId === devAll[j].id){
                            ubicacion.push({id: devAll[j].id, name: devAll[j].name, type: deviceData2[i].type})
                        }
                    }
                }
                console.log(ubicacion);
                setReportData(ubicacion);
    }
    const typeAlarm = (type) => {
        let alarma = '';
        switch (type) {
            case 'deviceMoving':
                    alarma = 'Dispositivo en Movimiento';
                break;
            case 'jamming':
                    alarma = 'Dispositivo con Interferencia';
                break;
            case 'deviceStopped':
                    alarma = 'Dispositivo Detenido';
                break;
            case 'deviceOffline':
                    alarma = 'Dispositivo Fuera de Línea';
                break;
            case 'deviceOnline':
                    alarma = 'Dispositivo en línea';
                break;
            case 'geofenceExit':
                    alarma = 'Dispositivo saliendo de GeoCerca';
                break;
            case 'geofenceEnter':
                    alarma = 'Dispositivo entrando a GeoCerca';
                break;
            case 'powerCut':
                    alarma = 'Bateria desconectada';
                break;
            case 'sos':
                    alarma = 'Alarma SOS';
                break;
            case 'lowBattery':
                    alarma = 'Bateria Baja';
                break;
            case 'door':
                    alarma = 'Puerta';
                break;
            case 'fuelUp':
                    alarma = 'Cargando combustible';
                break;
            case 'fuelDown':
                    alarma = 'Vaciando combustible';
                break;
            case 'ignitionOff':
                    alarma = 'Motor Apagado';
                break;
            case 'ignitionOn':
                    alarma = 'Motor Encendido';
                break;
            case 'noGps':
                    alarma = 'No se encuentra Gps';
                break;
            case 'overSpeed':
                    alarma = 'Alarma Exceso de Velocidad';
                break;
            case 'oilLeak':
                    alarma = 'Fuga de combustible';
                break;
            case 'deviceUnknown':
                alarma = 'Dispositivo Desconocido';
                break;
            case 'alarm':
                alarma = 'Alarma';

                break;
            default:
                break;
        }
        return alarma;
    }
    return (
        <s.Container>
            <s.busqueda_dispositivo>
                <s.busqueda_en_linea aria-haspopup="listbox" role="combobox" aria-owns="el-complete-8812">
                    <s.sufijo_entrada>
                        <s.entrada_interna type='text' autoComplete='off' valuekey='value' placeholder='Nombre' />

                    </s.sufijo_entrada>
                </s.busqueda_en_linea>
                <s.AlarmIcons>
                    <IoVolumeMuteOutline/>
                </s.AlarmIcons>
                <s.AlarmIcons>
                    <BsTrash/>
                </s.AlarmIcons>
                <s.AlarmIcons>
                    <HiOutlineDotsVertical/>
                </s.AlarmIcons>
            </s.busqueda_dispositivo>
            <s.verAlertasDiv>
                <s.VerAlertas onClick={() => {setMenuOp(3); setSubmenuOp(25)}}><IoStatsChartSharp />{' '}Ver Alertas</s.VerAlertas>
            </s.verAlertasDiv>
            <s.ListAlerts>
                {reportData.map(item => (
                    <s.ListAlertElem  key={item.id}>
                        <span>{index = index +1}</span>
                        <s.SpanAlarmData>
                            <span>Dispositivo:<strong>{' '+item.name}</strong></span>
                            <span>{typeAlarm(item.type)}</span>
                        </s.SpanAlarmData>
                    </s.ListAlertElem>
                ))}
            </s.ListAlerts>
        </s.Container>
    )
}

export default Alarms
