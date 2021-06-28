import React, {useEffect, useState} from 'react'
import * as s from './Monitor.styles';
import {BsThreeDotsVertical, BsDot} from "react-icons/bs";

const Todos = () => {

    const [device, setDevice] = useState([])

    useEffect(() => {
        const interval = setInterval(() => {
            Devices()
        }, 1000);
        return () => clearInterval(interval);
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
            
            const resultado = await fetch("https://www.protrack.ad105.net/api/devices", requestOptions)
                /* .then(response => response.json())
                .catch(error => console.log('error', error)); */
                const deviceData = await resultado.json();
                /* console.log(deviceData) */
                setDevice(deviceData);
                /* console.log(device) */
    }  
    const Fecha = (fecha) => {
        const fecha1 = new Date();
        const date = new Date(fecha);
        if (fecha1.getDate() === date.getDate()) {
            return date.getHours()+':'+ date.getMinutes();
        }
        return date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate();
    }

    return (
        <div>
            {
                device.map(item => (
                    <s.deviceonlist key={item.id}>
                    <s.deviceonlistsub1>
                        <s.deviceChebox type="checkbox"/>
                        <s.deviceName>{item.name}</s.deviceName>
                    </s.deviceonlistsub1>
                    <s.deviceonlistsub2>
                        <s.deviceTime>{Fecha(item.lastUpdate)}</s.deviceTime>
                        <s.deviceStatus>{
                            item.status === "online" ? <BsDot style={{color: "#0795fb", fontSize: 45}}/> : <BsDot style={{color: "#999999", fontSize: 45}}/>
                        }</s.deviceStatus>
                        <s.deviceOptions><BsThreeDotsVertical /></s.deviceOptions>
                    </s.deviceonlistsub2>
                    </s.deviceonlist>
                ))
            }
        </div>
    )
}

export default Todos

