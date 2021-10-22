import React from 'react'
import * as s from '../Dispositivo.styles';
import {BiBarChart} from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { FiArrowDownCircle } from "react-icons/fi";

import DataTable from 'react-data-table-component';

import '../styles.css';

const AdminNotify = () => {
    const data = [{ id: 1, objetivo: 'Vehiculo 1', kilometraje: '6.22', velocidad: '76', estadia: '2' }]
    const columns = [
        {
            name: '#',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Dispositivo',
            selector: 'dispositivo',
            sortable: true,
        },
        {
            name: 'Nombre del Proyecto',
            selector: 'proyecto',
            sortable: true,
        },
        {
            name: 'Caducidad',
            selector: 'caducidad',
            sortable: true,
        },
        {
            name: 'Estado',
            selector: 'estado',
            sortable: true,
        },
        {
            name: 'Enviar al Correo Electrónico',
            selector: 'sendEmail',
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
                    &nbsp;<BiBarChart />&nbsp;&nbsp;Administración de notificaciones de vencimientos
                </s.barra_superior_tituloGral>
            </s.caja_dispositivo_titulo>

            <s.contenido_panel_dispositivo>
                {/* CONTENIDO */}
                <s.contentReportesDiv>
                    <s.row1>
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

export default AdminNotify
