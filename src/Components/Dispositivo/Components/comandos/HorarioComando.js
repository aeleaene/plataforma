import React, {useState, useEffect} from 'react'
import * as s from '../../Dispositivo.styles';
import {BiBarChart} from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPencil, BsTrash, BsTerminal, BsPlus } from "react-icons/bs";
import { MdUpdate } from "react-icons/md";
import Modal from 'react-modal';
import '../../../../styles/modals.css';


import DataTable from 'react-data-table-component';

/* TOAST ALERTS */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../../styles.css'

import Comando from './modals/Comando/Comando';
import EditarComando from './modals/Comando/EditarComando ';

const HorarioComando = () => {

    const [commandList, setCommandList] = useState([]);

    const [modalNew, setModalNew] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const [commandId, setCommandId] = useState(0);
    const [deviceId, setDeviceId] = useState('');
    const [commandName, setCommandName] = useState("");
    const [commandType, setCommandType] = useState("");
    const [commandDate, setCommandDate] = useState("");
    const [timeType, setTimeType] = useState("");
    const [deviceIdEdit, setDeviceIdEdit] = useState('');
    const [commandNameEdit, setCommandNameEdit] = useState("");
    const [commandTypeEdit, setCommandTypeEdit] = useState("");
    const [commandDateEdit, setCommandDateEdit] = useState("");
    const [timeTypeEdit, setTimeTypeEdit] = useState("");
    const [errorDevice, setErrorDevice] = useState(false);
    const [errorName, setErrorName] = useState(false);
    const [errorType, setErrorType] = useState(false);
    const [refrsh, setRefrsh] = useState(false);


    useEffect(() => {
        commandGral();
    }, [refrsh])

    const SaveCommand = async() => {
        //VAlidación
        if(commandName.trim() === ''){
            toast.error('El nombre es obligatorio');
            setErrorName(true)
            return;
        }
        if(commandType.trim() === ''){
            toast.error('El tipo de comando es obligatorio');
            setErrorType(true);
            return;
        }
        if(deviceId.trim() === ''){
            toast.error('Seleccione un Dispositivo');
            setErrorDevice(true);
            return;
        }
        setErrorDevice(false);
        setErrorName(false)
        setErrorType(false)

        //Guardar nuevo comando
        var dataCommand = {}
        dataCommand = {
            "id": 0,
            "deviceId": `${deviceId}`,
            "description": `${commandName}`,
            "type": `${commandType}`,
            "attributes": {
                "date": `${commandDate}`,
                "timetype": `${timeType}`,
            }
        }
        const response = await fetch("https://www.protrack.ad105.net/api/commands", 
                                    {
                                        credentials: 'include',
                                        method: 'POST',
                                        headers:{
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(dataCommand)
                                    });
        if(response.ok) {
            const geofence = await response.json();
            console.log(geofence.id);
            toast.success('Comando Agregado Correctamente');
            setModalNew(false)
        }else{
            toast.error('Hubo un problema, intentelo más tarde');
        }
        setRefrsh(!refrsh);
        setDeviceId('')
        setCommandDate('')
        setCommandName('')
        setCommandType('')
        setTimeType('')
    }

    const commandGral = async() => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "*/*");

        var requestOptions = {
            method: 'GET',
            credentials: 'include',
            headers: myHeaders,
            redirect: 'follow'
        };
        
        try{
            const commands = await fetch("https://www.protrack.ad105.net/api/commands", requestOptions)
            const commData = await commands.json();
            setCommandList(commData);
        }
        catch(err){
            toast.error('Hubo un problema, intentelo más tarde');
        }
    }

    const openEditModal = (row) => {
        setModalEdit(true);
        setCommandId(row.id)
        setDeviceIdEdit(row.deviceId)
        setCommandDateEdit(row.attributes.date)
        setCommandNameEdit(row.description)
        setCommandTypeEdit(row.type)
        setTimeTypeEdit(row.attributes.timetype)
    }

    const EditCommand = async() => {
        /* console.log(deviceIdEdit);
        return; */
        //VAlidación
        if(commandNameEdit.trim() === ''){
            setErrorName(true)
            return;
        }
        if(commandTypeEdit.trim() === ''){
            setErrorType(true);
            return;
        }
        setErrorDevice(false);
        setErrorName(false)
        setErrorType(false)

        //EDitar comando
        var dataCommand = {}
        dataCommand = {
            "id": `${commandId}`,
            "deviceId": `${deviceIdEdit}`,
            "description": `${commandNameEdit}`,
            "type": `${commandTypeEdit}`,
            "attributes": {
                "date": `${commandDateEdit}`,
                "timetype": `${timeTypeEdit}`,
            }
        }
        const response = await fetch(`https://www.protrack.ad105.net/api/commands/${deviceIdEdit}`, 
                                    {
                                        credentials: 'include',
                                        method: 'PUT',
                                        headers:{
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(dataCommand)
                                    });
        if(response.ok) {
            const geofence = await response.json();
            console.log(geofence.id);
            toast.success('Comando Editado Correctamente');
            setModalEdit(false)
        }else{
            toast.error('Hubo un problema, intentelo más tarde');
        }
        setRefrsh(!refrsh);
        setDeviceIdEdit('')
        setCommandDateEdit('')
        setCommandNameEdit('')
        setCommandTypeEdit('')
        setTimeTypeEdit('')
    }

    const deleteCommand = async(id) =>{
        
        var confirmar = window.confirm("¿Borrar Comando?");
        if (confirmar) {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Accept", "*/*");

            var requestOptions = {
                method: 'DELETE',
                credentials: 'include',
                headers: myHeaders,
            };
            
            try{
                const resultado = await fetch(`https://www.protrack.ad105.net/api/commands/${id}`, requestOptions)
                toast.success('Comando Eliminado Correctamente');
                setRefrsh(!refrsh);
            }
            catch(err){
                toast.error('Hubo un problema, intentelo más tarde');
            }
        }
        else{
            toast.error('Hubo un problema, intentelo más tarde');
        }
    }

    const cerrarModalNew = () => {
        setModalNew(false)
        setDeviceId('')
        setCommandDate('')
        setCommandName('')
        setCommandType('')
        setTimeType('')
    }
    const cerrarModalEdit = () => {
        setModalEdit(false)
        setDeviceIdEdit('')
        setCommandDateEdit('')
        setCommandNameEdit('')
        setCommandTypeEdit('')
        setTimeTypeEdit('')
    }

    const typeAlarm = (type) => {
        let alarma = '';
        switch (type) {
            case 'custom':
                    alarma = 'Custom';
                break;
            case 'deviceIdentification':
                    alarma = 'Identificación de Dispositivo';
                break;
            case 'positionSingle':
                    alarma = 'Posición Única';
                break;
            case 'positionPeriodic':
                    alarma = 'Posición Periódica';
                break;
            case 'positionStop':
                    alarma = 'Posición Detenida';
                break;
            case 'engineStop':
                    alarma = 'Motor Detenido';
                break;
            case 'engineResume':
                    alarma = 'Resumen de Motor';
                break;
            case 'alarmArm':
                    alarma = 'Alarma Armada';
                break;
            case 'alarmDisarm':
                    alarma = 'Alarma Desarmada';
                break;
            case 'alarmDismiss':
                    alarma = 'Descartar Alarma';
                break;
            case 'setTimezone':
                    alarma = 'Establecer Zona Horaria';
                break;
            case 'requestPhoto':
                    alarma = 'Solicitar Foto';
                break;
            case 'powerOff':
                    alarma = 'Apagar';
                break;
            case 'rebootDevice':
                    alarma = 'Reiniciar Dispositivo';
                break;
            case 'sendSms':
                    alarma = 'Enviar SMS';
                break;
            case 'sendUssd':
                    alarma = 'Enviar USSD';
                break;
            case 'sosNumber':
                    alarma = 'Número de SOS';
                break;
            case 'silenceTime':
                    alarma = 'Tiempo de Silencio';
                break;
            case 'setPhonebook':
                alarma = 'Establecer Directorio Telefónico';
                break;
            case 'message':
                alarma = 'Mensaje';
                break;
            case 'voiceMessage':
                alarma = 'Mensaje de Voz';
                break;
            case 'outputControl':
                alarma = 'Control de Salida';
                break;
            case 'voiceMonitoring':
                alarma = 'Monitoreo de Voz';
                break;
            case 'setAgps':
                alarma = 'Establecer Agps';
                break;
            case 'setIndicator':
                alarma = 'Establecer Indicador';
                break;
            case 'configuration':
                alarma = 'Configuración';
                break;
            case 'getVersion':
                alarma = 'Obtener Versión';
                break;
            case 'firmwareUpdate':
                alarma = 'Actualización de Firmware';
                break;
            case 'setConnection':
                alarma = 'Establecer Conexión';
                break;
            case 'setOdometer':
                alarma = 'Establecer Odometro';
                break;
            case 'getModemStatus':
                alarma = 'Obtener Estatus de Modem';
                break;
            case 'modePowerSaving':
                alarma = 'Modo Ahorro de Energía';
                break;
            case 'modeDeepSleep':
                alarma = 'Modo Sueño Profundo';
                break;
            case 'movementAlarm':
                alarma = 'Alarma de Movimiento';
                break;
            case 'alarmBattery':
                alarma = 'Alarma de Bateria';
                break;
            case 'alarmSos':
                alarma = 'Alarma de SOS';
                break;
            case 'alarmRemove':
                alarma = 'Quitar Alarma';
                break;
            case 'alarmClock':
                alarma = 'Despertador';
                break;
            case 'alarmSpeed':
                alarma = 'Alarma de Velocidad';
                break;
            case 'alarmFall':
                alarma = 'Alarma de Caída';
                break;
            case 'alarmVibration':
                alarma = 'Alarma de Vibración';
                break;
            case 'getDeviceStatus':
                alarma = 'Obtener Estado del Dispositivo';
                break;
            default:
                alarma = 'comando';
                break;
        }
        return alarma;
    }

    const columns = [
        {
            name: '#',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Nombre',
            selector: 'description',
            sortable: true,
        },
        {
            name: 'Comando',
            selector: 'type',
            sortable: true,
        },
        {
            name: 'Tipo de Tarea',
            sortable: true,
            cell: row => <span>{typeAlarm(row.type)}</span>
        },
        {
            name: 'Enviar Tiempo',
            selector: 'tiempo',
            sortable: true,
        },
        {
            name: 'Dispositivo',
            selector: 'deviceId',
            sortable: true,
        },
        {
            name: 'SMS',
            sortable: true,
            cell: row => <span>{row.textChannel ? 'Si' : 'No'}</span>
        },
        {
            name: 'Operación',
            cell:(row) =>
                        <s.tableButtons>
                            <s.tabButton id={row.id} onClick={() => openEditModal(row)}><BsPencil /></s.tabButton>
                            <s.tabButton id={row.id}><MdUpdate /></s.tabButton>
                            <s.tabButton id={row.id} onClick={() => deleteCommand(row.id)}><BsTrash /></s.tabButton>
                        </s.tableButtons> ,
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
        <s.contentReportesDiv>
            <ToastContainer 
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <s.row1>
                <s.GenBoton onClick={() => setModalNew(true)}><AiOutlinePlus /> Nuevo</s.GenBoton>
            </s.row1>
            <s.divTable>
                <DataTable
                    columns={columns}
                    data={commandList}
                    striped={true}
                    highlightOnHover={true}
                    pointerOnHover={true}
                    pagination
                    paginationComponentOptions={paginationComponentOptions}
                />
            </s.divTable>
            {/* MODAL COMANDO nuevo */}
            <Modal 
                isOpen={modalNew}
                onRequestClose={() => setModalNew(false)}
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
                        width: 620,
                        height: 486,
                        backgroundColor: '#fbfbfb',
                    }
                }}
            >
                <s.HeaderModal>
                    <s.TituloModal>+ Nuevo</s.TituloModal>
                    <s.CerrarModal onClick={cerrarModalNew}>+</s.CerrarModal>
                </s.HeaderModal>
                <Comando 
                    setDeviceId={setDeviceId}
                    setCommandName={setCommandName}
                    setCommandType={setCommandType}
                    setCommandDate={setCommandDate}
                    setTimeType={setTimeType}

                    errorDevice={errorDevice}
                    errorName={errorName}
                    errorType={errorType}
                />
                <s.DivBotones>
                    <s.BotonCancelar onClick={cerrarModalNew}>Cancelar</s.BotonCancelar>
                    <s.BotonGuardar onClick={SaveCommand}>Guardar</s.BotonGuardar>
                </s.DivBotones>
            </Modal>

            {/* MODAL COMANDO editar */}
            <Modal 
                isOpen={modalEdit}
                onRequestClose={() => setModalEdit(false)}
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
                        width: 620,
                        height: 486,
                        backgroundColor: '#fbfbfb',
                    }
                }}
            >
                <s.HeaderModal>
                    <s.TituloModal>+ Editar Comando</s.TituloModal>
                    <s.CerrarModal onClick={cerrarModalEdit}>+</s.CerrarModal>
                </s.HeaderModal>
                <EditarComando 
                    deviceIdEdit={deviceIdEdit}
                    commandNameEdit={commandNameEdit}
                    commandTypeEdit={commandTypeEdit}
                    commandDateEdit={commandDateEdit}
                    timeTypeEdit={timeTypeEdit}

                    setDeviceIdEdit={setDeviceIdEdit}
                    setCommandNameEdit={setCommandNameEdit}
                    setCommandTypeEdit={setCommandTypeEdit}
                    setCommandDateEdit={setCommandDateEdit}
                    setTimeTypeEdit={setTimeTypeEdit}

                    errorDevice={errorDevice}
                    errorName={errorName}
                    errorType={errorType}
                />
                <s.DivBotones>
                    <s.BotonCancelar onClick={cerrarModalEdit}>Cancelar</s.BotonCancelar>
                    <s.BotonGuardar onClick={EditCommand}>Guardar</s.BotonGuardar>
                </s.DivBotones>
            </Modal>
        </s.contentReportesDiv>
        
    )
}

export default HorarioComando
