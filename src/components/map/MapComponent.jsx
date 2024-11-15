import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLng } from 'leaflet';

const MapComponent = ({ routes }) => {
  return (
    <MapContainer
      center={new LatLng(12.9716, 77.5946)} // Example coordinates
      zoom={13}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {routes.map((route, index) => (
        <Marker key={index} position={new LatLng(12.9716, 77.5946)}> {/* Example coordinates */}
          <Popup>
            <strong>{route.name}</strong>
            <br />
            {route.stops.join(', ')}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
