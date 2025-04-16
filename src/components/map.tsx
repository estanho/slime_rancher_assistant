import { MapContainer, Marker, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
// @ts-expect-error
import "react-leaflet-markercluster/styles";

import MarkerClusterGroup from "react-leaflet-markercluster";

export default function Map() {
  return (
    <MapContainer center={[0, 0]} zoom={2}>
      <TileLayer
        attribution="Slime Rancher Map"
        url="tiles/{z}/{x}_{y}.png"
        noWrap={true}
        minZoom={2}
        maxZoom={5}
      />
      <MarkerClusterGroup
        showCoverageOnHover={false}
        maxClusterRadius={1000}
        spiderfyOnMaxZoom={false}
        disableClusteringAtZoom={4}
      >
        <Marker position={[23, 13]} />
        <Marker position={[25, 10]} />
        <Marker position={[27, 9]} />
        <Marker position={[29, 22]} />
      </MarkerClusterGroup>
    </MapContainer>
  );
}
