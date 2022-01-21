import React, {useState, useEffect} from 'react'
import * as s from './Comando.styles';
import * as c from './Comandos.styles';
import { VscTriangleDown } from "react-icons/vsc";


import './styles.css';

const EnviarComando = ({setDeviceId, setCommandName, setCommandType, setCommandDate, setTimeType, errorDevice, errorName, errorType}) => {

    const [comands, setComands] = useState([]);
    const [devices, setDevices] = useState([]);
    const [hiddenForm, setHiddenForm] = useState(0);
    useEffect(() => {
        getData()
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
        setTimeType(timetype)
    }

    return (
        <s.Contenedor>
            <s.ContentComands>
                <s.HeadComands><VscTriangleDown/> Configuración</s.HeadComands>
                <s.ComandList>
                    {/* Formulario */}
                    <s.FormGroup>
                        <s.FormLabelInput htmlFor='nombre'>Nombre:</s.FormLabelInput>
                        <s.entrada_interna type='text' autoComplete='off' valuekey='value' id='nombre' className={errorName ? 'errorFormDate' :  ''} placeholder='Nombre' onChange={(e) => setCommandName(e.target.value)}/>
                    </s.FormGroup>
                    <s.FormGroup>
                        <s.FormLabelInput htmlFor='comando'>Comando:</s.FormLabelInput>
                        <s.selectCommand onChange={(e) => setCommandType(e.target.value)} className={errorType ? 'errorFormDate' :  ''}>
                            <option value="" selected disabled>-- Elige Comando --</option>
                            {
                                comands.map(item => (
                                    <option key={item.type} value={item.type}>{item.type}</option>
                                ))
                            }
                        </s.selectCommand>
                    </s.FormGroup>
                    <s.FormGroup>
                        <s.FormLabelInput htmlFor='tiempo'>Enviar tiempo:</s.FormLabelInput>
                        <s.FormLabel>
                            <s.FormCheckbox type="radio" name="tiempo" onClick={() => timeOptions(1, "justOne")}/>Una sola vez 
                        </s.FormLabel>
                        <s.divHiddenMenu1 visibility={hiddenForm}>
                            <s.commandDateForm type='datetime-local' onChange={(e) => setCommandDate(e.target.value)}/>
                        </s.divHiddenMenu1>
                        <s.FormLabel>
                            <s.FormCheckbox type="radio" name="tiempo" onClick={() => timeOptions(2, "daily")}/>Diario
                        </s.FormLabel>
                        <s.divHiddenMenu2 visibility={hiddenForm}>
                            <s.commandDateForm type='time' onChange={(e) => setCommandDate(e.target.value)}/>
                        </s.divHiddenMenu2>
                        <s.FormLabel>
                            <s.FormCheckbox type="radio" name="tiempo" onClick={() => timeOptions(3, "week")}/>Semanal
                        </s.FormLabel>
                        <s.divHiddenMenu3 visibility={hiddenForm}>
                            <s.commandDateForm type='date' onChange={(e) => setCommandDate(e.target.value)}/>
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
                                                <s.FormCheckbox type="radio" name="device" value={item.id} onChange={(e) => setDeviceId(e.target.value)}/>
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

export default EnviarComando
