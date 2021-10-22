import React, {useEffect, useState} from 'react'
import * as s from '../../Reportes.styles';
import {BiBarChart} from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";

import DataTable from 'react-data-table-component';

import '../../styles.css';

const DetallesEstadia = () => {
    const [device, setDevice] = useState([]);
    const [fullData, setFullData] = useState([]);
    useEffect(() => {
        Devices()
    }, [])
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
            
            const resultado = await fetch("https://www.protrack.ad105.net/api/devices", requestOptions)
            const resultado2 = await fetch("https://www.protrack.ad105.net/api/positions", requestOptions)
                /* .then(response => response.json())
                .catch(error => console.log('error', error)); */
                const deviceData = await resultado.json();
                const deviceData2 = await resultado2.json();
                console.log('full data')
                /* console.log(fulldata); */
                /* console.log(deviceData) */
                setDevice(deviceData);
                setFullData(deviceData2);
                /* console.log(device) */
    }
    const data = [{ id: 1, objetivo: 'Vehiculo 1', kilometraje: '6.22', velocidad: '76', estadia: '2' }]
    const columns = [
        {
            name: '#',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Tiempo de Inicio',
            selector: 'inicio',
            sortable: true,
        },
        {
            name: 'Tiempo Final',
            selector: 'final',
            sortable: true,
        },
        {
            name: 'Duración de la Estadia',
            selector: 'estadia',
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
                
            <s.caja_dispositivo_titulo >
            
                <s.barra_arrastable />
                <s.barra_superior_tituloGral>
                &nbsp;
                    &nbsp;<BiBarChart />&nbsp;&nbsp;Detalles de Estadia
                </s.barra_superior_tituloGral>
            </s.caja_dispositivo_titulo>
            <s.contenido_panel_dispositivo>
                {/* CONTENIDO */}
                <s.contentReportesDiv>
                    <s.row1>
                        <s.LabelGral>Dispositivo <s.selecttGral></s.selecttGral></s.LabelGral>
                        <div>
                            <div>
                            <s.LabelGral>Hora <s.inputGral type="date"/></s.LabelGral>
                            <s.LabelGral>A <s.inputGral type="date"/></s.LabelGral>
                            </div>
                            <s.SmallGral>El rango de tiempo máximo es de 30 días. Por favor, para más informes.<s.AGral> Programar Ahora</s.AGral></s.SmallGral>
                        </div>
                        <s.LabelGral>Duración Estadia <s.selecttGral></s.selecttGral></s.LabelGral>
                        <s.LabelCheck><s.CheckBox1 type="checkbox" name="indice"/>Indice de Cuenta </s.LabelCheck>
                        <s.InfoBoton>Comprobar</s.InfoBoton>
                    </s.row1>
                    <s.row2>
                        <s.DivSpan>
                            <s.SpanFechas>Hoy </s.SpanFechas>|
                            <s.SpanFechas>Ayer </s.SpanFechas>
                        </s.DivSpan>
                    </s.row2>
                    <s.divTable>
                        <DataTable
                            columns={columns}
                            data={device}
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

export default DetallesEstadia
