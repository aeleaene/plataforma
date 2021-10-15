import React, { useEffect, useState } from 'react'
import { VscTriangleDown } from 'react-icons/vsc';
import { FiTarget } from "react-icons/fi";
import * as s from './GeoCercasModal.styles';

import DispositivosModalGeo from './DispositivosModalGeo';

const GeoCercasModal = ({data}) => {
    const [valor, setValor] = useState(0)
    const [geocerca, setGeocerca] = useState([])

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
            
            const resGeo = await fetch("https://www.protrack.ad105.net/api/geofences", requestOptions)
            const geoData = await resGeo.json();
            setGeocerca(geoData);
    }
    console.log(data)
    return (
        <s.Contenedor>
            <s.ContentComands>
                <s.HeadComands><VscTriangleDown/> Geo-cerca lista</s.HeadComands>
                <s.HeadInput>
                    <s.inputSearch type="text" placeholder="Nombre"/>
                </s.HeadInput>
                <s.ComandList>
                    {
                        geocerca.map(item => (
                            <s.ComandElem onClick={() => setValor(item.id)} id={item.id}><FiTarget/>{item.description}</s.ComandElem>
                        ))
                    }
                </s.ComandList>
            </s.ContentComands>
            <s.ComandsBody>
                <s.HeadComands><VscTriangleDown/> Lista de Dispositivos</s.HeadComands>
                <DispositivosModalGeo  data={valor}/>
            </s.ComandsBody>
        </s.Contenedor>
    )
}

export default GeoCercasModal
