import React, {useEffect, useState} from 'react'
import * as s from '../../Reportes.styles';
import {BiBarChart} from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";

import DataTable from 'react-data-table-component';

/* TOAST ALERTS */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../../styles.css';

const TemperatureReport = () => {
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
            myHeaders.append("Accept", ); */

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
    const Hora = (fecha) => {
        const fecha1 = new Date();
        const date = new Date(fecha);
        if (fecha1.getDate() === date.getDate()) {
            return date.getHours()+':'+ date.getMinutes()+':'+date.getSeconds();
        }
        return date.getHours()+':'+ date.getMinutes()+':'+date.getSeconds();
    }
    const data = [{ id: '', objetivo: '', kilometraje: '', velocidad: '', estadia: '' }]
    const columns = [
        {
            name: '#',
            selector: 'deviceId',
            sortable: true,
        },
        {
            name: 'Hora',
            sortable: true,
            cell: row => <span>{Hora(row.serverTime)}</span>
        },
        {
            name: 'Nombre',
            selector: 'name',
            sortable: true,
        },
        {
            name: 'Temperatura 1 (ºC)',
            selector: 'temp1',
            sortable: true,
        },
        {
            name: 'Temperatura 2 (ºC)',
            selector: 'temp2',
            sortable: true,
        },
        {
            name: 'Temperatura 3 (ºC)',
            selector: 'temp3',
            sortable: true,
        },
        {
            name: 'Temperatura 4 (ºC)',
            selector: 'temp4',
            sortable: true,
        },
        {
            name: 'Dirección',
            selector: 'direccion',
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
                    &nbsp;<BiBarChart />&nbsp;&nbsp;Temperature Report
                </s.barra_superior_tituloGral>
            </s.caja_dispositivo_titulo>

            <s.contenido_panel_dispositivo>
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
                            <s.LabelGral>Hora <s.inputGral type="datetime-local" onChange={(e) => setDateFrom(e.target.value)}/></s.LabelGral>
                            <s.LabelGral>A <s.inputGral type="datetime-local" onChange={(e) => setDateTo(e.target.value)}/></s.LabelGral>
                            </div>
                            <s.SmallGral>El rango de tiempo máximo es de 30 días. Por favor, para más informes.<s.AGral> Programar Ahora</s.AGral></s.SmallGral>
                        </div>
                        <s.InfoBoton onClick={() => Datos()}>Comprobar</s.InfoBoton>
                    </s.row1>
                    {/* chart */}
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

export default TemperatureReport
