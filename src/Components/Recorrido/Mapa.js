import React, { useEffect, useState } from 'react'
import {MapContainer, Marker, Popup, TileLayer, ZoomControl, LayersControl, useMap, Circle, LayerGroup } from 'react-leaflet';

import '../../styles/mapa.css';
import L from 'leaflet';

import icon from '../../assets/images/arrow_n.png';

const Mapa = ({datos}) => {

    let DefaultIcon = L.icon({
        iconUrl: icon,
    });



    return(
        <MapContainer center={[datos.latitude, datos.longitude]} zoom={13} zoomControl={false} minZoom={0} maxZoom={21} scrollWheelZoom={true}>
        <LayersControl position="bottomright">
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
        <Marker position={[datos.latitude, datos.longitude]} icon={DefaultIcon}></Marker>
        </MapContainer>
        
    )
}

export default Mapa;