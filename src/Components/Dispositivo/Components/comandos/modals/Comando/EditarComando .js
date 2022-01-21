import React, {useState, useEffect} from 'react'
import * as s from './Comando.styles';
import * as c from './Comandos.styles';
import { VscTriangleDown } from "react-icons/vsc";


import './styles.css';

const EditarComando = ({deviceIdEdit, commandNameEdit, commandTypeEdit, commandDateEdit, timeTypeEdit, setDeviceIdEdit, setCommandNameEdit, setCommandTypeEdit, setCommandDateEdit, setTimeTypeEdit, errorDevice, errorName, errorType}) => {

    const [comands, setComands] = useState([]);
    const [devices, setDevices] = useState([]);
    const [hiddenForm, setHiddenForm] = useState(0);
    useEffect(() => {
        getData()
        if(timeTypeEdit === 'justOne'){
            setHiddenForm(1);
        }
        if(timeTypeEdit === 'daily'){
            setHiddenForm(2);
        }
        if(timeTypeEdit === 'week'){
            setHiddenForm(3);
        }
    }, [])
    const getData = async() =>{
        var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Accept", "*/*");

            var requestOptions = {
                method: 'GET',
                credentials: 'include',
                headers: myHeaders,
                redirect: 'follow'
            };
            
            const commands = await fetch("https://www.protrack.ad105.net/api/commands/types", requestOptions)
                const commData = await commands.json();
                setComands(commData);
            const devices = await fetch("https://www.protrack.ad105.net/api/devices", requestOptions)
                const devData = await devices.json();
                setDevices(devData);
    }

    const timeOptions = (hidden, timetype) => {
        setHiddenForm(hidden)
        setTimeTypeEdit(timetype)
    }

    return (
        <s.Contenedor>
            <s.ContentComands>
                <s.HeadComands><VscTriangleDown/> Configuración</s.HeadComands>
                <s.ComandList>
                    {/* Formulario */}
                    <s.FormGroup>
                        <s.FormLabelInput htmlFor='nombre'>Nombre:</s.FormLabelInput>
                        <s.entrada_interna type='text' autoComplete='off' valuekey='value' value={commandNameEdit} id='nombre' className={errorName ? 'errorFormDate' :  ''} placeholder='Nombre' onChange={(e) => setCommandNameEdit(e.target.value)}/>
                    </s.FormGroup>
                    <s.FormGroup>
                        <s.FormLabelInput htmlFor='comando'>Comando:</s.FormLabelInput>
                        <s.selectCommand onChange={(e) => setCommandTypeEdit(e.target.value)} className={errorType ? 'errorFormDate' :  ''}>
                            <option value="" selected disabled>-- Elige Comando --</option>
                            {
                                comands.map(item => (
                                    <option key={item.type} value={item.type} selected={item.type === commandTypeEdit ? true : false}>{item.type}</option>
                                ))
                            }
                        </s.selectCommand>
                    </s.FormGroup>
                    <s.FormGroup>
                        <s.FormLabelInput htmlFor='tiempo'>Enviar tiempo:</s.FormLabelInput>
                        <s.FormLabel>
                            <s.FormCheckbox type="radio" name="tiempo" checked={timeTypeEdit === 'justOne'? true : false} onClick={() => timeOptions(1, "justOne")}/>Una sola vez 
                        </s.FormLabel>
                        <s.divHiddenMenu1 visibility={hiddenForm}>
                            <s.commandDateForm type='datetime-local' value={timeTypeEdit === 'justOne' ? commandDateEdit : ''} onChange={(e) => setCommandDateEdit(e.target.value)}/>
                        </s.divHiddenMenu1>
                        <s.FormLabel>
                            <s.FormCheckbox type="radio" name="tiempo" checked={timeTypeEdit === 'daily'? true : false} onClick={() => timeOptions(2, "daily")}/>Diario
                        </s.FormLabel>
                        <s.divHiddenMenu2 visibility={hiddenForm}>
                            <s.commandDateForm type='time' value={timeTypeEdit === 'daily' ? commandDateEdit : ''} onChange={(e) => setCommandDateEdit(e.target.value)}/>
                        </s.divHiddenMenu2>
                        <s.FormLabel>
                            <s.FormCheckbox type="radio" name="tiempo" checked={timeTypeEdit === 'week'? true : false} onClick={() => timeOptions(3, "week")}/>Semanal
                        </s.FormLabel>
                        <s.divHiddenMenu3 visibility={hiddenForm}>
                            <s.commandDateForm type='date' value={timeTypeEdit === 'week' ? commandDateEdit : ''} onChange={(e) => setCommandDateEdit(e.target.value)}/>
                        </s.divHiddenMenu3>
                    </s.FormGroup>
                </s.ComandList>
            </s.ContentComands>
            <s.ComandsBody>
                {/* Devices */}
                <c.Content>
                    <s.HeadComands><VscTriangleDown /> Lista de Dispositivos</s.HeadComands>
                        <c.ComandContent>
                            <s.busqueda_dispositivo>
                                <s.CheckBoxSearch type="checkbox"/>
                                <s.busqueda_en_linea aria-haspopup="listbox" role="combobox" aria-owns="el-complete-8812">
                                    <s.sufijo_entrada>
                                        <s.entrada_interna type='text' autoComplete='off' valuekey='value' placeholder='Nombre' />
                                    </s.sufijo_entrada>
                                </s.busqueda_en_linea>
                            </s.busqueda_dispositivo>
                        </c.ComandContent>
                        <c.ComandContentDevice>
                            {
                                devices.map(item => (
                                    <s.divDeviceItem key={item.id}>
                                        <s.DeviceItemDiv>
                                            <s.SpanDeviceItem id={item.id} className={errorDevice ? 'errorFormDate' :  ''}>
                                                <s.FormCheckbox type="radio" name="device" value={item.id} checked={item.id === deviceIdEdit? true : null} onChange={(e) => setDeviceIdEdit(e.target.value)}/>
                                                {item.name}
                                            </s.SpanDeviceItem>
                                        </s.DeviceItemDiv>
                                    </s.divDeviceItem>
                                ))
                            }
                        </c.ComandContentDevice>
                </c.Content>
            </s.ComandsBody>
        </s.Contenedor>
    )
}

export default EditarComando
