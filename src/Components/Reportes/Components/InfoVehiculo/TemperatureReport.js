import React from 'react'
import * as s from '../../Reportes.styles';
import {BiBarChart} from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";

import DataTable from 'react-data-table-component';

import '../../styles.css';

const TemperatureReport = () => {
    const data = [{ id: 1, objetivo: 'Vehiculo 1', kilometraje: '6.22', velocidad: '76', estadia: '2' }]
    const columns = [
        {
            name: '#',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Hora',
            selector: 'hora',
            sortable: true,
        },
        {
            name: 'Nombre',
            selector: 'nombre',
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
                        <s.LabelGral>Dispositivo: <s.selecttGral></s.selecttGral></s.LabelGral>
                        <div>
                            <div>
                            <s.LabelGral>Hora <s.inputGral type="date"/></s.LabelGral>
                            <s.LabelGral>A <s.inputGral type="date"/></s.LabelGral>
                            </div>
                            <s.SmallGral>El rango de tiempo máximo es de 30 días. Por favor, para más informes.<s.AGral> Programar Ahora</s.AGral></s.SmallGral>
                        </div>
                        <s.InfoBoton>Comprobar</s.InfoBoton>
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
