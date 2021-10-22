import React from 'react'
import * as s from '../Dispositivo.styles';
import {BiBarChart} from "react-icons/bi";
import {BsPencil} from "react-icons/bs";
import {FiArrowDownCircle} from "react-icons/fi";
import DataTable from 'react-data-table-component';

import '../styles.css';

const ConfigDispositvos = () => {
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
            name: 'IMEI',
            selector: 'imei',
            sortable: true,
        },
        {
            name: 'Tipo',
            selector: 'tipo',
            sortable: true,
        },
        {
            name: 'Número de Placa',
            selector: 'placa',
            sortable: true,
        },
        {
            name: 'Sim Card',
            selector: 'simcard',
            sortable: true,
        },
        {
            name: 'Exceso de velocidad(Mph)',
            selector: 'velocidad',
            sortable: true,
        },
        {
            name: 'Fecha de Vencimiento',
            cell:(row) =>
                        <s.selecttGral>
                            <option value="">msila</option>
                        </s.selecttGral> ,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
        {
            name: 'Operación',
            cell:(row) =>
                        <s.tableButtons>
                            <s.tabButton id={row.ID}><BsPencil /></s.tabButton>
                            <s.tabButton id={row.ID}><FiArrowDownCircle /></s.tabButton>
                        </s.tableButtons> ,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];
    return (
        <div className="menuContent" style={{left:'0px', top:'0px', marginTop:'10px', marginLeft:'10px'}}>
                
            <s.caja_dispositivo_titulo >
            
                <s.barra_arrastable />
                <s.barra_superior_tituloGral>
                &nbsp;
                    &nbsp;<BiBarChart />&nbsp;&nbsp;Dispositivo
                </s.barra_superior_tituloGral>
            </s.caja_dispositivo_titulo>

            <s.contenido_panel_dispositivo>
                {/* CONTENIDO */}
                <s.contentReportesDiv>
                    <s.row1>
                        <s.inputGral type="search" placeholder="Obejtivo/IMEI"/>
                        <s.InfoBoton>Configuración de Alertas</s.InfoBoton>
                        <s.InfoBoton>Configuración de Lote</s.InfoBoton>
                        <s.InfoBoton>Grupo de Destino</s.InfoBoton>
                    </s.row1>
                    <s.divTable>
                        <DataTable
                            columns={columns}
                            data={data}
                            striped={true}
                            highlightOnHover={true}
                            pointerOnHover={true}
                            selectableRows
                        />
                    </s.divTable>
                </s.contentReportesDiv>
            </s.contenido_panel_dispositivo>  
        </div>
    )
}

export default ConfigDispositvos
