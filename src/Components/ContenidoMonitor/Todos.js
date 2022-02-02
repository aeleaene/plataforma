import React, {useEffect, useState} from 'react'
import * as s from './Monitor.styles';
import {BsThreeDotsVertical, BsDot} from "react-icons/bs";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            
            try{
                const resultado = await fetch("https://www.protrack.ad105.net/api/devices", requestOptions)
                const deviceData = await resultado.json();
                setDevice(deviceData);
            }
            catch(err){
                toast.error("Hubo un problema, intentelo más tarde.");
            }
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
            {
                device.map(item => (
                    <s.deviceonlist key={item.id}>
                    <s.deviceonlistsub1>
                        <s.CheckBox1 type="checkbox"/>
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

