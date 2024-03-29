import React, { useEffect, useState, useRef, useContext, useMemo, useCallback } from 'react'
import {MapContainer, Marker, Popup, TileLayer, ZoomControl, LayersControl, useMap, useMapEvents, Circle, FeatureGroup, Tooltip} from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import  L from 'leaflet';
import "leaflet-rotatedmarker";
import Modal from 'react-modal';
import EsriLeafletGeoSearch from 'react-esri-leaflet/plugins/EsriLeafletGeoSearch';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
/* import './leaflet.css'; */
/* import './leaflet.draw.css'; */
import '../../styles/mapa.css';

import * as s from './Mapa.styles';
import { MdReplay } from "react-icons/md";
import { TiLocationArrowOutline } from "react-icons/ti";
import { BsTerminal, BsGearFill } from "react-icons/bs";
import { GiWoodenFence } from "react-icons/gi";
import { FaShareAlt } from "react-icons/fa";
import { BiMapPin } from "react-icons/bi";
import { ImFileText2 } from "react-icons/im";
import * as ic from 'react-icons/all';

/* TOAST ALERTS */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import './PopUp.css';
import '../../styles/modals.css';

/* MODALS */
import Comando from '../Comando/Comando';
import Compartir from '../Compartir/Compartir';
import ConfigDevice from '../ConfigDevice/ConfigDevice';
import ConfigInOut from '../ConfigInOut/ConfigInOut';

import * as icmap from './Marcadores/MapIcon';

/* CONTEXT */
import {MenContext} from '../../Context/MenuContext';

const Link = require("react-router-dom").Link;

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

Modal.setAppElement('#root');


const Mapa = (props) => {
    const { drawClick, setDrawClick, colorValue, setLatFenceCircle, setLngFenceCirlce, setBounds, setRadiusFence, distanceLine, areaLine } = useContext(MenContext);
    const center = {
        lat: 19.432680,
        lng: -99.134209,
    };
    const [mapPos, setMapPos] = useState();
    const [deviceInfo, setDeviceInfo] = useState([])
    const [marker, setMarker] = useState([])
    const [typeFence, setTypeFence] = useState("");

    const [shareLink, setShareLink] = useState(false);
    const [valueLink, setValueLink] = useState('');
    const [linkDevice, setLinkDevice] = useState('');
    const [linkName, setLinkName] = useState('');
    const [linkStartTime, setLinkStartTime] = useState('');
    const [linkEndTime, setLinkEndTime] = useState('');
    const [linkObservation, setLinkObservation] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            Marcador()
        }, 10000);
        return () => clearInterval(interval);
    }, [])
    useEffect(() => {

        //PINTAR GEOCERCA
        console.log(drawClick);

    }, [drawClick])

    function SetZoom(){
        const mapInstance = useMap()
        React.useEffect(() => {
            const zoom = window.zoom;
            mapInstance.setZoom(zoom)
        }, [])
        return null
    }

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
                setMarker(markerData);
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

  /* State Modal */
    const [modalComando, setModalComando] = useState(false);
    const [modalShare, setModalShare] = useState(false);
    const [modalDetalle, setModalDetalle] = useState(false);
    const [modalConfiguraciones, setModalConfiguraciones] = useState(false);
    const [data, setData] = useState({});
    const [data2, setData2] = useState({});
    /* Funcion modals */
    const ActiveModal = (modAct, objeto, objeto2) => {
        console.log(modAct);
        if (modAct === 1) {setModalComando(true)}
        if (modAct === 2) {setModalShare(true)}
        if (modAct === 3) {setModalDetalle(true)}
        if (modAct === 4) {setModalConfiguraciones(true)}
        setData(objeto);
        setData2(objeto2);
    }
    /* GeoFence States */
    const [fenceLat, setFenceLat] = useState(0);
    const [fenceLon, setFenceLon] = useState(0);
    const [fenceSize, setFenceSize] = useState(0);
    const fillBlueOptions = { fillColor: 'blue' }
    
