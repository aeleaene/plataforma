import React from 'react'
import * as s from '../Dispositivo.styles';
import {BiBarChart} from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";

import DataTable from 'react-data-table-component';

import '../styles.css';
const DetallesAlarma = () => {
    const data = [{ id: 1, objetivo: 'Vehiculo 1', kilometraje: '6.22', velocidad: '76', estadia: '2' }]
    const columns = [
        {
            name: '#',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Objetivo',
            selector: 'objetivo',
            sortable: true,
        },
        {
            name: 'Tipo de Alarma',
            selector: 'tipoAlarma',
            sortable: true,
        },
        {
            name: 'Hora de Alarma',
            selector: 'horaAlarma',
            sortable: true,
        },
        {
            name: 'Tiempo GPS',
            selector: 'gps',
            sortable: true,
        },
        {
            name: 'Velocidad (Milla)',
            selector: 'velMilla',
            sortable: true,
        },
        {
            name: 'Ubicación',
            selector: 'ubiacion',
            sortable: true,
        },
    ];
    return (
        <div className="menuContent" style={{left:'0px', top:'0px', marginTop:'10px', marginLeft:'10px'}}>
                
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
                        <s.LabelGral>Dispositivo <s.selecttGral></s.selecttGral> </s.LabelGral>
                        <div>
                            <div>
                            <s.LabelGral>Desde <s.inputGral type="date"/></s.LabelGral>
                            <s.LabelGral>A <s.inputGral type="date"/></s.LabelGral>
                            </div>
                            <s.SmallGral>El rango de tiempo máximo es de 30 días. Por favor, para más informes.<s.AGral> Programar Ahora</s.AGral></s.SmallGral>
                        </div>
                        <s.LabelGral>Tipo de Alarma <s.selecttGral></s.selecttGral> </s.LabelGral>
                        <s.InfoBoton>Comprobar</s.InfoBoton>
                    </s.row1>
                    <s.divTable>
                        <DataTable
                            columns={columns}
                            data={data}
                            striped={true}
                            highlightOnHover={true}
                            pointerOnHover={true}
                        />
                    </s.divTable>
                </s.contentReportesDiv>
            </s.contenido_panel_dispositivo>  
        </div>
    )
}

export default DetallesAlarma
