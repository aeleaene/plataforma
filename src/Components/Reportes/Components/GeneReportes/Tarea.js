import React from 'react'
import * as s from '../../Reportes.styles';

import { AiOutlinePlus } from "react-icons/ai";
import { BsPencil, BsTrash } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";



import DataTable from 'react-data-table-component';

import '../../styles.css';

const Tarea = () => {
    const data = [{ id: 1, objetivo: 'Vehiculo 1', kilometraje: '6.22', velocidad: '76', estadia: '2' }]
    const columns = [
        {
            name: '#',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Nombre',
            selector: 'nombre',
            sortable: true,
        },
        {
            name: 'Tipo de Reporte',
            selector: 'tipoReporte',
            sortable: true,
        },
        {
            name: 'Ultimas Actualizaciones',
            selector: 'updates',
            sortable: true,
        },
        {
            name: 'Tipo de Tarea',
            selector: 'tipoTarea',
            sortable: true,
        },
        {
            name: 'Cantidad de Dispositivos',
            selector: 'dispositivos',
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
    )
}

export default Tarea
