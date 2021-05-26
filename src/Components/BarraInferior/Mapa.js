import React, { useEffect, useState } from 'react'
import {MapContainer, Marker, Popup, TileLayer, ZoomControl, LayersControl, useMap} from 'react-leaflet';
import  L from 'leaflet';
import Modal from 'react-modal';

import EsriLeafletGeoSearch from 'react-esri-leaflet/plugins/EsriLeafletGeoSearch';
import 'leaflet/dist/leaflet.css';
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

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import './PopUp.css';
import '../../styles/modals.css';

/* MODALS */
import Comando from '../Comando/Comando';
import Compartir from '../Compartir/Compartir';
import ConfigDevice from '../ConfigDevice/ConfigDevice';
import ConfigInOut from '../ConfigInOut/ConfigInOut';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

Modal.setAppElement('#root');
const Mapa = (props) => {


  const [marker, setMarker] = useState([])
  useEffect(() => {
    Marcador()
  }, [])


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
          
           const resultado = await fetch("https://www.protrack.ad105.net/api/positions", requestOptions)
            /* .then(response => response.json())
            .catch(error => console.log('error', error)); */
            const markerData = await resultado.json();
            console.log(markerData)
            setMarker(markerData);
            console.log(marker)
  }

  /* State Modal */
  const [modalComando, setModalComando] = useState(false);
  const [modalShare, setModalShare] = useState(false);
  const [modalDetalle, setModalDetalle] = useState(false);
  const [modalConfiguraciones, setModalConfiguraciones] = useState(false);

  return (
  
    <MapContainer center={[19.432680, -99.134209]} zoom={5} zoomControl={false} minZoom={0} maxZoom={21} scrollWheelZoom={true}>
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
          marker.map(item => (
            <Marker key={item.id} position={[item.latitude, item.longitude]}>
              <Popup style={{ color: "#e4e4e4" }}>
                <s.PopUpContainer>
                  <s.PopUpCon1>
                    <s.PopoUpDeviceName>Nombre Vehiculo</s.PopoUpDeviceName>
                    <s.PopUpDeviceData>Estado:</s.PopUpDeviceData>
                    <s.PopUpDeviceData>Dispositivo:</s.PopUpDeviceData>
                    <s.PopUpDeviceData>Motor:</s.PopUpDeviceData>
                    <s.PopUpDeviceData>Voltaje Externo:</s.PopUpDeviceData>
                    <s.PopUpDeviceData>IMEI:</s.PopUpDeviceData>
                    <s.PopUpDeviceData>Coordinar: <s.PopUpDeviceLink href={`http://map.google.com/maps?q=${item.latitude},${item.longitude}`} target="_blank">{item.latitude},{item.longitude}</s.PopUpDeviceLink></s.PopUpDeviceData>
                  </s.PopUpCon1>
                  <s.PopUpCon2>
                    <s.PopUpDevicesOptionLink><MdReplay/></s.PopUpDevicesOptionLink>
                    <s.PopUpDevicesOptionLink className="arrow-popup"><TiLocationArrowOutline/></s.PopUpDevicesOptionLink>
                    <s.PopUpDevicesOption onClick={() => setModalComando(true)}><BsTerminal/></s.PopUpDevicesOption>
                    <s.PopUpDevicesOption><GiWoodenFence/></s.PopUpDevicesOption>
                    <s.PopUpDevicesOption onClick={() => setModalShare(true)}><FaShareAlt/></s.PopUpDevicesOption>
                    <s.PopUpDevicesOptionLink className="arrow-popup" href={`https://www.google.com/maps?q&layer=c&cbll=${item.latitude},${item.longitude}`} target="_blank"><BiMapPin/></s.PopUpDevicesOptionLink>
                    <s.PopUpDevicesOption onClick={() => setModalDetalle(true)}><ImFileText2/></s.PopUpDevicesOption>
                    <s.PopUpDevicesOption className="inout-popup" onClick={() => setModalConfiguraciones(true)}>I/O</s.PopUpDevicesOption>
                  </s.PopUpCon2>
                </s.PopUpContainer>
              </Popup>
            </Marker>
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
                        width: 600,
                        height: 464
                    }
                }}
            >
                <s.HeaderModal>
                    <s.TituloModal><BsTerminal/> Comando</s.TituloModal>
                    <s.CerrarModal onClick={() => setModalComando(false)}>+</s.CerrarModal>
                </s.HeaderModal>
                <Comando/>
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
                    <s.CerrarModal onClick={() => setModalShare(false)}>+</s.CerrarModal>
                </s.HeaderModal>
                <Compartir/>
                <s.DivBotones>
                    <s.BotonCancelar onClick={() => setModalShare(false)}>Cancelar</s.BotonCancelar>
                    <s.BotonGuardar>Confirmar</s.BotonGuardar>
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
                <ConfigDevice/>
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

