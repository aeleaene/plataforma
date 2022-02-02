import React, {useEffect, useState} from 'react'
import * as s from '../../Reportes.styles';
import {BiBarChart} from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";

import DataTable from 'react-data-table-component';

/* TOAST ALERTS */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../../styles.css';

const InfoDTC = () => {
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
        /* var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Accept", ");*/

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
        const fecha1 = new Date();
        const date = new Date(fecha);
        return date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate() + ' '+date.getHours()+':'+ date.getMinutes()+':'+date.getSeconds();
    }
    const data = [{ id: '', objetivo: '', kilometraje: '', velocidad: '', estadia: '' }]
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
            name: 'Código',
            selector: 'codigo',
            sortable: true,
        },
        {
            name: 'Estado',
            selector: 'estado',
            sortable: true,
        },
        {
            name: 'Descripción',
            selector: 'descripcion',
            sortable: true,
        },
        {
            name: 'Fecha y Hora',
            selector: 'time',
            sortable: true,
        },
        {
            name: 'Ubicación',
            selector: 'ubicacion',
            sortable: true,
        },
    ];
    return (
        <s.caja_dispositivo_panelGral style={{left:'0px', top:'0px', marginTop:'10px', marginLeft:'10px'}}>
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
                    &nbsp;<BiBarChart />&nbsp;&nbsp;Informe DTC
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

export default InfoDTC
