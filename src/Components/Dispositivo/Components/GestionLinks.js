import React from 'react'
import * as s from '../Dispositivo.styles';
import {BiBarChart} from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import {  BsPencil   } from "react-icons/bs";
import {  FiArrowDownCircle   } from "react-icons/fi";

import DataTable from 'react-data-table-component';

import '../styles.css';

const GestionLinks = () => {
    const data = [{ id: 1, objetivo: 'Vehiculo 1', kilometraje: '6.22', velocidad: '76', estadia: '2' }]
    const columns = [
        {
            name: '#',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Nombre de link a compartir',
            selector: 'link',
            sortable: true,
        },
        {
            name: 'Dispositivo',
            selector: 'dispositivo',
            sortable: true,
        },
        {
            name: 'IMEI',
            selector: 'imei',
            sortable: true,
        },
        {
            name: 'Periodo',
            selector: 'periodo',
            sortable: true,
        },
        {
            name: 'Estado',
            selector: 'estado',
            sortable: true,
        },
        {
            name: 'Ubicación',
            selector: 'ubiacion',
            sortable: true,
        },
        {
            name: 'Crear Tiempo',
            selector: 'tiempo',
            sortable: true,
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
                    &nbsp;<BiBarChart />&nbsp;&nbsp;Gestionar link`s compartidos
                </s.barra_superior_tituloGral>
            </s.caja_dispositivo_titulo>

            <s.contenido_panel_dispositivo>
                {/* CONTENIDO */}
                <s.contentReportesDiv>
                    <s.row1>
                        <s.LabelGral>Dispositivo <s.selecttGral></s.selecttGral> </s.LabelGral>
                        <s.LabelGral>Crear Tiempo <s.inputGral type="date"/></s.LabelGral>
                        <s.LabelGral>A <s.inputGral type="date"/></s.LabelGral>
                        <s.LabelGral>Tipo de Alarma <s.selecttGral></s.selecttGral> </s.LabelGral>
                        <s.InfoBoton>Comprobar</s.InfoBoton>
                        <s.GenBoton><AiOutlinePlus /> Nuevo</s.GenBoton>
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

export default GestionLinks
