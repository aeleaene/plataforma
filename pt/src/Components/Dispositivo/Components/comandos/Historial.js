import React from 'react'
import * as s from '../../Dispositivo.styles';
import {BsFolderSymlink} from "react-icons/bs";




import DataTable from 'react-data-table-component';

import '../../styles.css'

const Historial = () => {
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
            name: 'Comando',
            selector: 'comando',
            sortable: true,
        },
        {
            name: 'Ultimas Actualizaciones',
            selector: 'updates',
            sortable: true,
        },
        {
            name: 'Cantidad de Dispositivos',
            selector: 'dispositivos',
            sortable: true,
        },
        {
            name: 'Respuesta',
            selector: 'respuesta',
            sortable: true,
        },
        {
            name: 'Operación',
            cell:(row) =>
                        <s.tableButtons>
                            <s.tabButton id={row.ID}><BsFolderSymlink /></s.tabButton>
                        </s.tableButtons> ,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];
    return (
        <s.contentReportesDiv>
            <s.row1>
                <s.LabelGral>Nombre <s.inputGral type="text" /> </s.LabelGral>
                <s.LabelGral>Comando <s.selecttGral>
                                            <option value="" disabled selected>Seleccionar</option>
                                            <option value="">Apagar el Motor</option>
                                            <option value="">Restaurar el Motor</option>
                                    </s.selecttGral> 
                    </s.LabelGral>
                <s.LabelGral>Hora <s.inputGral type="date"/></s.LabelGral>
                <s.LabelGral>A <s.inputGral type="date"/></s.LabelGral>
                <s.InfoBoton>Comprobar</s.InfoBoton>
                <s.OutlineBoton>Reiniciar</s.OutlineBoton>
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

export default Historial
