import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in React-Leaflet
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

interface LeafletMapProps {
  center: [number, number]; // [latitude, longitude]
  zoom?: number;
  className?: string;
  markerTitle?: string;
  markerAddress?: string;
  markerPhone?: string;
}

const LeafletMap: React.FC<LeafletMapProps> = ({ 
  center, 
  zoom = 15, 
  className = "",
  markerTitle = "Our Location",
  markerAddress = "",
  markerPhone = ""
}) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <MapContainer
        center={center}
        zoom={zoom}
        className="w-full h-full"
        zoomControl={true}
        attributionControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>
            <div className="text-center p-2">
              <h3 className="font-bold text-lg mb-2 text-neutral-800">
                {markerTitle}
              </h3>
              {markerAddress && (
                <p className="text-sm text-neutral-600 mb-2">
                  📍 {markerAddress}
                </p>
              )}
              {markerPhone && (
                <p className="text-sm text-neutral-600">
                  📞 {markerPhone}
                </p>
              )}
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LeafletMap;