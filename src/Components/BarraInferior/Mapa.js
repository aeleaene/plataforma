import React from 'react'
import 'leaflet/dist/leaflet.css';
import {MapContainer, Marker, Popup, TileLayer, ZoomControl, LayersControl} from 'react-leaflet';
import  {Icon} from 'leaflet';
import EsriLeafletGeoSearch from 'react-esri-leaflet/plugins/EsriLeafletGeoSearch';
import '../../styles/mapa.css';

import {checked} from '../BarraInferior/BarraInferior';



const Mapa = (props) => {


  return (
    <MapContainer center={[19.432680, -99.134209]} zoom={5} zoomControl={false} minZoom={0} maxZoom={21} scrollWheelZoom={true}>
        <LayersControl position="bottomright">

          <LayersControl.BaseLayer checked={props.gs} name="Google">
          <TileLayer
          url="http://www.google.cn/maps/vt?lyrs=m@189,traffic&gl=cn&x={x}&y={y}&z={z}"
          attribution="Datos del mapa &copy; 2020 INEGI México"/>
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer checked={props.gh} name="Híbrido">
          <TileLayer
          url="http://www.google.com/maps/vt?lyrs=s@189,traffic&gl=cn&x={x}&y={y}&z={z}"
          attribution="Datos del mapa &copy; 2020 INEGI México"/>
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer checked={props.gt} name="Terreno">
          <TileLayer
          url="http://www.google.cn/maps/vt?lyrs=p@189,traffic&gl=cn&x={x}&y={y}&z={z}"
          attribution="Datos del mapa &copy; 2020 INEGI México"/>
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer checked={props.osm} name="Open Street Maps">
          <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contribuidores'/>
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer checked={props.osmbn} checked={false} name="Open Street Maps Blanco y Negro">
          <TileLayer
          url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contribuidores'/>
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer checked={props.bing} checked={true} name="Bing">
          <TileLayer
          url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contribuidores'/>
          </LayersControl.BaseLayer>

        </LayersControl>
        <EsriLeafletGeoSearch useMapBound={false} position="bottomright" placeholder="Ingresa tu búsqueda"/>
    </MapContainer>
  );
}

export default Mapa;

