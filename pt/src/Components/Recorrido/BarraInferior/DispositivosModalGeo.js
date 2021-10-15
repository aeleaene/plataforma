import React, { useEffect, useState, Fragment } from 'react'
import * as s from './GeoCercasModal.styles';

const DispositivosModalGeo = ({data}) => {
    const [device, setDevice] = useState([])
    useEffect(() => {
        Devices()
    }, [])

    const Devices = async() =>{
        var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Accept", "*/*");

            var requestOptions = {
                method: 'GET',
                credentials: 'include',
                headers: myHeaders,
                redirect: 'follow'
            };
            
            const resDis = await fetch("https://www.protrack.ad105.net/api/devices", requestOptions)
                const deviceData = await resDis.json();
                setDevice(deviceData);
    }

    return (
        <Fragment>
            <s.HeadInput>
                <s.inputSearch type="text" placeholder="Objetivo"/>
            </s.HeadInput>
            <s.ComandList>{/* ul */}
                <s.DisElemMain>{/* li */}
                    <s.SpanDisElemMain>Nombre</s.SpanDisElemMain>
                    <s.CheckDivMain>
                        <s.CheckLabel><s.CheckBox1 type="checkbox"/> Dentro</s.CheckLabel>
                        <s.CheckLabel><s.CheckBox1 type="checkbox"/> Fuera</s.CheckLabel>
                        <s.CheckLabel><s.CheckBox1 type="checkbox"/> Exceso de Velocidad</s.CheckLabel>
                    </s.CheckDivMain>
                </s.DisElemMain>
            {   
                device.map(item => (
                    <s.DisElem id={item.id}>
                        <s.SpanDisElemMain>{item.name}</s.SpanDisElemMain>
                        <s.CheckDiv>
                            {item.geofenceIds.includes(data) ? 
                                <s.SpanDisElem><s.CheckBox1 type="checkbox" checked/>Dentro</s.SpanDisElem> 
                            : <s.SpanDisElem><s.CheckBox1 type="checkbox" />Dentro</s.SpanDisElem>
                            }
                            {item.geofenceIds.includes(data) ? 
                                <s.SpanDisElem><s.CheckBox1 type="checkbox" checked/>Fuera</s.SpanDisElem> 
                            : <s.SpanDisElem><s.CheckBox1 type="checkbox" />Fuera</s.SpanDisElem>
                            }
                            {item.geofenceIds.includes(data) ? 
                                <s.SpanDisElem><s.CheckBox1 type="checkbox" checked/>Exceso de Velocidad</s.SpanDisElem> 
                            : <s.SpanDisElem><s.CheckBox1 type="checkbox" />Exceso de Velocidad</s.SpanDisElem>
                            }
                        </s.CheckDiv>
                    </s.DisElem>
                ))
            }
            </s.ComandList>
        </Fragment>
    )
}

export default DispositivosModalGeo
