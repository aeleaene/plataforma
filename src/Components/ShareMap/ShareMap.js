import React, {useState, useEffect} from 'react';
import * as s from './ShareMap.styles';
import {useParams} from 'react-router-dom';
import axios from 'axios';

import {MapContainer, Marker, Popup, TileLayer, ZoomControl, LayersControl, useMap, useMapEvents, Circle, FeatureGroup, Tooltip} from 'react-leaflet';
import  L from 'leaflet';
import "leaflet-rotatedmarker";
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import * as icmap from '../BarraInferior/Marcadores/MapIcon';

/* TOAST ALERTS */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const ShareMap = () => {

    const {deviceId, user} = useParams();
    const [deviceInfo, setDeviceInfo] = useState([]);
    const [marker, setMarker] = useState([]);
    var dataMarker = {};

    useEffect(() => {
        const login = async() =>{
            const response = await fetch('https://www.protrack.ad105.net/api/session', {credentials: 'include',method: 'POST', body: new URLSearchParams(`email=${user}&password=${user}`)});
            if(response.ok) {
                const user1 = await response.json();
                console.log(user1);
            }else{
                toast.error('Hubo un error, intentelo más tarde.');
            }
        }
        login();
        const interval = setInterval(() => {
            Marcador()
        }, 10000);
        return () => clearInterval(interval);

    }, [])

    const Marcador = async() =>{
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
                const responseDevice = await fetch("https://www.protrack.ad105.net/api/devices", requestOptions)
                const resultado = await fetch("https://www.protrack.ad105.net/api/positions", requestOptions)
                const deviceData = await responseDevice.json();
                const markerData = await resultado.json();
                setDeviceInfo(deviceData)
                for(let i = 0; i < markerData.length; i ++){
                    const url = `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&featureTypes=&location=${markerData[i].longitude},${markerData[i].latitude}`
                    const resultado = await axios.get(url);
                    dataMarker = {id: markerData[i].id, deviceId: markerData[i].deviceId, latitude: markerData[i].latitude, longitude: markerData[i].longitude, course: markerData[i].course, address: resultado.data.address.LongLabel}
                }
                setMarker([dataMarker]);
            }
            catch(err){
                toast.error("Hubo un Error");
            }
        
    }
    const Fecha = (fecha) => {
        const fecha1 = new Date();
        const date = new Date(fecha);
        if (fecha1.getDate() === date.getDate()) {
            return date.getHours()+':'+ date.getMinutes()+':'+date.getSeconds();
        }
        return date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate();
    }



  return (
        <s.Container>
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
          <s.Nav>
              {
                  marker.map(item => (
                    <s.Direccion key={item.id}>{item.address} <s.Localizacion href={`http://map.google.com/maps?q=${item.latitude},${item.longitude}`} target="_blank">({item.latitude}, {item.longitude})</s.Localizacion> </s.Direccion>
                  ))
              }
          </s.Nav>
              {/* MAPA */}
              <MapContainer center={[19.432680, -99.134209]} zoom={5} zoomControl={true} scrollWheelZoom={true}>
                <LayersControl position="topleft">
                    <LayersControl.BaseLayer checked name="Google">
                    <TileLayer
                    url="http://www.google.cn/maps/vt?lyrs=m@189,traffic&gl=cn&x={x}&y={y}&z={z}"
                    attribution="Datos del mapa &copy; 2020 INEGI México"/>
                    </LayersControl.BaseLayer>

                    <LayersControl.BaseLayer checked={window.valorCapaGh} name="Híbrido">
                    <TileLayer
                    url="http://www.google.com/maps/vt?lyrs=s@189,traffic&gl=cn&x={x}&y={y}&z={z}"
                    attribution="Datos del mapa &copy; 2020 INEGI México"/>
                    </LayersControl.BaseLayer>

                    <LayersControl.BaseLayer checked={window.valorCapaGt} name="Terreno">
                    <TileLayer
                    url="http://www.google.cn/maps/vt?lyrs=p@189,traffic&gl=cn&x={x}&y={y}&z={z}"
                    attribution="Datos del mapa &copy; 2020 INEGI México"/>
                    </LayersControl.BaseLayer>

                    <LayersControl.BaseLayer checked={window.valorCapaOsm} name="Open Street Maps">
                    <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contribuidores'/>
                    </LayersControl.BaseLayer>

                    <LayersControl.BaseLayer checked={window.valorCapaOsmBn} name="Open Street Maps Blanco y Negro">
                    <TileLayer
                    url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contribuidores'/>
                    </LayersControl.BaseLayer>

                    <LayersControl.BaseLayer checked={window.valorCapaBing}  name="Bing">
                    <TileLayer
                    url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contribuidores'/>
                    </LayersControl.BaseLayer>
                </LayersControl>
                {
                    deviceInfo.map(item => (
                        marker.map(item2 =>(
                            item.id === item2.deviceId ?
                                <Marker key={item2.id} position={[item2.latitude, item2.longitude]} icon={ item.status === 'online' ? icmap.gray_24 : icmap.white_21 } rotationAngle={item2.course}>
                                    <Popup style={{ color: "#e4e4e4" }}>
                                        <s.PopUpContainer>
                                        <s.PopUpCon1>
                                            <s.PopUpDeviceData>Estado: {item.status === "online" ? 'Estatico ' : 'Fuera de Linea '}({Fecha(item.lastUpdate)})</s.PopUpDeviceData>
                                            <s.PopUpDeviceData>Coordinar: <s.PopUpDeviceLink href={`http://map.google.com/maps?q=${item2.latitude},${item2.longitude}`} target="_blank">{item2.latitude},{item2.longitude}</s.PopUpDeviceLink></s.PopUpDeviceData>
                                        </s.PopUpCon1>
                                        </s.PopUpContainer>
                                    </Popup>
                                    <Tooltip permanent direction="right">{item.name}</Tooltip>
                                </Marker>
                            :
                            null
                        ))
                    ))
                }
              </MapContainer>
      </s.Container>
  );
};

export default ShareMap;
