import React, { useEffect, useState } from 'react'
import {MapContainer, Marker, Popup, TileLayer, ZoomControl, LayersControl, useMap} from 'react-leaflet';
import  L from 'leaflet';

import EsriLeafletGeoSearch from 'react-esri-leaflet/plugins/EsriLeafletGeoSearch';
import 'leaflet/dist/leaflet.css';
import '../../styles/mapa.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;


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

            </Marker>
          ))
        }
        <EsriLeafletGeoSearch useMapBound={false} position="bottomright" placeholder="Ingresa tu búsqueda"/>
    </MapContainer>
  );
}

export default Mapa;

