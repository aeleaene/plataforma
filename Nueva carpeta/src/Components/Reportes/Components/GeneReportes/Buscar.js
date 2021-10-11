import React, { useEffect, useState } from 'react'
import * as s from '../../Reportes.styles';

import { AiOutlinePlus } from "react-icons/ai";
import { BsPencil, BsTrash } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";



import DataTable from 'react-data-table-component';

import '../../styles.css';

const Buscar = () => {
    const [device, setDevice] = useState([]); //SE GUARDAN LOS JSON MEZCALDOS
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");
    const Datos = () => {
        Devices()
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
            
            if (dateFrom === "" && dateTo === "") {
                const resultado = await fetch("https://www.protrack.ad105.net/api/devices", requestOptions)
                const resultado2 = await fetch(`https://www.protrack.ad105.net/api/positions`, requestOptions)
                /* .then(response => response.json())
                .catch(error => console.log('error', error)); */
                const deviceData = await resultado.json();
                const deviceData2 = await resultado2.json();

                var full = [] //JSONS MEZClados
                Object.keys(deviceData).forEach(k=>{full[k] = Object.assign(deviceData[k],deviceData2[k])});

                console.log('full data')
                console.log(full);
                setDevice(full);
            }
            else{
                const resultado = await fetch(`https://www.protrack.ad105.net/api/devices/`, requestOptions)
                const resultado2 = await fetch(`https://www.protrack.ad105.net/api/positions?from=${dateFrom}:00.000z&to=${dateTo}:00.000z`, requestOptions)
                /* .then(response => response.json())
                .catch(error => console.log('error', error)); */
                const deviceData = await resultado.json();
                const deviceData2 = await resultado2.json();

                var full = [] //JSONS MEZClados
                Object.keys(deviceData).forEach(k=>{full[k] = Object.assign(deviceData[k],deviceData2[k])});

                console.log('full data')
                console.log(full);
                setDevice(full);
            }
    }
    const data = [{ id: 1, objetivo: 'Vehiculo 1', kilometraje: '6.22', velocidad: '76', estadia: '2' }]
    const columns = [
        {
            name: '#',
            selector: 'deviceId',
            sortable: true,
        },
        {
            name: 'Periodo',
            selector: 'periodo',
            sortable: true,
        },
        {
            name: 'Nombre',
            selector: 'name',
            sortable: true,
        },
        {
            name: 'Tipo de Reporte',
            selector: 'tipoReporte',
            sortable: true,
        },
        {
            name: 'Generar Tiempo',
            selector: 'gentiempo',
            sortable: true,
        },
        {
            name: 'Cantidad de Dispositivos',
            selector: 'dispositivos',
            sortable: true,
        },
        {
            name: 'Correo Electrónico',
            selector: 'email',
            sortable: true,
        },
        {
            name: 'Operación',
            cell:(row) =>
                        <s.tableButtons>
                            <s.tabButton id={row.ID}><FiFileText /></s.tabButton>
                            <s.tabButton id={row.ID}><BsPencil /></s.tabButton>
                            <s.tabButton id={row.ID}><BsTrash /></s.tabButton>
                        </s.tableButtons> ,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];
    return (
        <s.contentReportesDiv>
                    <s.row1>
                        <s.LabelGral>Tipo de Reporte <s.selecttGral></s.selecttGral></s.LabelGral>
                        <s.LabelGral>Periodo <s.inputGral type="datetime-local" onChange={(e) => setDateFrom(e.target.value)}/></s.LabelGral>
                        <s.LabelGral>A <s.inputGral type="datetime-local" onChange={(e) => setDateTo(e.target.value)}/></s.LabelGral>
                        <s.InfoBoton onClick={() => Datos()}>Comprobar</s.InfoBoton>
                    </s.row1>
                    <s.divTable>
                        <DataTable
                            columns={columns}
                            data={device}
                            striped={true}
                            highlightOnHover={true}
                            pointerOnHover={true}
                        />
                    </s.divTable>
        </s.contentReportesDiv>
    )
}

export default Buscar
