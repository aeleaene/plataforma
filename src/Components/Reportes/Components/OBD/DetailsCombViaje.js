import React from 'react'
import * as s from '../../Reportes.styles';
import {BiBarChart} from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";

import DataTable from 'react-data-table-component';

import '../../styles.css';

const DetailsCombViaje = () => {
    const data = [{ id: 1, objetivo: 'Vehiculo 1', kilometraje: '6.22', velocidad: '76', estadia: '2' }]
    const columns = [
        {
            name: '#',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Kilometraje (Km)',
            selector: 'velocidad',
            sortable: true,
        },
        {
            name: 'Consumo de combustible(L)',
            selector: 'consumo',
            sortable: true,
        },
        {
            name: 'Tiempo inicio',
            selector: 'inicio',
            sortable: true,
        },
        {
            name: 'Tiempo Final',
            selector: 'final',
            sortable: true,
        },
        {
            name: 'Tiempo de Ejeución',
            selector: 'ejecucion',
            sortable: true,
        },
        {
            name: 'Operación',
            selector: 'operacion',
            sortable: true,
        },
    ];
    return (
        <s.caja_dispositivo_panelGral style={{left:'0px', top:'0px', marginTop:'10px', marginLeft:'10px'}}>
                
            <s.caja_dispositivo_titulo >
            
                <s.barra_arrastable />
                <s.barra_superior_tituloGral>
                &nbsp;
                    &nbsp;<BiBarChart />&nbsp;&nbsp;Detalles de consumo de combustible de viaje
                </s.barra_superior_tituloGral>
            </s.caja_dispositivo_titulo>

            <s.contenido_panel_dispositivo>
                {/* CONTENIDO */}
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
                    <s.row2>
                        <s.DivSpan>
                            <s.SpanFechas>Ayer </s.SpanFechas>|
                            <s.SpanFechas>Esta Semana </s.SpanFechas>|
                            <s.SpanFechas>La Semana Pasada</s.SpanFechas>|
                            <s.SpanFechas>Este Mes</s.SpanFechas>|
                            <s.SpanFechas>Mes Pasado</s.SpanFechas>
                        </s.DivSpan>
                    </s.row2>
                    <s.divCards>
                        <s.divCard>
                            <s.LabelCard>Total Tiempos de viaje:</s.LabelCard>
                            <s.LabelCard2></s.LabelCard2>
                        </s.divCard>
                        <s.divCard>
                            <s.LabelCard>Total Kilometraje:</s.LabelCard>
                            <s.LabelCard2></s.LabelCard2>
                        </s.divCard>
                        <s.divCard>
                            <s.LabelCard>Total Tiempo de ejecución:</s.LabelCard>
                            <s.LabelCard2></s.LabelCard2>
                        </s.divCard>
                        <s.divCard>
                            <s.LabelCard>Total Consumo de combustible:</s.LabelCard>
                            <s.LabelCard2></s.LabelCard2>
                        </s.divCard>
                        <s.divCard>
                            <s.LabelCard>Total Consumo medio de combustible:</s.LabelCard>
                            <s.LabelCard2></s.LabelCard2>
                        </s.divCard>
                    </s.divCards>
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

export default DetailsCombViaje
