import React, { useEffect } from 'react'
import 'leaflet/dist/leaflet.css';
import {MapContainer, Marker, Popup, TileLayer, ZoomControl, LayersControl, useMap} from 'react-leaflet';
import  {Icon} from 'leaflet';
import EsriLeafletGeoSearch from 'react-esri-leaflet/plugins/EsriLeafletGeoSearch';
import '../../styles/mapa.css';



const Mapa = (props) => {

  function SetZoom(){
    const mapInstance = useMap()
    React.useEffect(() => {
      const zoom = window.zoom;
      mapInstance.setZoom(zoom)
    }, [])

    return null
  }

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
        <EsriLeafletGeoSearch useMapBound={false} position="bottomright" placeholder="Ingresa tu búsqueda"/>
    </MapContainer>
  );
}

export default Mapa;