/*     const fechaiso = (date) => {
        var fecha = new Date(date);
        return fecha.toISOString();
    } */

    const GeoCerca = async(id, item, lat, lon, size) =>{
        /* console.log(id, lat, lon, size) */
        setFenceLat(lat);
        setFenceLon(lon);
        setFenceSize(size);
        /* State de la Geocerca */
        var geofenceID = 0;
        /* Crear Geocerca */

        const dataGeofence = {
            "id": 0,
            "name": `${item.name}`,
            "description": `Geocerca - ${item.name}`,
            "area": `CIRCLE(${lat} ${lon}, ${size})`,
            "calendarId": 0,
            "attributes": {
                "shape": "circle",
                "color": "#3699cf",
            }
        }
        
        const response = await fetch("https://www.protrack.ad105.net/api/geofences/", 
                                    {
                                        credentials: 'include',
                                        method: 'POST',
                                        headers:{
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(dataGeofence)
                                    });
        if(response.ok) {
            const geofence = await response.json();
            console.log(geofence.id);
            geofenceID = geofence.id;
            toast.success("GeoCerca Agregada con Exito");
        }else{
            toast.error("No se pudo generar GeoCerca");
        }
        /* Conslutar geofence */
        /* Actualizar Device */
        console.log(`GEOFENCE ID ${geofenceID}`)
        const dataDevice = {
            "deviceId": item.id,
            "geofenceId": geofenceID,
        }
        /* console.log(dataDevice) */
        const responseDevice = await fetch(`https://www.protrack.ad105.net/api/permissions`,
                                    {
                                        credentials: 'include',
                                        method: 'POST',
                                        headers:{
                                        'Content-Type': 'application/json',
                                        },
                                    body: JSON.stringify(dataDevice)
                                    });
        if(responseDevice.ok) {
            toast.success("GeoCerca Agregada con Exito");
        }else{
            toast.error("No se pudo generar GeoCerca");
        }
    }
    const _created = (e) => {
        if (drawClick.shape === 'circle') {
            console.log(e.layer)
            setLatFenceCircle(e.layer._latlng.lat)
            setLngFenceCirlce(e.layer._latlng.lng)
            setRadiusFence(parseInt(e.layer._mRadius))
        }
        if (drawClick.shape === 'polygon') {
            console.log(e.layer._latlngs)
            setBounds(e.layer._latlngs);
        }
    }

    const CompartirTracker = async() =>{
        if([linkDevice, linkName, linkStartTime, linkEndTime, linkObservation].includes('')){
            toast.error("¡Error! Verifique que todos los campos esten llenos.");
            return;
        }
        const dateTime = new Date(linkEndTime)
        const name = "share"+linkName.replace(/\s/g, '');
        /* Crear usuario*/
        var userId = 0;
        const dataUserTemporal = {
            "id": 0,
            "name": `${name}`,
            "email": `${name}`,
            "phone": "",
            "readonly": true,
            "administrator": false,
            "map": "osm",
            "latitude": 0,
            "longitude": 0,
            "zoom": 0,
            "password": `${name}`,
            "twelveHourFormat": true,
            "coordinateFormat": "",
            "disabled": false,
            "expirationTime": `${dateTime.toISOString()}`,
            "deviceLimit": 0,
            "userLimit": 0,
            "deviceReadonly": true,
            "limitCommands": true,
            "poiLayer": "",
            "token": "",
            "attributes": {
                'observations': `${linkObservation}`,
                'mensaje': 'Este es un link compartido'
             }
        }
        //console.log(dataUserTemporal);
        const response = await fetch("https://www.protrack.ad105.net/api/users/", 
                    {
                        credentials: 'include',
                        method: 'POST',
                        headers:{
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataUserTemporal)
                    });
        if(response.ok) {
            const usuario = await response.json();
            console.log(usuario.id);
            userId = usuario.id;
            console.log("Usuario Agregado con Exito");
        }else{
            toast.error("No se pudo generar el enlace, Intentelo más tarde.");
        }

        /* Asignar dispositivo a usuario */
        console.log(`USER ID ${userId}`)
        const dataPermission = {
            "userId": `${userId}`,
            "deviceId": `${linkDevice}`,
        }
        const responseDevice = await fetch(`https://www.protrack.ad105.net/api/permissions`,
                                    {
                                        credentials: 'include',
                                        method: 'POST',
                                        headers:{
                                        'Content-Type': 'application/json',
                                        },
                                    body: JSON.stringify(dataPermission)
                                    });
        if(responseDevice.ok) {
            console.log("Usuario Agregado con Exito");
        }else{
            toast.error("No se pudo generar el enlace, Intentelo más tarde.");
        }

        const currentUrl = window.location.href;
        const formatUrl = currentUrl.replace('/Mapa', '');
        const finalUrl = formatUrl + `/sharemap/${linkDevice}/${name}`
        //console.log(finalUrl);
        setValueLink(finalUrl)
        setShareLink(true);
    }
    const limpiarShareModal = () => {
        setLinkDevice('');
        setLinkName('');
        setLinkStartTime('');
        setLinkEndTime('');
        setLinkObservation('');
        setModalShare(false);
        setShareLink(false);
    }

    return (

    <MapContainer center={[19.432680, -99.134209]} zoom={5} zoomControl={false} minZoom={0} maxZoom={21} scrollWheelZoom={true} onChange={(e) => setMapPos(e.target)}>
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
        {drawClick.shape === 'circle' ?
            <FeatureGroup>
                <EditControl 
                    position="topright" 
                    onCreated={drawClick.shape === 'circle' ? _created : null}
                    draw={{ 
                        circle: {
                            shapeOptions: {
                                color: colorValue,
                            }
                        },
                        polygon: false,
                        rectangle: false,
                        circlemarker: false,
                        marker: false,
                        polyline: false,
                     }}
                     edit={{ edit: false}}
                />
            </FeatureGroup>
         : <></>}
         { drawClick.shape === 'polygon' ?
            <FeatureGroup>
            <EditControl 
                    position="topright" 
                    onCreated={drawClick.shape === 'polygon' ? _created : null}
                    draw={{ 
                        polygon: {
                            shapeOptions: {
                                color: colorValue,
                            }
                        },
                        rectangle: false,
                        circlemarker: false,
                        circle: false,
                        marker: false,
                        polyline: false,
                     }}
                     edit={{ edit: false}}
                />
            </FeatureGroup>
        : <></>}
        {distanceLine ?
            <FeatureGroup>
                <EditControl 
                    position="topright" 
                    onCreated={drawClick.shape === 'circle' ? _created : null}
                    draw={{ 
                        circle: {
                            shapeOptions: {
                                color: colorValue,
                            }
                        },
                        polygon: false,
                        rectangle: false,
                        circlemarker: false,
                        marker: false,
                        polyline: false,
                     }}
                     edit={{ edit: false}}
                />
            </FeatureGroup>
         : <></>}
         {areaLine ?
            <FeatureGroup>
                <EditControl 
                    position="topright" 
                    onCreated={drawClick.shape === 'circle' ? _created : null}
                    draw={{ 
                        circle: {
                            shapeOptions: {
                                color: colorValue,
                            }
                        },
                        polygon: false,
                        rectangle: false,
                        circlemarker: false,
                        marker: false,
                        polyline: false,
                     }}
                     edit={{ edit: false}}
                />
            </FeatureGroup>
         : <></>}
        <Circle center={[fenceLat, fenceLon]} pathOptions={fillBlueOptions} radius={fenceSize} />
        <LayersControl position="bottomright">
        <SetZoom />
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
                                    <s.PopoUpDeviceName>{item.name}{item.model !== "" ? '(' + item.model + ")" : null }</s.PopoUpDeviceName>
                                    <s.PopUpDeviceData>Estado: {item.status === "online" ? 'Estatico ' : 'Fuera de Linea '}({Fecha(item.lastUpdate)})</s.PopUpDeviceData>
                                    {
                                        item2.deviceTime ?
                                            <s.PopUpDeviceData>Tiempo de Posición: {Fecha(item2.deviceTime)}</s.PopUpDeviceData>
                                        : null
                                    }
                                    {
                                        item2.serverTime ? 
                                            <s.PopUpDeviceData>Tiempo de Servidor: {Fecha(item2.serverTime)}</s.PopUpDeviceData>
                                        : null
                                    }
                                    {
                                        item2.attributes.ignition ? 
                                            <s.PopUpDeviceData>Motor: {item2.attributes.ignition === true ? 'Encendido ' : 'Apagado '}({item2.fixTime})</s.PopUpDeviceData>
                                        : null
                                    }
                                    <s.PopUpDeviceData>Velocidad: {((item2.speed)*1.852).toFixed(2)+' Km/h'}</s.PopUpDeviceData>
                                    <s.PopUpDeviceData>IMEI: {(item.uniqueId).replace((item.uniqueId).substr(2,11), '***********')}</s.PopUpDeviceData>
                                    <s.PopUpDeviceData>Coordinar: <s.PopUpDeviceLink href={`http://map.google.com/maps?q=${item2.latitude},${item2.longitude}`} target="_blank">{item2.latitude},{item2.longitude}</s.PopUpDeviceLink></s.PopUpDeviceData>
                                </s.PopUpCon1>
                                <s.PopUpCon2>
                                    <s.PopUpDevicesOptionLink><Link to={{pathname: '/recorrido', state: item2, target:'_blank', rel:'noopener noreferrer'}}><MdReplay/></Link></s.PopUpDevicesOptionLink>
                                    <s.PopUpDevicesOptionLink className="arrow-popup"><TiLocationArrowOutline/></s.PopUpDevicesOptionLink>
                                    <s.PopUpDevicesOption onClick={() => ActiveModal(1, item, item2)}><BsTerminal className="iconoPopUp"/></s.PopUpDevicesOption>
                                    <s.PopUpDevicesOption className="fenceContent">
                                        <GiWoodenFence className="iconoPopUp"/>
                                        <s.DivDropDown className="dropdownContent">
                                            <s.FenceList>
                                                <s.FenceObj onClick={() => GeoCerca(item2.deviceId, item, item2.latitude, item2.longitude, 300)}>300m</s.FenceObj>
                                                <s.FenceObj onClick={() => GeoCerca(item2.deviceId, item, item2.latitude, item2.longitude, 500)}>500m</s.FenceObj>
                                                <s.FenceObj onClick={() => GeoCerca(item2.deviceId, item, item2.latitude, item2.longitude, 1000)}>1000m</s.FenceObj>
                                            </s.FenceList>
                                        </s.DivDropDown>
                                    </s.PopUpDevicesOption>
                                    <s.PopUpDevicesOption onClick={() => ActiveModal(2, item, item2)}><FaShareAlt className="iconoPopUp"/></s.PopUpDevicesOption>
                                    <s.PopUpDevicesOptionLink className="arrow-popup" href={`https://www.google.com/maps?q&layer=c&cbll=${item2.latitude},${item2.longitude}`} target="_blank"><BiMapPin/></s.PopUpDevicesOptionLink>
                                    <s.PopUpDevicesOption onClick={() => ActiveModal(3, item, item2)}><ImFileText2 className="iconoPopUp"/></s.PopUpDevicesOption>
                                    <s.PopUpDevicesOption className="inout-popup iconoPopUp" onClick={() => ActiveModal(4, item, item2)} >I/O</s.PopUpDevicesOption>
                                </s.PopUpCon2>
                                </s.PopUpContainer>
                            </Popup>
                            <Tooltip permanent direction="right">{item.name}</Tooltip>
                        </Marker>
                    :
                    null
                ))
            ))
        }
        <EsriLeafletGeoSearch useMapBound={false} position="bottomright" placeholder="Ingresa tu búsqueda"/>
        {/* MODALS */}
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
            {/* MODAL SHARE */}
            <Modal 
                isOpen={modalShare}
                onRequestClose={() => setModalShare(false)}
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
                        width: 350,
                        height: 466
                    }
                }}
            >
                <s.HeaderModal>
                    <s.TituloModal><FaShareAlt/> Compartir Link</s.TituloModal>
                    <s.CerrarModal onClick={limpiarShareModal}>+</s.CerrarModal>
                </s.HeaderModal>
                <Compartir
                    datos={data}
                    shareLink={shareLink}
                    valueLink={valueLink}
                    linkDevice={linkDevice}
                    setLinkDevice={setLinkDevice}
                    linkName={linkName}
                    setLinkName={setLinkName}
                    linkStartTime={linkStartTime}
                    setLinkStartTime={setLinkStartTime}
                    linkEndTime={linkEndTime}
                    setLinkEndTime={setLinkEndTime}
                    linkObservation={linkObservation}
                    setLinkObservation={setLinkObservation}
                />
                <s.DivBotones>
                    <s.BotonCancelar onClick={limpiarShareModal}>Cancelar</s.BotonCancelar>
                    <s.BotonGuardar onClick={() => CompartirTracker()}>Confirmar</s.BotonGuardar>
                </s.DivBotones>
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
                    datos2={data2}
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
    </MapContainer>
  );
}

export default Mapa;

