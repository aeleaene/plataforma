import React, {useState, useEffect, Fragment} from 'react'
import * as s from '../Dispositivo.styles';
import {BiBarChart} from "react-icons/bi";
import {BsPencil, BsGearFill, BsTerminal} from "react-icons/bs";
import {FiArrowDownCircle} from "react-icons/fi";
import * as ic from 'react-icons/all';
import DataTable from 'react-data-table-component';
import Modal from 'react-modal';
import '../../../styles/modals.css';

import '../styles.css';

/* MODALS */
import Comando from './Modals/Comando/Comando';
import Compartir from './Modals/Compartir/Compartir';
import ConfigDevice from './Modals/ConfigDevice/ConfigDevice';
import ConfigInOut from './Modals/ConfigInOut/ConfigInOut';

const ConfigDispositvos = () => {
    const [devAll, setDevAll] = useState([]); //Id's de todos los dispositivos
    const [modalComando, setModalComando] = useState(false);
    const [modalShare, setModalShare] = useState(false);
    const [modalDetalle, setModalDetalle] = useState(false);
    const [modalConfiguraciones, setModalConfiguraciones] = useState(false);
    const [data, setData] = useState([]);
    const datos = [];
    const [modalOptionToggle, setModalOptionToggle] = useState(false)
    const [dropID, setDropID] = useState(0);

    useEffect(() => {
        DevicesAll()
    }, [])


    const DevicesAll = async() =>{
        var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Accept", "*/*");

            var requestOptions = {
                method: 'GET',
                credentials: 'include',
                headers: myHeaders,
                redirect: 'follow'
            };
            
            const resulDev = await fetch("https://www.protrack.ad105.net/api/devices", requestOptions)
            const resDev = await resulDev.json()
            const resulPost = await fetch("https://www.protrack.ad105.net/api/positions", requestOptions)
            const resPost = await resulPost.json()
            const resulGroup = await fetch("https://www.protrack.ad105.net/api/groups", requestOptions)
            const resGroup = await resulGroup.json()

            for(let i = 0; i < resDev.length ; i++){
                for(let j = 0; j < resPost.length; j++){
                    for(let k = 0; k < resGroup.length; k++){
                        if(resDev[i].positionId === resPost[j].id){
                            if(resDev[i].groupId === resGroup[k].groupId){
                                datos.push({id: i, name: resDev[i].name, groupId: resGroup[k].groupId, groupName: resGroup[k].name, imei: resDev[i].uniqueId, type: resDev[i].model, placa: resDev[i].placa, sim: resDev[i].sim, speed: resPost[j].speed, outdate: resDev[i].outdate, serverTime: resPost[j].serverTime, lasTime: resDev[i].lastUpdate, observation: resDev[i].attributes.observation});
                            }
                        }
                    }
                }
            }

            setDevAll(datos);
    }

    const ActiveModal = (modAct, objeto) => {
        console.log(modAct);
        if (modAct === 1) {setModalComando(true)}
        if (modAct === 2) {setModalShare(true)}
        if (modAct === 3) {setModalDetalle(true)}
        if (modAct === 4) {setModalConfiguraciones(true)}
        setData(objeto);
    }
    const modalOptions = (id) => {
        setModalOptionToggle(!modalOptionToggle)
        setDropID(id);
    }
    //const data = [{ id: 1, objetivo: 'Vehiculo 1', kilometraje: '6.22', velocidad: '76', estadia: '2' }]
    const columns = [
        {
            name: '#',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Objetivo',
            selector: 'name',
            sortable: true,
        },
        {
            name: 'IMEI',
            sortable: true,
            cell: row => <span className="imeiConfig" onClick={() => ActiveModal(3, row)}>{(row.imei).replace((row.imei).substr(2,11), '***********')}</span>
        },
        
        {
            name: 'Tipo',
            selector: 'type',
            sortable: true,
        },
        {
            name: 'Número de Placa',
            selector: 'placa',
            sortable: true,
        },
        {
            name: 'Sim Card',
            selector: 'sim',
            sortable: true,
        },
        {
            name: 'Exceso de velocidad(Mph)',
            sortable: true,
            cell: row => <span>{((row.speed)*1.852).toFixed()+' Km/h'}</span>
        },
        {
            name: 'Fecha de Vencimiento',
            selector: 'outdate',
            sortable: true,
        },
        {
            name: 'Grupo',
            cell:(row) =>
                        <s.selecttGral>
                            <option value={row.groupId} selected>{row.groupName}</option>
                        </s.selecttGral> ,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
        {
            name: 'Operación',
            cell:(row) => <Fragment>
                            <s.tableButtons>
                                <s.tabButton id={row.id} onClick={() => ActiveModal(3, row)}><BsPencil /></s.tabButton>
                                <s.tabButton id={row.id} onClick={() => modalOptions(row.id)}><FiArrowDownCircle /></s.tabButton>
                            </s.tableButtons>
                            {
                                dropID === row.id ? (
                                    <s.modalDropOtions visibility={modalOptionToggle}>
                                        <s.modalDropOpt>Historial</s.modalDropOpt>
                                        <s.modalDropOpt>Seguir</s.modalDropOpt>
                                        <s.modalDropOpt onClick={() => ActiveModal(2, row)}>Configuración de Alarma</s.modalDropOpt>
                                        <s.modalDropOpt onClick={() => ActiveModal(1, row)}>Comando</s.modalDropOpt>
                                        <s.modalDropOpt onClick={() => ActiveModal(4, row)}>Configuración de E/S</s.modalDropOpt>
                                    </s.modalDropOtions>
                                ): null
                            }
                        </Fragment>
                         ,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];
    //config pagination
    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };
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
                        <s.divRow1>
                            <s.AlertBoton>Configuración de Alertas</s.AlertBoton>
                            <s.InfoBoton>Configuración de Lote</s.InfoBoton>
                            <s.DestinationBoton>Grupo de Destino</s.DestinationBoton>
                        </s.divRow1>
                    </s.row1>
                    <s.divTableDisp>
                        <DataTable
                            columns={columns}
                            data={devAll}
                            striped={true}
                            highlightOnHover={true}
                            pointerOnHover={true}
                            pagination
                            paginationComponentOptions={paginationComponentOptions}
                            selectableRows
                        />
                    </s.divTableDisp>
                </s.contentReportesDiv>
            </s.contenido_panel_dispositivo>
            {/* MODAL COMANDO */}
            <Modal 
                isOpen={modalComando}
                onRequestClose={() => setModalComando(false)}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(15, 15, 15, 0.507)'
                    },
                    content: {
                        width: 716,
                        height: 436
                    }
                }}
            >
                <s.HeaderModal>
                    <s.TituloModal><BsTerminal/> Comando</s.TituloModal>
                    <s.CerrarModal onClick={() => setModalComando(false)}>+</s.CerrarModal>
                </s.HeaderModal>
                <Comando 
                    datos={data}
                />
            </Modal>
            {/* MODAL DETALLES */}
            <Modal 
                isOpen={modalDetalle}
                onRequestClose={() => setModalDetalle(false)}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(15, 15, 15, 0.507)'
                    },
                    content: {
                        width: 700,
                        height: 630
                    }
                }}
            >
                <s.HeaderModal>
                    <s.TituloModal><ic.FaCar /> Configuración del dispositivo</s.TituloModal>
                    <s.CerrarModal onClick={() => setModalDetalle(false)}>+</s.CerrarModal>
                </s.HeaderModal>
                <ConfigDevice 
                    datos={data}
                />
                <s.DivBotones>
                    <s.BotonCancelar onClick={() => setModalDetalle(false)}>Cancelar</s.BotonCancelar>
                    <s.BotonGuardar>Guardar</s.BotonGuardar>
                </s.DivBotones>
            </Modal>
            {/* MODAL I/O */}
            <Modal 
                isOpen={modalConfiguraciones}
                onRequestClose={() => setModalConfiguraciones(false)}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(15, 15, 15, 0.507)'
                    },
                    content: {
                        width: 550,
                        height: 385
                    }
                }}
            >
                <s.HeaderModal>
                    <s.TituloModal><BsGearFill /> Configuración de E/S</s.TituloModal>
                    <s.CerrarModal onClick={() => setModalConfiguraciones(false)}>+</s.CerrarModal>
                </s.HeaderModal>
                <ConfigInOut/>
                <s.DivBotones>
                    <s.BotonCancelar onClick={() => setModalConfiguraciones(false)}>Cancelar</s.BotonCancelar>
                    <s.BotonGuardar>Guardar</s.BotonGuardar>
                </s.DivBotones>
            </Modal>
            
        </div>
    )
}

export default ConfigDispositvos
