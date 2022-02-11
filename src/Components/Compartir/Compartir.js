import React, {useState, useEffect} from 'react'
import * as s from './Compartir.styles';
import { CopyToClipboard } from "react-copy-to-clipboard";

/* TOAST ALERTS */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Compartir = ({
    datos, 
    shareLink, 
    valueLink, 
    linkDevice, 
    setLinkDevice, 
    linkName, 
    setLinkName, 
    linkStartTime, 
    setLinkStartTime, 
    linkEndTime, 
    setLinkEndTime, 
    linkObservation,
    setLinkObservation
}) => {


    const [devices, setDevices] = useState([]);

    const [copied, setCopied] = useState(false);

    useEffect(() => {
        Device();
    }, []);

    const Device = async() => {
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

            setDevices(resDev);
            setLinkDevice(datos.id);
    }

    return (
        <s.Contenedor>
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
            <s.InputGroup>
                <s.Label><s.Sup>*</s.Sup> Dispositivo:</s.Label>
                <s.Select value={linkDevice} onChange={e => setLinkDevice(e.target.value)}>
                    <option value="" disabled>-- Seleccione Dispositivo --</option>
                    {devices.map(item => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                </s.Select>
            </s.InputGroup>
            <s.InputGroup>
                <s.Label><s.Sup>*</s.Sup> Nombre del Link a compartir:</s.Label>
                <s.Input type="text" value={linkName} onChange={e => setLinkName(e.target.value)}></s.Input>
            </s.InputGroup>
            <s.InputGroup>
                <s.Label><s.Sup>*</s.Sup> Tiempo de Inicio:</s.Label>
                <s.Input type="datetime-local" value={linkStartTime} onChange={e => setLinkStartTime(e.target.value)}/>
            </s.InputGroup>
            <s.InputGroup>
                <s.Label><s.Sup>*</s.Sup> Tiempo Final:</s.Label>
                <s.Input type="datetime-local" value={linkEndTime} onChange={e => setLinkEndTime(e.target.value)}/>
                <s.DivSpan>
                    <s.Span>Hoy </s.Span>|
                    <s.Span>Mañana </s.Span>|
                    <s.Span>Tres Días</s.Span>
                </s.DivSpan>
            </s.InputGroup>
            <s.InputGroup>
                <s.Label><s.Sup>*</s.Sup> Observación:</s.Label>
                <s.TextArea value={linkObservation} onChange={e => setLinkObservation(e.target.value)}></s.TextArea>
            </s.InputGroup>
            {shareLink ? (
                <s.InputGroup>
                    <s.Label><s.Sup>*</s.Sup> Link:</s.Label>
                    <s.divLinkshare>
                        <s.InputClipBoard type="text" disabled value={valueLink}></s.InputClipBoard>
                        <CopyToClipboard
                            text={valueLink}
                            onCopy={() => setCopied(true)}
                        >
                            <s.buttonClipBoard onClick={() =>         toast.success("Link Copiado Al Porta Papeles")}>Copiar</s.buttonClipBoard>
                        </CopyToClipboard>
                    </s.divLinkshare>
                </s.InputGroup>
            ) : null}
        </s.Contenedor>
    )
}

export default Compartir