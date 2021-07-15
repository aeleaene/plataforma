import React from 'react'
import * as s from '../../Reportes.styles';
import {BiBarChart, BiBorderTop} from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";

import ReactECharts from 'echarts-for-react';

import DataTable from 'react-data-table-component';

import '../../styles.css';

const InfoCombustible = () => {
    const data = [{ id: 1, objetivo: 'Vehiculo 1', kilometraje: '6.22', velocidad: '76', estadia: '2' }]
    const columns = [
        {
            name: '#',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Fecha y Hora',
            selector: 'date',
            sortable: true,
        },
        {
            name: 'Repostar/El consumo de combustible',
            selector: 'consumo',
            sortable: true,
        },
        {
            name: 'Combustible (L)',
            selector: 'combustible',
            sortable: true,
        },
        {
            name: 'Volumen inicial (L)',
            selector: 'vinicial',
            sortable: true,
        },
        {
            name: 'Volumen final (L)',
            selector: 'vfinal',
            sortable: true,
        },
        {
            name: 'Kilometraje (Km)',
            selector: 'kilometraje',
            sortable: true,
        },
        {
            name: 'Odometro (Km)',
            selector: 'odometro',
            sortable: true,
        },
        {
            name: 'Consumo medio de combustible(L/100KM)',
            selector: 'consumomedio',
            sortable: true,
        },
        {
            name: 'Ubicación',
            selector: 'ubicacion',
            sortable: true,
        },
    ];
    const options = {
        grid: { top: 8, right: 8, bottom: 24, left: 36 },
        xAxis: {
            type: 'category',
            data: ['', '', '', '', '', 'Odometro'],
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true,
            },
        ],
        tooltip: {
            trigger: 'axis',
        },
    };
    return (
        <s.caja_dispositivo_panelGral style={{left:'0px', top:'0px', marginTop:'10px', marginLeft:'10px'}}>
                
            <s.caja_dispositivo_titulo >
            
                <s.barra_arrastable />
                <s.barra_superior_tituloGral>
                &nbsp;
                    &nbsp;<BiBarChart />&nbsp;&nbsp;Informe de combustible
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
                            <s.SpanFechas>Ayer </s.SpanFechas>
                        </s.DivSpan>
                    </s.row2>
                    {/* chart */}
                    <s.divTable>
                        <ReactECharts option={options} />
                    </s.divTable>
                    <s.divCardsOut>
                        <s.LabelGral>Total Kilometraje:</s.LabelGral>
                        <s.LabelGral>Total Consumido:</s.LabelGral>
                        <s.LabelGral>Total Combustible suministrado:</s.LabelGral>
                        <s.LabelGral>Tiempo de Ejecución:</s.LabelGral>
                    </s.divCardsOut>
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

export default InfoCombustible
