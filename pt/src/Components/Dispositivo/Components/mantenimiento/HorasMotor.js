import React from 'react'
import * as s from '../../Dispositivo.styles';
import {BiBarChart} from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPencil, BsTrash } from "react-icons/bs";
import { MdUpdate } from "react-icons/md";



import DataTable from 'react-data-table-component';

import '../../styles.css'

const HorasMotor = () => {
    const data = [{ id: 1, objetivo: 'Vehiculo 1', kilometraje: '6.22', velocidad: '76', estadia: '2' }]
    const columns = [
        {
            name: '#',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Nombre del Proyecto',
            selector: 'nombre',
            sortable: true,
        },
        {
            name: 'Dispositivo',
            selector: 'dispositivo',
            sortable: true,
        },
        {
            name: 'Horas totales',
            selector: 'htotales',
            sortable: true,
        },
        {
            name: 'Próximas horas de mantenimiento(h)',
            selector: 'prMantenimiento',
            sortable: true,
        },
        {
            name: 'Últimas horas de mantenimiento(h)',
            selector: 'ulMantenimiento',
            sortable: true,
        },
        {
            name: 'Última cita',
            selector: 'ulCita',
            sortable: true,
        },
        {
            name: 'Últimas actualizaciones',
            selector: 'ulUpdates',
            sortable: true,
        },
        {
            name: 'Estado',
            selector: 'estado',
            sortable: true,
        },
        {
            name: 'Operación',
            cell:(row) =>
                        <s.tableButtons>
                            <s.tabButton id={row.ID}><BsPencil /></s.tabButton>
                            <s.tabButton id={row.ID}><MdUpdate /></s.tabButton>
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
                <s.InfoBoton><AiOutlinePlus /> Nuevo</s.InfoBoton>
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
    )
}

export default HorasMotor
