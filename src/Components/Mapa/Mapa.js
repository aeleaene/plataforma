import React from 'react'
import 'leaflet/dist/leaflet.css';
import {MapContainer, Marker, Popup, TileLayer, ZoomControl, LayersControl} from 'react-leaflet';
import  {Icon} from 'leaflet';
import EsriLeafletGeoSearch from 'react-esri-leaflet/plugins/EsriLeafletGeoSearch';
import '../../styles/mapa.css';




function Mapa() {

  const [scrollDir, setScrollDir] = React.useState("scrolling down");

  React.useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;
  
    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
  
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };
  
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };
  
    window.addEventListener("scroll", onScroll);
    console.log(scrollDir);
  
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  return (
    <MapContainer center={[19.432680, -99.134209]} zoom={5} zoomControl={false} minZoom={0} maxZoom={21} scrollWheelZoom={true}>
        <LayersControl position="topright">

          <LayersControl.BaseLayer  name="Google">
          <TileLayer
          url="http://www.google.cn/maps/vt?lyrs=m@189,traffic&gl=cn&x={x}&y={y}&z={z}"
          attribution="Datos del mapa &copy; 2020 INEGI México"/>
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="Híbrido">
          <TileLayer
          url="http://www.google.com/maps/vt?lyrs=s@189,traffic&gl=cn&x={x}&y={y}&z={z}"
          attribution="Datos del mapa &copy; 2020 INEGI México"/>
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer  name="Terreno">
          <TileLayer
          url="http://www.google.cn/maps/vt?lyrs=p@189,traffic&gl=cn&x={x}&y={y}&z={z}"
          attribution="Datos del mapa &copy; 2020 INEGI México"/>
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer checked name="Open Street Maps">
          <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contribuidores'/>
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="Open Street Maps Blanco y Negro">
          <TileLayer
          url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contribuidores'/>
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="Bing">
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

