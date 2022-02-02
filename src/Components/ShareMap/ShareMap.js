import React from 'react';
import * as s from './ShareMap.styles';

import {MapContainer, Marker, Popup, TileLayer, ZoomControl, LayersControl, useMap, useMapEvents, Circle, FeatureGroup, Tooltip} from 'react-leaflet';
import  L from 'leaflet';
import "leaflet-rotatedmarker";
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const ShareMap = () => {


  return (
      <s.Container>
          <s.Nav>
              <s.Direccion>Direccion Ejemplo <s.Localizacion>(19.0056, -98.099)</s.Localizacion> </s.Direccion>
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
              </MapContainer>
      </s.Container>
  );
};

export default ShareMap;
