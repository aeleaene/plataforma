import React, { useEffect, useState } from 'react'
import * as s from '../Dispositivo.styles';
import {BiBarChart} from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";
/* import ReactExport from "react-data-export"; */

import DataTable from 'react-data-table-component';

/* TOAST ALERTS */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../styles.css';
const DetallesAlarma = () => {
    const [device, setDevice] = useState([]); //SE GUARDAN LOS DISPOSITIVOS
    const [deviceId, setDeviceId] = useState("0");
    const [devAll, setDevAll] = useState([]); //Id's de todos los dispositivos
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");
    const [error, setError] = useState(false);
    const [errorDevice, setErrorDevice] = useState(false);
    const ubicacion = [];
    const [reportData, setReportData] = useState([]); //SE GUARDAN LOS REPORTES
    /* //INSTANCIAS PARA EL EXCEL
    const ExcelFile = ReactExport.ExcelFile;
    const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
    const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
    const [filename, setFilename] = useState("") */;
    useEffect(() => {
        DevicesAll()
    }, [])
    const DesdeForm = () =>{
        //validar
        if(deviceId === "0"){
            toast.error("Seleccione objetivo")
            setErrorDevice(true)
            return;
        }
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
            //generar url route
            let urlRoute = "https://www.protrack.ad105.net/api/reports/route?";
            let groupIdRoute;
            for(let i = 0; i < devAll.length; i++){
                groupIdRoute= devAll[i].groupId;
            }
            urlRoute = urlRoute+"deviceId="+deviceId+"&";
            urlRoute = urlRoute+"groupId="+groupIdRoute+"&type=allEvents&from="+dateFrom+"&to="+dateTo;
            console.log(urlRoute)
            const resultadoRoute = await fetch(`${urlRoute}`, requestOptions)
            const deviceDataRoute = await resultadoRoute.json();
            console.log(deviceDataRoute)

            //generar url events
            let url = "https://www.protrack.ad105.net/api/reports/events?";
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
            for(let i = 0; i< deviceData2.length; i++){
                for (let j = 0; j < devAll.length; j++) {
                    if(deviceData2[i].deviceId === devAll[j].id){
                        ubicacion.push({id: i, name: devAll[j].name, type: deviceData2[i].type, time: deviceData2[i].serverTime})
                    }
                }
            }
            console.log(ubicacion);
            setReportData(ubicacion);
        }
        catch(err){
            toast.error('Hubo un problema, intentelo más tarde');
        }

    }
    const Fecha = (fecha) => {
        const fecha1 = new Date();
        const date = new Date(fecha);
        if (fecha1.getDate() === date.getDate()) {
            return date.getHours()+':'+ date.getMinutes()+':'+date.getSeconds();
        }
        return date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate()+' '+date.getHours()+':'+ date.getMinutes()+':'+date.getSeconds();
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
            name: 'Tipo de Alarma',
            sortable: true,
            cell: row => <span>{typeAlarm(row.type)}</span>
        },
        {
            name: 'Hora de Alarma',
            sortable: true,
            cell: row => <span>{Fecha(row.time)}</span>
        },
        /* {
            name: 'Tiempo GPS',
            selector: 'gps',
            sortable: true,
        },
        {
            name: 'Velocidad (Milla)',
            selector: 'velMilla',
            sortable: true,
        }, */
        /* {
            name: 'Ubicación',
            selector: 'ubiacion',
            sortable: true,
        }, */
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
                    &nbsp;<BiBarChart />&nbsp;&nbsp;Detalles de Alarma
                </s.barra_superior_tituloGral>
            </s.caja_dispositivo_titulo>

            <s.contenido_panel_dispositivo>
                {/* CONTENIDO */}
                <s.contentReportesDiv>
                    <s.row1>
                        <s.LabelGral>Dispositivo <s.selecttGral onChange={(e) => setDeviceId(e.target.value)} className={errorDevice ? 'errorFormDate' :  ''}>
                                <option value="" selected> -- Dispositivo -- </option>
                            {devAll.map((item) => (
                                <option value={item.id}>{item.name}</option>
                            ))}
                        </s.selecttGral></s.LabelGral>
                        <div>
                            <div>
                            <s.LabelGral>Desde <s.inputGral type="date" onChange={(e) =>DateFromValue(e.target.value)} className={error ? 'errorFormDate' :  ''}/></s.LabelGral>
                            <s.LabelGral>A <s.inputGral type="date" onChange={(e) => DateToValue(e.target.value)} className={error ? 'errorFormDate' :  ''}/></s.LabelGral>
                            </div>
                            <s.SmallGral>El rango de tiempo máximo es de 30 días. Por favor, para más informes.<s.AGral> Programar Ahora</s.AGral></s.SmallGral>
                        </div>
                        <s.LabelGral>Tipo de Alarma <s.selecttGral>
                            <option value="" disabled>-- Selecciona --</option>
                        </s.selecttGral> </s.LabelGral>
                        <s.InfoBoton onClick={DesdeForm}>Comprobar</s.InfoBoton>
                    </s.row1>
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
                </s.contentReportesDiv>
            </s.contenido_panel_dispositivo>  
        </div>
    )
}

export default DetallesAlarma
